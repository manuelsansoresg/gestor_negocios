import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth";
import LogoutButton from "@/components/admin/LogoutButton";

export const metadata: Metadata = { title: "Administración", robots: { index: false, follow: false }, alternates: { canonical: "/admin/leads" } };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return <div className="min-h-[75vh] bg-slate-50 px-4 py-10 text-slate-900 sm:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1668ff]">Administración</p>
        <LogoutButton />
      </div>
      {children}
    </div>
  </div>;
}
