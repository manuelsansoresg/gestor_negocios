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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W3TP7XW2');
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3TP7XW2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
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
