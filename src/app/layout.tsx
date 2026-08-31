import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: "Gestor de Negocios en Colombia | David Aldana",
    template: "%s | David Aldana",
  },

  description: site.description,

  authors: [
    {
      name: site.ownerName,
      url: site.url,
    },
  ],

  creator: site.ownerName,
  publisher: site.ownerName,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Gestor de Negocios en Colombia | David Aldana",
    description: site.description,
    url: site.url,
    siteName: "David Aldana | Gestor de Negocios",
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Gestor de Negocios en Colombia | David Aldana",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CO"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollReveal />
        <Header />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18375723655"
        strategy="afterInteractive"
      />
      <Script id="google-tag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18375723655');
        `}
      </Script>
    </html>
  );
}
