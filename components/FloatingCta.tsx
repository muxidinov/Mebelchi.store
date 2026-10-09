"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "./useLang";
import { home } from "@/lib/home-i18n";
export default function FloatingCta() {
  const lang = useLang(); const t = home[lang]; const [show, setShow] = useState(false); const [formInView, setFormInView] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const el = document.getElementById("form"); let io: IntersectionObserver | undefined;
    if (el) { io = new IntersectionObserver(([e]) => setFormInView(e.isIntersecting)); io.observe(el); }
    return () => { window.removeEventListener("scroll", onScroll); io?.disconnect(); };
  }, []);
  if (!show || formInView) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 p-3 md:inset-x-auto md:right-6 md:bottom-6 md:p-0" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <Link href="/#form" className="min-h-12 flex-1 rounded-full bg-[var(--clay)] px-6 py-3 text-center text-white shadow-lg md:flex-none">{t.order}</Link>
      <Link href="/maslahat" className="min-h-12 flex-1 rounded-full bg-[var(--ink)] px-6 py-3 text-center text-[var(--paper)] shadow-lg md:flex-none">{t.consult}</Link>
    </div>);
}
