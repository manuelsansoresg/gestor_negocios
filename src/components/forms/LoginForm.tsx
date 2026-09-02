"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/lib/validations/auth";

export default function LoginForm() {
  const router = useRouter();
  const locked = useRef(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current) return;
    setError("");
    const result = loginSchema.safeParse(Object.fromEntries(new FormData(event.currentTarget)));
    if (!result.success) { setError(result.error.issues[0].message); return; }
    locked.current = true; setPending(true);
    try {
      const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(result.data) });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || "No pudimos iniciar sesión.");
      router.replace("/admin/leads");
      router.refresh();
    } catch (error) {
      setError(error instanceof Error ? error.message : "No pudimos iniciar sesión. Inténtalo de nuevo.");
      locked.current = false; setPending(false);
    }
  }

  const inputClass = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[#1668ff] focus:ring-2 focus:ring-blue-100 disabled:opacity-60";
  return (
    <form onSubmit={submit} className="mt-7 space-y-5" aria-busy={pending} aria-describedby={error ? "login-error" : undefined}>
      <div>
        <label htmlFor="login-email" className="text-sm font-medium">Correo</label>
        <input id="login-email" name="email" type="email" autoComplete="username" required maxLength={160} disabled={pending} className={inputClass} />
      </div>
      <div>
        <label htmlFor="login-password" className="text-sm font-medium">Contraseña</label>
        <input id="login-password" name="password" type="password" autoComplete="current-password" required minLength={8} maxLength={72} disabled={pending} className={inputClass} />
      </div>
      {error && <p id="login-error" role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      <button disabled={pending} className="min-h-12 w-full rounded-full bg-[#1668ff] px-6 py-3 font-semibold text-white hover:bg-[#347cff] disabled:cursor-wait disabled:opacity-60">{pending ? "Ingresando…" : "Ingresar"}</button>
    </form>
  );
}
