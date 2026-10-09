import { z } from "zod";
import { normalizeUzPhone } from "./phone";

const clean = (s: string) => s.normalize("NFC").replace(/\s+/g, " ").trim();
const nameRe = /^(?=.*\p{L}.*\p{L})\p{L}[\p{L}'’`ʻʼ-]*(?: \p{L}[\p{L}'’`ʻʼ-]*)*$/u;

export const nameField = z.string().transform(clean).pipe(
  z.string().min(2, "name_short").max(60, "name_long").regex(nameRe, "name_invalid")
    .refine((v) => !/(.)\1{3,}/u.test(v), "name_invalid"));

export const phoneField = z.string().max(30).transform((v, ctx) => {
  const n = normalizeUzPhone(v);
  if (!n) { ctx.addIssue({ code: "custom", message: "phone_invalid" }); return z.NEVER; }
  return n;
});

const text = (max: number) => z.string().max(max).transform(clean).optional();

export const requestSchema = z.object({
  type: z.enum(["order", "inquiry", "specialist", "kitchen_measure"]),
  firstName: nameField,
  lastName: nameField,
  phone: phoneField,
  city: text(80), address: text(200), landmark: text(120),
  productName: text(120), category: text(80), message: text(1500),
  room: text(60), budget: text(40), kitchenSize: text(60),
  preferredDate: text(20), preferredTime: text(20),
  telegramUsername: z.string().regex(/^@?[A-Za-z0-9_]{5,32}$/).optional().or(z.literal("").transform(() => undefined)),
  lat: z.number().min(-90).max(90).optional(),
  lng: z.number().min(-180).max(180).optional(),
  lang: z.enum(["uz", "ru"]).default("uz"),
  idempotencyKey: z.string().uuid(),
  website: z.string().max(200).optional(), // honeypot: route.ts uni jim rad etadi (bot tuzoq)
}).strict();
export type RequestInput = z.infer<typeof requestSchema>;
