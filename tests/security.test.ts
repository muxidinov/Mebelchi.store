import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "../app/api/request/route";
import { localBusinessLd } from "../lib/seo";
let n = 0;
const b = (o: object = {}) => ({ type: "order", firstName: "Ali", lastName: "Valiyev", phone: "+998901234567", idempotencyKey: crypto.randomUUID(), ...o });
const call = (body: unknown, headers: Record<string, string> = {}) =>
  POST(new Request("http://x/api/request", { method: "POST", headers: { "x-forwarded-for": `8.8.8.${++n}`, ...headers }, body: JSON.stringify(body) }));
let f: ReturnType<typeof vi.fn>;
beforeEach(() => {
  process.env.TELEGRAM_BOT_TOKEN = "T"; process.env.TELEGRAM_CHAT_ID = "1"; delete process.env.SITE_URL; delete process.env.SUPABASE_URL;
  f = vi.fn().mockImplementation(async () => { await new Promise((r) => setTimeout(r, 20)); return new Response("{}", { status: 200 }); });
  vi.stubGlobal("fetch", f); vi.spyOn(console, "error").mockImplementation(() => {});
});
describe("security", () => {
  it("parallel requests with the same key send to Telegram once", async () => {
    const body = b(); const [x, y] = await Promise.all([call(body), call(body)]);
    expect([x.status, y.status].sort()).toEqual([200, 409]); expect(f).toHaveBeenCalledTimes(1);
  });
  it("a failed delivery can be retried with the same key", async () => {
    const body = b();
    // Birinchi so'rovning barcha urinishlari muvaffaqiyatsiz bo'lishi kerak (retry ham 500 oladi).
    f.mockImplementation(async () => new Response("e", { status: 500 }));
    expect((await call(body)).status).toBe(502);
    // Endi Telegram yana ishlaydi — o'sha kalit bilan qayta yuborish o'tishi kerak.
    f.mockImplementation(async () => new Response("{}", { status: 200 }));
    expect((await call(body)).status).toBe(200);
  });
  it("when SITE_URL is set, missing or foreign Origin is rejected", async () => {
    process.env.SITE_URL = "https://site.test/";
    expect((await call(b())).status).toBe(403);
    expect((await call(b(), { origin: "https://evil.test" })).status).toBe(403);
    expect((await call(b(), { origin: "https://site.test" })).status).toBe(200);
  });
  it("oversized content-length is rejected before reading", async () => expect((await call(b(), { "content-length": "99999" })).status).toBe(413));
  it("JSON-LD contains no invented placeholder values", () => { const s = JSON.stringify(localBusinessLd()); expect(s).not.toContain("["); });
});
