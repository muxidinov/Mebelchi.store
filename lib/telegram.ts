import type { RequestInput } from "./schemas";
const ESC: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;" };
const esc = (s = "") => s.replace(/[&<>]/g, (c) => ESC[c] ?? c);
const TITLES = { order: "🛋 Yangi buyurtma", inquiry: "❓ Mahsulot so'rovi", specialist: "👤 Mutaxassis maslahati", kitchen_measure: "📐 Yangi oshxona o'lchov so'rovi" } as const;

export function buildMessage(d: RequestInput, orderId: string): string {
  const L: string[] = [`<b>${TITLES[d.type]}</b>`, ""];
  const add = (k: string, v?: string) => { if (v) L.push(`<b>${k}:</b> ${esc(v)}`); };
  add("Mahsulot", d.productName); add("Kategoriya", d.category);
  add("Mijoz", `${d.firstName} ${d.lastName}`); add("Telefon", d.phone);
  add("Telegram", d.telegramUsername); add("Shahar", d.city); add("Manzil", d.address); add("Mo'ljal", d.landmark);
  if (d.lat != null && d.lng != null) L.push(`<b>Geolokatsiya:</b> https://www.google.com/maps?q=${d.lat},${d.lng}`);
  add("Xona", d.room); add("Budjet", d.budget); add("Oshxona o'lchami", d.kitchenSize);
  add("Sana", d.preferredDate); add("Qulay vaqt", d.preferredTime); add("Izoh", d.message);
  L.push(`<b>Til:</b> ${d.lang.toUpperCase()}`, `<b>Vaqt:</b> ${new Date().toISOString()}`, `<b>Order ID:</b> <code>${orderId}</code>`);
  return L.join("\n");
}

export async function sendToTelegram(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) throw new Error("telegram_not_configured");
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const body = JSON.stringify({ chat_id: chat, text, parse_mode: "HTML", disable_web_page_preview: true });
  // 3 urinish: tarmoq uzilishi va Telegram 5xx/429 xatolarida ariza yo'qolmasin.
  // 4xx (token/chat xato) — qayta urinish foydasiz, darhol to'xtaydi.
  let lastErr = "telegram_unknown";
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body, signal: AbortSignal.timeout(8000) });
      if (r.ok) return;
      lastErr = `telegram_http_${r.status}`;
      if (r.status >= 400 && r.status < 500 && r.status !== 429) throw new Error(lastErr);
    } catch (e) {
      const msg = (e as Error).message;
      // 4xx (429 dan tashqari) — qayta urinmasdan chiqamiz.
      if (/^telegram_http_4(?!29)/.test(msg)) throw e;
      lastErr = msg;
    }
    if (attempt < 3) await new Promise((res) => setTimeout(res, 400 * attempt));
  }
  throw new Error(lastErr);
}
