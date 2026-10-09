"use client";
import { useState } from "react";
export default function ProductImage({ src, alt, label, priority = false, className = "" }:
  { src: string; alt: string; label: string; priority?: boolean; className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative aspect-[4/5] w-full overflow-hidden bg-black/5 ${className}`}>
      {failed ? (
        <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center text-sm uppercase tracking-[0.25em] opacity-50">{label}</div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      )}
    </div>);
}
