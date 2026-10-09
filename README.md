# Mebel — furniture catalog + so'rov/buyurtma platformasi

Next.js 15 · TypeScript (strict) · Tailwind 4 · Zod. Barcha formalar serverda tekshiriladi va Telegram botga yuboriladi.

## Boshlash: qadamma-qadam

### 1. Dasturni tayyorlash
1. Node.js 20+ o'rnating (https://nodejs.org).
2. `mebel.zip` ni oching, terminalda `mebel` papkasiga kiring.
3. `npm install`

### 2. Telegram botni ulash (majburiy)
1. Telegramda `@BotFather` → `/newbot` → nom bering. U **token** beradi.
2. O'zingiz yaratgan botni toping va unga `/start` yozing (guruhga yuborilsin desangiz, botni guruhga qo'shib, guruhda xabar yozing).
3. Brauzerda `https://api.telegram.org/bot<TOKEN>/getUpdates` ni oching (`<TOKEN>` o'rniga o'z tokeningiz). Javobdagi `"chat":{"id": ...}` — **chat ID** (guruh uchun `-100...`). Javob bo'sh bo'lsa, botga yana xabar yozing.
4. `.env.example` → `.env.local` nusxa oling va to'ldiring:
   - `TELEGRAM_BOT_TOKEN` — BotFather bergan token
   - `TELEGRAM_CHAT_ID` — yuqoridagi raqam
   - `SITE_URL` — lokalda `http://localhost:3000`, productionda haqiqiy manzil (`https://...`, brauzer manzili bilan aynan bir xil)

### 3. Kontaktlarni kiritish
`lib/site-config.ts` da quyidagi maydonlarni o'zgartiring (barcha `[]` ichidagi qiymatlar — o'zingiznikiga almashtiring):

| Maydon | Qanday ishlaydi |
|---|---|
| `phone` | Telefon raqam — bosganda **call** ochiladi (`tel:`) |
| `telegram` | Shaxsiy Telegram — `@Guli_576` ko'rinishda yozing, bosganda **lichkaga** yuboriladi |
| `telegramGroup` | Telegram **guruh/chate** uchun to'liq `https://t.me/...` linki |
| `instagram` | Instagram — `@`siz yoki to'liq manzil |
| `addresses[]` | **Filiallar** ro'yxati. Har biri `{ name, address, mapUrl }`. `mapUrl` — Google/Xarita linki (ixtiyoriy) |
| `workingHours` | Ish vaqti matni |
| `email` | Email (ixtiyoriy) |

Bir nechta filial bo'lsa, `addresses` massiviga har birini alohida qo'shing — har biri alohida `<dd>` bo'lib ko'rsatiladi.

### 4. Ishga tushirish va tekshirish
- `npm run dev` → http://localhost:3000. Formani yuboring — xabar botga kelishi kerak.
- `npm run test`, `npm run typecheck`, `npm run lint`, `npm run build` — hammasi xatosiz o'tishi kerak.

### 5. Rasmlar va mahsulotlar
- Rasm: `public/catalog/<kategoriya>/<product-id>/cover.webp`, `01.webp` … (WebP, 4:5, 1600×2000 px, ≤ 300 KB). Batafsil — pastdagi "Yangi mebel rasmini qanday qo'shaman?".
- Mahsulot: `data/products.ts` dagi namunani izohdan chiqarib to'ldiring (`id` papka nomi bilan, `category` — `data/categories.ts` dagi `slug` bilan bir xil). Narx noma'lum bo'lsa `price: null`.
- Bosh sahifa rasmi: `public/hero/hero.webp`. Portfolio: `public/portfolio/<id>/cover.webp` + `data/portfolio.ts`.
- Sharh: `data/reviews.ts` (faqat real, `approved: true`). FAQ: `data/faq.ts`.

