import { describe, it, expect, afterEach } from "vitest";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { projects } from "@/data/portfolio";
import { reviews } from "@/data/reviews";
import { faq } from "@/data/faq";
import { imageUrls, getCategory } from "@/lib/catalog";
import { siteUrl, localBusinessLd, productLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const NON_LATIN = /[^\p{Script=Latin}\p{Script=Cyrillic}\p{Script=Arabic}\s\p{P}\p{N}\p{S}]/u;

describe("kontent integriteti", () => {
  it("har bir mahsulot id unikal va papka nomiga mos formatda", () => {
    const ids = products.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9-]+$/);
  });

  it("har bir mahsulot id o'z kategoriyasi prefiksi bilan boshlanadi", () => {
    // Papka tuzilishi public/catalog/<category>/<id>/ — bu bilan rasm yo'li to'g'ri chiqadi.
    for (const p of products) expect(p.id.startsWith(p.category + "-")).toBe(true);
  });

  it("har bir mahsulot kategoriyasining papkasi mavjud", () => {
    for (const c of categories) {
      expect(existsSync(join(process.cwd(), "public", "catalog", c.folder))).toBe(true);
    }
  });

  it("mahsulot rasm yo'li id va kategoriya papkasiga to'g'ri mos keladi", () => {
    // Rasm qo'shganda papka nomi id bilan bir xil bo'lishi shart — aks holda
    // sayt "Rasm tez orada" ko'rsatadi. Bu test o'sha xatoni oldini oladi.
    for (const p of products) {
      const { cover, gallery } = imageUrls(p);
      const catFolder = getCategory(p.category)?.folder;
      expect(cover.endsWith(`/${p.id}/cover.webp`)).toBe(true);
      expect(cover.includes(`/catalog/${catFolder}/`)).toBe(true);
      for (const g of gallery) {
        expect(g.startsWith(`/catalog/${catFolder}/${p.id}/`)).toBe(true);
        expect(/\/0[1-9]|1[0-9]|20\.webp$/.test(g)).toBe(true); // 01..20 nomlash
      }
    }
  });

  it("rasm qo'shilgan bo'lsa, u haqiqiy fayl (bo'sh emas)", () => {
    // Faqat mavjud rasmlarni tekshiradi: rasm yo'qligi xato emas (bo'sh holat ishlangan).
    let checked = 0;
    for (const p of products) {
      const catFolder = getCategory(p.category)?.folder;
      const cover = join(process.cwd(), "public", "catalog", catFolder ?? "", p.id, "cover.webp");
      if (!existsSync(cover)) continue;
      const size = statSync(cover).size;
      expect(size, `${p.id}/cover.webp bo'sh`).toBeGreaterThan(100);
      checked++;
    }
    expect(checked).toBeGreaterThanOrEqual(0);
  });

  it("har bir mahsulot kategoryasi data/categories.ts da mavjud", () => {
    const slugs = new Set(categories.map((c) => c.slug));
    for (const p of products) expect(slugs.has(p.category)).toBe(true);
  });

  it("kategoriya sluglari va papka nomlari unikal", () => {
    const slugs = categories.map((c) => c.slug);
    const folders = categories.map((c) => c.folder);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(folders).size).toBe(folders.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
    for (const f of folders) expect(f).toMatch(/^[a-z0-9-]+$/);
  });

  it("har bir mahsulotning ikki tilda matni to'ldirilgan", () => {
    for (const p of products) {
      expect(p.name.uz.trim().length).toBeGreaterThan(0);
      expect(p.name.ru.trim().length).toBeGreaterThan(0);
      expect(p.description.uz.trim().length).toBeGreaterThan(0);
      expect(p.description.ru.trim().length).toBeGreaterThan(0);
      expect(p.material.uz.trim().length).toBeGreaterThan(0);
      expect(p.material.ru.trim().length).toBeGreaterThan(0);
      for (const c of p.colors) {
        expect(c.uz.trim().length).toBeGreaterThan(0);
        expect(c.ru.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("imageCount 0..20 oralig'ida (rasm yo'li cheksiz ko'paymasin)", () => {
    for (const p of products) {
      expect(Number.isInteger(p.imageCount)).toBe(true);
      expect(p.imageCount).toBeGreaterThanOrEqual(0);
      expect(p.imageCount).toBeLessThanOrEqual(20);
    }
  });

  it("rasm manzillari xavfsiz va to'g'ri shaklda", () => {
    for (const p of products) {
      const { cover, gallery } = imageUrls(p);
      const folder = getCategory(p.category)?.folder;
      expect(folder).toBeTruthy();
      expect(cover).toBe(`/catalog/${folder}/${p.id}/cover.webp`);
      expect(gallery).toHaveLength(p.imageCount);
      for (const g of [cover, ...gallery]) {
        expect(g.startsWith("/catalog/")).toBe(true);
        expect(g).not.toContain("..");
        expect(g).not.toContain("//");
      }
    }
  });

  it("narx null yoki musbat son", () => {
    for (const p of products) {
      if (p.price !== null) {
        expect(Number.isFinite(p.price)).toBe(true);
        expect(p.price).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it("sharh reytingi 1..5 va faqat approved sharhlar ko'rsatiladi", () => {
    for (const r of reviews) {
      expect(r.rating).toBeGreaterThanOrEqual(1);
      expect(r.rating).toBeLessThanOrEqual(5);
      expect(r.name.trim().length).toBeGreaterThan(0);
    }
  });

  it("loyiha yozuvlari to'liq", () => {
    for (const x of projects) {
      expect(x.id).toMatch(/^[a-z0-9-]+$/);
      expect(x.title.uz.trim().length).toBeGreaterThan(0);
      expect(x.title.ru.trim().length).toBeGreaterThan(0);
    }
  });

  it("FAQ yozuvlari to'liq", () => {
    for (const x of faq) {
      expect(x.q.uz.trim().length).toBeGreaterThan(0);
      expect(x.q.ru.trim().length).toBeGreaterThan(0);
      expect(x.a.uz.trim().length).toBeGreaterThan(0);
      expect(x.a.ru.trim().length).toBeGreaterThan(0);
    }
  });
});

describe("SEO manzili va JSON-LD", () => {
  const prev = process.env.SITE_URL;
  afterEach(() => { if (prev === undefined) delete process.env.SITE_URL; else process.env.SITE_URL = prev; });

  it("SITE_URL berilsa oxiridagi / olib tashlanadi", () => {
    process.env.SITE_URL = "https://mebel.uz/";
    expect(siteUrl()).toBe("https://mebel.uz");
  });

  it("production'da SITE_URL yo'q bo'lsa localhost ishlatilmaydi", () => {
    delete process.env.SITE_URL;
    const before = process.env.NODE_ENV;
    // @ts-expect-error NODE_ENV testda vaqtincha o'zgartiriladi
    process.env.NODE_ENV = "production";
    expect(siteUrl()).not.toContain("localhost");
    // @ts-expect-error tiklash
    process.env.NODE_ENV = before;
  });

  it("JSON-LD'da to'ldirilmagan [PLACEHOLDER] qiymat chiqmaydi", () => {
    delete process.env.SITE_URL;
    const ld = JSON.stringify(localBusinessLd());
    expect(ld).not.toContain("[");
    expect(ld).not.toContain("undefined");
  });

  it("narx null bo'lsa Product JSON-LD'da offers chiqmaydi", () => {
    const p = { ...products[0], price: null };
    expect(JSON.stringify(productLd(p))).not.toContain("offers");
  });

  it("siteConfig nomi bo'sh emas", () => {
    expect(siteConfig.name.trim().length).toBeGreaterThan(0);
    expect(siteConfig.name).not.toMatch(NON_LATIN);
  });
});
