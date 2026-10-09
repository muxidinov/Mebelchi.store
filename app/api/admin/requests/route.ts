import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdmin, sameOrigin } from "@/lib/admin-auth";
import { STATUSES, updateStatus } from "@/lib/db";
export const runtime = "nodejs";
const schema = z.object({ orderId: z.string().regex(/^MB-[0-9A-F]{8}$/), status: z.enum(STATUSES) }).strict();
export async function PATCH(req: Request) {
  if (!sameOrigin(req)) return NextResponse.json({ ok: false }, { status: 403 });
  if (!(await isAdmin())) return NextResponse.json({ ok: false }, { status: 401 });
  const raw = await req.text();
  if (raw.length > 512) return NextResponse.json({ ok: false }, { status: 413 });
  let p; try { p = schema.safeParse(JSON.parse(raw)); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  if (!p.success) return NextResponse.json({ ok: false }, { status: 422 });
  try { await updateStatus(p.data.orderId, p.data.status); } catch (e) { console.error("[admin]", (e as Error).message); return NextResponse.json({ ok: false }, { status: 502 }); }
  return NextResponse.json({ ok: true });
}
