import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import LeadTable from "@/components/admin/LeadTable";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  // Check beside the query as layouts may be reused during client navigation.
  await requireAdmin();
  const leads = await prisma.lead.findMany({
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    select: { id: true, fullName: true, phone: true, email: true, message: true, status: true, createdAt: true },
  });
  return <>
    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Leads</h1>
    <p className="mb-8 mt-3 text-slate-500">Prospectos recibidos desde el formulario del sitio web.</p>
    <LeadTable leads={leads.map((lead) => ({ ...lead, createdAt: lead.createdAt.toISOString() }))} />
  </>;
}
