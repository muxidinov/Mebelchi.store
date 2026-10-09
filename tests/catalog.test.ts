import { describe, it, expect } from "vitest";
import { allProducts, getProduct, getCategory, imageUrls, formatPrice, ui, type Product } from "../lib/catalog";
import { products } from "../data/products";
import { categories } from "../data/categories";

const makeProduct = (overrides: Partial<Product> = {}): Product => ({
  id: "test_id",
  category: "sofas",
  imageCount: 3,
  name: { uz: "Nomi", ru: "Имя" },
  description: { uz: "Tavsif", ru: "Описание" },
  material: { uz: "Material", ru: "Материал" },
  colors: [{ uz: "ko'k", ru: "Синий" }],
  features: [],
  price: 100,
  available: true,
  custom: false,
  ...overrides,
});

describe("allProducts", () => {
  it("returns the full products array", () => {
    expect(allProducts()).toBe(products);
  });

  it("returns a non-empty array", () => {
    expect(Array.isArray(allProducts())).toBe(true);
    expect(allProducts().length).toBeGreaterThan(0);
  });
});

describe("getProduct", () => {
  it("finds an existing product by id (positive)", () => {
    const found = getProduct(products[0].id);
    expect(found).toBeDefined();
    expect(found?.id).toBe(products[0].id);
  });

  it("returns the exact object reference from the data source", () => {
    expect(getProduct(products[0].id)).toBe(products[0]);
  });

  it("returns undefined for unknown id (negative)", () => {
    expect(getProduct("no_such_product")).toBeUndefined();
  });

  it.each(["", " ", "DETSKIY_KRESLO", "Detskiy_kreslo "])(
    "returns undefined for edge input '%s'",
    (id) => expect(getProduct(id)).toBeUndefined()
  );

  it("is case sensitive and does not match partial ids", () => {
    const id = products[0].id;
    expect(getProduct(id.slice(0, -1))).toBeUndefined();
    expect(getProduct(id.toUpperCase())).toBeUndefined();
  });
});

describe("getCategory", () => {
  it("finds every category by its own slug", () => {
    for (const c of categories) {
      expect(getCategory(c.slug)).toEqual(c);
    }
  });

  it("resolves folder for a known category (positive)", () => {
    expect(getCategory("armchairs")?.folder).toBe("armchairs");
  });

  it("returns undefined for unknown slug (negative)", () => {
    expect(getCategory("unknown-slug")).toBeUndefined();
  });

  it.each(["", " ", "Sofa", "sofas/"])("returns undefined for edge slug '%s'", (slug) =>
    expect(getCategory(slug)).toBeUndefined()
  );

  it("has unique slugs and unique folders", () => {
    expect(new Set(categories.map((c) => c.slug)).size).toBe(categories.length);
    expect(new Set(categories.map((c) => c.folder)).size).toBe(categories.length);
  });

  it("every category has non-empty uz and ru labels", () => {
    for (const c of categories) {
      expect(c.uz.trim()).not.toBe("");
      expect(c.ru.trim()).not.toBe("");
    }
  });
});

describe("imageUrls", () => {
  it("builds cover and padded gallery paths for a known category", () => {
    const urls = imageUrls(makeProduct({ id: "Divan_01", category: "sofas", imageCount: 2 }));
    expect(urls.cover).toBe("/catalog/sofas/Divan_01/cover.webp");
    expect(urls.gallery).toEqual([
      "/catalog/sofas/Divan_01/01.webp",
      "/catalog/sofas/Divan_01/02.webp",
    ]);
  });

  it("falls back to the 'other' folder for an unknown category (negative)", () => {
    const urls = imageUrls(makeProduct({ id: "X", category: "no_such_cat", imageCount: 1 }));
    expect(urls.cover).toBe("/catalog/other/X/cover.webp");
    expect(urls.gallery[0]).toBe("/catalog/other/X/01.webp");
  });

  it("returns an empty gallery when imageCount is 0 (edge)", () => {
    const urls = imageUrls(makeProduct({ imageCount: 0 }));
    expect(urls.gallery).toEqual([]);
    expect(urls.cover).toBe("/catalog/sofas/test_id/cover.webp");
  });

  it("returns an empty gallery for negative imageCount (edge)", () => {
    expect(imageUrls(makeProduct({ imageCount: -5 })).gallery).toEqual([]);
  });

  it("clamps gallery size to 20 (edge)", () => {
    const urls = imageUrls(makeProduct({ imageCount: 25 }));
    expect(urls.gallery).toHaveLength(20);
    expect(urls.gallery[19]).toBe("/catalog/sofas/test_id/20.webp");
  });

  it("produces exactly imageCount urls and zero-pads below 10 (edge)", () => {
    const urls = imageUrls(makeProduct({ imageCount: 9 }));
    expect(urls.gallery).toHaveLength(9);
    expect(urls.gallery[8]).toMatch(/\/09\.webp$/);
  });

  it("always returns a cover path even with no gallery images", () => {
    expect(imageUrls(makeProduct({ imageCount: 0 })).cover).toMatch(/^.*\/cover\.webp$/);
  });

  it("works for every product in the data source", () => {
    for (const p of products) {
      const urls = imageUrls(p);
      expect(urls.cover).toContain(`/${p.id}/`);
      expect(urls.gallery.length).toBeGreaterThanOrEqual(0);
      expect(urls.gallery.length).toBeLessThanOrEqual(20);
    }
  });
});

