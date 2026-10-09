import { describe, it, expect } from "vitest";
import { normalizeUzPhone, formatUzPhone } from "../lib/phone";
describe("uz phone", () => {
  it.each(["+998901234567", "+998 90 123 45 67", "998901234567", "901234567"])("valid %s", (v) =>
    expect(normalizeUzPhone(v)).toBe("+998901234567"));
  it.each(["+99890123456", "+9989012345678", "+123456789", "abc", "", "   ", "+998 90 123 45", "+998123"])("invalid '%s'", (v) =>
    expect(normalizeUzPhone(v)).toBeNull());
  it("formats", () => expect(formatUzPhone("901234567")).toBe("+998 90 123 45 67"));
});
