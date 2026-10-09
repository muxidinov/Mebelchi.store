import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { requestSchema } from "@/lib/schemas";
import { buildMessage, sendToTelegram } from "@/lib/telegram";
import { saveRequest, markSent } from "@/lib/db";
import { rateLimit, lookup, reserve, finish, release } from "@/lib/guard";

export const runtime = "nodejs";
const MAX_BYTES = 16 * 1024;
const fail = (error: string, status: number, extra: object = {}) => NextResponse.json({ ok: false, error, ...extra }, { status });

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(ip)) return fail("rate_limited", 429);
  const site = process.env.SITE_URL?.replace(/\/$/, "");
  if (site && req.headers.get("origin") !== site) return fail("forbidden", 403);
  if (Number(req.headers.get("content-length") ?? 0) > MAX_BYTES) return fail("too_large", 413);
  const raw = await req.text();
  if (Buffer.byteLength(raw) > MAX_BYTES) return fail("too_large", 413);
  let json: unknown;
  try { json = JSON.parse(raw); } catch { return fail("bad_json", 400); }
  const p = requestSchema.safeParse(json);
  if (!p.success) return fail("validation", 422, { fields: p.error.flatten().fieldErrors });
  if (p.data.website) return NextResponse.json({ ok: true, orderId: "OK" }); // bot tuzoq
  const key = p.data.idempotencyKey;
  const prev = lookup(key);
  if (prev) return prev.done ? NextResponse.json({ ok: true, orderId: prev.id }) : fail("in_progress", 409);
  const orderId = "MB-" + randomUUID().slice(0, 8).toUpperCase();
  reserve(key, orderId); // lookup va reserve orasida await yo'q => parallel so'rovlar ikki marta o'tmaydi
  try { await saveRequest(p.data, orderId); } catch (e) { console.error("[db]", (e as Error).message); }
  try {
    await sendToTelegram(buildMessage(p.data, orderId));
  } catch (e) {
    console.error("[telegram]", (e as Error).message); // userga ko'rsatilmaydi
    release(key);
    return fail("delivery_failed", 502);
  }
  try { await markSent(orderId); } catch (e) { console.error("[db]", (e as Error).message); }
  finish(key);
  return NextResponse.json({ ok: true, orderId });
}
