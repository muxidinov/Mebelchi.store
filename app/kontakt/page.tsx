import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
export const metadata: Metadata = { title: "Kontakt / Контакты", alternates: { canonical: "/kontakt" } };
export default function Page() { return <InfoPage kind="contact" />; }
