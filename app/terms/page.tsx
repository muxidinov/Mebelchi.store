import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
export const metadata: Metadata = { title: "Shartlar / Условия", alternates: { canonical: "/terms" } };
export default function Page() { return <InfoPage kind="terms" />; }
