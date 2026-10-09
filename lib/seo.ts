import { siteConfig } from "./site-config";
import { getCategory, imageUrls, type Product } from "./catalog";
const set = (v?: string) => !!v && !v.startsWith("[");
// Manzil bitta joydan olinadi. Production'da SITE_URL majburiy: noto'g'ri (localhost) manzil
// sitemap/canonical/JSON-LD orqali qidiruv tizimlariga tarqalib ketmasligi uchun.
export const siteUrl = () => {
  const raw = (process.env.SITE_URL ?? "").trim().replace(/\/$/, "");
  if (raw) return raw;
  if (process.env.NODE_ENV === "production") {
    console.error("[seo] SITE_URL o'rnatilmagan! canonical/sitemap manzillari noto'g'ri bo'ladi.");
    return "https://example.invalid";
  }
  return "http://localhost:3000";
};
const handle = (v: string) => v.replace(/^@/, "");
// Faqat siteConfig'da haqiqatan kiritilgan maydonlar chiqadi — hech narsa uydirilmaydi.
export function localBusinessLd() {
  const sameAs = [
    set(siteConfig.instagram) && `https://instagram.com/${handle(siteConfig.instagram)}`,
    set(siteConfig.telegram) && `https://t.me/${handle(siteConfig.telegram)}`,
    set(siteConfig.telegramGroup) && siteConfig.telegramGroup.replace(/^https?:\/\//, ""),
  ].filter(Boolean) as string[];
  const firstAddress = siteConfig.addresses?.[0]?.address;
  return { "@context": "https://schema.org", "@type": "FurnitureStore", url: siteUrl(), ...(set(siteConfig.name) && { name: siteConfig.name }),
    ...(set(siteConfig.phone) && { telephone: siteConfig.phone }), ...(set(siteConfig.email) && { email: siteConfig.email }),
    ...(set(firstAddress) && { address: { "@type": "PostalAddress", streetAddress: firstAddress } }),
    ...(set(siteConfig.workingHours) && { openingHours: siteConfig.workingHours }), ...(sameAs.length > 0 && { sameAs }) };
}
export function productLd(p: Product) {
  return { "@context": "https://schema.org", "@type": "Product", name: p.name.uz, description: p.description.uz, category: getCategory(p.category)?.uz,
    material: p.material.uz, url: `${siteUrl()}/katalog/${p.id}`, image: [imageUrls(p).cover, ...imageUrls(p).gallery].map((x) => siteUrl() + x),
    ...(p.price != null && { offers: { "@type": "Offer", price: p.price, priceCurrency: "UZS", availability: p.available ? "https://schema.org/InStock" : "https://schema.org/PreOrder", url: `${siteUrl()}/katalog/${p.id}` } }) };
}
