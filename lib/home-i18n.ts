import type { Lang } from "./i18n";
export const home = {
  uz: { eyebrow: "Mebel · Buyurtma asosida", words: ["Makonga", "shakl", "beradigan", "mebel."], lead: "Mahsulotni tanlang yoki loyihangizni ayting — mutaxassis siz bilan bog'lanadi.",
    cta1: "Katalogni ko'rish", cta2: "Oshxona uchun loyiha", scroll: "Pastga", catTitle: "Kategoriyalar",
    kTitle: "Oshxonangiz uchun loyiha", kText: "Ustamiz kelib o'lchov oladi. Qulay sana va manzilni ko'rsating — qolganini biz kelishamiz.", kCta: "Ustani chaqirish",
    pTitle: "Yondashuvimiz", principles: [
      { t: "Material", d: "Ko'rinish bilan birga chidamlilik va qulaylikni hisobga olib tanlanadi." },
      { t: "Hunarmandchilik", d: "Detallarga e'tibor — chokdan tutqichgacha." },
      { t: "Individual yondashuv", d: "O'lchovdan tayyor mebelgacha mutaxassis siz bilan aloqada." }],
    formTitle: "Buyurtma yoki maslahat", order: "Buyurtma berish", consult: "Maslahat" },
  ru: { eyebrow: "Мебель · На заказ", words: ["Мебель,", "которая", "формирует", "пространство."], lead: "Выберите товар или расскажите о проекте — специалист свяжется с вами.",
    cta1: "Смотреть каталог", cta2: "Проект для кухни", scroll: "Вниз", catTitle: "Категории",
    kTitle: "Проект для вашей кухни", kText: "Мастер приедет и сделает замер. Укажите удобную дату и адрес — остальное согласуем.", kCta: "Вызвать мастера",
    pTitle: "Наш подход", principles: [
      { t: "Материал", d: "Выбирается с учётом не только вида, но и долговечности и удобства." },
      { t: "Мастерство", d: "Внимание к деталям — от шва до ручки." },
      { t: "Индивидуальный подход", d: "От замера до готовой мебели специалист на связи." }],
    formTitle: "Заказ или консультация", order: "Заказать", consult: "Консультация" },
} satisfies Record<Lang, unknown>;
