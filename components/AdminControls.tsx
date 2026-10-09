"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LABEL } from "@/lib/admin-labels";
export function StatusSelect({ orderId, status }: { orderId: string; status: string }) {
  const router = useRouter(); const [v, setV] = useState(status); const [busy, setBusy] = useState(false); const [err, setErr] = useState(false);
  const change = async (s: string) => {
    const prev = v; setV(s); setBusy(true); setErr(false);
    try {
      const r = await fetch("/api/admin/requests", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ orderId, status: s }) });
      if (!r.ok) throw new Error(); router.refresh();
    } catch { setV(prev); setErr(true); } finally { setBusy(false); }
  };
  return (<span><select aria-label="Status" value={v} disabled={busy} onChange={(e) => change(e.target.value)} className="min-h-11 rounded-xl border border-black/20 bg-white px-3">
    {Object.entries(LABEL).map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select>{err && <span role="alert" className="ml-2 text-sm text-red-700">Saqlanmadi</span>}</span>);
}
export function LogoutButton() {
  const router = useRouter();
  return <button className="min-h-11 rounded-full border px-5" onClick={async () => { await fetch("/api/admin/logout", { method: "POST" }); router.replace("/admin/login"); router.refresh(); }}>Chiqish</button>;
}
