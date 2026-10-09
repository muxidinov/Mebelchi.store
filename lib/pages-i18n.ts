import type { Lang } from "./i18n";
export type Kind = "faq" | "contact" | "about" | "portfolio" | "reviews" | "privacy" | "terms" | "kitchen" | "specialist";
type P = { title: string; lead: string; body?: string[] };
export const pages: Record<Lang, Record<Kind, P>> = {
  uz: {
    faq: { title: "Ko'p so'raladigan savollar", lead: "Javob topolmasangiz, mutaxassisga yozing." },
    contact: { title: "Kontaktlar", lead: "Biz bilan qulay usulda bog'laning." },
    about: { title: "Biz haqimizda", lead: "Mebel — bu makon bilan munosabat.", body: [
      "Biz mebelni shunchaki buyum emas, xonaning xarakteri deb bilamiz. Har bir loyiha o'lchamdan boshlanadi va sizning hayot tarzingizga moslanadi.",
      "Materialni tanlashda ko'rinish bilan birga chidamlilik va qulaylikni hisobga olamiz. Detallarga e'tibor — sifat belgisi.",
      "Individual yondashuv: mutaxassis sizning savollaringizga javob beradi, takliflar beradi va jarayon davomida aloqada bo'ladi.",
      "Mebel tanlash va buyurtma berishda sizga yanada qulay bo‘lishi uchun usta chaqirish xizmatini ham taklif qilamiz",
      "Sifat. Dizayn. Ishonch.Sizning qulayligingiz — bizning asosiy maqsadimiz."
    ] },
    portfolio: { title: "Loyihalar", lead: "Bajarilgan ishlar." },
    reviews: { title: "Sharhlar", lead: "Mijozlarimiz fikrlari." },
    privacy: { title: "Maxfiylik siyosati", lead: "Ma'lumotlaringiz qanday ishlatiladi.", body: [
      "Formani yuborganingizda ism, familiya, telefon raqam, shahar, manzil, izoh va (ixtiyoriy) joylashuv ma'lumotlari qabul qilinadi.",
      "Ma'lumotlar faqat arizangizni ko'rib chiqish va siz bilan bog'lanish uchun ishlatiladi va Telegram orqali administratorga yuboriladi.",
      "Joylashuv faqat «Joylashuvimni aniqlash» tugmasini bosib, brauzer ruxsatini berganingizdan so'ng olinadi. Rad etsangiz, ariza baribir yuboriladi.",
      "Ma'lumotlarni o'chirish yoki o'zgartirish uchun kontaktlar orqali murojaat qiling.",
      ""] },
    terms: { title: "Foydalanish shartlari", lead: "Saytdan foydalanish qoidalari.", body: [
      "Saytdagi mahsulot ma'lumotlari tanishuv uchun; yakuniy shartlar, narx va muddat buyurtma tasdiqlanganda kelishiladi.",
      "Forma orqali yuborilgan ariza shartnoma emas — u mutaxassis bilan bog'lanish uchun so'rovdir.",
      "Iltimos, to'g'ri ma'lumot kiriting. Spam va suiiste'mol cheklanishi mumkin.",
      ""] },
    kitchen: { title: "Oshxona mebellari", lead: "Oshxonangiz uchun loyiha: ustamiz kelib o'lchov oladi. Quyida «Oshxona o'lchovi» ni tanlang." },
    specialist: { title: "Mutaxassis bilan maslahat", lead: "Qaysi mebelni tanlashni bilmayapsizmi? Savolingizni yozing." },
  },
  ru: {
    faq: { title: "Частые вопросы", lead: "Не нашли ответ — напишите специалисту." },
    contact: { title: "Контакты", lead: "Свяжитесь с нами удобным способом." },
    about: { title: "О нас", lead: "Мебель — это отношения с пространством.", body: [
      "Мы видим в мебели не просто предмет, а характер комнаты. Каждый проект начинается с замера и подстраивается под ваш образ жизни.",
      "При выборе материалов учитываем не только вид, но и долговечность и удобство. Внимание к деталям — признак качества.",
      "Индивидуальный подход: специалист отвечает на вопросы, предлагает решения и остаётся на связи на всех этапах.",
      "[ЗАМЕНИТЕ ЭТОТ ТЕКСТ ИСТОРИЕЙ ВАШЕГО БРЕНДА — lib/pages-i18n.ts]"] },
    portfolio: { title: "Проекты", lead: "Выполненные работы." },
    reviews: { title: "Отзывы", lead: "Мнения наших клиентов." },
    privacy: { title: "Политика конфиденциальности", lead: "Как используются ваши данные.", body: [
      "При отправке формы принимаются имя, фамилия, телефон, город, адрес, комментарий и (по желанию) геолокация.",
      "Данные используются только для обработки заявки и связи с вами и передаются администратору через Telegram.",
      "Геолокация запрашивается только после нажатия «Определить моё местоположение» и разрешения браузера. При отказе заявка всё равно отправляется.",
      "Чтобы удалить или изменить данные, свяжитесь с нами через контакты.",
      "[ПРОВЕРЬТЕ У ЮРИСТА И ДОБАВЬТЕ РЕКВИЗИТЫ КОМПАНИИ]"] },
    terms: { title: "Условия использования", lead: "Правила пользования сайтом.", body: [
      "Информация о товарах на сайте носит ознакомительный характер; итоговые условия, цена и сроки согласуются при подтверждении заказа.",
      "Заявка через форму не является договором — это запрос на связь со специалистом.",
      "Пожалуйста, указывайте достоверные данные. Спам и злоупотребления могут быть ограничены.",
      "[ПРОВЕРЬТЕ У ЮРИСТА И ДОБАВЬТЕ РЕКВИЗИТЫ КОМПАНИИ]"] },
    kitchen: { title: "Кухонная мебель", lead: "Проект для вашей кухни: мастер приедет и сделает замер. Выберите ниже «Замер кухни»." },
    specialist: { title: "Консультация специалиста", lead: "Не знаете, какую мебель выбрать? Напишите свой вопрос." },
  },
};
export const nav = [
  { href: "/katalog", uz: "Katalog", ru: "Каталог" }, { href: "/oshxona", uz: "Oshxona", ru: "Кухня" },
  { href: "/portfolio", uz: "Loyihalar", ru: "Проекты" }, { href: "/biz-haqimizda", uz: "Biz haqimizda", ru: "О нас" },
  { href: "/maslahat", uz: "Maslahat", ru: "Консультация" }, { href: "/kontakt", uz: "Kontakt", ru: "Контакты" },
];
export const empty = { uz: { reviews: "Hozircha tasdiqlangan sharhlar yo'q.", portfolio: "Loyihalar tez orada qo'shiladi.", demo: "Demo" }, ru: { reviews: "Пока нет подтверждённых отзывов.", portfolio: "Проекты скоро появятся.", demo: "Демо" } };
