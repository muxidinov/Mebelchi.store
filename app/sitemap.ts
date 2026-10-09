import type { MetadataRoute } from "next";
import { allProducts } from "@/lib/catalog";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = siteUrl();
  return [b, ...["katalog", "oshxona", "portfolio", "biz-haqimizda", "maslahat", "kontakt", "sharhlar", "faq", "privacy", "terms"].map((x) => `${b}/${x}`)].map((url) => ({ url })).concat( allProducts().map((p) => ({ url: `${b}/katalog/${p.id}` })));
}
