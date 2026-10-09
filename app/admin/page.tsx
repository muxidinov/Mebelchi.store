import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import { dbEnabled, listRequests, STATUSES } from "@/lib/db";
import { LogoutButton, StatusSelect } from "@/components/AdminControls";
import { LABEL } from "@/lib/admin-labels";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };
const TYPE: Record<string, string> = { order: "Buyurtma", inquiry: "Mahsulot so'rovi", specialist: "Maslahat", kitchen_measure: "Oshxona o'lchovi" };
export default async function Admin({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  if (!(await isAdmin())) redirect("/admin/login");
  const { status } = await searchParams;
  let rows: Awaited<ReturnType<typeof listRequests>> = []; let failed = false;
  try { rows = await listRequests(status); } catch (e) { console.error("[admin]", (e as Error).message); failed = true; }
  return (<main className="mx-auto max-w-5xl px-5 py-8 md:px-10">
    <div className="flex items-center justify-between gap-4"><h1 className="text-3xl">Arizalar</h1><LogoutButton /></div>
    <nav aria-label="Status filter" className="mt-5 flex flex-wrap gap-2 text-sm">
      {[undefined, ...STATUSES].map((s) => <Link key={s ?? "all"} href={s ? `/admin?status=${s}` : "/admin"} className={`min-h-11 rounded-full border px-4 py-2.5 ${status === s ? "bg-[var(--ink)] text-[var(--paper)]" : ""}`}>{s ? LABEL[s] : "Hammasi"}</Link>)}</nav>
    {!dbEnabled() && <p className="mt-8 rounded-2xl border border-dashed p-6">Baza ulanmagan. <code>SUPABASE_URL</code> va <code>SUPABASE_SERVICE_ROLE_KEY</code> ni sozlang (README).</p>}
    {failed && <p role="alert" className="mt-8 rounded-2xl bg-red-50 p-6 text-red-800">Ma&apos;lumotlarni yuklab bo&apos;lmadi. Keyinroq urinib ko&apos;ring.</p>}
    {dbEnabled() && !failed && rows.length === 0 && <p className="mt-8 rounded-2xl border border-dashed p-6">Arizalar yo&apos;q.</p>}
    <ul className="mt-6 grid gap-4">{rows.map((r) => (<li key={r.order_id} className="rounded-2xl bg-white/70 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><b>{r.order_id}</b> · {TYPE[r.type] ?? r.type}<p className="text-sm opacity-60">{new Date(r.created_at).toLocaleString("uz-UZ")} · {r.language.toUpperCase()}{r.telegram_sent ? "" : " · ⚠ Telegramga ketmagan"}</p></div>
        <StatusSelect orderId={r.order_id} status={r.status} /></div>
      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <div><dt className="opacity-60">Mijoz</dt><dd>{r.first_name} {r.last_name}</dd></div>
        <div><dt className="opacity-60">Telefon</dt><dd><a className="underline" href={`tel:${r.phone}`}>{r.phone}</a></dd></div>
        {(r.city || r.address) && <div><dt className="opacity-60">Manzil</dt><dd>{[r.city, r.address, r.landmark].filter(Boolean).join(", ")}</dd></div>}
        {r.latitude != null && r.longitude != null && <div><dt className="opacity-60">Joylashuv</dt><dd><a className="underline" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps?q=${r.latitude},${r.longitude}`}>Xaritada ochish</a></dd></div>}
        {r.product_name && <div><dt className="opacity-60">Mahsulot</dt><dd>{r.product_name}</dd></div>}
        {(r.kitchen_size || r.preferred_date || r.preferred_time) && <div><dt className="opacity-60">O&apos;lchov</dt><dd>{[r.kitchen_size, r.preferred_date, r.preferred_time].filter(Boolean).join(" · ")}</dd></div>}
        {r.message && <div className="sm:col-span-2"><dt className="opacity-60">Izoh</dt><dd className="whitespace-pre-wrap">{r.message}</dd></div>}
      </dl></li>))}</ul>
  </main>);
}
