import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { Lang } from "./i18n";
export type L = { uz: string; ru: string };
export type Product = {
  id: string; category: string; imageCount: number; name: L; description: L; material: L;
  colors: L[]; dimensions?: string; features: L[]; price: number | null; available: boolean; custom: boolean;
};
export const allProducts = () => products;export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
// Narxni o'zbekcha yozuvda ko'rsatadi: 3500000 -> "3 500 000"
export const formatPrice = (n: number, lang: Lang = "uz") => {
  if (!Number.isFinite(n)) return "";
  const s = Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, lang === "ru" ? "\u202f" : "\u00a0");
  return `${s}${lang === "ru" ? "\u00a0\u0440\u0443\u0431." : "\u00a0so\u2019m"}`;
};
export function imageUrls(p: Product) {
  const folder = getCategory(p.category)?.folder ?? "other";
  const base = `/catalog/${folder}/${p.id}`;
  const gallery = Array.from({ length: Math.max(0, Math.min(p.imageCount, 20)) }, (_, i) => `${base}/${String(i + 1).padStart(2, "0")}.webp`);
  return { cover: `${base}/cover.webp`, gallery };
}
export const ui = {
  uz: { catalog: "Katalog", search: "Qidirish…", all: "Barcha kategoriyalar", onlyAvail: "Faqat mavjud", sort: "Saralash", az: "Nomi (A–Z)", za: "Nomi (Z–A)",
    details: "Batafsil", ask: "So'rov yuborish", order: "Buyurtma berish", consult: "Mutaxassis bilan maslahat", customAsk: "Individual loyiha uchun so'rov",
    emptyTitle: "Bu kategoriyada hozircha mahsulotlar mavjud emas.", emptyText: "Tez orada yangi mahsulotlar qo'shiladi. Mutaxassisga savol berishingiz mumkin.",
    noImage: "Rasm tez orada", material: "Material", colors: "Ranglar", dims: "O'lchamlar", features: "Xususiyatlari", unavailable: "Buyurtma asosida", back: "← Katalogga", home: "Bosh sahifa",
    price: "Narx", negotiable: "Kelishilgancha", from: "dan", sum: "so'm" },
  ru: { catalog: "Каталог", search: "Поиск…", all: "Все категории", onlyAvail: "Только в наличии", sort: "Сортировка", az: "Название (А–Я)", za: "Название (Я–А)",
    details: "Подробнее", ask: "Отправить запрос", order: "Заказать", consult: "Консультация специалиста", customAsk: "Запрос на индивидуальный проект",
    emptyTitle: "В этой категории пока нет товаров.", emptyText: "Скоро появятся новые товары. Вы можете задать вопрос специалисту.",
    noImage: "Фото скоро", material: "Материал", colors: "Цвета", dims: "Размеры", features: "Особенности", unavailable: "Под заказ", back: "← В каталог", home: "Главная",
    price: "Цена", negotiable: "Договорная", from: "от", sum: "сум" },
} satisfies Record<Lang, Record<string, string>>;
