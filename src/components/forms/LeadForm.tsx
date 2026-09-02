"use client";

import { useRef, useState, type FormEvent } from "react";
import { leadSchema, type LeadInput } from "@/lib/validations/lead";

const fields = [
  { name: "fullName", label: "Nombre completo", type: "text", autoComplete: "name", min: 3, max: 120 },
  { name: "phone", label: "Teléfono", type: "tel", autoComplete: "tel", min: 7, max: 30 },
  { name: "email", label: "Correo", type: "email", autoComplete: "email", min: 1, max: 160 },
  { name: "message", label: "Mensaje", type: "text", autoComplete: "off", min: 10, max: 2000 },
] as const;
const inputClass = "mt-1.5 block w-full min-w-0 rounded-xl border border-white/20 bg-white/5 px-3 py-2.5 text-base leading-5 text-white outline-none focus:border-[#68a0ff] focus:ring-2 focus:ring-[#68a0ff]/40 disabled:opacity-60";

export default function LeadForm() {
  const locked = useRef(false);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadInput, string>>>({});
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current) return;
    const form = event.currentTarget;
    const result = leadSchema.safeParse(Object.fromEntries(new FormData(form)));
    setErrors({}); setFeedback(null);
    if (!result.success) {
      const nextErrors: Partial<Record<keyof LeadInput, string>> = {};
      for (const issue of result.error.issues) nextErrors[issue.path[0] as keyof LeadInput] ??= issue.message;
      setErrors(nextErrors);
      const field = form.elements.namedItem(String(result.error.issues[0]?.path[0]));
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    locked.current = true; setPending(true);
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(result.data) });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || "No pudimos enviar la información.");
      form.reset();
      setFeedback({ ok: true, message: "Gracias. Recibimos tu información y nos pondremos en contacto contigo." });
    } catch (error) {
      setFeedback({ ok: false, message: error instanceof Error ? error.message : "No pudimos enviar la información. Inténtalo de nuevo." });
    } finally { locked.current = false; setPending(false); }
  }

  return (
    <form onSubmit={submit} noValidate aria-busy={pending} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {fields.map((field) => (
        <div key={field.name} className={`min-w-0 ${field.name === "email" || field.name === "message" ? "sm:col-span-2" : ""}`}>
          <label htmlFor={`lead-${field.name}`} className="block text-sm font-medium leading-5 text-white/85">{field.label}</label>
          {field.name === "message" ? (
            <textarea id={`lead-${field.name}`} name={field.name} required minLength={field.min} maxLength={field.max} rows={3} disabled={pending} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `lead-${field.name}-error` : undefined} className={`${inputClass} min-h-24 resize-y`} />
          ) : (
            <input id={`lead-${field.name}`} name={field.name} type={field.type} autoComplete={field.autoComplete} required minLength={field.min} maxLength={field.max} disabled={pending} aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `lead-${field.name}-error` : undefined} className={`${inputClass} h-11`} />
          )}
          {errors[field.name] && <p id={`lead-${field.name}-error`} className="mt-1 text-sm text-red-300">{errors[field.name]}</p>}
        </div>
      ))}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="lead-website">Website</label>
        <input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={2000} />
      </div>
      <button disabled={pending} className="min-h-11 w-full rounded-full bg-[#1668ff] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#347cff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68a0ff] disabled:cursor-wait disabled:opacity-60 sm:col-span-2">
        {pending ? "Enviando…" : "Enviar información"}
      </button>
      {feedback && <p role={feedback.ok ? "status" : "alert"} className={`rounded-xl p-3 text-sm sm:col-span-2 ${feedback.ok ? "bg-emerald-400/10 text-emerald-200" : "bg-red-400/10 text-red-200"}`}>{feedback.message}</p>}
    </form>
  );
}
