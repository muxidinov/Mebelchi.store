import Link from "next/link";
export default function NotFound() {
  return (<main className="grid min-h-dvh place-items-center p-8 text-center"><div>
    <p className="text-7xl">404</p><p className="mt-3">Sahifa topilmadi / Страница не найдена</p>
    <Link href="/" className="mt-6 inline-block underline">← Bosh sahifa / Главная</Link></div></main>);
}
