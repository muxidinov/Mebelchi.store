import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
export const metadata: Metadata = { title: "Oshxona mebellari / Кухонная мебель", alternates: { canonical: "/oshxona" } };
export default function Page() { return <InfoPage kind="kitchen" />; }
