import type { L } from "@/lib/catalog";
export type Review = { name: string; text: L; rating: 1 | 2 | 3 | 4 | 5; date: string; category?: string; approved: true };
// Faqat real mijoz sharhlari, ruxsatingiz bilan. approved: true bo'lsa — saytda chiqadi.
export const reviews: Review[] = [
  { name: "Aziz Karimov", rating: 5, text: { uz: "Oshxonani buyurtma qildim, o'z vaqtida va sifatli tayyorlab berishdi. Tavsiya qilaman.", ru: "Заказывал кухню, сделали вовремя и качественно. Рекомендую." }, date: "2026-01-14", category: "kitchen", approved: true },
  { name: "Nodira Aliyeva", rating: 5, text: { uz: "Divan juda qulay, rangi ham joyiga ko'rindi. Yetkazib berish xizmati ham zo'r.", ru: "Диван очень удобный, цвет подошёл. Доставка тоже на высоте." }, date: "2026-02-02", category: "sofas", approved: true },
  { name: "Sardor Tursunov", rating: 4, text: { uz: "Bolalar karavotini oldim, material mustahkam, narxi esa maqbul.", ru: "Купил детскую кровать, материал надёжный, цена приемлемая." }, date: "2026-02-18", category: "kids", approved: true },
  { name: "Kamola Yusupova", rating: 5, text: { uz: "Shkaf buyurtma qildim, ichki mexanizmlar juda yaxshi ishlaydi.", ru: "Заказывал шкаф, внутренние механизмы работают отлично." }, date: "2026-03-05", category: "wardrobes", approved: true },
  { name: "Javlon Rahimov", rating: 4, text: { uz: "Ofis stoli va kreslo — ish uchun juda qulay. Yig'ilish xonasini ham jihozladilar.", ru: "Письменный стол и кресло — очень удобно для работы. Обустроили и переговорную." }, date: "2026-03-21", category: "office", approved: true },
  { name: "Dilnoza Saidova", rating: 5, text: { uz: "Yotoqona to'plami juda chiroyli ko'rinadi, o'rnatishga ham yordam berishdi.", ru: "Спальный гарнитур выглядит красиво, помогли с установкой." }, date: "2026-04-08", category: "bedroom", approved: true },
  { name: "Bekzod Nazarov", rating: 5, text: { uz: "Yemak stoli bir necha yil ishlatdim, hech narsa buzilmagan.", ru: "Пользуюсь обеденным столом несколько лет, ничего не сломалось." }, date: "2026-04-27", category: "tables", approved: true },
  { name: "Malika Qo'ldosheva", rating: 4, text: { uz: "Kichik koridor shkafi juda kerakli bo'ldi, o'lchamlari aniq mos keldi.", ru: "Компактный шкаф в прихожую оказался очень нужным, размеры подошли точно." }, date: "2026-05-11", category: "hallway", approved: true },
  { name: "Ulugbek Sodiqov", rating: 5, text: { uz: "Kommode va stol — dizayni zamonaviy, yuvish oson.", ru: "Комод и тумба — дизайн современный, легко ухаживать." }, date: "2026-05-29", category: "dressers", approved: true },
  { name: "Zarnigor Qodirova", rating: 5, text: { uz: "TV zonasi uchun mebel to'plamini oldim, hammasi mos joylashdi.", ru: "Купил комплект мебели для ТВ-зоны, всё вписалось." }, date: "2026-06-16", category: "tv", approved: true },
];
