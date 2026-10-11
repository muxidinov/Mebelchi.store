import { describe, it, expect } from "vitest";
import { makeUuid } from "../lib/uuid";

const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

describe("makeUuid", () => {
  it("to'g'ri v4 UUID qaytaradi", () => {
    expect(makeUuid()).toMatch(UUID_V4);
  });

  it("har chaqiruvda unikal qiymat", () => {
    const set = new Set(Array.from({ length: 200 }, () => makeUuid()));
    expect(set.size).toBe(200);
  });

  it("crypto.randomUUID YO'Q bo'lsa ham ishlaydi (http:// tarmoq holati)", () => {
    const orig = globalThis.crypto;

    const fake = { getRandomValues: (a: Uint8Array) => orig.getRandomValues(a) } as Crypto;
    Object.defineProperty(globalThis, "crypto", { value: fake, configurable: true });
    try {
      expect(makeUuid()).toMatch(UUID_V4);
    } finally {
      Object.defineProperty(globalThis, "crypto", { value: orig, configurable: true });
    }
  });

  it("getRandomValues ham bo'lmasa Math.random zaxirasi ishlaydi", () => {
    const orig = globalThis.crypto;
    Object.defineProperty(globalThis, "crypto", { value: undefined, configurable: true });
    try {
      expect(makeUuid()).toMatch(UUID_V4);
    } finally {
      Object.defineProperty(globalThis, "crypto", { value: orig, configurable: true });
    }
  });
});
