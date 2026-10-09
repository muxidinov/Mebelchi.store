"use client";
import Link from "next/link";
import ProductImage from "./ProductImage";
import { formatPrice, getCategory, imageUrls, ui, type Product } from "@/lib/catalog";
import type { Lang } from "@/lib/i18n";
export default function ProductCard({ p, lang }: { p: Product; lang: Lang }) {
  const t = ui[lang]; const img = imageUrls(p);
  return (
    <article className="group">
      <Link href={`/katalog/${p.id}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4">
        <ProductImage src={img.cover} alt={p.name[lang]} label={t.noImage} />
      </Link>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] opacity-60">{getCategory(p.category)?.[lang]} · {p.material[lang]}</p>
      <h3 className="mt-1 text-xl">{p.name[lang]}</h3>
      <p className="mt-1 line-clamp-2 text-sm opacity-75">{p.description[lang]}</p>
      <p className="mt-3 flex flex-wrap items-baseline gap-x-2 text-lg font-semibold">
        {p.price != null ? (<>
          <span>{formatPrice(p.price, lang)}</span>
          {!p.available && <span className="text-xs font-normal opacity-60">{t.unavailable}</span>}
        </>) : <span className="text-sm font-normal opacity-70">{t.negotiable}</span>}
      </p>
      <div className="mt-3 flex gap-2 text-sm">
        <Link href={`/katalog/${p.id}`} className="min-h-11 rounded-full border px-4 py-2.5">{t.details}</Link>
        <Link href={`/?product=${encodeURIComponent(p.id)}#form`} className="min-h-11 rounded-full bg-[var(--ink)] px-4 py-2.5 text-[var(--paper)]">{t.ask}</Link>
      </div>
    </article>);
}
