"use client";
import PageShell from "./PageShell";
import RequestForm from "./RequestForm";
import ProductImage from "./ProductImage";
import { faq } from "@/data/faq";
import { reviews } from "@/data/reviews";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/lib/site-config";
import { empty, pages, type Kind } from "@/lib/pages-i18n";
const isSet = (v: string) => !!v && !v.startsWith("[");
// Qiymat allaqachon to'liq URL bo'lsa, uni o'zgartirmaymiz; aks holda prefix qo'shamiz.
const link = (v: string, prefix: string) => /^https?:\/\//.test(v) ? v : prefix + v.replace(/^@/, "");
export default function InfoPage({ kind }: { kind: Kind }) {
  return (<PageShell>{(lang) => {
    const p = pages[lang][kind]; const e = empty[lang];
    const approved = reviews.filter((r) => r.approved);
    const rows: [string, string, string?][] = [
      [lang === "uz" ? "Telefon" : "Телефон", siteConfig.phone, isSet(siteConfig.phone) ? `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` : undefined],
      ["Telegram", siteConfig.telegram, isSet(siteConfig.telegram) ? link(siteConfig.telegram, "https://t.me/") : undefined],
      [lang === "uz" ? "Telegram guruh" : "Telegram чат", siteConfig.telegramGroup, isSet(siteConfig.telegramGroup) ? link(siteConfig.telegramGroup, "https://t.me/") : undefined],
      ["Instagram", siteConfig.instagram, isSet(siteConfig.instagram) ? link(siteConfig.instagram, "https://instagram.com/") : undefined],
      [lang === "uz" ? "Ish vaqti" : "Время работы", siteConfig.workingHours],
      ...(siteConfig.email ? [["Email", siteConfig.email, `mailto:${siteConfig.email}`] as [string, string, string]] : []),
    ];
    // Filiallar — alohida manzil har biri uchun <dd>
    const branches = siteConfig.addresses.filter((a) => isSet(a.address));
    return (<main className="mx-auto max-w-4xl px-5 pb-24 pt-12 md:px-10">
      <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] leading-none">{p.title}</h1>
      <p className="mt-4 max-w-xl text-lg opacity-80">{p.lead}</p>
      {p.body && <div className="mt-8 grid max-w-2xl gap-4 leading-relaxed">{p.body.map((t, i) => <p key={i}>{t}</p>)}</div>}
      {kind === "faq" && <div className="mt-10 divide-y divide-black/15 border-y border-black/15">{faq.map((f, i) => (
        <details key={i} className="group py-4"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg">{f.q[lang]}<span aria-hidden className="transition group-open:rotate-45">+</span></summary>
          <p className="mt-2 max-w-2xl opacity-80">{f.a[lang]}</p></details>))}</div>}
      {kind === "contact" && (<dl className="mt-10 grid gap-5">
        {rows.map(([k, v, href]) => (
          <div key={k} className="border-b border-black/15 pb-4"><dt className="text-sm opacity-60">{k}</dt>
            <dd className="mt-1 text-xl">{href ? <a href={href} className="underline" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{v}</a> : v}</dd></div>))}
        {branches.map((b, i) => {
          const label = isSet(b.name) ? b.name : `${lang === "uz" ? "Filial" : "Филиал"} ${i + 1}`;
          return (<div key={i} className="border-b border-black/15 pb-4"><dt className="text-sm opacity-60">{label}</dt>
            <dd className="mt-1 text-xl">{b.mapUrl ? <a href={b.mapUrl} className="underline" target="_blank" rel="noopener noreferrer">{b.address}</a> : b.address}</dd></div>);
        })}
      </dl>)}
      {kind === "reviews" && (approved.length === 0 ? <p className="mt-10 rounded-3xl border border-dashed border-black/25 p-8 text-center">{e.reviews}</p> :
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">{approved.map((r, i) => (<li key={i} className="rounded-2xl bg-white/60 p-5">
          <p aria-label={`${r.rating}/5`}>{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p><p className="mt-2">{r.text[lang]}</p>
          <p className="mt-3 text-sm opacity-60">{r.name} · {r.date}</p></li>))}</ul>)}
      {kind === "portfolio" && (projects.length === 0 ? <p className="mt-10 rounded-3xl border border-dashed border-black/25 p-8 text-center">{e.portfolio}</p> :
        <ul className="mt-10 grid gap-8 sm:grid-cols-2">{projects.map((pr) => (<li key={pr.id} className="group">
          <ProductImage src={`/portfolio/${pr.id}/cover.webp`} alt={pr.title[lang]} label="·" /><h2 className="mt-3 text-xl">{pr.title[lang]}</h2><p className="opacity-75">{pr.text[lang]}</p></li>))}</ul>)}
      {(kind === "kitchen" || kind === "specialist") && <section className="mt-10 rounded-3xl bg-white/60 p-5 md:p-8"><RequestForm lang={lang} initialKind={kind === "kitchen" ? "kitchen_measure" : "specialist"} /></section>}
    </main>);
  }}</PageShell>);
}
