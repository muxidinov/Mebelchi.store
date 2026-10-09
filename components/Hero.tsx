"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { home } from "@/lib/home-i18n";
import type { Lang } from "@/lib/i18n";
export default function Hero({ lang, hasHeroImage }: { lang: Lang; hasHeroImage: boolean }) {
  const t = home[lang]; const reduce = useReducedMotion(); const ref = useRef<HTMLElement>(null);
  const [imgOk, setImgOk] = useState(hasHeroImage);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const [play, setPlay] = useState(false);
  useEffect(() => { const id = requestAnimationFrame(() => setPlay(true)); return () => cancelAnimationFrame(id); }, []);
  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 pt-24 md:px-10">
      <motion.div style={{ y }} aria-hidden className="absolute inset-y-0 right-0 -z-10 w-full opacity-40 md:w-[52%] md:opacity-100">
        {/* Rasm joyi: public/hero/hero.webp (21:9 emas, vertikal 4:5 yoki 3:4 tavsiya) */}
        {imgOk && /* eslint-disable-next-line @next/next/no-img-element */ <img src="/hero/hero.webp" alt="" fetchPriority="high" onError={() => setImgOk(false)} className="h-full w-full object-cover" />}
        {!imgOk && (
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className={`h-full w-full text-[var(--ink)] draw${play && !reduce ? " play" : ""}`} fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="40" y="40" width="320" height="420" />
            <path d="M90 460V230A110 110 0 0 1 310 230V460" />
            <path d="M125 460V235A75 75 0 0 1 275 235V460" stroke="var(--clay)" strokeWidth="1.5" />
            <path d="M0 460H400M200 120V460M40 300H360" opacity=".35" />
          </svg>)}
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--paper)] via-[var(--paper)]/60 to-transparent md:hidden" />
      <p className="text-xs uppercase tracking-[0.3em] opacity-70">{t.eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight">
        {t.words.map((w, i) => (<span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
          {reduce ? w : <motion.span className="inline-block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>}</span>))}
      </h1>
      <p className="mt-6 max-w-md text-lg opacity-80">{t.lead}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/katalog" className="min-h-12 rounded-full bg-[var(--ink)] px-7 py-3 text-center text-[var(--paper)] transition hover:bg-[var(--clay)]">{t.cta1}</Link>
        <Link href="/oshxona" className="min-h-12 rounded-full border border-[var(--ink)] bg-[var(--paper)]/60 px-7 py-3 text-center backdrop-blur transition hover:bg-[var(--paper)]">{t.cta2}</Link>
      </div>
    </section>);
}
