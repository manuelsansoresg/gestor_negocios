import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gestordenegocios.com"),

  title: {
    default: "Gestor de Negocios en Tuluá | David Aldana",
    template: "%s | David Aldana",
  },

  description:
    "David Aldana, gestor de negocios en Tuluá, Valle del Cauca. Te ayudo a comprar, vender o conectar oportunidades de negocio, inmuebles, empresas, franquicias, maquinaria, vehículos y más.",

  keywords: [
    "gestor de negocios en Tuluá",
    "gestor de negocios Tuluá",
    "gestor de negocios Valle del Cauca",
    "gestor de negocios Colombia",
    "comprar negocios en Tuluá",
    "vender negocios en Tuluá",
    "negocios en Tuluá",
    "oportunidades de negocio Tuluá",
    "venta de empresas Tuluá",
    "compra de empresas Tuluá",
    "inversionistas Tuluá",
    "inversionistas Valle del Cauca",
    "inmuebles Tuluá",
    "franquicias Tuluá",
    "maquinaria Tuluá",
    "negocios Valle del Cauca",
    "David Aldana gestor de negocios",
  ],

  authors: [
    {
      name: "David Aldana",
    },
  ],

  creator: "David Aldana",
  publisher: "David Aldana",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Gestor de Negocios en Tuluá | David Aldana",
    description:
      "Compra, vende o encuentra oportunidades de negocio en Tuluá y Valle del Cauca. Conexión comercial con compradores, vendedores e inversionistas.",
    url: "https://gestordenegocios.com",
    siteName: "David Aldana - Gestor de Negocios",
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gestor de Negocios en Tuluá | David Aldana",
    description:
      "Compra, vende o conecta oportunidades de negocio en Tuluá, Valle del Cauca.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}