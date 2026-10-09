import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "../app/api/request/route";
let n = 0;
const body = (o: object = {}) => ({ type: "order", firstName: "Ali", lastName: "Valiyev", phone: "+998901234567", idempotencyKey: crypto.randomUUID(), ...o });
const call = (b: unknown, ip = `10.0.0.${++n}`) => POST(new Request("http://x/api/request", { method: "POST", headers: { "x-forwarded-for": ip }, body: typeof b === "string" ? b : JSON.stringify(b) }));
let fetchMock: ReturnType<typeof vi.fn>;
beforeEach(() => {
  process.env.TELEGRAM_BOT_TOKEN = "SECRET_TOKEN"; process.env.TELEGRAM_CHAT_ID = "1";
  delete process.env.SUPABASE_URL; delete process.env.SUPABASE_SERVICE_ROLE_KEY; delete process.env.SITE_URL;
  fetchMock = vi.fn().mockResolvedValue(new Response("{}", { status: 200 })); vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
});
describe("POST /api/request", () => {
  it("sends valid order to Telegram and returns orderId", async () => {
    const r = await call(body({ productName: "Test <b>", lat: 41.3, lng: 69.2 })); const j = await r.json();
    expect(r.status).toBe(200); expect(j.ok).toBe(true); expect(j.orderId).toMatch(/^MB-[0-9A-F]{8}$/);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const sent = JSON.parse(fetchMock.mock.calls[0][1].body).text as string;
    expect(sent).toContain("Yangi buyurtma"); expect(sent).toContain("google.com/maps?q=41.3,69.2"); expect(sent).toContain("Test &lt;b&gt;");
  });
  it("rejects invalid phone with 422", async () => { const r = await call(body({ phone: "+123456789" })); expect(r.status).toBe(422); expect(fetchMock).not.toHaveBeenCalled(); });
  it("rejects bad JSON and oversize", async () => {
    expect((await call("{nope")).status).toBe(400);
    expect((await call("x".repeat(20000))).status).toBe(413);
  });
  it("does not double-send same idempotency key", async () => {
    const b = body(); const a = await (await call(b)).json(); const c = await (await call(b)).json();
    expect(c.orderId).toBe(a.orderId); expect(fetchMock).toHaveBeenCalledTimes(1);
  });
  it("honeypot is silently accepted without sending", async () => { const r = await call(body({ website: "spam" })); expect(r.status).toBe(200); expect(fetchMock).not.toHaveBeenCalled(); });
  it("telegram failure -> 502 without leaking details", async () => {
    fetchMock.mockResolvedValue(new Response("err", { status: 500 }));
    const r = await call(body()); const t = await r.text();
    expect(r.status).toBe(502); expect(t).not.toContain("SECRET_TOKEN"); expect(t).toContain("delivery_failed");
  });
  it("rate limits after 5 requests from one IP", async () => {
    const ip = "9.9.9.9"; let last = 200;
    for (let i = 0; i < 6; i++) last = (await call(body(), ip)).status;
    expect(last).toBe(429);
  });
  it("saves to DB when configured", async () => {
    process.env.SUPABASE_URL = "https://db.test"; process.env.SUPABASE_SERVICE_ROLE_KEY = "k";
    const r = await call(body()); expect(r.status).toBe(200);
    expect(fetchMock.mock.calls.some((c) => String(c[0]).includes("db.test/rest/v1/requests"))).toBe(true);
  });
});
