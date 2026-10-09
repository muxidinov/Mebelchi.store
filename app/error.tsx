"use client";
export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (<main className="grid min-h-dvh place-items-center p-8 text-center"><div>
    <p className="text-2xl">Xatolik yuz berdi / Произошла ошибка</p>
    <button onClick={reset} className="mt-6 rounded-full border px-6 py-3">Qayta urinish / Повторить</button></div></main>);
}