describe("ui dictionary", () => {
  it("defines identical key sets for uz and ru", () => {
    expect(Object.keys(ui.uz).sort()).toEqual(Object.keys(ui.ru).sort());
  });

  it("has no empty strings", () => {
    for (const lang of ["uz", "ru"] as const) {
      for (const [key, value] of Object.entries(ui[lang])) {
        expect(value.trim(), `${lang}.${key}`).not.toBe("");
      }
    }
  });

  it("differs between languages for every key", () => {
    for (const key of Object.keys(ui.uz)) {
      expect(ui.ru[key as keyof typeof ui.ru]).not.toBe(ui.uz[key as keyof typeof ui.uz]);
    }
  });
});

describe("formatPrice", () => {
  it("formats thousands with a separator (positive)", () => {
    expect(formatPrice(3500000, "uz")).toBe("3\u00a0500\u00a0000\u00a0so\u2019m");
    expect(formatPrice(3500000, "ru")).toBe("3\u202f500\u202f000\u00a0\u0440\u0443\u0431.");
  });

  it("formats small amounts without extra separators", () => {
    expect(formatPrice(500, "uz")).toBe("500\u00a0so\u2019m");
    expect(formatPrice(0, "uz")).toBe("0\u00a0so\u2019m");
  });

  it("formats exactly at the 1000 boundary (edge)", () => {
    expect(formatPrice(1000, "uz")).toBe("1\u00a0000\u00a0so\u2019m");
    expect(formatPrice(999, "uz")).toBe("999\u00a0so\u2019m");
  });

  it("handles millions (edge)", () => {
    expect(formatPrice(1000000, "uz")).toBe("1\u00a0000\u00a0000\u00a0so\u2019m");
  });

  it("rounds fractional values (edge)", () => {
    expect(formatPrice(3500000.49, "uz")).toBe("3\u00a0500\u00a0000\u00a0so\u2019m");
    expect(formatPrice(3500000.5, "uz")).toBe("3\u00a0500\u00a0001\u00a0so\u2019m");
  });

  it("returns an empty string for non-finite values (negative)", () => {
    expect(formatPrice(NaN, "uz")).toBe("");
    expect(formatPrice(Infinity, "uz")).toBe("");
    expect(formatPrice(-Infinity, "uz")).toBe("");
  });

  it("keeps negative sign for negative amounts (negative)", () => {
    expect(formatPrice(-5000, "uz")).toBe("-5\u00a0000\u00a0so\u2019m");
  });

  it("defaults to uz when no lang is given", () => {
    expect(formatPrice(3500000)).toBe("3\u00a0500\u00a0000\u00a0so\u2019m");
  });

  it("differs between uz and ru", () => {
    expect(formatPrice(3500000, "uz")).not.toBe(formatPrice(3500000, "ru"));
  });
});

describe("prices in the data source", () => {
  it("every product exposes a price field", () => {
    for (const p of products) expect(p).toHaveProperty("price");
  });

  it("formats every non-null price without throwing", () => {
    for (const p of products) {
      if (p.price != null) {
        expect(formatPrice(p.price, "uz")).not.toBe("");
        expect(formatPrice(p.price, "ru")).not.toBe("");
      }
    }
  });
});

describe("products data integrity", () => {
  it("has unique product ids", () => {
    expect(new Set(products.map((p) => p.id)).size).toBe(products.length);
  });

  it("references only existing categories", () => {
    for (const p of products) {
      expect(getCategory(p.category), p.id).toBeDefined();
    }
  });

  it("has non-negative image counts", () => {
    for (const p of products) {
      expect(p.imageCount).toBeGreaterThanOrEqual(0);
    }
  });

  it("has price null or a positive number", () => {
    for (const p of products) {
      if (p.price !== null) expect(p.price).toBeGreaterThan(0);
    }
  });
});
