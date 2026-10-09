import { describe, it, expect, beforeEach, vi } from "vitest";
import { createToken, verifyToken, passwordOk, sameOrigin } from "../lib/admin-auth";
import { POST as login } from "../app/api/admin/login/route";
let n = 0;
beforeEach(() => { process.env.ADMIN_SESSION_SECRET = "s".repeat(40); process.env.ADMIN_PASSWORD = "correct-horse-battery"; vi.useRealTimers(); });
const req = (pw: string, ip: string, origin = "http://x") => new Request("http://x/api/admin/login", { method: "POST", headers: { origin, host: "x", "x-forwarded-for": ip }, body: JSON.stringify({ password: pw }) });
describe("admin auth", () => {
  it("accepts a fresh token", () => expect(verifyToken(createToken())).toBe(true));
  it("rejects tampered / expired / empty tokens", () => {
    const t = createToken(); const [e, s] = t.split(".");
    expect(verifyToken(`${Number(e) + 1}.${s}`)).toBe(false);
    expect(verifyToken(createToken(Date.now() - 9 * 3600_000))).toBe(false);
    expect(verifyToken("")).toBe(false); expect(verifyToken("abc")).toBe(false); expect(verifyToken(undefined)).toBe(false);
  });
  it("rejects when secret is missing", () => { delete process.env.ADMIN_SESSION_SECRET; expect(verifyToken("1.aa")).toBe(false); });
  it("checks password; short/unset password never works", () => {
    expect(passwordOk("correct-horse-battery")).toBe(true); expect(passwordOk("wrong")).toBe(false);
    process.env.ADMIN_PASSWORD = "short"; expect(passwordOk("short")).toBe(false);
  });
  it("sameOrigin", () => { expect(sameOrigin(req("", "1", "http://x"))).toBe(true); expect(sameOrigin(req("", "1", "http://evil.com"))).toBe(false); });
  it("login: wrong password 401, correct sets httpOnly cookie, foreign origin 403", async () => {
    expect((await login(req("nope", `7.7.7.${++n}`))).status).toBe(401);
    const ok = await login(req("correct-horse-battery", `7.7.7.${++n}`)); expect(ok.status).toBe(200);
    const c = ok.headers.get("set-cookie") ?? ""; expect(c).toContain("admin_session="); expect(c.toLowerCase()).toContain("httponly"); expect(c.toLowerCase()).toContain("samesite=strict");
    expect((await login(req("correct-horse-battery", `7.7.7.${++n}`, "http://evil.com"))).status).toBe(403);
  }, 10000);
});
