import { NextResponse } from "next/server";
import { COOKIE, SESSION_SECONDS, createToken, passwordOk, sameOrigin } from "@/lib/admin-auth";
import { rateLimit } from "@/lib/guard";
export const runtime = "nodejs";
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit("login:" + ip, 5, 15 * 60_000)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  if (!sameOrigin(req)) return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  let pw = "";
  try { const raw = await req.text(); if (raw.length < 1024) pw = String(JSON.parse(raw).password ?? ""); } catch {}
  if (!passwordOk(pw)) { await new Promise((r) => setTimeout(r, 600)); return NextResponse.json({ ok: false, error: "invalid" }, { status: 401 }); }
  let token: string;
  try { token = createToken(); } catch (e) { console.error("[admin]", (e as Error).message); return NextResponse.json({ ok: false, error: "server" }, { status: 500 }); }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: SESSION_SECONDS });
  return res;
}
