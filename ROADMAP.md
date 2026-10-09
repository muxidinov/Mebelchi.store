# Yo'l xaritasi — sayt uzoq yillar xizmat qilishi uchun

Bu fayl saytni **yillar davomida barqaror** saqlash uchun amaliy qoidalar va rejani yozadi.
Har o'zgarishdan keyin: `npm run typecheck && npm run test && npm run lint && npm run build`.

> Hozirgi holat: 111/111 test o'tadi, 151 sahifa build bo'ladi.

---

## 1. Har 6 oyda (yiliga 2 marta) — majburiy

Bu ro'yxat sayt "chirimasligi" uchun eng muhim ish.

1. **Xavfsizlik yangilanishlari (patch darajada):**
   ```
   npm outdated          # nima eskirganini ko'rish
   npm audit             # zaifliklar
   npm audit fix         # patch/minor yangilash (breaking emas)
   npm run test && npm run build
   ```
   Katta (major) yangilashni **darhol qilmang** — 2-bo'limga qarang.

2. **`SITE_URL` tekshiruvi:** productionda haqiqiy domen yozilganini va brauzer manzili bilan aynan bir xil ekanini tasdiqlang.

3. **Telegram botning tirikligi:** `/kontakt` formasidan sinov ariza yuboring — botga kelishi kerak. Kelmasa: token eskirganmi, bot guruhdan chiqarilmaganmi.

4. **`db/schema.sql` zaxirasi:** Supabase ishlatilsa, `requests` jadvalini eksport qilib oling (Settings → Database → Backups yoki SQL: `copy requests to ...`).

5. **Eskirgan AI/brauzer xususiyatlari:** Next.js va React yangi major versiya chiqarishi mumkin. Quyidagi "eskirish belgilari" bo'limiga qarang.

---

## 2. Katta versiyalarni yangilash tartibi (breaking change)

`next`, `react`, `tailwindcss` — major yangilash saytni buzishi mumkin. Tartib:

