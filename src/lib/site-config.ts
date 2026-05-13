export const locales = ["es", "en"] as const;
export const countries = ["co", "us"] as const;

export type Locale = (typeof locales)[number];
export type Country = (typeof countries)[number];
export type Localized<T> = Record<Locale, T>;

export type CountrySettings = {
  code: string;
  flag: string;
  label: Localized<string>;
  marketBadge: Localized<string>;
  marketSummary: Localized<string>;
  heroHighlights: Localized<string[]>;
  supportZone: Localized<string>;
};

export const countrySettings: Record<Country, CountrySettings> = {
  co: {
    code: "CO",
    flag: "🇨🇴",
    label: {
      es: "Colombia",
      en: "Colombia",
    },
    marketBadge: {
      es: "Hecho para resellers Microsoft en Colombia y LATAM.",
      en: "Built for Microsoft resellers in Colombia and LatAm.",
    },
    marketSummary: {
      es: "Conecta TD SYNNEX y CSP directo, factura en COP/USD con TRM, y sincroniza con Siigo.",
      en: "Connect TD SYNNEX and direct CSP, bill in COP/USD with FX, and sync to Siigo.",
    },
    heroHighlights: {
      es: [
        "Proración Microsoft 365",
        "División por NIT",
        "Sync Siigo + DIAN",
      ],
      en: [
        "Microsoft 365 proration",
        "Split by tax ID",
        "Siigo + DIAN sync",
      ],
    },
    supportZone: {
      es: "Soporte y onboarding en GMT-5.",
      en: "Support and onboarding in GMT-5.",
    },
  },
  us: {
    code: "US",
    flag: "🇺🇸",
    label: {
      es: "Estados Unidos",
      en: "United States",
    },
    marketBadge: {
      es: "Para resellers Microsoft que operan entre Estados Unidos y LATAM.",
      en: "For Microsoft resellers operating between the U.S. and LatAm.",
    },
    marketSummary: {
      es: "Factura en USD con conciliación cross-border y consolidación multitenant.",
      en: "Bill in USD with cross-border reconciliation and multi-tenant consolidation.",
    },
    heroHighlights: {
      es: [
        "Multi-tenant CSP",
        "Conciliación USD",
        "Reportes consolidados",
      ],
      en: [
        "Multi-tenant CSP",
        "USD reconciliation",
        "Consolidated reporting",
      ],
    },
    supportZone: {
      es: "Cobertura comercial bilingüe.",
      en: "Bilingual commercial coverage.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isCountry(value: string): value is Country {
  return countries.includes(value as Country);
}

export function getDefaultCountry(locale: Locale): Country {
  return locale === "en" ? "us" : "co";
}

export function getFormatLocale(locale: Locale): string {
  return locale === "es" ? "es-CO" : "en-US";
}

export function formatCopAmount(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(getFormatLocale(locale), {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildMarketHref(locale: Locale, country: Country, path = ""): string {
  const normalizedPath = path.replace(/^\/+/, "");
  return normalizedPath ? `/${locale}/${country}/${normalizedPath}` : `/${locale}/${country}`;
}

export function getMarketParams() {
  return locales.flatMap((locale) => countries.map((country) => ({ locale, country })));
}
