import type { Metadata } from "next";
import CatalogView from "@/components/CatalogView";
import WithShell from "@/components/WithShell";
export const metadata: Metadata = { title: "Katalog / Каталог", alternates: { canonical: "/katalog" } };
export default function Page() { return <WithShell><CatalogView /></WithShell>; }