import type { Metadata } from "next";

import {
  buildMarketHref,
  countrySettings,
  getMarketParams,
  type Country,
  type Locale,
} from "@/lib/site-config";
import { legalPageSlugs } from "@/lib/legal-content";

export const siteUrl = "https://billbywim.com";

const seoKeywords: Record<Locale, string[]> = {
  es: [
    "facturación mayorista Microsoft",
    "facturación TD SYNNEX",
    "facturación CSP",
    "proración Microsoft 365",
    "división de facturas por NIT",
    "sincronización Siigo",
    "software facturación cloud",
    "billing automation Microsoft reseller",
    "WIM",
    "Bill by WIM",
  ],
  en: [
    "Microsoft wholesale invoicing",
    "TD SYNNEX billing",
    "CSP billing automation",
    "Microsoft 365 proration",
    "split-bill by tax ID",
    "Siigo sync",
    "Microsoft reseller billing software",
    "cloud subscription billing",
    "WIM",
    "Bill by WIM",
  ],
};

function normalizePath(path = "") {
  return path.replace(/^\/+/, "");
}

export function buildAbsoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildAbsoluteMarketUrl(locale: Locale, country: Country, path = "") {
  return buildAbsoluteUrl(buildMarketHref(locale, country, path));
}

export function getHrefLang(locale: Locale, country: Country) {
  return `${locale}-${countrySettings[country].code}`;
}

export function getOpenGraphLocale(locale: Locale, country: Country) {
  return `${locale}_${countrySettings[country].code}`;
}

export function getAlternateLocales(currentLocale: Locale, currentCountry: Country) {
  return getMarketParams()
    .filter(({ locale, country }) => locale !== currentLocale || country !== currentCountry)
    .map(({ locale, country }) => getOpenGraphLocale(locale, country));
}

export function getLocalizedAlternates(path = "") {
  const normalizedPath = normalizePath(path);

  return Object.fromEntries(
    getMarketParams().map(({ locale, country }) => [
      getHrefLang(locale, country),
      buildAbsoluteMarketUrl(locale, country, normalizedPath),
    ]),
  );
}

type MarketMetadataInput = {
  locale: Locale;
  country: Country;
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

export function createMarketMetadata({
  locale,
  country,
  title,
  description,
  path = "",
  type = "website",
}: MarketMetadataInput): Metadata {
  const canonical = buildAbsoluteMarketUrl(locale, country, path);
  const alternates = getLocalizedAlternates(path);

  return {
    title,
    description,
    keywords: seoKeywords[locale],
    alternates: {
      canonical,
      languages: {
        ...alternates,
        "x-default": buildAbsoluteUrl("/es/co"),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "WIM",
      type,
      locale: getOpenGraphLocale(locale, country),
      alternateLocale: getAlternateLocales(locale, country),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: locale === "es" ? "software de facturación" : "billing software",
  };
}

export function getGlobalSeoSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "WIM",
      url: siteUrl,
      logo: buildAbsoluteUrl("/logo.svg"),
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "WIM — Bill by WIM",
      url: siteUrl,
      description:
        "Convierte facturas de mayoristas Microsoft (TD SYNNEX, CSP directo) en facturas listas para tus clientes finales — con proración, división por NIT y sincronización Siigo.",
      inLanguage: getMarketParams().map(({ locale, country }) => getHrefLang(locale, country)),
    },
  ];
}

export function getSitemapEntries() {
  const today = new Date();

  const homes = getMarketParams().map(({ locale, country }) => ({
    url: buildAbsoluteMarketUrl(locale, country),
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates: {
      languages: getLocalizedAlternates(),
    },
  }));

  const pricing = getMarketParams().map(({ locale, country }) => ({
    url: buildAbsoluteMarketUrl(locale, country, "pricing"),
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: {
      languages: getLocalizedAlternates("pricing"),
    },
  }));

  const legal = getMarketParams().flatMap(({ locale, country }) =>
    legalPageSlugs.map((slug) => ({
      url: buildAbsoluteMarketUrl(locale, country, slug),
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: {
        languages: getLocalizedAlternates(slug),
      },
    })),
  );

  return [...homes, ...pricing, ...legal];
}
