import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
export const metadata: Metadata = { title: "FAQ / Частые вопросы", alternates: { canonical: "/faq" } };
export default function Page() { return <InfoPage kind="faq" />; }
