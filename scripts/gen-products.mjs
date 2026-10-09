// Bir martalik generator: data/products.ts va rasm papkalarini yaratadi.
import fs from "node:fs";
import path from "node:path";

const PRICE = 3500000;
const IMAGE_COUNT = 3;

const cats = [
  ["kitchen", "Oshxona mebellesi", [
    ["Kichik oshxona to'plami", "Компактный кухонный гарнитур"],
    ["Kichik oshxona", "Маленькая кухня"],
    ["O'rta oshxona", "Кухня среднего размера"],
    ["Katta oshxona", "Большая кухня"],
    ["U-styel mebeli", "Г-образная мебель"],
    ["To'g'ri chiziqli oshxona", "Прямая кухня"],
    ["L-shaklli oshxona", "L-образная кухня"],
    ["Oshxona orali (brakbardor)", "Кухонный остров"],
    ["Tosh ustli oshxona", "Кухня с каменной столешницей"],
    ["Oshxona to'plami premium", "Кухонный гарнитур премиум"],
  ]],
  ["sofas", "Divanlar", [
    ["Kuchli karkasli divan", "Диван с прочным каркасом"],
    ["Yumshoq to'qliqli divan", "Диван с мягкой обивкой"],
    ["Kichik divan", "Небольшой диван"],
    ["Katak divan", "Угловой диван"],
    ["Modulli divan", "Модульный диван"],
    ["Yon qutili divan", "Диван с боковиной"],
    ["Maska bilan divan", "Диван с подушками"],
    ["Klassik uslubdagi divan", "Диван в классическом стиле"],
    ["Zamonaviy uslubdagi divan", "Диван в современном стиле"],
    ["Uy oilasi uchun katta divan", "Большой диван для семьи"],
  ]],
  ["armchairs", "Kreslolar", [
    ["Yumshoq kreslo", "Мягкое кресло"],
    ["Ofis kreslosi", "Офисное кресло"],
    ["Detskiy kreslo", "Детское кресло"],
    ["Yotoqona kreslosi", "Кресло для спальни"],
    ["Aylanadigan kreslo", "Вращающееся кресло"],
    ["Kichik kreslo", "Маленькое кресло"],
    ["To'raksimon kreslo", "Восседательное кресло"],
    ["Teri kreslo", "Кресло из кожи"],
    ["Matot kreslo", "Кресло с подлокотниками"],
    ["Zamonaviy kreslo", "Современное кресло"],
  ]],
  ["bedroom", "Yotoqxona mebellari", [
    ["Yotoq to'plami", "Спальный гарнитур"],
    ["Ikki kishilik karavot", "Двуспальная кровать"],
    ["Bir kishilik karavot", "Односпальная кровать"],
    ["Kommode va shkaf", "Комод и шкаф"],
    ["Kiyim shkafi", "Шкаф для одежды"],
    ["Tualet stoligi", "Туалетный столик"],
    ["Kommode", "Комод"],
    ["Yotoq stolchasi", "Прикроватный столик"],
    ["Ziyarat stolchasi", "Туалетный столик с зеркалом"],
    ["Yotoqona to'plami keng", "Широкий спальный гарнитур"],
  ]],
  ["wardrobes", "Shkaflar", [
    ["Klassik shkaf", "Классический шкаф"],
    ["Sliding shkaf", "Шкаф-купе"],
    ["Kichik shkaf", "Небольшой шкаф"],
    ["Keng shkaf", "Широкий шкаф"],
    ["Burchak shkaf", "Угловой шкаф"],
    ["Ko'rinishli shkaf", "Шкаф с витриной"],
    ["Bolalar shkafi", "Детский шкаф"],
    ["Kiyim shkafi premium", "Премиальный шкаф для одежды"],
    ["Yotoqona shkafi", "Спальный шкаф"],
    ["Modulli shkaf tizimi", "Модульная система шкафов"],
  ]],
  ["tables", "Stol va stullar", [
    ["Yemak stoli", "Обеденный стол"],
    ["Yemak stoli keng", "Широкий обеденный стол"],
    ["Kafel stol", "Обеденный стол с плиткой"],
    ["Daraxtli stol", "Стол из дерева"],
    ["Kengaytiriladigan stol", "Раздвижной стол"],
    ["Kofe stoli", "Кофейный стол"],
    ["Kompakt ofis stoli", "Компактный офисный стол"],
    ["Stullar to'plami", "Набор стульев"],
    ["Bar stoli", "Барный стол"],
    ["Kurs stoli", "Стол для курсов"],
  ]],
  ["tv", "TV zonalari", [
    ["TV zonasi oddiy", "Простая ТВ-зона"],
    ["TV zonasi premium", "Премиум ТВ-зона"],
    ["TV zonasi kichik", "Маленькая ТВ-зона"],
    ["TV zonasi burchakli", "Угловая ТВ-зона"],
    ["Kino teatri zonasi", "Домашний кинотеатр"],
    ["TV stoligi va shkaf", "Тумба под ТВ и шкаф"],
    ["Tirsakli TV kronshteyn", "Настенный кронштейн для ТВ"],
    ["Yoritilgan TV devori", "Подсвеченная ТВ-стена"],
    ["Minimal TV zonasi", "Минималистичная ТВ-зона"],
    ["Katta ekran uchun zona", "ТВ-зона для большого экрана"],
  ]],
  ["dressers", "Komodlar", [
    ["Kichik komod", "Маленький комод"],
    ["Keng komod", "Широкий комод"],
    ["Komod tuxdon bilan", "Комод с тумбочкой"],
    ["Zamonaviy komod", "Современный комод"],
    ["Klassik komod", "Классический комод"],
    ["Shkafli komod", "Комод с дверцами"],
    ["Ochiq polkali komod", "Комод с открытыми полками"],
    ["Bolalar uchun komod", "Детский комод"],
    ["Tegishli komod", "Пристенный комод"],
    ["Komod premium", "Комод премиум-класса"],
  ]],
  ["office", "Ofis mebellari", [
    ["Yozuv stoli", "Письменный стол"],
    ["Ofis kreslosi", "Офисное кресло"],
    ["Kutubxona shkafi", "Книжный шкаф"],
    ["Kandidat stol", "Стол для кандидатов"],
    ["Ofis stoli keng", "Широкий офисный стол"],
    ["Kichik ofis stoli", "Маленький офисный стол"],
    ["Yig'ilish stoli", "Стол для переговоров"],
    ["Shkaf-polonka", "Стеллаж-полка"],
    ["Kompyuter to'shagi", "Компьютерная тумба"],
    ["Ofis kreslosi premium", "Офисное кресло премиум"],
  ]],
  ["kids", "Bolalar mebellari", [
    ["Bolalar karavoti", "Детская кровать"],
    ["Bolalar shkafi", "Детский шкаф"],
    ["Bolalar stoli", "Детский стол"],
    ["Bolalar stuli", "Детский стул"],
    ["Kitob javoni", "Книжная полка"],
    ["O'yin zonasi to'plami", "Набор для игровой зоны"],
    ["Bolalar komodi", "Детский комод"],
    ["Bolalar kreslosi", "Детское кресло"],
    ["Yasash stoli", "Стол для рисования"],
    ["Bolalar kiyim shkafi", "Шкаф для детской одежды"],
  ]],
  ["hallway", "Koridor mebellari", [
    ["Kichik shkaf", "Компактный шкаф"],
    ["Kiyim shkafi", "Шкаф-прихожая"],
    ["Ayaqqab tokasi", "Обувная полка"],
    ["Ko'zakkara tutqich", "Вешалка для верхней одежды"],
    ["Yassiq tokasi", "Полка для сумок"],
    ["Pallon uchun stul", "Стул для зонта"],
    ["Ko'zgu bilan koridor shkafi", "Зеркальный шкаф в прихожую"],
    ["Yorqin koridor to'plami", "Яркий комплект для прихожей"],
    ["Tor koridor shkafi", "Узкий шкаф для коридора"],
    ["Ayashtiruvchi skameyka", "Скамья с сиденьем"],
  ]],
  ["custom", "Buyurtma asosidagi mebellesar", [
    ["Buyurtma asosida komod", "Комод на заказ"],
    ["Buyurtma asosida shkaf", "Шкаф на заказ"],
    ["Nolмерli divan", "Диван нестандартного размера"],
    ["Nolмерli yotoq to'plami", "Спальный гарниборт на заказ"],
    ["Maxsus oshxona", "Кухня по индивидуальным размерам"],
    ["Peschana rangli divan", "Диван нестандартного цвета"],
    ["Ko'rinishli kabinet", "Витринный шкаф на заказ"],
    ["Aylanuvchi to'raksimon stul", "Поворотный эркерный стул"],
    ["Ko'p funksiyali to'raksimon shkaf", "Угловой шкаф с полками на заказ"],
    ["Masshtabli konsepsiya", "Проект по индивидуальным меркам"],
  ]],
  ["other", "Boshqa", [
    ["Qurilish taxta va parta", "Стол и полка"],
    ["Eshtak va tokalar to'plami", "Набор полок и вешалок"],
    ["Kichik stol-shkaf", "Тумбочка-столик"],
    ["Mashina uchun tokalar", "Полка для стиральной машины"],
    ["Ko'rinishli vitrina", "Витрина для посуды"],
    ["Yashiriladigan katexona quti", "Скрытая корзина для белья"],
    ["O'yin stoli", "Стол для игр"],
    ["Kitob javoni baland", "Высокая книжная полка"],
    ["Mehmonxona stolchasi", "Столик для гостиной"],
    ["Boshqa to'plam", "Дополнительный набор"],
  ]],
];

