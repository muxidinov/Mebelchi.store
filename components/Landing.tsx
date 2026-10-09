"use client";
import Link from "next/link";
import PageShell from "./PageShell";
import Hero from "./Hero";
import Reveal from "./Reveal";
import RequestForm from "./RequestForm";
import { categories } from "@/data/categories";
import { home } from "@/lib/home-i18n";

export default function Landing({ hasHeroImage }: { hasHeroImage: boolean }) {
  return (<PageShell>{(lang) => { const t = home[lang]; return (<main>
    <Hero lang={lang} hasHeroImage={hasHeroImage} />
    <section aria-labelledby="cats" className="mx-auto max-w-7xl px-5 py-24 md:px-10">
      <Reveal><h2 id="cats" className="text-xs uppercase tracking-[0.3em] opacity-60">{t.catTitle}</h2></Reveal>
      <ul className="mt-6 border-t border-black/20">{categories.map((c, i) => (<li key={c.slug} className="border-b border-black/20">
        <Link href={`/katalog?cat=${c.slug}`} className="group flex min-h-16 items-baseline gap-4 py-4 transition-[padding] duration-500 hover:pl-4 md:hover:pl-8">
          <span className="w-8 text-xs opacity-50">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-[clamp(1.5rem,4vw,3rem)] leading-none">{c[lang]}</span>
          <span aria-hidden className="ml-auto opacity-0 transition group-hover:opacity-100">→</span></Link></li>))}</ul>
    </section>
    <section aria-labelledby="kitchen" className="bg-[var(--ink)] px-5 py-28 text-[var(--paper)] md:px-10"><div className="mx-auto max-w-7xl">
      <Reveal><h2 id="kitchen" className="max-w-3xl text-[clamp(2.4rem,7vw,6rem)] leading-[0.95]">{t.kTitle}</h2></Reveal>
      <Reveal delay={0.1}><p className="mt-6 max-w-lg text-lg opacity-75">{t.kText}</p></Reveal>
      <Reveal delay={0.2}><Link href="/oshxona" className="mt-10 inline-block min-h-12 rounded-full bg-[var(--clay)] px-8 py-3.5 text-white transition hover:opacity-90">{t.kCta}</Link></Reveal>
    </div></section>
    <section aria-labelledby="approach" className="mx-auto max-w-7xl px-5 py-24 md:px-10">
      <Reveal><h2 id="approach" className="text-xs uppercase tracking-[0.3em] opacity-60">{t.pTitle}</h2></Reveal>
      <div className="mt-8 grid gap-10 md:grid-cols-3">{t.principles.map((p, i) => (
        <Reveal key={p.t} delay={i * 0.12}><div className="border-t border-[var(--ink)] pt-5"><h3 className="text-2xl">{p.t}</h3><p className="mt-3 opacity-75">{p.d}</p></div></Reveal>))}</div>
    </section>
    <section id="form" aria-labelledby="form-title" className="mx-auto max-w-3xl scroll-mt-20 px-5 pb-28 md:px-10">
      <div className="rounded-3xl bg-white/60 p-5 shadow-sm md:p-8"><h2 id="form-title" className="mb-5 text-2xl">{t.formTitle}</h2><RequestForm lang={lang} /></div>
    </section>
  </main>); }}</PageShell>);
}
