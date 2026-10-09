"use client";
import Link from "next/link";
import { setStoredLang, useLang } from "./useLang";
import { nav } from "@/lib/pages-i18n";
import FloatingCta from "./FloatingCta";
import { siteConfig } from "@/lib/site-config";
export default function PageShell({ children }: { children: (lang: "uz" | "ru") => React.ReactNode }) {
  const lang = useLang();
  return (<>
    <header className="sticky top-0 z-30 border-b border-black/10 bg-[var(--paper)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-2 md:flex-row md:items-center md:gap-x-6 md:px-10">
        <div className="flex items-center justify-between gap-3 md:shrink-0">
          <Link href="/" className="min-w-0 truncate text-base font-semibold uppercase tracking-[0.2em] md:text-sm">{siteConfig.name}</Link>
          <div role="group" aria-label="Language" className="flex shrink-0 gap-1 text-sm">
            {(["uz", "ru"] as const).map((l) => <button key={l} onClick={() => setStoredLang(l)} aria-pressed={lang === l} aria-label={l === "uz" ? "O'zbek tilida" : "На русском"}
              className={`min-h-11 min-w-12 rounded-full border px-3 text-sm font-medium uppercase ${lang === l ? "bg-[var(--ink)] text-[var(--paper)]" : ""}`}>{l}</button>)}</div>
        </div>
        <nav aria-label="Main" className="-mx-1 flex snap-x gap-1 overflow-x-auto px-1 pb-1 text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-1 md:overflow-visible md:px-0 md:pb-0">
          {nav.map((n) => <Link key={n.href} href={n.href} className="inline-flex min-h-11 shrink-0 snap-start items-center rounded-full px-3.5 py-2.5">{n[lang]}</Link>)}</nav>
      </div></header>
    {children(lang)}
    <footer className="border-t border-black/10 px-5 pb-28 pt-10 md:pb-10 text-sm md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="shrink-0">© {siteConfig.name}</span>
      <nav aria-label="Footer" className="-mx-2 flex snap-x gap-1 overflow-x-auto px-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
        <Link href="/faq" className="inline-flex min-h-11 shrink-0 snap-start items-center rounded-full px-3">FAQ</Link>
        <Link href="/sharhlar" className="inline-flex min-h-11 shrink-0 snap-start items-center rounded-full px-3">{lang === "uz" ? "Sharhlar" : "Отзывы"}</Link>
        <Link href="/privacy" className="inline-flex min-h-11 shrink-0 snap-start items-center rounded-full px-3">{lang === "uz" ? "Maxfiylik" : "Конфиденциальность"}</Link>
        <Link href="/terms" className="inline-flex min-h-11 shrink-0 snap-start items-center rounded-full px-3">{lang === "uz" ? "Shartlar" : "Условия"}</Link></nav></div></footer><FloatingCta /></>);
}
