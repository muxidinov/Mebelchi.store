"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter(); const [pw, setPw] = useState(""); const [err, setErr] = useState(""); const [busy, setBusy] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); if (busy) return; setBusy(true); setErr("");
    try {
      const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pw }) });
      if (r.ok) { router.replace("/admin"); router.refresh(); } else setErr(r.status === 429 ? "Juda ko'p urinish. Keyinroq urining." : r.status === 401 ? "Parol noto'g'ri." : "Xatolik. Sozlamalarni tekshiring.");
    } catch { setErr("Internet bilan muammo."); } finally { setBusy(false); }
  };
  return (<main className="grid min-h-dvh place-items-center p-6"><form onSubmit={submit} className="w-full max-w-sm rounded-3xl bg-white/70 p-8 shadow-sm">
    <h1 className="text-2xl">Admin</h1>
    <label className="mt-6 block text-sm">Parol<input type="password" autoComplete="current-password" value={pw} onChange={(e) => setPw(e.target.value)} required
      className="mt-1 min-h-12 w-full rounded-xl border border-black/20 bg-white px-4" /></label>
    {err && <p role="alert" className="mt-3 text-sm text-red-700">{err}</p>}
    <button disabled={busy} className="mt-6 min-h-12 w-full rounded-full bg-[var(--ink)] text-[var(--paper)] disabled:opacity-60">{busy ? "…" : "Kirish"}</button>
  </form></main>);
}
