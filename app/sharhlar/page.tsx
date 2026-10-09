import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
export const metadata: Metadata = { title: "Sharhlar / Отзывы", alternates: { canonical: "/sharhlar" } };
export default function Page() { return <InfoPage kind="reviews" />; }
