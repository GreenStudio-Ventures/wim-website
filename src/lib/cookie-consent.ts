import { countrySettings, type Country, type Locale } from "@/lib/site-config";

export const COOKIE_CONSENT_EVENT = "wim:open-cookie-preferences";
export const COOKIE_CONSENT_CHANGE_EVENT = "wim:cookie-consent-change";
export const COOKIE_CONSENT_COOKIE_NAME = "wim_cookie_consent";
export const COOKIE_CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

export type CookieRegulationMode = "strict" | "notice";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type CookieConsentRecord = CookiePreferences & {
  mode: CookieRegulationMode;
  region: string;
  updatedAt: string;
  version: 1;
};

const strictConsentCountries = new Set([
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "IS",
  "LI",
  "NO",
  "GB",
  "UK",
  "CH",
]);

const cookieUiCopy = {
  es: {
    preferencesCta: "Preferencias de cookies",
    title: "Preferencias de cookies",
    strictBadge: "RGPD / LSSI-CE",
    noticeBadge: "Cookies",
    strictDescription:
      "Usamos cookies necesarias. La analitica y el marketing solo se activan si los permites.",
    noticeDescription:
      "Usamos cookies necesarias. La analitica y el marketing son opcionales.",
    strictNote: "Puedes aceptar, rechazar o ajustar las categorias.",
    noticeNote: "Puedes aceptar, rechazar o ajustar las categorias.",
    buttons: {
      acceptAll: "Aceptar",
      rejectOptional: "Rechazar",
      keepEssential: "Solo necesarias",
      customize: "Configurar",
      save: "Guardar",
      close: "Cerrar",
    },
    categories: {
      necessary: {
        title: "Necesarias",
        description: "Mantienen navegación, idioma y la preferencia de consentimiento.",
        alwaysOn: "Siempre activas",
      },
      analytics: {
        title: "Analítica",
        description: "Nos ayudan a medir qué secciones generan más interacción antes de activar herramientas de medición.",
      },
      marketing: {
        title: "Marketing",
        description: "Permiten medir campañas y coordinar mensajes más relevantes en canales externos.",
      },
    },
  },
  en: {
    preferencesCta: "Cookie preferences",
    title: "Cookie preferences",
    strictBadge: "GDPR / LSSI-CE",
    noticeBadge: "Cookies",
    strictDescription:
      "We use necessary cookies. Analytics and marketing only activate if you allow them.",
    noticeDescription:
      "We use necessary cookies. Analytics and marketing are optional.",
    strictNote: "You can accept, reject, or adjust the categories.",
    noticeNote: "You can accept, reject, or adjust the categories.",
    buttons: {
      acceptAll: "Accept",
      rejectOptional: "Reject",
      keepEssential: "Keep essentials only",
      customize: "Customize",
      save: "Save",
      close: "Close",
    },
    categories: {
      necessary: {
        title: "Necessary",
        description: "They preserve navigation, language, and the stored consent choice.",
        alwaysOn: "Always on",
      },
      analytics: {
        title: "Analytics",
        description: "They help us measure which sections perform best before loading measurement tools.",
      },
      marketing: {
        title: "Marketing",
        description: "They allow campaign measurement and more relevant messaging across external channels.",
      },
    },
  },
} as const;

export function normalizeCountryCode(code?: string | null): string | null {
  if (!code) {
    return null;
  }

  const normalized = code.trim().toUpperCase();

  if (!/^[A-Z]{2}$/.test(normalized) || normalized === "XX") {
    return null;
  }

  return normalized;
}

export function resolveVisitorCountryCode(headerCountry: string | null, marketCountry: Country): string {
  return normalizeCountryCode(headerCountry) ?? countrySettings[marketCountry].code;
}

export function getCookieRegulationMode(countryCode: string): CookieRegulationMode {
  return strictConsentCountries.has(countryCode) ? "strict" : "notice";
}

export function getCookieUiCopy(locale: Locale) {
  return cookieUiCopy[locale];
}
