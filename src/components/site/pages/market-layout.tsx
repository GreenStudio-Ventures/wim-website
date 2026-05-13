import type { ReactNode } from "react";
import { headers } from "next/headers";

import { CookieConsent } from "@/components/site/cookie-consent";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WhatsAppFloatingButton } from "@/components/site/whatsapp-floating-button";
import { getCookieRegulationMode, resolveVisitorCountryCode } from "@/lib/cookie-consent";
import { getSiteCopy } from "@/lib/site-copy";
import type { Country, Locale } from "@/lib/site-config";

type MarketLayoutShellProps = {
  locale: Locale;
  country: Country;
  children: ReactNode;
};

export async function MarketLayoutShell({ locale, country, children }: MarketLayoutShellProps) {
  const copy = getSiteCopy(locale, country);
  const requestHeaders = await headers();
  const visitorCountryCode = resolveVisitorCountryCode(
    requestHeaders.get("cf-ipcountry") ?? requestHeaders.get("x-vercel-ip-country"),
    country,
  );
  const regulationMode = getCookieRegulationMode(visitorCountryCode);

  return (
    <>
      <SiteHeader locale={locale} country={country} copy={copy} />
      {children}
      <SiteFooter locale={locale} country={country} copy={copy} />
      <WhatsAppFloatingButton locale={locale} />
      <CookieConsent locale={locale} regulationMode={regulationMode} visitorCountryCode={visitorCountryCode} />
    </>
  );
}