const M = [
  ["MDF va sun'iy qatlam", "МДФ и искусственная облицовка"],
  ["Massiv o'rtilgan yog'och", "Массив ценных пород дерева"],
  ["Nam namoy", "Влагостойкий материал"],
  ["Drevlas", "Фанера"],
];
const C = [
  ["oq", "белый"], ["quyu jashil", "тёмно-зелёный"], ["kul rang", "серый"],
  ["jigarrang", "коричневый"], ["qora", "чёрный"], ["bej", "бежевый"],
  ["ko'k", "синий"], ["to'q qizil", "бордовый"], ["yashil", "зелёный"], ["oq-gullar", "белый с цветочным принтом"],
];
const F = [
  [["Sifatli va chidamli", "Качественная и долговечная"], ["O'rnatish oson", "Простая сборка"], ["Katta yuk ko'taradi", "Выдерживает большую нагрузку"]],
  [["Zamonaviy dizayn", "Современный дизайн"], ["Oshqozon uchun mos", "Подходит для кухни"], ["Namlikka chidamli", "Устойчивость к влаге"]],
  [["Bolalar uchun xavfsiz", "Безопасно для детей"], ["Yumshoq burchaklar", "Мягкие углы"], ["O'rnatish oson", "Простая сборка"]],
  [["Yillarga xizmat qiladi", "Прослужит много лет"], ["Zamonaviy uslub", "Современный стиль"], ["Keng ko'lamli saqlash", "Вместительное хранение"]],
];

