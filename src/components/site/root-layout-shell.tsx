import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import { getGlobalSeoSchemas, siteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "WIM",
  title: "WIM — Bill by WIM",
  description:
    "WIM convierte facturas de mayoristas Microsoft (TD SYNNEX, CSP) en facturas listas para tu cliente, con proración y división por NIT.",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    siteName: "WIM",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export function RootLayoutShell({
  children,
  lang,
}: Readonly<{ children: React.ReactNode; lang: "en" | "es" }>) {
  const schemas = getGlobalSeoSchemas();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
