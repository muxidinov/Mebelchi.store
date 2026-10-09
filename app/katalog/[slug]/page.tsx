import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import JsonLd from "@/components/JsonLd";
import WithShell from "@/components/WithShell";
import { allProducts, getProduct } from "@/lib/catalog";
import { productLd } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() { return allProducts().map((p) => ({ slug: p.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? { title: `${p.name.uz} / ${p.name.ru}`, description: p.description.uz, alternates: { canonical: `/katalog/${p.id}` } } : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  return (<><JsonLd data={productLd(p)} /><WithShell><ProductDetail p={p} /></WithShell></>);
}
