import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
export const metadata: Metadata = { title: "Loyihalar / Проекты", alternates: { canonical: "/portfolio" } };
export default function Page() { return <InfoPage kind="portfolio" />; }
