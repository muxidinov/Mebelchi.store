"use client";
import { useRef, useState } from "react";
import { dict, type Lang } from "@/lib/i18n";
import { formatUzPhone, isValidUzPhone } from "@/lib/phone";
import { makeUuid } from "@/lib/uuid";

type Kind = "order" | "specialist" | "kitchen_measure";
type Loc = { lat: number; lng: number } | null;
const field = "w-full min-h-12 rounded-xl border border-black/20 bg-white px-4 py-3 text-base outline-none transition focus:border-[var(--clay)] focus:ring-2 focus:ring-[var(--clay)]/30";

export default function RequestForm({ lang, initialKind }: { lang: Lang; initialKind?: Kind }) {
  const t = dict[lang];
  const [kind, setKind] = useState<Kind>(initialKind ?? "order");
  const [v, setV] = useState({ firstName: "", lastName: "", phone: "", city: "", address: "", message: "", website: "" });
  const [loc, setLoc] = useState<Loc>(null);
  const [locMsg, setLocMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [busy, setBusy] = useState(false);
  const [orderId, setOrderId] = useState("");
  // useRef boshlang'ich qiymati har render'da chaqirilmasligi uchun lazy emas, lekin makeUuid arzon.
  const key = useRef<string>(makeUuid());
  const tr = (code: string) => (t as Record<string, string>)["e_" + code] ?? t.e_generic;
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setV((p) => ({ ...p, [k]: k === "phone" ? formatUzPhone(e.target.value) : e.target.value }));

  const locate = () => {
    if (!navigator.geolocation) { setLocMsg(t.locDenied); return; }
    navigator.geolocation.getCurrentPosition(
      (p) => { setLoc({ lat: +p.coords.latitude.toFixed(6), lng: +p.coords.longitude.toFixed(6) }); setLocMsg(t.locOk); },
      () => { setLoc(null); setLocMsg(t.locDenied); }, { timeout: 10000, maximumAge: 60000 });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); if (busy) return;
    const local: Record<string, string> = {};
    if (v.firstName.trim().length < 2) local.firstName = "name_short";
    if (v.lastName.trim().length < 2) local.lastName = "name_short";
    if (!isValidUzPhone(v.phone)) local.phone = "phone_invalid";
    setErrors(local); setFormError("");
    if (Object.keys(local).length) return;
    setBusy(true);
    try {
      const res = await fetch("/api/request", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: kind, ...v, ...(loc ?? {}), lang, productName: new URLSearchParams(location.search).get("product") ?? undefined, idempotencyKey: key.current }) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) { setOrderId(data.orderId); key.current = makeUuid(); }
      else if (data.error === "validation") {
        const f: Record<string, string> = {};
        for (const [k, m] of Object.entries<string[]>(data.fields ?? {})) f[k] = m[0];
        setErrors(f);
      } else setFormError(tr(data.error ?? "generic"));
    } catch { setFormError(t.e_net); } finally { setBusy(false); }
  };

  if (orderId) return (
    <div role="status" className="py-10 text-center">
      <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-[var(--clay)] text-3xl text-white">✓</div>
      <p className="text-2xl">{t.okTitle}</p>
      <p className="mt-2 opacity-70">{t.okId}: <b>{orderId}</b></p>
      <button className="mt-6 rounded-full border px-6 py-3" onClick={() => { setOrderId(""); setV({ firstName: "", lastName: "", phone: "", city: "", address: "", message: "", website: "" }); }}>{t.again}</button>
    </div>);

  const err = (k: string) => errors[k] ? <p id={k + "-e"} role="alert" className="mt-1 text-sm text-red-700">{tr(errors[k])}</p> : null;
  const inp = (k: keyof typeof v, label: string, extra: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <label className="block text-sm">{label}
      <input className={`${field} mt-1`} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? k + "-e" : undefined} {...extra} />{err(k)}</label>);

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <div role="tablist" className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {(["order", "specialist", "kitchen_measure"] as const).map((k) => (
          <button type="button" role="tab" aria-selected={kind === k} key={k} onClick={() => setKind(k)}
            className={`min-h-12 rounded-xl border px-3 text-sm transition ${kind === k ? "bg-[var(--ink)] text-[var(--paper)]" : ""}`}>{t[`type_${k}` as const]}</button>))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {inp("firstName", t.firstName, { autoComplete: "given-name", maxLength: 60 })}
        {inp("lastName", t.lastName, { autoComplete: "family-name", maxLength: 60 })}
      </div>
      {inp("phone", t.phone, { type: "tel", inputMode: "tel", autoComplete: "tel", placeholder: "+998 90 123 45 67" })}
      <div className="grid gap-4 sm:grid-cols-2">{inp("city", t.city, { maxLength: 80 })}{inp("address", t.address, { maxLength: 200 })}</div>
      <label className="block text-sm">{t.message}<textarea className={`${field} mt-1`} rows={3} maxLength={1500} value={v.message} onChange={set("message")} /></label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" value={v.website} onChange={set("website")} />
      <div className="rounded-xl bg-black/5 p-4 text-sm">
        <p className="opacity-70">{t.locHint}</p>
        <button type="button" onClick={locate} className="mt-3 min-h-11 rounded-full border px-5">{t.locate}</button>
        {locMsg && <p role="status" className="mt-2">{locMsg}{loc ? ` (${loc.lat}, ${loc.lng})` : ""}</p>}
      </div>
      {formError && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-800">{formError}</p>}
      <button disabled={busy} className="min-h-14 rounded-full bg-[var(--clay)] px-8 text-lg text-white transition hover:opacity-90 disabled:opacity-60">{busy ? t.sending : t.submit}</button>
    </form>);
}