### 6. Baza va admin panel (ixtiyoriy, tavsiya etiladi)
1. https://supabase.com da loyiha oching → SQL Editor'ga `db/schema.sql` ni qo'yib ishga tushiring.
2. Settings → API: `Project URL` → `SUPABASE_URL`; `service_role` kaliti → `SUPABASE_SERVICE_ROLE_KEY` (hech kimga bermang, frontendga qo'ymang).
3. `ADMIN_PASSWORD` (kamida 10 belgi) va `ADMIN_SESSION_SECRET` (`openssl rand -hex 32`) ni `.env.local` ga yozing.
4. `/admin` ga parol bilan kiring.

### 7. Internetga chiqarish (Vercel)
1. Loyihani GitHub'ga yuklang (`.env.local` yuklanmaydi — `.gitignore` da).
2. vercel.com → Import → `.env.local` dagi hamma qiymatlarni Environment Variables ga kiriting (`SITE_URL` = haqiqiy manzil).
3. Deploy. Keyin domen ulang va `SITE_URL` ni shu domenga o'zgartirib qayta deploy qiling.
Boshqa hostingda: `npm run build && npm run start` (Node serveri kerak).

> **MUHIM:** production'da `SITE_URL` **majburiy**. Berilmasa, `sitemap.xml` / `canonical` / JSON-LD manzillari noto'g'ri chiqadi va server logiga `[seo] SITE_URL o'rnatilmagan!` yoziladi. `SITE_URL` brauzer manzili bilan aynan bir xil bo'lsin (http/https, www, oxiridagi `/` yo'q).

### 8. Uzoq muddatli xizmat qoidalari (buzmang)
- **Versiyalar qulflangan.** `package.json`da aniq versiyalar (`^` yo'q) — tasodifiy yangilanish saytni buzmaydi. Yangilashdan oldin `npm run test` va `npm run build` ni ishga tushiring, keyin `package-lock.json`ni commit qiling.
- **`npm ci` ishlatilsin** (deploy'da): u `package-lock.json`ga qat'iy amal qiladi. `npm install` lock'ni o'zgartirib qo'yishi mumkin.
- **Kontent o'zgargach testlar buni ushlaydi:** `npm run test` kontent fayllarini tekshiradi (id formati, kategoriya mavjudligi, ikki tilli matn, rasm papkalari, `imageCount`). Xato id yoki yetim kategoriya testda darhol chiqadi.
- **Rasm papkalari** `public/catalog/<kategoriya>/<id>/` — id kategoriya prefiksi bilan boshlanishi kerak (`kitchen-01`, `sofas-03`). Buni test tekshiradi.

## Kontakt ma'lumotlarini o'zgartirish
`lib/site-config.ts` — telefon, Telegram, Instagram, manzil, ish vaqti, email, xarita.

## Yangi mebel rasmini qanday qo'shaman?

### Eng qisqa yo'l (3 qadam)

**1. Rasmni tayyorlang** — WebP, 4:5 vertikal (1600×2000 px), ≤ 300 KB.

**2. Rasmni papkaga tashlang.** Papka nomi **mahsulot `id`si bilan aynan bir xil** bo'lsin:

```
public/catalog/<kategoriya>/<id>/
  ├── cover.webp     ← karta va 1-rasm (MAJBURIY)
  ├── 01.webp        ← galereya 1
  ├── 02.webp        ← galereya 2
  └── 03.webp        ← galereya 3
```

Misol: `kitchen-07` mahsuloti uchun → `public/catalog/kitchen/kitchen-07/cover.webp`

**3. Tekshiring.** `data/products.ts`dagi `imageCount` = galereya rasmlari soni (ya'ni `01`…`03` bo'lsa `3`). Keyin:

```bash
npm run test     # id/papka nomi mos kelishini tekshiradi
npm run build    # yoki dev rejimda avtomatik yangilanadi
```

> ⚠️ **Papka nomi `id` bilan bir xil bo'lmasa, rasm ko'rinmaydi** — sayt "Rasm tez orada" ko'rsatadi. Ismdagi harflar **katta-kichik harfga sezgir** (`kitchen-01` ✅, `Kitchen-01` ❌).

### Rasm qo'shish tartibi — batafsil

| Nima | Talab |
|---|---|
| **Format** | WebP (yoki AVIF) |
| **Nisbat** | 4:5 vertikal (mobilda ham shu kesim) |
| **O'lcham** | 1600×2000 px tavsiya, kamida 1200×1500 |
| **Hajm** | ≤ 300 KB |
| **Fon/yorug'lik** | Bir xil — barcha rasmlar bir uslubda bo'lsin |
| **Mahsulot** | Markazda (chekkalari `object-cover` bilan kesiladi) |

### Rasmni WebP'ga aylantirish

**Agar `sharp` o'rnatilgan bo'lsa** (loyihada bor) — terminalda:

```bash
node -e "const s=require('sharp');s('kirish.jpg').resize(1600,2000,{fit:'cover'}).webp({quality:82}).toFile('cover.webp')"
```

**Onlayn (programmasiz):** [squoosh.app](https://squoosh.app) → WebP → sifat 80 → yuklab oling. Telefonda: "WebP Converter" ilovasi.

### Namunaviy rasm (sinash uchun)

`scripts/make-sample-images.mjs` — `kitchen-01` uchun namuna rasmlar yasaydi (aslida siz o'z rasmingizni tashlaysiz):

```bash
node scripts/make-sample-images.mjs
```

Rasmni har qanday o'lchamda o'girish uchun (majburiy 4:5 kesish):

```bash
node -e "require('sharp')('kirish.jpg').resize(1600,2000,{fit:'cover'}).webp({quality:80}).toFile('cover.webp')"
```

> ⚠️ `fit:'cover'` **majburiy** — aks holda rasm o'z nisbatida qolib, saytda kesilib buzilgan ko'rinadi.

Rasmdan keyin `npm run build` qilib tekshirsangiz — rasm mahsulot sahifasida va katalog kartasida ko'rinadi.

### Ko'p mahsulotga birdan rasm

130 ta mahsulotning hammasiga rasm kerak bo'lsa, har biriga qo'lda qo'yish uzoq. Bitta skript yozdirib, `public/catalog/**/<id>/cover.webp` ustidan avtomatik o'tkazish mumkin — `scripts/gen-products.mjs` namuna sifatida qarang.

> **Eslatma:** rasm bo'lmasa sayt **buzilmaydi** — chiroyli bo'sh holat ko'rsatiladi. Shuning uchun rasmlarni bosqichma-bosqich qo'shsangiz ham bo'ladi.

## Kategoriya qo'shish
`data/categories.ts` ga qator qo'shing va `public/catalog/<folder>/` oching.

## Til tizimi
UZ (default) / RU. Matnlar: `lib/i18n.ts` (forma, bosh sahifa), `lib/catalog.ts` → `ui` (katalog), mahsulot matnlari `data/products.ts` da `{uz, ru}` shaklida. Tanlov `localStorage` da saqlanadi; rus brauzerida RU tanlanadi.

## Xavfsizlik
Zod bilan server validatsiya, rate limit (IP bo'yicha), so'rov hajmi limiti, origin tekshiruvi, honeypot, takroriy yuborishdan himoya (idempotency key), xavfsizlik headerlari (`next.config.ts`), Telegram HTML escape, xatolar foydalanuvchiga ko'rsatilmaydi. Geolokatsiya faqat tugma bosilganda va foydalanuvchi roziligi bilan.

## Ma'lum cheklovlar (hozirgi versiya)
- Sharhlar (`data/reviews.ts`), portfolio (`data/portfolio.ts`), FAQ (`data/faq.ts`) **fayllardan** boshqariladi — admin panelda tahrirlanmaydi. O'zgartirgach `npm run test` o'tkazib, deploy qiling.
- Rate limit va idempotency **xotirada** (bitta server uchun). Bir nechta server (yoki Vercel'da bir nechta instance) bo'lsa, takroriy yuborishga qarshi himoya bazadagi `idempotency_key` orqali ishlaydi — **bazani ulash tavsiya etiladi** (6-bo'lim).
- Buyurtmalar Telegramga yuboriladi; baza ulanmagan bo'lsa saqlanmaydi.
- Oshxona rasmini yuklash (fayl upload) yo'q.
- `npm audit` bo'yicha qolgan zaifliklar faqat `vitest` (test vositasi) orqali — production saytiga chiqmaydi. PostCSS zaifligi `overrides` bilan yopilgan.

## Sahifa matnlari, sharh, FAQ
- FAQ: `data/faq.ts` · Sharh: `data/reviews.ts` (`approved: true` bo'lsagina chiqadi; faqat real mijoz sharhi) · Portfolio: `data/portfolio.ts` + `public/portfolio/<id>/cover.webp`
- Biz haqimizda / Privacy / Terms matnlari: `lib/pages-i18n.ts` (privacy va terms'ni huquqshunosga tekshirtiring)

## Bosh sahifa (hero) rasmi
`public/hero/hero.webp` joylasangiz, hero'da shu rasm chiqadi (vertikal 4:5 yoki 3:4, 1600×2000, ≤ 300 KB). Rasm bo'lmasa — arxitektura chizmasi animatsiyasi ko'rinadi. Matnlar: `lib/home-i18n.ts`. Animatsiyalar `prefers-reduced-motion` yoqilganda o'chadi. Floating CTA mobilda pastki panel, desktopda o'ng pastki burchakda.

## Ma'lumotlar bazasi (ixtiyoriy, tavsiya etiladi)
1. https://supabase.com da loyiha oching.
2. SQL Editor'ga `db/schema.sql` ni qo'yib ishga tushiring.
3. Settings → API: `Project URL` → `SUPABASE_URL`, `service_role` kaliti → `SUPABASE_SERVICE_ROLE_KEY` (`.env.local` / hosting env). Bu kalit faqat serverda; frontendga chiqmaydi.
4. Har ariza `requests` jadvaliga (status: new) saqlanadi, Telegramga ketgach `telegram_sent=true` bo'ladi. Baza sozlanmasa, sayt faqat Telegram bilan ishlayveradi.
Hozir faqat `requests` ishlatiladi; qolgan jadvallar admin panel uchun tayyor.

## Admin panel
`/admin` — buyurtmalar ro'yxati, status bo'yicha filtr va status o'zgartirish (Yangi → Bog'lanildi → Jarayonda → Bajarildi / Bekor).
1. `.env.local` ga `ADMIN_PASSWORD` (kamida 10 belgi) va `ADMIN_SESSION_SECRET` (`openssl rand -hex 32`) yozing, bazani ulang (yuqoridagi bo'lim).
2. `https://sayt/admin` → parol bilan kiring. Sessiya 8 soat, cookie `httpOnly` + `SameSite=Strict`; login 15 daqiqada 5 urinish bilan cheklangan; `/admin` qidiruvdan yashirilgan (robots + noindex).
Hozir admin panelda faqat arizalar bor; mahsulot, sharh va FAQ'ni hali `data/` fayllari orqali o'zgartirasiz.

## SEO
Har sahifada title/description/canonical, Open Graph va Twitter; `sitemap.xml`, `robots.txt`; bosh sahifada `FurnitureStore`, mahsulot sahifasida `Product` JSON-LD (faqat siz kiritgan `siteConfig` maydonlaridan; narx `null` bo'lsa `offers` chiqmaydi). `SITE_URL` ni to'g'ri yozing (https, www bilan yoki yo'q — brauzer manzili bilan aynan bir xil). Ijtimoiy tarmoq ko'rinishi uchun keyinroq `public/og.jpg` qo'shing.

## Xavfsizlik
Qarang: `SECURITY.md` (audit natijalari va cheklovlar).

## Uzoq muddatli xizmat (muhim!)
Sayt yillar davomida ishlashi uchun **`ROADMAP.md`** ni o'qing: har 6 oyda yangilash tartibi, katta versiyalarni qanday ko'tarish, zaxira rejasi va "eskirish belgilari".

## Muammolar (Troubleshooting)
- **Forma "forbidden" / 403 beradi** — `SITE_URL` brauzer manzili bilan aynan mos emas (http/https, www, oxiridagi `/`). To'g'rilang va qayta ishga tushiring/deploy qiling.
- **"Arizangizni yuborishda vaqtinchalik muammo..." (502)** — token yoki chat ID noto'g'ri, yoki botga `/start` yozilmagan. Server logida `[telegram] telegram_http_401/400/403` ko'rinadi: 401 = token xato, 400/403 = chat ID xato yoki bot guruhga qo'shilmagan.
- **Xabar kelmaydi, xato ham yo'q** — `.env.local` o'zgargach `npm run dev` ni qayta ishga tushirmagansiz.
- **429 (rate_limited)** — bir IP 10 daqiqada 5 tadan ko'p ariza yubordi; biroz kuting.
- **Rasm ko'rinmaydi ("Rasm tez orada")** — fayl nomi/papka `id` bilan bir xil emas, kengaytma `.webp` emas yoki `imageCount` noto'g'ri. Nomlar katta-kichik harfga sezgir.
- **Mahsulot sahifasi 404** — `data/products.ts` dagi `id` bilan URL mos emas; dev serverni qayta ishga tushiring.
- **Admin'ga kira olmayman** — `ADMIN_PASSWORD` (≥10) va `ADMIN_SESSION_SECRET` (≥32 belgi) yozilganini tekshiring; 5 marta xato kiritsangiz 15 daqiqa kuting.
- **Admin "Baza ulanmagan"** — `SUPABASE_URL`/`SUPABASE_SERVICE_ROLE_KEY` yo'q yoki `db/schema.sql` ishga tushirilmagan.
- **Joylashuv aniqlanmaydi** — brauzerda ruxsat berilmagan yoki sayt HTTPS emas (localhost'dan tashqari). Forma baribir yuboriladi, manzilni qo'lda yozing.
- **`npm install` ERESOLVE (dependency conflict) xatosi beradi** — loyihada `.npmrc` (`legacy-peer-deps=true`) bor, shuning uchun oddiy `npm install` ishlashi kerak. Baribir chiqsa: `rm -rf node_modules package-lock.json && npm install --legacy-peer-deps`.
- **`npm install` / `build` xato beradi** — Node 20+ ekanini tekshiring (`node -v`); xato matnini to'liq saqlab oling.

## Mahsulotlar va rasmlar (joriy holat)
- `data/products.ts` — 13 kategoriya × 10 mahsulot = 130 ta mahsulot. Har biri `id: "<kategoriya>-01" … "-10"` (masalan `kitchen-01`, `sofas-07`). Narx: 3 500 000 so'm, `imageCount: 3`, o'lcham/material/rang/xususiyatlar to'ldirilgan. `custom: true` faqat `custom` kategoriyasida; ba'zilarida `available: false` ("Buyurtma asosida" holati).
- `data/products.ts` dagi `id` **kategoriya prefiksi bilan boshlanishi shart** va `public/catalog/<kategoriya>/<id>/` papkasi mos kelishi kerak — `npm run test` buni tekshiradi.
- Rasm papkalari: `public/catalog/<kategoriya>/<id>/` (hozircha bo'sh, `.gitkeep` bilan). Ichiga:
  - `cover.webp` — karta va birinchi rasm
  - `01.webp`, `02.webp`, `03.webp` — galereya (`imageCount` shuncha, nom `01` dan)
- `data/reviews.ts` — sharhlar: ism, `{uz, ru}` matn, `rating` (1–5), sana, kategoriya, `approved: true`. `/sharhlar` sahifasida faqat `approved: true` ko'rinadi.
- `scripts/gen-products.mjs` — generator (qayta ishga tushirsa hammasi qayta yaratiladi; narx/rаsm soni uchun `PRICE` va `IMAGE_COUNT`).

## Tekshiruv (joriy holat)

```
npm run typecheck   —  o'tdi (xatosiz)
npm run test        —  111/111 o'tdi (7 fayl)
npm run lint        —  o'tdi (faqat <img> ogohlantirishi)
npm run build       —  o'tdi (151 sahifa)
```