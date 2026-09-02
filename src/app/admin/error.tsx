"use client";

export default function AdminError({ reset }: { reset: () => void }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-900">
    <h2 className="text-xl font-semibold">No pudimos cargar el panel.</h2>
    <p className="mt-2 text-slate-600">Inténtalo de nuevo en unos momentos.</p>
    <button onClick={reset} className="mt-5 rounded-full bg-[#1668ff] px-5 py-3 text-white">Reintentar</button>
  </div>;
}
