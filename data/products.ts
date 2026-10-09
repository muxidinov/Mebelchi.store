import type { Product } from "@/lib/catalog";
// Mahsulot qo'shish: pastdagi namunani (izohdan chiqarib) nusxalang. Rasmlar:
// public/catalog/<category>/<id>/cover.webp, 01.webp ... (imageCount = nechta galereya rasmi)
export const products: Product[] = [
  {
    id: "kitchen-01", category: "kitchen", imageCount: 2,
    name: { uz: "Kichik oshxona to'plami", ru: "Компактный кухонный гарнитур" },
    description: { uz: "Kichik oshxona to'plami — kitchen kategoriyasidagi mahsulot.", ru: "Компактный кухонный гарнитур — товар из категории «kitchen».", },
    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
    dimensions: "120 × 60 × 80 sm",
    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
    price: 3500000, available: true, custom: false,
  },

  {
    id: "kitchen-02", category: "kitchen", imageCount: 2,
    name: { uz: "Kichik oshxona", ru: "Маленькая кухня" },
    description: { uz: "Kichik oshxona — kitchen kategoriyasidagi mahsulot.", ru: "Маленькая кухня — товар из категории «kitchen».", },
    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
    dimensions: "130 × 65 × 82 sm",
    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
    price: 3500000, available: true, custom: false,
  },
//  {
//    id: "kitchen-03", category: "kitchen", imageCount: 3,
//    name: { uz: "O'rta oshxona", ru: "Кухня среднего размера" },
//    description: { uz: "O'rta oshxona — kitchen kategoriyasidagi mahsulot.", ru: "Кухня среднего размера — товар из категории «kitchen».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kitchen-04", category: "kitchen", imageCount: 3,
//    name: { uz: "Katta oshxona", ru: "Большая кухня" },
//    description: { uz: "Katta oshxona — kitchen kategoriyasidagi mahsulot.", ru: "Большая кухня — товар из категории «kitchen».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kitchen-05", category: "kitchen", imageCount: 3,
//    name: { uz: "U-styel mebeli", ru: "Г-образная мебель" },
//    description: { uz: "U-styel mebeli — kitchen kategoriyasidagi mahsulot.", ru: "Г-образная мебель — товар из категории «kitchen».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "kitchen-06", category: "kitchen", imageCount: 3,
//    name: { uz: "To'g'ri chiziqli oshxona", ru: "Прямая кухня" },
//    description: { uz: "To'g'ri chiziqli oshxona — kitchen kategoriyasidagi mahsulot.", ru: "Прямая кухня — товар из категории «kitchen».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kitchen-07", category: "kitchen", imageCount: 3,
//    name: { uz: "L-shaklli oshxona", ru: "L-образная кухня" },
//    description: { uz: "L-shaklli oshxona — kitchen kategoriyasidagi mahsulot.", ru: "L-образная кухня — товар из категории «kitchen».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kitchen-08", category: "kitchen", imageCount: 3,
//    name: { uz: "Oshxona orali (brakbardor)", ru: "Кухонный остров" },
//    description: { uz: "Oshxona orali (brakbardor) — kitchen kategoriyasidagi mahsulot.", ru: "Кухонный остров — товар из категории «kitchen».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kitchen-09", category: "kitchen", imageCount: 3,
//    name: { uz: "Tosh ustli oshxona", ru: "Кухня с каменной столешницей" },
//    description: { uz: "Tosh ustli oshxona — kitchen kategoriyasidagi mahsulot.", ru: "Кухня с каменной столешницей — товар из категории «kitchen».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kitchen-10", category: "kitchen", imageCount: 3,
//    name: { uz: "Oshxona to'plami premium", ru: "Кухонный гарнитур премиум" },
//    description: { uz: "Oshxona to'plami premium — kitchen kategoriyasidagi mahsulot.", ru: "Кухонный гарнитур премиум — товар из категории «kitchen».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },
// 























  {
    id: "sofas-01", category: "sofas", imageCount: 2,
    name: { uz: "Kuchli karkasli divan", ru: "Диван с прочным каркасом" },
    description: { uz: "Kuchli karkasli divan — sofas kategoriyasidagi mahsulot.", ru: "Диван с прочным каркасом — товар из категории «sofas».", },
    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
    dimensions: "120 × 60 × 80 sm",
    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
    price: 3500000, available: true, custom: false,
  },
  {
    id: "sofas-02", category: "sofas", imageCount: 2,
    name: { uz: "Yumshoq to'qliqli divan", ru: "Диван с мягкой обивкой" },
    description: { uz: "Yumshoq to'qliqli divan — sofas kategoriyasidagi mahsulot.", ru: "Диван с мягкой обивкой — товар из категории «sofas».", },
    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
    dimensions: "130 × 65 × 82 sm",
    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
    price: 3500000, available: true, custom: false,
  },
//  {
//    id: "sofas-03", category: "sofas", imageCount: 2,
//    name: { uz: "Kichik divan", ru: "Небольшой диван" },
//    description: { uz: "Kichik divan — sofas kategoriyasidagi mahsulot.", ru: "Небольшой диван — товар из категории «sofas».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "sofas-04", category: "sofas", imageCount: 3,
//    name: { uz: "Katak divan", ru: "Угловой диван" },
//    description: { uz: "Katak divan — sofas kategoriyasidagi mahsulot.", ru: "Угловой диван — товар из категории «sofas».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "sofas-05", category: "sofas", imageCount: 3,
//    name: { uz: "Modulli divan", ru: "Модульный диван" },
//    description: { uz: "Modulli divan — sofas kategoriyasidagi mahsulot.", ru: "Модульный диван — товар из категории «sofas».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "sofas-06", category: "sofas", imageCount: 3,
//    name: { uz: "Yon qutili divan", ru: "Диван с боковиной" },
//    description: { uz: "Yon qutili divan — sofas kategoriyasidagi mahsulot.", ru: "Диван с боковиной — товар из категории «sofas».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "sofas-07", category: "sofas", imageCount: 3,
//    name: { uz: "Maska bilan divan", ru: "Диван с подушками" },
//    description: { uz: "Maska bilan divan — sofas kategoriyasidagi mahsulot.", ru: "Диван с подушками — товар из категории «sofas».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "sofas-08", category: "sofas", imageCount: 3,
//    name: { uz: "Klassik uslubdagi divan", ru: "Диван в классическом стиле" },
//    description: { uz: "Klassik uslubdagi divan — sofas kategoriyasidagi mahsulot.", ru: "Диван в классическом стиле — товар из категории «sofas».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "sofas-09", category: "sofas", imageCount: 3,
//    name: { uz: "Zamonaviy uslubdagi divan", ru: "Диван в современном стиле" },
//    description: { uz: "Zamonaviy uslubdagi divan — sofas kategoriyasidagi mahsulot.", ru: "Диван в современном стиле — товар из категории «sofas».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "sofas-10", category: "sofas", imageCount: 3,
//    name: { uz: "Uy oilasi uchun katta divan", ru: "Большой диван для семьи" },
//    description: { uz: "Uy oilasi uchun katta divan — sofas kategoriyasidagi mahsulot.", ru: "Большой диван для семьи — товар из категории «sofas».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },



















//  {
//    id: "armchairs-01", category: "armchairs", imageCount: 3,
//    name: { uz: "Yumshoq kreslo", ru: "Мягкое кресло" },
//    description: { uz: "Yumshoq kreslo — armchairs kategoriyasidagi mahsulot.", ru: "Мягкое кресло — товар из категории «armchairs».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
//    dimensions: "120 × 60 × 80 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "armchairs-02", category: "armchairs", imageCount: 3,
//    name: { uz: "Ofis kreslosi", ru: "Офисное кресло" },
//    description: { uz: "Ofis kreslosi — armchairs kategoriyasidagi mahsulot.", ru: "Офисное кресло — товар из категории «armchairs».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
//    dimensions: "130 × 65 × 82 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "armchairs-03", category: "armchairs", imageCount: 3,
//    name: { uz: "Detskiy kreslo", ru: "Детское кресло" },
//    description: { uz: "Detskiy kreslo — armchairs kategoriyasidagi mahsulot.", ru: "Детское кресло — товар из категории «armchairs».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "armchairs-04", category: "armchairs", imageCount: 3,
//    name: { uz: "Yotoqona kreslosi", ru: "Кресло для спальни" },
//    description: { uz: "Yotoqona kreslosi — armchairs kategoriyasidagi mahsulot.", ru: "Кресло для спальни — товар из категории «armchairs».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "armchairs-05", category: "armchairs", imageCount: 3,
//    name: { uz: "Aylanadigan kreslo", ru: "Вращающееся кресло" },
//    description: { uz: "Aylanadigan kreslo — armchairs kategoriyasidagi mahsulot.", ru: "Вращающееся кресло — товар из категории «armchairs».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "armchairs-06", category: "armchairs", imageCount: 3,
//    name: { uz: "Kichik kreslo", ru: "Маленькое кресло" },
//    description: { uz: "Kichik kreslo — armchairs kategoriyasidagi mahsulot.", ru: "Маленькое кресло — товар из категории «armchairs».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "armchairs-07", category: "armchairs", imageCount: 3,
//    name: { uz: "To'raksimon kreslo", ru: "Восседательное кресло" },
//    description: { uz: "To'raksimon kreslo — armchairs kategoriyasidagi mahsulot.", ru: "Восседательное кресло — товар из категории «armchairs».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "armchairs-08", category: "armchairs", imageCount: 3,
//    name: { uz: "Teri kreslo", ru: "Кресло из кожи" },
//    description: { uz: "Teri kreslo — armchairs kategoriyasidagi mahsulot.", ru: "Кресло из кожи — товар из категории «armchairs».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "armchairs-09", category: "armchairs", imageCount: 3,
//    name: { uz: "Matot kreslo", ru: "Кресло с подлокотниками" },
//    description: { uz: "Matot kreslo — armchairs kategoriyasidagi mahsulot.", ru: "Кресло с подлокотниками — товар из категории «armchairs».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "armchairs-10", category: "armchairs", imageCount: 3,
//    name: { uz: "Zamonaviy kreslo", ru: "Современное кресло" },
//    description: { uz: "Zamonaviy kreslo — armchairs kategoriyasidagi mahsulot.", ru: "Современное кресло — товар из категории «armchairs».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },






















  {
    id: "bedroom-01", category: "bedroom", imageCount: 2,
    name: { uz: "Yotoq to'plami", ru: "Спальный гарнитур" },
    description: { uz: "Yotoq to'plami — bedroom kategoriyasidagi mahsulot.", ru: "Спальный гарнитур — товар из категории «bedroom».", },
    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
    dimensions: "120 × 60 × 80 sm",
    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
    price: 3500000, available: true, custom: false,
  },
  {
    id: "bedroom-02", category: "bedroom", imageCount: 2,
    name: { uz: "Ikki kishilik karavot", ru: "Двуспальная кровать" },
    description: { uz: "Ikki kishilik karavot — bedroom kategoriyasidagi mahsulot.", ru: "Двуспальная кровать — товар из категории «bedroom».", },
    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
    dimensions: "130 × 65 × 82 sm",
    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
    price: 3500000, available: true, custom: false,
  },
//  {
//    id: "bedroom-03", category: "bedroom", imageCount: 2,
//    name: { uz: "Bir kishilik karavot", ru: "Односпальная кровать" },
//    description: { uz: "Bir kishilik karavot — bedroom kategoriyasidagi mahsulot.", ru: "Односпальная кровать — товар из категории «bedroom».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "bedroom-04", category: "bedroom", imageCount: 3,
//    name: { uz: "Kommode va shkaf", ru: "Комод и шкаф" },
//    description: { uz: "Kommode va shkaf — bedroom kategoriyasidagi mahsulot.", ru: "Комод и шкаф — товар из категории «bedroom».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "bedroom-05", category: "bedroom", imageCount: 3,
//    name: { uz: "Kiyim shkafi", ru: "Шкаф для одежды" },
//    description: { uz: "Kiyim shkafi — bedroom kategoriyasidagi mahsulot.", ru: "Шкаф для одежды — товар из категории «bedroom».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "bedroom-06", category: "bedroom", imageCount: 3,
//    name: { uz: "Tualet stoligi", ru: "Туалетный столик" },
//    description: { uz: "Tualet stoligi — bedroom kategoriyasidagi mahsulot.", ru: "Туалетный столик — товар из категории «bedroom».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "bedroom-07", category: "bedroom", imageCount: 3,
//    name: { uz: "Kommode", ru: "Комод" },
//    description: { uz: "Kommode — bedroom kategoriyasidagi mahsulot.", ru: "Комод — товар из категории «bedroom».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "bedroom-08", category: "bedroom", imageCount: 3,
//    name: { uz: "Yotoq stolchasi", ru: "Прикроватный столик" },
//    description: { uz: "Yotoq stolchasi — bedroom kategoriyasidagi mahsulot.", ru: "Прикроватный столик — товар из категории «bedroom».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "bedroom-09", category: "bedroom", imageCount: 3,
//    name: { uz: "Ziyarat stolchasi", ru: "Туалетный столик с зеркалом" },
//    description: { uz: "Ziyarat stolchasi — bedroom kategoriyasidagi mahsulot.", ru: "Туалетный столик с зеркалом — товар из категории «bedroom».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "bedroom-10", category: "bedroom", imageCount: 3,
//    name: { uz: "Yotoqona to'plami keng", ru: "Широкий спальный гарнитур" },
//    description: { uz: "Yotoqona to'plami keng — bedroom kategoriyasidagi mahsulot.", ru: "Широкий спальный гарнитур — товар из категории «bedroom».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },




















  {
    id: "wardrobes-01", category: "wardrobes", imageCount: 2,
    name: { uz: "Klassik shkaf", ru: "Классический шкаф" },
    description: { uz: "Klassik shkaf — wardrobes kategoriyasidagi mahsulot.", ru: "Классический шкаф — товар из категории «wardrobes».", },
    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
    dimensions: "120 × 60 × 80 sm",
    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
    price: 3500000, available: true, custom: false,
  },
  {
    id: "wardrobes-02", category: "wardrobes", imageCount: 2,
    name: { uz: "Sliding shkaf", ru: "Шкаф-купе" },
    description: { uz: "Sliding shkaf — wardrobes kategoriyasidagi mahsulot.", ru: "Шкаф-купе — товар из категории «wardrobes».", },
    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
    dimensions: "130 × 65 × 82 sm",
    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
    price: 3500000, available: true, custom: false,
  },
//  {
//    id: "wardrobes-03", category: "wardrobes", imageCount: 2,
//    name: { uz: "Kichik shkaf", ru: "Небольшой шкаф" },
//    description: { uz: "Kichik shkaf — wardrobes kategoriyasidagi mahsulot.", ru: "Небольшой шкаф — товар из категории «wardrobes».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "wardrobes-04", category: "wardrobes", imageCount: 3,
//    name: { uz: "Keng shkaf", ru: "Широкий шкаф" },
//    description: { uz: "Keng shkaf — wardrobes kategoriyasidagi mahsulot.", ru: "Широкий шкаф — товар из категории «wardrobes».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "wardrobes-05", category: "wardrobes", imageCount: 3,
//    name: { uz: "Burchak shkaf", ru: "Угловой шкаф" },
//    description: { uz: "Burchak shkaf — wardrobes kategoriyasidagi mahsulot.", ru: "Угловой шкаф — товар из категории «wardrobes».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "wardrobes-06", category: "wardrobes", imageCount: 3,
//    name: { uz: "Ko'rinishli shkaf", ru: "Шкаф с витриной" },
//    description: { uz: "Ko'rinishli shkaf — wardrobes kategoriyasidagi mahsulot.", ru: "Шкаф с витриной — товар из категории «wardrobes».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "wardrobes-07", category: "wardrobes", imageCount: 3,
//    name: { uz: "Bolalar shkafi", ru: "Детский шкаф" },
//    description: { uz: "Bolalar shkafi — wardrobes kategoriyasidagi mahsulot.", ru: "Детский шкаф — товар из категории «wardrobes».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "wardrobes-08", category: "wardrobes", imageCount: 3,
//    name: { uz: "Kiyim shkafi premium", ru: "Премиальный шкаф для одежды" },
//    description: { uz: "Kiyim shkafi premium — wardrobes kategoriyasidagi mahsulot.", ru: "Премиальный шкаф для одежды — товар из категории «wardrobes».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "wardrobes-09", category: "wardrobes", imageCount: 3,
//    name: { uz: "Yotoqona shkafi", ru: "Спальный шкаф" },
//    description: { uz: "Yotoqona shkafi — wardrobes kategoriyasidagi mahsulot.", ru: "Спальный шкаф — товар из категории «wardrobes».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "wardrobes-10", category: "wardrobes", imageCount: 3,
//    name: { uz: "Modulli shkaf tizimi", ru: "Модульная система шкафов" },
//    description: { uz: "Modulli shkaf tizimi — wardrobes kategoriyasidagi mahsulot.", ru: "Модульная система шкафов — товар из категории «wardrobes».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },



























//  {
//    id: "tables-01", category: "tables", imageCount: 3,
//    name: { uz: "Yemak stoli", ru: "Обеденный стол" },
//    description: { uz: "Yemak stoli — tables kategoriyasidagi mahsulot.", ru: "Обеденный стол — товар из категории «tables».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
//    dimensions: "120 × 60 × 80 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tables-02", category: "tables", imageCount: 3,
//    name: { uz: "Yemak stoli keng", ru: "Широкий обеденный стол" },
//    description: { uz: "Yemak stoli keng — tables kategoriyasidagi mahsulot.", ru: "Широкий обеденный стол — товар из категории «tables».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
//    dimensions: "130 × 65 × 82 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tables-03", category: "tables", imageCount: 3,
//    name: { uz: "Kafel stol", ru: "Обеденный стол с плиткой" },
//    description: { uz: "Kafel stol — tables kategoriyasidagi mahsulot.", ru: "Обеденный стол с плиткой — товар из категории «tables».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tables-04", category: "tables", imageCount: 3,
//    name: { uz: "Daraxtli stol", ru: "Стол из дерева" },
//    description: { uz: "Daraxtli stol — tables kategoriyasidagi mahsulot.", ru: "Стол из дерева — товар из категории «tables».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tables-05", category: "tables", imageCount: 3,
//    name: { uz: "Kengaytiriladigan stol", ru: "Раздвижной стол" },
//    description: { uz: "Kengaytiriladigan stol — tables kategoriyasidagi mahsulot.", ru: "Раздвижной стол — товар из категории «tables».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "tables-06", category: "tables", imageCount: 3,
//    name: { uz: "Kofe stoli", ru: "Кофейный стол" },
//    description: { uz: "Kofe stoli — tables kategoriyasidagi mahsulot.", ru: "Кофейный стол — товар из категории «tables».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tables-07", category: "tables", imageCount: 3,
//    name: { uz: "Kompakt ofis stoli", ru: "Компактный офисный стол" },
//    description: { uz: "Kompakt ofis stoli — tables kategoriyasidagi mahsulot.", ru: "Компактный офисный стол — товар из категории «tables».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tables-08", category: "tables", imageCount: 3,
//    name: { uz: "Stullar to'plami", ru: "Набор стульев" },
//    description: { uz: "Stullar to'plami — tables kategoriyasidagi mahsulot.", ru: "Набор стульев — товар из категории «tables».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tables-09", category: "tables", imageCount: 3,
//    name: { uz: "Bar stoli", ru: "Барный стол" },
//    description: { uz: "Bar stoli — tables kategoriyasidagi mahsulot.", ru: "Барный стол — товар из категории «tables».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tables-10", category: "tables", imageCount: 3,
//    name: { uz: "Kurs stoli", ru: "Стол для курсов" },
//    description: { uz: "Kurs stoli — tables kategoriyasidagi mahsulot.", ru: "Стол для курсов — товар из категории «tables».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },

















//  {
//    id: "tv-01", category: "tv", imageCount: 3,
//    name: { uz: "TV zonasi oddiy", ru: "Простая ТВ-зона" },
//    description: { uz: "TV zonasi oddiy — tv kategoriyasidagi mahsulot.", ru: "Простая ТВ-зона — товар из категории «tv».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
//    dimensions: "120 × 60 × 80 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tv-02", category: "tv", imageCount: 3,
//    name: { uz: "TV zonasi premium", ru: "Премиум ТВ-зона" },
//    description: { uz: "TV zonasi premium — tv kategoriyasidagi mahsulot.", ru: "Премиум ТВ-зона — товар из категории «tv».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
//    dimensions: "130 × 65 × 82 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tv-03", category: "tv", imageCount: 3,
//    name: { uz: "TV zonasi kichik", ru: "Маленькая ТВ-зона" },
//    description: { uz: "TV zonasi kichik — tv kategoriyasidagi mahsulot.", ru: "Маленькая ТВ-зона — товар из категории «tv».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tv-04", category: "tv", imageCount: 3,
//    name: { uz: "TV zonasi burchakli", ru: "Угловая ТВ-зона" },
//    description: { uz: "TV zonasi burchakli — tv kategoriyasidagi mahsulot.", ru: "Угловая ТВ-зона — товар из категории «tv».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tv-05", category: "tv", imageCount: 3,
//    name: { uz: "Kino teatri zonasi", ru: "Домашний кинотеатр" },
//    description: { uz: "Kino teatri zonasi — tv kategoriyasidagi mahsulot.", ru: "Домашний кинотеатр — товар из категории «tv».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "tv-06", category: "tv", imageCount: 3,
//    name: { uz: "TV stoligi va shkaf", ru: "Тумба под ТВ и шкаф" },
//    description: { uz: "TV stoligi va shkaf — tv kategoriyasidagi mahsulot.", ru: "Тумба под ТВ и шкаф — товар из категории «tv».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tv-07", category: "tv", imageCount: 3,
//    name: { uz: "Tirsakli TV kronshteyn", ru: "Настенный кронштейн для ТВ" },
//    description: { uz: "Tirsakli TV kronshteyn — tv kategoriyasidagi mahsulot.", ru: "Настенный кронштейн для ТВ — товар из категории «tv».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tv-08", category: "tv", imageCount: 3,
//    name: { uz: "Yoritilgan TV devori", ru: "Подсвеченная ТВ-стена" },
//    description: { uz: "Yoritilgan TV devori — tv kategoriyasidagi mahsulot.", ru: "Подсвеченная ТВ-стена — товар из категории «tv».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tv-09", category: "tv", imageCount: 3,
//    name: { uz: "Minimal TV zonasi", ru: "Минималистичная ТВ-зона" },
//    description: { uz: "Minimal TV zonasi — tv kategoriyasidagi mahsulot.", ru: "Минималистичная ТВ-зона — товар из категории «tv».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "tv-10", category: "tv", imageCount: 3,
//    name: { uz: "Katta ekran uchun zona", ru: "ТВ-зона для большого экрана" },
//    description: { uz: "Katta ekran uchun zona — tv kategoriyasidagi mahsulot.", ru: "ТВ-зона для большого экрана — товар из категории «tv».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },






















//  {
//    id: "dressers-01", category: "dressers", imageCount: 2,
//    name: { uz: "Kichik komod", ru: "Маленький комод" },
//    description: { uz: "Kichik komod — dressers kategoriyasidagi mahsulot.", ru: "Маленький комод — товар из категории «dressers».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
//    dimensions: "120 × 60 × 80 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "dressers-02", category: "dressers", imageCount: 3,
//    name: { uz: "Keng komod", ru: "Широкий комод" },
//    description: { uz: "Keng komod — dressers kategoriyasidagi mahsulot.", ru: "Широкий комод — товар из категории «dressers».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
//    dimensions: "130 × 65 × 82 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "dressers-03", category: "dressers", imageCount: 3,
//    name: { uz: "Komod tuxdon bilan", ru: "Комод с тумбочкой" },
//    description: { uz: "Komod tuxdon bilan — dressers kategoriyasidagi mahsulot.", ru: "Комод с тумбочкой — товар из категории «dressers».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "dressers-04", category: "dressers", imageCount: 3,
//    name: { uz: "Zamonaviy komod", ru: "Современный комод" },
//    description: { uz: "Zamonaviy komod — dressers kategoriyasidagi mahsulot.", ru: "Современный комод — товар из категории «dressers».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "dressers-05", category: "dressers", imageCount: 3,
//    name: { uz: "Klassik komod", ru: "Классический комод" },
//    description: { uz: "Klassik komod — dressers kategoriyasidagi mahsulot.", ru: "Классический комод — товар из категории «dressers».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "dressers-06", category: "dressers", imageCount: 3,
//    name: { uz: "Shkafli komod", ru: "Комод с дверцами" },
//    description: { uz: "Shkafli komod — dressers kategoriyasidagi mahsulot.", ru: "Комод с дверцами — товар из категории «dressers».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "dressers-07", category: "dressers", imageCount: 3,
//    name: { uz: "Ochiq polkali komod", ru: "Комод с открытыми полками" },
//    description: { uz: "Ochiq polkali komod — dressers kategoriyasidagi mahsulot.", ru: "Комод с открытыми полками — товар из категории «dressers».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "dressers-08", category: "dressers", imageCount: 3,
//    name: { uz: "Bolalar uchun komod", ru: "Детский комод" },
//    description: { uz: "Bolalar uchun komod — dressers kategoriyasidagi mahsulot.", ru: "Детский комод — товар из категории «dressers».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "dressers-09", category: "dressers", imageCount: 3,
//    name: { uz: "Tegishli komod", ru: "Пристенный комод" },
//    description: { uz: "Tegishli komod — dressers kategoriyasidagi mahsulot.", ru: "Пристенный комод — товар из категории «dressers».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "dressers-10", category: "dressers", imageCount: 3,
//    name: { uz: "Komod premium", ru: "Комод премиум-класса" },
//    description: { uz: "Komod premium — dressers kategoriyasidagi mahsulot.", ru: "Комод премиум-класса — товар из категории «dressers».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },



























 {
   id: "office-01", category: "office", imageCount: 2,
   name: { uz: "Yozuv stoli", ru: "Письменный стол" },
   description: { uz: "Yozuv stoli — office kategoriyasidagi mahsulot.", ru: "Письменный стол — товар из категории «office».", },
   material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
   colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
   dimensions: "120 × 60 × 80 sm",
   features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
   price: 3500000, available: true, custom: false,
 },
  {
    id: "office-02", category: "office", imageCount: 2,
    name: { uz: "Ofis kreslosi", ru: "Офисное кресло" },
    description: { uz: "Ofis kreslosi — office kategoriyasidagi mahsulot.", ru: "Офисное кресло — товар из категории «office».", },
    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
    dimensions: "130 × 65 × 82 sm",
    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
    price: 3500000, available: true, custom: false,
  },
//  {
//    id: "office-03", category: "office", imageCount: 2,
//    name: { uz: "Kutubxona shkafi", ru: "Книжный шкаф" },
//    description: { uz: "Kutubxona shkafi — office kategoriyasidagi mahsulot.", ru: "Книжный шкаф — товар из категории «office».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "office-04", category: "office", imageCount: 3,
//    name: { uz: "Kandidat stol", ru: "Стол для кандидатов" },
//    description: { uz: "Kandidat stol — office kategoriyasidagi mahsulot.", ru: "Стол для кандидатов — товар из категории «office».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "office-05", category: "office", imageCount: 3,
//    name: { uz: "Ofis stoli keng", ru: "Широкий офисный стол" },
//    description: { uz: "Ofis stoli keng — office kategoriyasidagi mahsulot.", ru: "Широкий офисный стол — товар из категории «office».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "office-06", category: "office", imageCount: 3,
//    name: { uz: "Kichik ofis stoli", ru: "Маленький офисный стол" },
//    description: { uz: "Kichik ofis stoli — office kategoriyasidagi mahsulot.", ru: "Маленький офисный стол — товар из категории «office».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "office-07", category: "office", imageCount: 3,
//    name: { uz: "Yig'ilish stoli", ru: "Стол для переговоров" },
//    description: { uz: "Yig'ilish stoli — office kategoriyasidagi mahsulot.", ru: "Стол для переговоров — товар из категории «office».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "office-08", category: "office", imageCount: 3,
//    name: { uz: "Shkaf-polonka", ru: "Стеллаж-полка" },
//    description: { uz: "Shkaf-polonka — office kategoriyasidagi mahsulot.", ru: "Стеллаж-полка — товар из категории «office».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "office-09", category: "office", imageCount: 3,
//    name: { uz: "Kompyuter to'shagi", ru: "Компьютерная тумба" },
//    description: { uz: "Kompyuter to'shagi — office kategoriyasidagi mahsulot.", ru: "Компьютерная тумба — товар из категории «office».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "office-10", category: "office", imageCount: 3,
//    name: { uz: "Ofis kreslosi premium", ru: "Офисное кресло премиум" },
//    description: { uz: "Ofis kreslosi premium — office kategoriyasidagi mahsulot.", ru: "Офисное кресло премиум — товар из категории «office».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },































  {
    id: "kids-01", category: "kids", imageCount: 2,
    name: { uz: "Bolalar karavoti", ru: "Детская кровать" },
    description: { uz: "Bolalar karavoti — kids kategoriyasidagi mahsulot.", ru: "Детская кровать — товар из категории «kids».", },
    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
    dimensions: "120 × 60 × 80 sm",
    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
    price: 3500000, available: true, custom: false,
  },
//  {
//    id: "kids-02", category: "kids", imageCount: 3,
//    name: { uz: "Bolalar shkafi", ru: "Детский шкаф" },
//    description: { uz: "Bolalar shkafi — kids kategoriyasidagi mahsulot.", ru: "Детский шкаф — товар из категории «kids».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
//    dimensions: "130 × 65 × 82 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kids-03", category: "kids", imageCount: 3,
//    name: { uz: "Bolalar stoli", ru: "Детский стол" },
//    description: { uz: "Bolalar stoli — kids kategoriyasidagi mahsulot.", ru: "Детский стол — товар из категории «kids».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kids-04", category: "kids", imageCount: 3,
//    name: { uz: "Bolalar stuli", ru: "Детский стул" },
//    description: { uz: "Bolalar stuli — kids kategoriyasidagi mahsulot.", ru: "Детский стул — товар из категории «kids».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kids-05", category: "kids", imageCount: 3,
//    name: { uz: "Kitob javoni", ru: "Книжная полка" },
//    description: { uz: "Kitob javoni — kids kategoriyasidagi mahsulot.", ru: "Книжная полка — товар из категории «kids».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "kids-06", category: "kids", imageCount: 3,
//    name: { uz: "O'yin zonasi to'plami", ru: "Набор для игровой зоны" },
//    description: { uz: "O'yin zonasi to'plami — kids kategoriyasidagi mahsulot.", ru: "Набор для игровой зоны — товар из категории «kids».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kids-07", category: "kids", imageCount: 3,
//    name: { uz: "Bolalar komodi", ru: "Детский комод" },
//    description: { uz: "Bolalar komodi — kids kategoriyasidagi mahsulot.", ru: "Детский комод — товар из категории «kids».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kids-08", category: "kids", imageCount: 3,
//    name: { uz: "Bolalar kreslosi", ru: "Детское кресло" },
//    description: { uz: "Bolalar kreslosi — kids kategoriyasidagi mahsulot.", ru: "Детское кресло — товар из категории «kids».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kids-09", category: "kids", imageCount: 3,
//    name: { uz: "Yasash stoli", ru: "Стол для рисования" },
//    description: { uz: "Yasash stoli — kids kategoriyasidagi mahsulot.", ru: "Стол для рисования — товар из категории «kids».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "kids-10", category: "kids", imageCount: 3,
//    name: { uz: "Bolalar kiyim shkafi", ru: "Шкаф для детской одежды" },
//    description: { uz: "Bolalar kiyim shkafi — kids kategoriyasidagi mahsulot.", ru: "Шкаф для детской одежды — товар из категории «kids».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },























  {
    id: "hallway-01", category: "hallway", imageCount: 3,
    name: { uz: "Kichik shkaf", ru: "Компактный шкаф" },
    description: { uz: "Kichik shkaf — hallway kategoriyasidagi mahsulot.", ru: "Компактный шкаф — товар из категории «hallway».", },
    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
    dimensions: "120 × 60 × 80 sm",
    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
    price: 3500000, available: true, custom: false,
  },
//  {
//    id: "hallway-02", category: "hallway", imageCount: 3,
//    name: { uz: "Kiyim shkafi", ru: "Шкаф-прихожая" },
//    description: { uz: "Kiyim shkafi — hallway kategoriyasidagi mahsulot.", ru: "Шкаф-прихожая — товар из категории «hallway».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
//    dimensions: "130 × 65 × 82 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "hallway-03", category: "hallway", imageCount: 3,
//    name: { uz: "Ayaqqab tokasi", ru: "Обувная полка" },
//    description: { uz: "Ayaqqab tokasi — hallway kategoriyasidagi mahsulot.", ru: "Обувная полка — товар из категории «hallway».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "hallway-04", category: "hallway", imageCount: 3,
//    name: { uz: "Ko'zakkara tutqich", ru: "Вешалка для верхней одежды" },
//    description: { uz: "Ko'zakkara tutqich — hallway kategoriyasidagi mahsulot.", ru: "Вешалка для верхней одежды — товар из категории «hallway».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "hallway-05", category: "hallway", imageCount: 3,
//    name: { uz: "Yassiq tokasi", ru: "Полка для сумок" },
//    description: { uz: "Yassiq tokasi — hallway kategoriyasidagi mahsulot.", ru: "Полка для сумок — товар из категории «hallway».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "hallway-06", category: "hallway", imageCount: 3,
//    name: { uz: "Pallon uchun stul", ru: "Стул для зонта" },
//    description: { uz: "Pallon uchun stul — hallway kategoriyasidagi mahsulot.", ru: "Стул для зонта — товар из категории «hallway».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "hallway-07", category: "hallway", imageCount: 3,
//    name: { uz: "Ko'zgu bilan koridor shkafi", ru: "Зеркальный шкаф в прихожую" },
//    description: { uz: "Ko'zgu bilan koridor shkafi — hallway kategoriyasidagi mahsulot.", ru: "Зеркальный шкаф в прихожую — товар из категории «hallway».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "hallway-08", category: "hallway", imageCount: 3,
//    name: { uz: "Yorqin koridor to'plami", ru: "Яркий комплект для прихожей" },
//    description: { uz: "Yorqin koridor to'plami — hallway kategoriyasidagi mahsulot.", ru: "Яркий комплект для прихожей — товар из категории «hallway».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "hallway-09", category: "hallway", imageCount: 3,
//    name: { uz: "Tor koridor shkafi", ru: "Узкий шкаф для коридора" },
//    description: { uz: "Tor koridor shkafi — hallway kategoriyasidagi mahsulot.", ru: "Узкий шкаф для коридора — товар из категории «hallway».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "hallway-10", category: "hallway", imageCount: 3,
//    name: { uz: "Ayashtiruvchi skameyka", ru: "Скамья с сиденьем" },
//    description: { uz: "Ayashtiruvchi skameyka — hallway kategoriyasidagi mahsulot.", ru: "Скамья с сиденьем — товар из категории «hallway».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },























 {
   id: "custom-01", category: "custom", imageCount: 2,
   name: { uz: "Buyurtma asosida komod", ru: "Комод на заказ" },
   description: { uz: "Buyurtma asosida komod — custom kategoriyasidagi mahsulot.", ru: "Комод на заказ — товар из категории «custom».", },
   material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
   colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
   dimensions: "120 × 60 × 80 sm",
   features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
   price: 3500000, available: true, custom: true,
 },
//  {
//    id: "custom-02", category: "custom", imageCount: 3,
//    name: { uz: "Buyurtma asosida shkaf", ru: "Шкаф на заказ" },
//    description: { uz: "Buyurtma asosida shkaf — custom kategoriyasidagi mahsulot.", ru: "Шкаф на заказ — товар из категории «custom».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
//    dimensions: "130 × 65 × 82 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: true,
//  },
//  {
//    id: "custom-03", category: "custom", imageCount: 3,
//    name: { uz: "Nolмерli divan", ru: "Диван нестандартного размера" },
//    description: { uz: "Nolмерli divan — custom kategoriyasidagi mahsulot.", ru: "Диван нестандартного размера — товар из категории «custom».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: true,
//  },
//  {
//    id: "custom-04", category: "custom", imageCount: 3,
//    name: { uz: "Nolмерli yotoq to'plami", ru: "Спальный гарниборт на заказ" },
//    description: { uz: "Nolмерli yotoq to'plami — custom kategoriyasidagi mahsulot.", ru: "Спальный гарниборт на заказ — товар из категории «custom».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: true,
//  },
//  {
//    id: "custom-05", category: "custom", imageCount: 3,
//    name: { uz: "Maxsus oshxona", ru: "Кухня по индивидуальным размерам" },
//    description: { uz: "Maxsus oshxona — custom kategoriyasidagi mahsulot.", ru: "Кухня по индивидуальным размерам — товар из категории «custom».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: true,
//  },
//  {
//    id: "custom-06", category: "custom", imageCount: 3,
//    name: { uz: "Peschana rangli divan", ru: "Диван нестандартного цвета" },
//    description: { uz: "Peschana rangli divan — custom kategoriyasidagi mahsulot.", ru: "Диван нестандартного цвета — товар из категории «custom».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: true,
//  },
//  {
//    id: "custom-07", category: "custom", imageCount: 3,
//    name: { uz: "Ko'rinishli kabinet", ru: "Витринный шкаф на заказ" },
//    description: { uz: "Ko'rinishli kabinet — custom kategoriyasidagi mahsulot.", ru: "Витринный шкаф на заказ — товар из категории «custom».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: true,
//  },
//  {
//    id: "custom-08", category: "custom", imageCount: 3,
//    name: { uz: "Aylanuvchi to'raksimon stul", ru: "Поворотный эркерный стул" },
//    description: { uz: "Aylanuvchi to'raksimon stul — custom kategoriyasidagi mahsulot.", ru: "Поворотный эркерный стул — товар из категории «custom».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: true,
//  },
//  {
//    id: "custom-09", category: "custom", imageCount: 3,
//    name: { uz: "Ko'p funksiyali to'raksimon shkaf", ru: "Угловой шкаф с полками на заказ" },
//    description: { uz: "Ko'p funksiyali to'raksimon shkaf — custom kategoriyasidagi mahsulot.", ru: "Угловой шкаф с полками на заказ — товар из категории «custom».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: true,
//  },
//  {
//    id: "custom-10", category: "custom", imageCount: 3,
//    name: { uz: "Masshtabli konsepsiya", ru: "Проект по индивидуальным меркам" },
//    description: { uz: "Masshtabli konsepsiya — custom kategoriyasidagi mahsulot.", ru: "Проект по индивидуальным меркам — товар из категории «custom».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: true,
//  },

























//  {
//    id: "other-01", category: "other", imageCount: 3,
//    name: { uz: "Qurilish taxta va parta", ru: "Стол и полка" },
//    description: { uz: "Qurilish taxta va parta — other kategoriyasidagi mahsulot.", ru: "Стол и полка — товар из категории «other».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "oq", ru: "белый" }, { uz: "jigarrang", ru: "коричневый" }],
//    dimensions: "120 × 60 × 80 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "other-02", category: "other", imageCount: 3,
//    name: { uz: "Eshtak va tokalar to'plami", ru: "Набор полок и вешалок" },
//    description: { uz: "Eshtak va tokalar to'plami — other kategoriyasidagi mahsulot.", ru: "Набор полок и вешалок — товар из категории «other».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "quyu jashil", ru: "тёмно-зелёный" }, { uz: "qora", ru: "чёрный" }],
//    dimensions: "130 × 65 × 82 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "other-03", category: "other", imageCount: 3,
//    name: { uz: "Kichik stol-shkaf", ru: "Тумбочка-столик" },
//    description: { uz: "Kichik stol-shkaf — other kategoriyasidagi mahsulot.", ru: "Тумбочка-столик — товар из категории «other».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "kul rang", ru: "серый" }, { uz: "bej", ru: "бежевый" }],
//    dimensions: "140 × 70 × 84 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "other-04", category: "other", imageCount: 3,
//    name: { uz: "Mashina uchun tokalar", ru: "Полка для стиральной машины" },
//    description: { uz: "Mashina uchun tokalar — other kategoriyasidagi mahsulot.", ru: "Полка для стиральной машины — товар из категории «other».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "jigarrang", ru: "коричневый" }, { uz: "ko'k", ru: "синий" }],
//    dimensions: "150 × 75 × 86 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "other-05", category: "other", imageCount: 3,
//    name: { uz: "Ko'rinishli vitrina", ru: "Витрина для посуды" },
//    description: { uz: "Ko'rinishli vitrina — other kategoriyasidagi mahsulot.", ru: "Витрина для посуды — товар из категории «other».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "qora", ru: "чёрный" }, { uz: "to'q qizil", ru: "бордовый" }],
//    dimensions: "160 × 80 × 88 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: false, custom: false,
//  },
//  {
//    id: "other-06", category: "other", imageCount: 3,
//    name: { uz: "Yashiriladigan katexona quti", ru: "Скрытая корзина для белья" },
//    description: { uz: "Yashiriladigan katexona quti — other kategoriyasidagi mahsulot.", ru: "Скрытая корзина для белья — товар из категории «other».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "bej", ru: "бежевый" }, { uz: "yashil", ru: "зелёный" }],
//    dimensions: "170 × 85 × 90 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "other-07", category: "other", imageCount: 3,
//    name: { uz: "O'yin stoli", ru: "Стол для игр" },
//    description: { uz: "O'yin stoli — other kategoriyasidagi mahsulot.", ru: "Стол для игр — товар из категории «other».", },
//    material: { uz: "Nam namoy", ru: "Влагостойкий материал" },
//    colors: [{ uz: "ko'k", ru: "синий" }, { uz: "oq-gullar", ru: "белый с цветочным принтом" }],
//    dimensions: "180 × 90 × 92 sm",
//    features: [{ uz: "Bolalar uchun xavfsiz", ru: "Безопасно для детей" }, { uz: "Yumshoq burchaklar", ru: "Мягкие углы" }, { uz: "O'rnatish oson", ru: "Простая сборка" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "other-08", category: "other", imageCount: 3,
//    name: { uz: "Kitob javoni baland", ru: "Высокая книжная полка" },
//    description: { uz: "Kitob javoni baland — other kategoriyasidagi mahsulot.", ru: "Высокая книжная полка — товар из категории «other».", },
//    material: { uz: "Drevlas", ru: "Фанера" },
//    colors: [{ uz: "to'q qizil", ru: "бордовый" }, { uz: "oq", ru: "белый" }],
//    dimensions: "190 × 95 × 94 sm",
//    features: [{ uz: "Yillarga xizmat qiladi", ru: "Прослужит много лет" }, { uz: "Zamonaviy uslub", ru: "Современный стиль" }, { uz: "Keng ko'lamli saqlash", ru: "Вместительное хранение" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "other-09", category: "other", imageCount: 3,
//    name: { uz: "Mehmonxona stolchasi", ru: "Столик для гостиной" },
//    description: { uz: "Mehmonxona stolchasi — other kategoriyasidagi mahsulot.", ru: "Столик для гостиной — товар из категории «other».", },
//    material: { uz: "MDF va sun'iy qatlam", ru: "МДФ и искусственная облицовка" },
//    colors: [{ uz: "yashil", ru: "зелёный" }, { uz: "quyu jashil", ru: "тёмно-зелёный" }],
//    dimensions: "200 × 100 × 96 sm",
//    features: [{ uz: "Sifatli va chidamli", ru: "Качественная и долговечная" }, { uz: "O'rnatish oson", ru: "Простая сборка" }, { uz: "Katta yuk ko'taradi", ru: "Выдерживает большую нагрузку" }],
//    price: 3500000, available: true, custom: false,
//  },
//  {
//    id: "other-10", category: "other", imageCount: 3,
//    name: { uz: "Boshqa to'plam", ru: "Дополнительный набор" },
//    description: { uz: "Boshqa to'plam — other kategoriyasidagi mahsulot.", ru: "Дополнительный набор — товар из категории «other».", },
//    material: { uz: "Massiv o'rtilgan yog'och", ru: "Массив ценных пород дерева" },
//    colors: [{ uz: "oq-gullar", ru: "белый с цветочным принтом" }, { uz: "kul rang", ru: "серый" }],
//    dimensions: "210 × 105 × 98 sm",
//    features: [{ uz: "Zamonaviy dizayn", ru: "Современный дизайн" }, { uz: "Oshqozon uchun mos", ru: "Подходит для кухни" }, { uz: "Namlikka chidamli", ru: "Устойчивость к влаге" }],
//    price: 3500000, available: false, custom: false,
//  },
 ] ;
