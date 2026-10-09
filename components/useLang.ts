"use client";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
export function setStoredLang(l: Lang) {
  try { localStorage.setItem("lang", l); } catch {}
  document.documentElement.lang = l;
  window.dispatchEvent(new Event("langchange"));
}
export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("uz");
  useEffect(() => {
    const read = () => {
      try {
        const s = localStorage.getItem("lang");
        if (s === "uz" || s === "ru") return setLang(s);
        if (navigator.language.toLowerCase().startsWith("ru")) setLang("ru");
      } catch {}
    };
    read(); window.addEventListener("langchange", read);
    return () => window.removeEventListener("langchange", read);
  }, []);
  return lang;
}
