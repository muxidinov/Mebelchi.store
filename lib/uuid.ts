// UUID yaratish. `crypto.randomUUID()` faqat XAVFSIZ KONTEKSTDA mavjud:
//   ✅ https://...   ✅ localhost   ❌ http://192.168.x.x (lokal tarmoq IP manzili)
// Shuning uchun xavfsiz zaxira qo'llanadi. Server Zod bilan UUID formatini tekshiradi,
// shuning uchun natija har doim to'g'ri v4 shaklda bo'lishi shart.
export function makeUuid(): string {
  const c: Crypto | undefined = typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
  if (c && typeof c.randomUUID === "function") {
    try { return c.randomUUID(); } catch { /* pastdagi zaxiraga o'tamiz */ }
  }
  const bytes = new Uint8Array(16);
  if (c && typeof c.getRandomValues === "function") {
    c.getRandomValues(bytes);
  } else {
    // Juda eski brauzer: matematik tasodifiy (xavfsizlik uchun emas, faqat idempotency kaliti).
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // versiya 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant 10xx
  const hex: string[] = [];
  for (let i = 0; i < 16; i++) hex.push((bytes[i] + 0x100).toString(16).slice(1));
  return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10, 16).join("")}`;
}
