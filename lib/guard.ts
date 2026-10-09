// Xotirada rate-limit va idempotency. Ko'p instance'li production uchun Redis/DB bilan almashtiring.
// MUHIM: bu himoya faqat bitta server uchun. Server qayta ishga tushsa holat yo'qoladi;
// bir nechta instance bo'lsa takroriy yuborishga qarshi DB'dagi idempotency_key ishlaydi (lib/db.ts).
const hits = new Map<string, number[]>();
type Entry = { id: string; t: number; done: boolean };
const seen = new Map<string, Entry>();
const TTL = 3600_000;
const MAX_KEYS = 10_000; // xotira portlashining oldini oladi (DoS himoyasi)

// Xotira chegaradan oshsa, muddati o'tgan yozuv yoki eng eskisini chiqarib tashlaymiz.
function trim<K, V>(m: Map<K, V>, max: number) {
  while (m.size > max) {
    const first = m.keys().next();
    if (first.done) break;
    m.delete(first.value);
  }
}

export function rateLimit(key: string, max = 5, windowMs = 10 * 60_000): boolean {
  const now = Date.now();
  if (hits.size > MAX_KEYS) {
    for (const [k, v] of hits) if (!v.length || now - v[v.length - 1] > windowMs) hits.delete(k);
    trim(hits, MAX_KEYS);
  }
  const arr = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (arr.length >= max) { hits.set(key, arr); return false; }
  arr.push(now); hits.set(key, arr); return true;
}
// Muddati o'tganlarni tozalash har chaqiruvda emas, vaqti-vaqti bilan (O(n) har so'rovda bo'lmasin).
let lastSweep = 0;
function sweep(now: number) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [k, v] of seen) if (now - v.t > TTL) seen.delete(k);
  trim(seen, MAX_KEYS);
}
export function lookup(key: string): Entry | null {
  const now = Date.now();
  sweep(now);
  return seen.get(key) ?? null;
}
export const reserve = (key: string, id: string) => { seen.set(key, { id, t: Date.now(), done: false }); };
export const finish = (key: string) => { const e = seen.get(key); if (e) e.done = true; };
export const release = (key: string) => { seen.delete(key); };
