# Xavfsizlik auditi (o'z-o'zini tekshirish natijalari)
Tekshirildi va tuzatildi:
- **Parallel dublikat**: bir xil `idempotencyKey` bilan bir vaqtda kelgan 2 so'rov ikki marta Telegramga ketishi mumkin edi → kalit darhol band qilinadi (409), yetkazilmasa bo'shatiladi.
- **Origin**: `SITE_URL` berilganda Origin yo'q yoki boshqa bo'lsa rad etiladi (avval yo'q Origin o'tib ketardi).
- **CSP va COOP** headerlari qo'shildi; `frame-ancestors 'none'`, `object-src 'none'`.
- **Rate-limit xotirasi** cheksiz o'smasligi uchun tozalash qo'shildi.
- **Hajm limiti**: `Content-Length` va haqiqiy bayt hajmi tekshiriladi.
- Telegram xabarida foydalanuvchi matni HTML-escape qilinadi; xatolar (token, stack) foydalanuvchiga qaytmaydi; token/service-role kaliti faqat server kodida.
- SQL injection: faqat PostgREST + `encodeURIComponent` + enum tekshiruvi; xom SQL yo'q. XSS: React escape + `dangerouslySetInnerHTML` faqat JSON-LD'da (`<` escape).
- Admin: constant-time parol, imzolangan httpOnly/SameSite=Strict cookie, login limiti, origin tekshiruvi, `noindex`.
Cheklovlar / sizning vazifangiz:
- `x-forwarded-for` faqat ishonchli proxy (Vercel, Cloudflare, nginx) ortida ishonchli — aks holda soxtalashtirilishi mumkin.
- `script-src 'unsafe-inline'` Next.js uchun kerak; nonce-asosli qat'iy CSP keyingi yaxshilash.
- Rate-limit/idempotency xotirada: bir nechta server bo'lsa bazani ulang (`SUPABASE_URL`) — takroriy yuborishni `idempotency_key` ushlaydi. Captcha (Turnstile/hCaptcha) yo'q — spam ko'paysa qo'shing.
- Fayl yuklash (oshxona rasmi) hali yo'q, shuning uchun MIME/filename tekshiruvi ham yo'q.
- Privacy/Terms matnlarini huquqshunos tekshirsin. `npm audit` ni deploy oldidan yurgizing.

## Keyingi auditdan keyin qo'shilgan himoyalar
- **Xotira chegarasi**: rate-limit/idempotency Map'lari `MAX_KEYS` (10 000) bilan cheklangan — xotira portlashining oldi olindi.
- **Tozalash optimallashtirildi**: `lookup` har chaqiruvda butun Map'ni aylamaydi (O(n) → vaqti-vaqti bilan sweep).
- **Telegram retry**: tarmoq/5xx/429 xatolarida 3 marta urinadi; 4xx (token/chat xato) — darhol to'xtaydi (dublikat ketmaydi).
- **CSP va xavfsizlik headerlari** butun saytga qo'llanildi; API/admin javoblari keshlanmaydi (`no-store`).
- **HSTS faqat productionda** yuboriladi (lokal http'da muammo qilmasin).
- **Logout cookie** o'rnatishdagi atributlar bilan o'chiriladi.
- **`postcss` override** bilan zaif versiya yopildi (`npm audit` 13 → 11; qolganlari faqat test vositasida).
- **Versiyalar qulflandi** + `SITE_URL` productionda majburiy (SEO manzili chalkashmasin).
