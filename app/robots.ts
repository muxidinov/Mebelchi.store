import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  const base = process.env.SITE_URL ? siteUrl() : undefined;
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/admin"] }, sitemap: base ? `${base}/sitemap.xml` : undefined };
}
