import type { NextConfig } from "next";
const dev = process.env.NODE_ENV !== "production";
const httpsSite = (process.env.SITE_URL ?? "").trim().toLowerCase().startsWith("https://");
const csp = [
  "default-src 'self'", `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`, "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:", "font-src 'self' data:", "connect-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'",
].join("; ");
const config: NextConfig = {
  poweredByHeader: false,
  outputFileTracingRoot: __dirname,
  async headers() {
    return [
      { source: "/(.*)", headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
        { key: "X-DNS-Prefetch-Control", value: "off" },
        // HSTS faqat sayt HTTPS'da ishlaganda qo'shiladi (yuqoridagi izohga qarang).
        ...(httpsSite ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }] : []),
      ] },
      // API va admin javoblari hech qachon keshlanmasin (shaxsiy ma'lumot / sessiya).
      { source: "/(api|admin)(.*)", headers: [
        { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
        { key: "Content-Security-Policy", value: csp },
      ] },
    
      { source: "/((?!api|admin).*)", headers: [{ key: "Content-Security-Policy", value: csp }] },
    ];
  },
};
export default config;
