"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const locked = useRef(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function logout() {
    if (locked.current) return;
    locked.current = true; setPending(true); setError("");
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error();
      router.replace("/admin-login");
      router.refresh();
    } catch {
      setError("No pudimos cerrar sesión. Inténtalo de nuevo.");
      locked.current = false; setPending(false);
    }
  }

  return <div>
    <button onClick={logout} disabled={pending} className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-[#1668ff] disabled:opacity-60">{pending ? "Cerrando…" : "Cerrar sesión"}</button>
    {error && <p role="alert" className="mt-2 text-sm text-red-700">{error}</p>}
  </div>;
}
