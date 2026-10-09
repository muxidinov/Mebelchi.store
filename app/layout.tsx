import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { localBusinessLd, siteUrl } from "@/lib/seo";

const description = "Buyurtma, maslahat va oshxona o'lchovi / Заказ, консультация и замер кухни";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: `${siteConfig.name} — mebel / мебель`, template: `%s | ${siteConfig.name}` },
  description, alternates: { canonical: "/" }, robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: siteConfig.name, title: `${siteConfig.name} — mebel / мебель`, description, locale: "uz_UZ", alternateLocale: ["ru_RU"] },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} — mebel / мебель`, description },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="uz"><body className="min-h-dvh antialiased"><JsonLd data={localBusinessLd()} />{children}</body></html>);
}
