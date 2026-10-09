import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
export const metadata: Metadata = { title: "Biz haqimizda / О нас", alternates: { canonical: "/biz-haqimizda" } };
export default function Page() { return <InfoPage kind="about" />; }
