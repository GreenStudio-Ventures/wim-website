import type { Metadata } from "next";
import Link from "next/link";

import type { Locale } from "@/lib/site-config";

export const notFoundMetadata: Metadata = {
  title: "404 | WIM",
  robots: {
    index: false,
    follow: false,
  },
};

const copy = {
  es: {
    title: "Página no encontrada",
    description: "La ruta que buscas no existe o fue movida a una versión localizada del sitio.",
    action: "Volver al inicio",
    href: "/es/co",
  },
  en: {
    title: "Page not found",
    description: "The route you are looking for does not exist or moved to a localized version of the site.",
    action: "Back to home",
    href: "/en/us",
  },
} as const satisfies Record<Locale, { title: string; description: string; action: string; href: string }>;

export function NotFoundPage({ locale }: { locale: Locale }) {
  const entry = copy[locale];

  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <span className="eyebrow-label">404</span>
        <h1>{entry.title}</h1>
        <p>{entry.description}</p>
        <Link href={entry.href} className="nav-button">
          {entry.action}
        </Link>
      </div>
    </main>
  );
}
