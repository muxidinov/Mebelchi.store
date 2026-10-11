import type { RequestInput } from "./schemas";

const cfg = () => {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, ""), key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url, headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" } } : null;
};
export const dbEnabled = () => cfg() !== null;
export async function saveRequest(d: RequestInput, orderId: string): Promise<void> {
  const c = cfg(); if (!c) return;
  const row = {
    order_id: orderId, idempotency_key: d.idempotencyKey, type: d.type, first_name: d.firstName, last_name: d.lastName, phone: d.phone,
    city: d.city ?? null, address: d.address ?? null, landmark: d.landmark ?? null, product_name: d.productName ?? null, category: d.category ?? null,
    message: d.message ?? null, room: d.room ?? null, budget: d.budget ?? null, kitchen_size: d.kitchenSize ?? null,
    preferred_date: d.preferredDate ?? null, preferred_time: d.preferredTime ?? null, telegram_username: d.telegramUsername ?? null,
    latitude: d.lat ?? null, longitude: d.lng ?? null, language: d.lang, source: "website",
  };
  const r = await fetch(`${c.url}/rest/v1/requests?on_conflict=idempotency_key`, { method: "POST",
    headers: { ...c.headers, Prefer: "resolution=ignore-duplicates,return=minimal" }, body: JSON.stringify(row), signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`db_http_${r.status}`);
}
export async function markSent(orderId: string): Promise<void> {
  const c = cfg(); if (!c) return;
  const r = await fetch(`${c.url}/rest/v1/requests?order_id=eq.${encodeURIComponent(orderId)}`, { method: "PATCH",
    headers: c.headers, body: JSON.stringify({ telegram_sent: true }), signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`db_http_${r.status}`);
}

export const STATUSES = ["new", "contacted", "in_progress", "completed", "cancelled"] as const;
export type Status = (typeof STATUSES)[number];
export type RequestRow = {
  order_id: string; created_at: string; type: string; status: Status; first_name: string; last_name: string; phone: string;
  city: string | null; address: string | null; landmark: string | null; product_name: string | null; message: string | null;
  room: string | null; budget: string | null; kitchen_size: string | null; preferred_date: string | null; preferred_time: string | null;
  telegram_username: string | null; latitude: number | null; longitude: number | null; language: string; telegram_sent: boolean;
};
export async function listRequests(status?: string, limit = 100): Promise<RequestRow[]> {
  const c = cfg(); if (!c) return [];
  const f = status && (STATUSES as readonly string[]).includes(status) ? `&status=eq.${status}` : "";
  const r = await fetch(`${c.url}/rest/v1/requests?select=*&order=created_at.desc&limit=${limit}${f}`, { headers: c.headers, cache: "no-store", signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`db_http_${r.status}`);
  return r.json();
}
export async function updateStatus(orderId: string, status: Status): Promise<void> {
  const c = cfg(); if (!c) throw new Error("db_not_configured");
  const r = await fetch(`${c.url}/rest/v1/requests?order_id=eq.${encodeURIComponent(orderId)}`, { method: "PATCH",
    headers: { ...c.headers, Prefer: "return=minimal" }, body: JSON.stringify({ status }), signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`db_http_${r.status}`);
}
