"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useLang } from "./useLang";
import { categories } from "@/data/categories";
import { allProducts, ui } from "@/lib/catalog";
const ctl = "min-h-12 rounded-xl border border-black/20 bg-white px-4 text-base";
export default function CatalogView() {
  const lang = useLang(); const t = ui[lang];
  const [q, setQ] = useState(""); const [cat, setCat] = useState(""); const [avail, setAvail] = useState(false); const [sort, setSort] = useState("az");
  useEffect(() => { const c = new URLSearchParams(location.search).get("cat"); if (c) setCat(c); }, []);
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return allProducts()
      .filter((p) => (!cat || p.category === cat) && (!avail || p.available) &&
        (!s || `${p.name.uz} ${p.name.ru} ${p.material.uz} ${p.material.ru}`.toLowerCase().includes(s)))
      .sort((a, b) => a.name[lang].localeCompare(b.name[lang], lang) * (sort === "za" ? -1 : 1));
  }, [q, cat, avail, sort, lang]);
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-6 md:px-10">
      <Link href="/" className="text-sm underline">{t.home}</Link>
      <h1 className="mt-4 text-[clamp(2.2rem,6vw,4.5rem)] leading-none">{t.catalog}</h1>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-[2fr_2fr_1fr_auto]">
        <input className={ctl} type="search" placeholder={t.search} aria-label={t.search} value={q} onChange={(e) => setQ(e.target.value)} />
        <select className={ctl} aria-label={t.all} value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="">{t.all}</option>{categories.map((c) => <option key={c.slug} value={c.slug}>{c[lang]}</option>)}</select>
        <select className={ctl} aria-label={t.sort} value={sort} onChange={(e) => setSort(e.target.value)}><option value="az">{t.az}</option><option value="za">{t.za}</option></select>
        <label className="flex min-h-12 items-center gap-2 rounded-xl border border-black/20 bg-white px-4 text-sm sm:col-span-2 md:col-span-1"><input type="checkbox" className="size-5 shrink-0" checked={avail} onChange={(e) => setAvail(e.target.checked)} />{t.onlyAvail}</label>
      </div>
      {list.length === 0 ? (
        <div className="mt-16 rounded-3xl border border-dashed border-black/25 p-10 text-center">
          <p className="text-2xl">{t.emptyTitle}</p><p className="mx-auto mt-2 max-w-md opacity-70">{t.emptyText}</p>
          <Link href="/#form" className="mt-6 inline-block rounded-full bg-[var(--clay)] px-6 py-3 text-white">{t.consult}</Link>
        </div>
      ) : (<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProductCard key={p.id} p={p} lang={lang} />)}</div>)}
    </main>);
}
