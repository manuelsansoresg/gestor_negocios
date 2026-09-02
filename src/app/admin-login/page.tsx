import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import LoginForm from "@/components/forms/LoginForm";

export const metadata: Metadata = { title: "Panel administrativo", robots: { index: false, follow: false }, alternates: { canonical: "/admin-login" } };

export default async function AdminLoginPage() {
  if (await getSession()) redirect("/admin/leads");
  return <div className="flex min-h-[75vh] items-center justify-center bg-[#05070b] px-6 py-16">
    <section className="w-full max-w-md rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1668ff]">Gestor de Negocios</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Panel administrativo</h1>
      <p className="mt-3 text-sm leading-6 text-slate-500">Ingresa con tu cuenta para gestionar los prospectos.</p>
      <LoginForm />
      <Link href="/" className="mt-6 block text-center text-sm text-[#1668ff] hover:underline">Volver al sitio</Link>
    </section>
  </div>;
}
