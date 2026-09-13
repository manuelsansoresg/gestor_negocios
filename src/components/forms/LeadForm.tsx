"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import { actionLabels, leadActions, opportunityTypes, submitLabels, type LeadAction, type OpportunityType } from "@/lib/lead-options";
import { leadSchema, type LeadInput } from "@/lib/validations/lead";

type LeadFormProps = { initialAction?: LeadAction; initialOpportunityType?: OpportunityType; source?: string };
const inputClass = "mt-1.5 block min-h-12 w-full min-w-0 rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-base leading-5 text-white outline-none focus:border-[#68a0ff] focus:ring-2 focus:ring-[#68a0ff]/40 disabled:opacity-60";
const selectClass = "block h-14 w-full appearance-none rounded-2xl border border-white/25 bg-white/[0.07] px-4 pr-12 text-base font-medium leading-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition hover:border-white/35 hover:bg-white/[0.09] focus:border-[#68a0ff] focus:ring-2 focus:ring-[#68a0ff]/40 disabled:opacity-60";

export default function LeadForm({ initialAction, initialOpportunityType, source = "home" }: LeadFormProps) {
  const locked = useRef(false);
  const started = useRef(false);
  const [pending, setPending] = useState(false);
  const [action, setAction] = useState<LeadAction | "">(initialAction ?? "");
  const [opportunityType, setOpportunityType] = useState<OpportunityType | "">(initialOpportunityType ?? "");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadInput, string>>>({});
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(null);

  useEffect(() => {
    if (initialAction) return;
    const selectAction = (event: Event) => {
      const requestedAction = (event as CustomEvent<LeadAction>).detail;
      if (leadActions.includes(requestedAction)) {
        setAction(requestedAction);
        trackEvent("lead_action_selected", { action: requestedAction, source });
      }
    };
    window.addEventListener("lead-action-select", selectAction);
    return () => window.removeEventListener("lead-action-select", selectAction);
  }, [initialAction, source]);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    trackEvent("lead_form_start", { source });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current) return;
    const form = event.currentTarget;
    const result = leadSchema.safeParse(Object.fromEntries(new FormData(form)));
    setErrors({});
    setFeedback(null);
    if (!result.success) {
      const nextErrors: Partial<Record<keyof LeadInput, string>> = {};
      for (const issue of result.error.issues) nextErrors[issue.path[0] as keyof LeadInput] ??= issue.message;
      setErrors(nextErrors);
      const field = form.elements.namedItem(String(result.error.issues[0]?.path[0]));
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    locked.current = true;
    setPending(true);
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(result.data) });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || "No pudimos enviar la información.");
      trackEvent("lead_form_submit_success", { action: result.data.action, opportunity_type: result.data.opportunityType, source });
      form.reset();
      setAction(initialAction ?? "");
      setOpportunityType(initialOpportunityType ?? "");
      setFeedback({ ok: true, message: "Gracias. Recibí tu información y me pondré en contacto contigo." });
    } catch (error) {
      setFeedback({ ok: false, message: error instanceof Error ? error.message : "No pudimos enviar la información. Inténtalo de nuevo." });
    } finally {
      locked.current = false;
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit} onFocusCapture={markStarted} noValidate aria-busy={pending} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="min-w-0 sm:col-span-2">
        <label htmlFor="lead-action" className="block text-sm font-medium leading-5 text-white/85">¿Qué quieres hacer? *</label>
        <div className="relative mt-2">
          <select id="lead-action" name="action" required value={action} disabled={pending} onChange={(event) => { const value = event.target.value as LeadAction | ""; setAction(value); if (value) trackEvent("lead_action_selected", { action: value, source }); }} aria-invalid={!!errors.action} aria-describedby={errors.action ? "lead-action-error" : undefined} className={selectClass}>
            <option value="" className="text-slate-900">Selecciona una opción</option>
            {leadActions.map((item) => <option key={item} value={item} className="text-slate-900">{actionLabels[item]}</option>)}
          </select>
          <SelectChevron />
        </div>
        {errors.action && <p id="lead-action-error" className="mt-1 text-sm text-red-300">{errors.action}</p>}
      </div>

      <div className="min-w-0 sm:col-span-2">
        <label htmlFor="lead-opportunityType" className="block text-sm font-medium leading-5 text-white/85">¿Qué tipo de oportunidad? *</label>
        <div className="relative mt-2">
          <select id="lead-opportunityType" name="opportunityType" required value={opportunityType} disabled={pending} onChange={(event) => { const value = event.target.value as OpportunityType | ""; setOpportunityType(value); if (value) trackEvent("lead_category_selected", { action: action || "sin_definir", opportunity_type: value, source }); }} aria-invalid={!!errors.opportunityType} aria-describedby={errors.opportunityType ? "lead-opportunityType-error" : undefined} className={selectClass}>
            <option value="" className="text-slate-900">Selecciona una opción</option>
            {opportunityTypes.map((item) => <option key={item} value={item} className="text-slate-900">{item}</option>)}
          </select>
          <SelectChevron />
        </div>
        {errors.opportunityType && <p id="lead-opportunityType-error" className="mt-1 text-sm text-red-300">{errors.opportunityType}</p>}
      </div>

      {opportunityType === "Otra" && <Field name="customOpportunityType" label="Especifica qué tipo de oportunidad *" required pending={pending} error={errors.customOpportunityType} className="sm:col-span-2" />}
      <Field name="fullName" label="Nombre *" autoComplete="name" required minLength={3} maxLength={120} pending={pending} error={errors.fullName} />
      <Field name="city" label="Ciudad *" autoComplete="address-level2" required minLength={2} maxLength={120} pending={pending} error={errors.city} />
      <Field name="valueRange" label="Rango de valor" placeholder="Ej. Entre $100 y $300 millones" maxLength={120} pending={pending} error={errors.valueRange} className="sm:col-span-2" />

      <div className="min-w-0 sm:col-span-2">
        <label htmlFor="lead-message" className="block text-sm font-medium leading-5 text-white/85">Descripción breve *</label>
        <textarea id="lead-message" name="message" required minLength={10} maxLength={2000} rows={4} disabled={pending} aria-invalid={!!errors.message} aria-describedby={errors.message ? "lead-message-error" : undefined} className={`${inputClass} min-h-28 resize-y`} />
        {errors.message && <p id="lead-message-error" className="mt-1 text-sm text-red-300">{errors.message}</p>}
      </div>

      <Field name="phone" label="Teléfono / WhatsApp *" type="tel" autoComplete="tel" required minLength={7} maxLength={30} pending={pending} error={errors.phone} />
      <Field name="email" label="Correo *" type="email" autoComplete="email" required maxLength={160} pending={pending} error={errors.email} />

      <div className="hidden" aria-hidden="true"><label htmlFor="lead-website">Website</label><input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={2000} /></div>
      <p className="text-xs leading-5 text-white/50 sm:col-span-2">Al enviar tus datos confirmas que has leído la <Link href="/politica-de-privacidad" className="underline underline-offset-2 hover:text-white">Política de Privacidad</Link> y los <Link href="/terminos-y-condiciones" className="underline underline-offset-2 hover:text-white">Términos y Condiciones</Link>.</p>
      <button disabled={pending || !action} className="min-h-12 w-full rounded-full bg-[#1668ff] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#347cff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68a0ff] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2">{pending ? "Enviando…" : action ? submitLabels[action] : "Selecciona qué quieres hacer"}</button>
      {feedback && <p role={feedback.ok ? "status" : "alert"} className={`rounded-xl p-3 text-sm sm:col-span-2 ${feedback.ok ? "bg-emerald-400/10 text-emerald-200" : "bg-red-400/10 text-red-200"}`}>{feedback.message}</p>}
    </form>
  );
}

type FieldProps = { name: keyof LeadInput; label: string; type?: string; autoComplete?: string; placeholder?: string; required?: boolean; minLength?: number; maxLength?: number; pending: boolean; error?: string; className?: string };

function Field({ name, label, type = "text", autoComplete, placeholder, required, minLength, maxLength, pending, error, className = "" }: FieldProps) {
  const id = `lead-${name}`;
  return <div className={`min-w-0 ${className}`}><label htmlFor={id} className="block text-sm font-medium leading-5 text-white/85">{label}</label><input id={id} name={name} type={type} autoComplete={autoComplete} placeholder={placeholder} required={required} minLength={minLength} maxLength={maxLength} disabled={pending} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className={inputClass} />{error && <p id={`${id}-error`} className="mt-1 text-sm text-red-300">{error}</p>}</div>;
}

function SelectChevron() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#68a0ff]"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
