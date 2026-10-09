import type { L } from "@/lib/catalog";
// Loyiha qo'shish: public/portfolio/<id>/cover.webp joylang va shu yerga qator qo'shing.
export type Project = { id: string; title: L; text: L };
export const projects: Project[] = [];