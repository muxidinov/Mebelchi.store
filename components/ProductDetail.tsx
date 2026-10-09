"use client";
import { useState } from "react";
import Link from "next/link";
import ProductImage from "./ProductImage";
import { useLang } from "./useLang";
import { formatPrice, getCategory, imageUrls, ui, type Product } from "@/lib/catalog";
export default function ProductDetail({ p }: { p: Product }) {
  const lang = useLang(); const t = ui[lang]; const img = imageUrls(p);
  const shots = [img.cover, ...img.gallery]; const [i, setI] = useState(0);
  const href = `/?product=${encodeURIComponent(p.id)}#form`;
  return (
    <main className="mx-auto grid max-w-7xl gap-10 px-5 pb-28 pt-6 md:grid-cols-2 md:px-10">
      <Link href="/katalog" className="col-span-full text-sm underline">{t.back}</Link>
      <div className="group">
        <ProductImage key={shots[i]} src={shots[i]} alt={p.name[lang]} label={t.noImage} priority />
        {shots.length > 1 && <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">{shots.map((s, k) => (
          <li key={s} className="w-20 shrink-0"><button onClick={() => setI(k)} aria-label={`${k + 1}/${shots.length}`} aria-current={k === i}
            className={`block w-full overflow-hidden rounded-lg border-2 ${k === i ? "border-[var(--clay)]" : "border-transparent"}`}>
            <ProductImage src={s} alt="" label="·" /></button></li>))}</ul>}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] opacity-60">{getCategory(p.category)?.[lang]}</p>
        <h1 className="mt-2 text-[clamp(2rem,5vw,3.5rem)] leading-tight">{p.name[lang]}</h1>
        <p className="mt-4 opacity-80">{p.description[lang]}</p>
        <p className="mt-5 text-[clamp(1.5rem,3vw,2rem)] font-semibold">
          {p.price != null ? formatPrice(p.price, lang) : t.negotiable}
        </p>
        <dl className="mt-6 grid gap-3 text-sm">
          <div><dt className="opacity-60">{t.material}</dt><dd>{p.material[lang]}</dd></div>
          {p.colors.length > 0 && <div><dt className="opacity-60">{t.colors}</dt><dd>{p.colors.map((c) => c[lang]).join(", ")}</dd></div>}
          {p.dimensions && <div><dt className="opacity-60">{t.dims}</dt><dd>{p.dimensions}</dd></div>}
          {p.features.length > 0 && <div><dt className="opacity-60">{t.features}</dt><dd><ul className="list-disc pl-5">{p.features.map((f, k) => <li key={k}>{f[lang]}</li>)}</ul></dd></div>}
        </dl>
        {!p.available && <p className="mt-4 text-sm">{t.unavailable}</p>}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={href} className="min-h-12 rounded-full bg-[var(--clay)] px-6 py-3 text-center text-white">{p.custom ? t.customAsk : t.order}</Link>
          <Link href={href} className="min-h-12 rounded-full border px-6 py-3 text-center">{t.consult}</Link>
          <Link href={href} className="min-h-12 rounded-full border px-6 py-3 text-center">{t.ask}</Link>
        </div>
      </div>
    </main>);
}
