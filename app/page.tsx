import Landing from "@/components/Landing";
import { existsSync } from "node:fs";
import { join } from "node:path";

export default function Page() {
  // Rasm build vaqtida tekshiriladi: onError'ga umid qilmasdan to'g'ri holat beriladi.
  const hasHeroImage = existsSync(join(process.cwd(), "public", "hero", "hero.webp"));
  return <Landing hasHeroImage={hasHeroImage} />;
}