const lines = [];
for (const [cat, , items] of cats) {
  for (let i = 0; i < items.length; i++) {
    const [uz, ru] = items[i];
    const id = `${cat}-${String(i + 1).padStart(2, "0")}`;
    lines.push(`  {
    id: "${id}", category: "${cat}", imageCount: ${IMAGE_COUNT},
    name: { uz: "${uz}", ru: "${ru}" },
    description: { uz: "${uz} — ${cat} kategoriyasidagi mahsulot.", ru: "${ru} — товар из категории «${cat}».", },
    material: { uz: "${M[i % M.length][0]}", ru: "${M[i % M.length][1]}" },
    colors: [{ uz: "${C[i % C.length][0]}", ru: "${C[i % C.length][1]}" }, { uz: "${C[(i + 3) % C.length][0]}", ru: "${C[(i + 3) % C.length][1]}" }],
    dimensions: "${120 + i * 10} × ${60 + i * 5} × ${80 + i * 2} sm",
    features: [${F[i % F.length].map(([a, b]) => `{ uz: "${a}", ru: "${b}" }`).join(", ")}],
    price: ${PRICE}, available: ${i % 5 !== 4}, custom: ${cat === "custom"},
  },`);
  }
}

const out = `import type { Product } from "@/lib/catalog";
// Mahsulot qo'shish: pastdagi namunani (izohdan chiqarib) nusxalang. Rasmlar:
// public/catalog/<category>/<id>/cover.webp, 01.webp ... (imageCount = nechta galereya rasmi)
export const products: Product[] = [
${lines.join("\n")}
];
`;

fs.writeFileSync(path.resolve("data/products.ts"), out, "utf8");

// Rasm papkalari
for (const [cat] of cats) {
  for (let i = 1; i <= items0(cat); i++) {
    const dir = path.resolve("public/catalog", cat, `${cat}-${String(i).padStart(2, "0")}`);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, ".gitkeep"), "", "utf8");
  }
}
function items0(cat) { return cats.find((c) => c[0] === cat)[2].length; }

console.log(`products: ${lines.length}, papkalar: ${cats.length * 10}`);
