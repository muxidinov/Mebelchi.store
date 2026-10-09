import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
export const metadata: Metadata = { title: "Maslahat / Консультация", alternates: { canonical: "/maslahat" } };
export default function Page() { return <InfoPage kind="specialist" />; }
