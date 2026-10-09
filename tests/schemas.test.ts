import { describe, it, expect } from "vitest";
import { nameField, requestSchema } from "../lib/schemas";
const base = { type: "order", firstName: "Ali", lastName: "Valiyev", phone: "+998 90 123 45 67", idempotencyKey: "7d9a7a0e-4c61-4f4b-9d57-1d9d6f7f2a11" };
describe("name", () => {
  it.each(["Ali", "  Ali   Valiyev ", "Oʻktam", "Анна-Мария", "O'rinboyev"])("valid '%s'", (v) => expect(nameField.safeParse(v).success).toBe(true));
  it.each(["123456", "!!!!", "aaaaaaaaaaaaaaaa", "A", "", "   ", "A1i"])("invalid '%s'", (v) => expect(nameField.safeParse(v).success).toBe(false));
  it("normalizes whitespace", () => expect(nameField.parse("  Ali   Vali ")).toBe("Ali Vali"));
});
describe("requestSchema", () => {
  it("accepts minimal valid order and normalizes phone", () => {
    const r = requestSchema.safeParse(base); expect(r.success).toBe(true);
    if (r.success) { expect(r.data.phone).toBe("+998901234567"); expect(r.data.lang).toBe("uz"); }
  });
  it("rejects bad phone", () => expect(requestSchema.safeParse({ ...base, phone: "+998 90 123 45" }).success).toBe(false));
  it("rejects unknown fields (strict)", () => expect(requestSchema.safeParse({ ...base, admin: true }).success).toBe(false));
  it("rejects bad type / key / coords", () => {
    expect(requestSchema.safeParse({ ...base, type: "hack" }).success).toBe(false);
    expect(requestSchema.safeParse({ ...base, idempotencyKey: "x" }).success).toBe(false);
    expect(requestSchema.safeParse({ ...base, lat: 91, lng: 10 }).success).toBe(false);
  });
  it("accepts coordinates", () => expect(requestSchema.safeParse({ ...base, lat: 41.3, lng: 69.2 }).success).toBe(true));
});
