"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { LeadStatus } from "@prisma/client";

export type LeadRow = { id: number; fullName: string; phone: string; email: string; message: string; status: LeadStatus; createdAt: string };
const labels: Record<LeadStatus, string> = {
  NUEVO: "Nuevo", CONTACTADO: "Contactado", INTERESADO: "Interesado", SEGUIMIENTO: "Seguimiento",
  CITA_AGENDADA: "Cita agendada", NO_INTERESADO: "No interesado", CERRADO: "Cerrado", SPAM: "Spam",
};
const initialMessage = "Hola, te contacto de Gestor de Negocios sobre la información que nos enviaste.";

function StatusSelect({ lead }: { lead: LeadRow }) {
  const router = useRouter();
  const locked = useRef(false);
  const [status, setStatus] = useState(lead.status);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(null);

  async function change(next: LeadStatus) {
    if (locked.current) return;
    locked.current = true; setPending(true); setFeedback(null);
    try {
      const response = await fetch(`/api/leads/${lead.id}/status`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: next }) });
      const data = await response.json();
      if (response.status === 401) { router.replace("/admin-login"); router.refresh(); return; }
      if (!response.ok || !data.ok) throw new Error(data.message || "No pudimos guardar el estado.");
      setStatus(next);
      setFeedback({ ok: true, message: "Estado guardado." });
      router.refresh();
    } catch (error) {
      setFeedback({ ok: false, message: error instanceof Error ? error.message : "No pudimos guardar el estado." });
    } finally { locked.current = false; setPending(false); }
  }

  return <div className="min-w-44">
    <label htmlFor={`status-${lead.id}`} className="sr-only">Estado de {lead.fullName}</label>
    <select id={`status-${lead.id}`} value={status} onChange={(event) => change(event.target.value as LeadStatus)} disabled={pending} aria-describedby={feedback ? `status-feedback-${lead.id}` : undefined} className="w-full rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-900 outline-none focus:ring-2 focus:ring-[#1668ff] disabled:opacity-50">
      {Object.entries(labels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
    </select>
    {pending && <p role="status" className="mt-2 text-xs text-slate-500">Guardando…</p>}
    {feedback && <p id={`status-feedback-${lead.id}`} role={feedback.ok ? "status" : "alert"} className={`mt-2 text-xs ${feedback.ok ? "text-emerald-700" : "text-red-700"}`}>{feedback.message}</p>}
  </div>;
}

export default function LeadTable({ leads }: { leads: LeadRow[] }) {
  if (!leads.length) return <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">Todavía no hay prospectos. Aquí aparecerán los formularios recibidos.</div>;
  return (
    <div role="region" aria-label="Prospectos recibidos" tabIndex={0} className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[960px] text-left text-sm text-slate-700">
        <caption className="sr-only">Prospectos ordenados del más reciente al más antiguo. Fechas en hora de Colombia.</caption>
        <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
          <tr>{["Fecha", "Nombre", "Contacto", "Mensaje", "Estado"].map((label) => <th key={label} scope="col" className="px-5 py-4">{label}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {leads.map((lead) => {
            const digits = lead.phone.replace(/\D/g, "");
            return <tr key={lead.id} className="align-top">
              <td className="whitespace-nowrap px-5 py-5"><time dateTime={lead.createdAt}>{new Intl.DateTimeFormat("es-CO", { dateStyle: "medium", timeStyle: "short", timeZone: "America/Bogota" }).format(new Date(lead.createdAt))}</time></td>
              <th scope="row" className="min-w-44 px-5 py-5 font-semibold text-slate-900">{lead.fullName}</th>
              <td className="px-5 py-5">
                <a href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`} className="block text-[#1668ff] hover:underline">{lead.phone}</a>
                <a href={`mailto:${lead.email}`} className="mt-1 block break-all text-[#1668ff] hover:underline">{lead.email}</a>
                {digits && <a href={`https://wa.me/${digits}?text=${encodeURIComponent(initialMessage)}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100">WhatsApp<span className="sr-only"> con {lead.fullName} (abre otra pestaña)</span></a>}
              </td>
              <td className="min-w-64 max-w-md whitespace-pre-wrap break-words px-5 py-5 leading-6">{lead.message}</td>
              <td className="px-5 py-5"><StatusSelect key={`${lead.id}-${lead.status}`} lead={lead} /></td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
