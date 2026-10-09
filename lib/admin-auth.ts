import { createHmac, createHash, timingSafeEqual } from "node:crypto";
export const COOKIE = "admin_session";
export const SESSION_SECONDS = 8 * 3600;
const secret = () => {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("admin_secret_missing");
  return s;
};
const sign = (p: string) => createHmac("sha256", secret()).update(p).digest("hex");
export function createToken(now = Date.now()): string {
  const exp = String(now + SESSION_SECONDS * 1000);
  return `${exp}.${sign(exp)}`;
}
export function verifyToken(t?: string | null, now = Date.now()): boolean {
  if (!t) return false;
  const [exp, sig] = t.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < now) return false;
  try {
    const a = Buffer.from(sig, "hex"), b = Buffer.from(sign(exp), "hex");
    return a.length === b.length && timingSafeEqual(a, b);
  } catch { return false; }
}
export function passwordOk(input: string): boolean {
  const p = process.env.ADMIN_PASSWORD;
  if (!p || p.length < 10) return false;
  const h = (s: string) => createHash("sha256").update(s).digest();
  return timingSafeEqual(h(input), h(p));
}
export function sameOrigin(req: Request): boolean {
  const o = req.headers.get("origin"), host = req.headers.get("host");
  if (!o || !host) return false;
  try { return new URL(o).host === host; } catch { return false; }
}
export async function isAdmin(): Promise<boolean> {
  const { cookies } = await import("next/headers");
  return verifyToken((await cookies()).get(COOKIE)?.value);
}
