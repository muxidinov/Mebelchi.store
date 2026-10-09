export type Lang = "uz" | "ru";
export const dict = {
  uz: { eyebrow: "Mebel · Buyurtma asosida", title: "Makoningiz uchun mebel", lead: "Mahsulotni tanlang yoki loyihangizni bizga ayting — mutaxassis siz bilan bog'lanadi.",
    formTitle: "Buyurtma yoki maslahat", type_order: "Buyurtma", type_specialist: "Mutaxassis maslahati", type_kitchen_measure: "Oshxona o'lchovi (usta chaqirish)",
    firstName: "Ism", lastName: "Familiya", phone: "Telefon", city: "Shahar", address: "Manzil", message: "Izoh", submit: "Yuborish", sending: "Yuborilmoqda…",
    locate: "Joylashuvimni aniqlash", locHint: "Ustamiz siz ko'rsatgan manzilga borishi uchun joylashuvingizdan foydalanamiz. Ixtiyoriy.", locOk: "Joylashuv saqlandi", locDenied: "Ruxsat berilmadi — manzilni qo'lda kiriting.",
    okTitle: "Arizangiz qabul qilindi", okId: "Buyurtma raqami", again: "Yana yuborish",
    e_name_short: "Kamida 2 ta harf", e_name_long: "Juda uzun", e_name_invalid: "To'g'ri ism kiriting", e_phone_invalid: "Format: +998 90 123 45 67",
    e_rate_limited: "Juda ko'p urinish. Birozdan so'ng qayta urining.", e_net: "Internet bilan muammo. Qayta urinib ko'ring.", e_delivery_failed: "Arizangizni yuborishda vaqtinchalik muammo yuz berdi. Iltimos, qaytadan urinib ko'ring.", e_generic: "Xatolik yuz berdi. Qayta urinib ko'ring." },
  ru: { eyebrow: "Мебель · На заказ", title: "Мебель для вашего пространства", lead: "Выберите товар или расскажите о проекте — специалист свяжется с вами.",
    formTitle: "Заказ или консультация", type_order: "Заказ", type_specialist: "Консультация специалиста", type_kitchen_measure: "Замер кухни (вызов мастера)",
    firstName: "Имя", lastName: "Фамилия", phone: "Телефон", city: "Город", address: "Адрес", message: "Комментарий", submit: "Отправить", sending: "Отправка…",
    locate: "Определить моё местоположение", locHint: "Мы используем геолокацию, чтобы мастер приехал по указанному адресу. Необязательно.", locOk: "Местоположение сохранено", locDenied: "Доступ запрещён — введите адрес вручную.",
    okTitle: "Ваша заявка принята", okId: "Номер заявки", again: "Отправить ещё",
    e_name_short: "Минимум 2 буквы", e_name_long: "Слишком длинно", e_name_invalid: "Введите корректное имя", e_phone_invalid: "Формат: +998 90 123 45 67",
    e_rate_limited: "Слишком много попыток. Повторите позже.", e_net: "Проблема с интернетом. Повторите попытку.", e_delivery_failed: "Временная проблема при отправке заявки. Пожалуйста, попробуйте ещё раз.", e_generic: "Произошла ошибка. Повторите попытку." },
} as const;
export type Dict = (typeof dict)["uz"];
