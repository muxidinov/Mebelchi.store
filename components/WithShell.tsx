"use client";
import PageShell from "./PageShell";
export default function WithShell({ children }: { children: React.ReactNode }) { return <PageShell>{() => children}</PageShell>; }
