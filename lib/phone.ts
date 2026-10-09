// Faqat O'zbekiston raqamlari: +998 XX XXX XX XX
export function normalizeUzPhone(input: string): string | null {
  const digits = (input ?? "").replace(/[^\d]/g, "");
  let national: string;
  if (digits.length === 12 && digits.startsWith("998")) national = digits.slice(3);
  else if (digits.length === 9) national = digits;
  else return null;
  if (!/^[3-9]\d{8}$/.test(national)) return null;
  return "+998" + national;
}
export function isValidUzPhone(input: string): boolean {
  return normalizeUzPhone(input) !== null;
}
export function formatUzPhone(input: string): string {
  const d = (input ?? "").replace(/\D/g, "").replace(/^998/, "").slice(0, 9);
  const p = [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean);
  return p.length ? "+998 " + p.join(" ") : "";
}
