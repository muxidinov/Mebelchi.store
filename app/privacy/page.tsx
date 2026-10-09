import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
export const metadata: Metadata = { title: "Maxfiylik / Конфиденциальность", alternates: { canonical: "/privacy" } };
export default function Page() { return <InfoPage kind="privacy" />; }
