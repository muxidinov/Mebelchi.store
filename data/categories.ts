export type Category = { slug: string; folder: string; uz: string; ru: string };
// Yangi kategoriya: shu ro'yxatga qator qo'shing va public/catalog/<folder>/ papkasini oching.
export const categories: Category[] = [
  { slug: "kitchen", folder: "kitchen", uz: "Oshxona mebellari", ru: "Кухонная мебель" },
  { slug: "sofas", folder: "sofas", uz: "Divanlar", ru: "Диваны" },
  { slug: "armchairs", folder: "armchairs", uz: "Kreslolar", ru: "Кресла" },
  { slug: "bedroom", folder: "bedroom", uz: "Yotoqxona mebellari", ru: "Мебель для спальни" },
  { slug: "wardrobes", folder: "wardrobes", uz: "Shkaflar", ru: "Шкафы" },
  { slug: "tables", folder: "tables", uz: "Stol va stullar", ru: "Столы и стулья" },
  { slug: "tv", folder: "tv", uz: "TV zonalar", ru: "ТВ-зоны" },
  { slug: "dressers", folder: "dressers", uz: "Komodlar", ru: "Комоды" },
  { slug: "office", folder: "office", uz: "Ofis mebellari", ru: "Офисная мебель" },
  { slug: "kids", folder: "kids", uz: "Bolalar mebellari", ru: "Детская мебель" },
  { slug: "hallway", folder: "hallway", uz: "Koridor mebellari", ru: "Мебель для прихожей" },
  { slug: "custom", folder: "custom", uz: "Buyurtma asosidagi mebellar", ru: "Мебель на заказ" },
  { slug: "other", folder: "other", uz: "Boshqa", ru: "Другое" },
];