1. Avval `package-lock.json`ni commit qiling (qaytish nuqtasi bo'lsin).
2. Yangi branch oching: `git checkout -b upgrade-next-16`.
3. **Bitta** paketni yangilang (masalan faqat `next`), hammasini birdan emas.
4. `npm run typecheck && npm run test && npm run build` — xato bo'lsa tuzating.
5. Brauzerda tekshiring: bosh sahifa (animatsiya), `/katalog`, mahsulot sahifasi, forma, `/admin`.
6. Ishlasa — merge; ishlamasa — branchni tashlang.

**Hozir kutilayotgan yangilanishlar:**
- `vitest` 2.x → 5.x: `npm audit` bo'yicha ba'zi zaifliklarni yopadi. Bu **faqat test vositasi**, saytga ta'sir qilmaydi. Xotirjam yangilash mumkin, lekin `npm run test` o'tishini tekshiring.
- `next` 15 → 16: `next.config.ts` va `app/` API'lari o'zgargan bo'lishi mumkin. Ehtiyotkorlik bilan.

---

## 3. Kontent qo'shganda (har safar)

Kontent fayllari (`data/*.ts`) va rasmlar o'zgarganda **`npm run test` shart** — u quyidagilarni ushlaydi:

| Nima tekshiriladi | Xato bo'lsa nima bo'ladi |
|---|---|
| `id` unikal, `^[a-z0-9-]+$` | Takroriy/noto'g'ri id |
| `id` kategoriya prefiksi bilan (`kitchen-01`) | Rasm manzili buziladi |
| `category` `data/categories.ts` da mavjud | "Yetim" mahsulot, sahifasi 404 |
| Rasm papkasi mavjud | Rasmlar ko'rinmaydi |
| `imageCount` 0..20 | Cheksiz galereya |
| Ikki tilda matn to'ldirilgan | RU/`UZ` da bo'sh matn |
| Narx `null` yoki musbat son | Noto'g'ri narx |
| Sharh reytingi 1..5 | Noto'g'ri reyting |
| `siteConfig` placeholder (`[...]`) emas | JSON-LD'da xato |

**Rasm qo'shish tartibi** (`README`da batafsil):
`public/catalog/<kategoriya>/<id>/cover.webp` + `01.webp`…, `data/products.ts` ga yozuv, `npm run test`.

---

## 4. "Eskirish belgilari" — bularni ko'rsangiz, yangilash vaqti

Sayt ishlayapti, lekin asta-sekin chiriyapti:

- **`console.warn` / `console.error` brauzerda** — yangi brauzer versiyasi API'ni o'zgartirgan.
- **`npm outdated` da major yangilanish** 1 yildan ko'p turgan bo'lsa.
- **OG rasm / favicon ko'rinmasa** — hosting/CDN o'zgargan.
- **Telegram xato bermasa ham xabar kelmasa** — bot token muddati (kamdan-kam) yoki Telegram API o'zgargan.
- **Lighthouse SEO/Performance pasaysa** — yangi Next.js versiyasi optimallashtirishni yaxshilagan bo'ladi.
- **`npm audit` da "critical" production paketda** (hozir bunday yo'q — faqat test vositasida).

---

## 5. Uzoq muddatli xavfsizlik (muhim)

Hozirgi holat (`SECURITY.md`ga ham qarang):

- **Rate-limit va idempotency xotirada.** Bitta server uchun ishlaydi. Agar bir nechta server/instance bo'lsa (Vercel'da avtomatik shunday bo'lishi mumkin), **bazani ulang** (`SUPABASE_URL`) — takroriy yuborishga qarshi `idempotency_key` bazada ushlanadi.
- **`x-forwarded-for`** faqat ishonchli proxy (Vercel/Cloudflare/nginx) ortida ishonchli. Aks holda soxtalashtirish mumkin.
- **CSP'da `unsafe-inline`** Next.js uchun hozircha zarur. Kelajakda nonce-asosli CSP — yaxshilash.
- **Captcha yo'q.** Spam ko'paysa, Cloudflare Turnstile qo'shing (formada honeypot allaqachon bor).
- **`ADMIN_SESSION_SECRET`ni hech qachon commit qilmang.** `.env.local` `.gitignore`da — uni saqlang.
- **`service_role` kalitini** frontendga hech qachon chiqarmang (kod shunga rioya qiladi).

---

## 6. Zaxira (backup) rejasi

- **Kod:** GitHub'da turing (xususiy repo bo'lishi mumkin). `package-lock.json` **doim** commit qilinadi.
- **Kontent:** `data/*.ts` va `public/` — kod bilan birga Git'da. Sharhlar/mahsulotlar Git tarixida saqlanadi.
- **Arizalar (DB):** Supabase ishlatilsa, oylik eksport. Ishlatilmasa — **Telegram tarixi** zaxirangiz (muhim!). Buni yodda tuting: bazasiz arizalar faqat Telegramda qoladi.
- **`.env.local`:** parol/tokenlar **faqat** xavfsiz joyda (parol menejeri). Yo'qolsa, Telegram bot qayta ulanadi (BotFather), admin parol yangilanadi, baza kaliti qayta olinadi.

---

## 7. Nima qilinmagan (kelajak g'oyalari, shoshilmasdan)

Bular sayt ishlashi uchun **kerak emas**, lekin vaqt o'tib xohlasangiz:

- Admin panelda mahsulot/sharh/FAQ tahrirlash (hozir `data/` fayllari orqali). `db/schema.sql`da jadvallar tayyor.
- Oshxona rasmini yuklash (fayl upload) — MIME/o'lcham tekshiruvi bilan.
- Sharhlarni mijoz o'zi qoldirishi (moderatsiya bilan).
- Ko'p tilli kengaytma (hozir UZ/RU).
- Captcha (spam bo'lsa).

> Har biri alohida branchda, testlar bilan qilinadi. Saytning hozirgi holati — **barqaror va ishlaydigan asos**.
