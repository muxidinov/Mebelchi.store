import { NextResponse } from "next/server";
import { COOKIE, sameOrigin } from "@/lib/admin-auth";
export async function POST(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ ok: false }, { status: 403 });
  const res = NextResponse.json({ ok: true });
  // Cookie o'chirishda ham xuddi o'rnatishdagi kabi atributlar berilishi kerak,
  // aks holda ba'zi brauzerlar cookie'ni o'chirmaydi.
  res.cookies.set(COOKIE, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 });
  return res;
}
