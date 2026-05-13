import Link from "next/link";

import { CookiePreferencesButton } from "@/components/site/cookie-preferences-button";
import { getCookieUiCopy } from "@/lib/cookie-consent";
import { getCompanyProfile, getLegalLinkItems } from "@/lib/legal-content";
import { buildMarketHref, type Country, type Locale } from "@/lib/site-config";
import type { SiteCopy } from "@/lib/site-copy";

type SiteFooterProps = {
  locale: Locale;
  country: Country;
  copy: SiteCopy;
};

export function SiteFooter({ locale, country, copy }: SiteFooterProps) {
  const cookieCopy = getCookieUiCopy(locale);
  const company = getCompanyProfile(locale);
  const legalLinks = getLegalLinkItems(locale);

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-brand-block">
          <h3>WIM</h3>
          <p>{copy.footer.tagline}</p>
          <p className="footer-brand-attribution">{company.brandAttribution}</p>
          <p className="footer-brand-studio">{company.studioTagline}</p>
          <div className="footer-market-note">
            <span>{copy.market.flag}</span>
            <span>{copy.market.marketSummary[locale]}</span>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h4>{copy.footer.product}</h4>
            <Link href={`${buildMarketHref(locale, country)}#modules`}>{copy.navigation.modules}</Link>
            <Link href={buildMarketHref(locale, country, "pricing")}>{copy.navigation.pricing}</Link>
            <Link href={buildMarketHref(locale, country, "docs")}>{copy.navigation.docs}</Link>
          </div>

          <div>
            <h4>{copy.footer.providers}</h4>
            {copy.providers.entries.map((provider) => (
              <Link key={provider.id} href={`${buildMarketHref(locale, country)}#providers`}>
                {provider.label}
              </Link>
            ))}
          </div>

          <div>
            <h4>{copy.footer.company}</h4>
            <strong className="footer-column-title">{company.studioName}</strong>
            <span className="footer-company-location">{company.location}</span>
            {company.capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
            <a href={copy.links.login}>{copy.navigation.signIn}</a>
            <a href={copy.links.sales}>{copy.pricing.enterpriseCta}</a>
            <a href={company.supportHref} target="_blank" rel="noreferrer">
              {company.supportLabel}: {company.supportPhone}
            </a>
          </div>

          <div>
            <h4>{copy.footer.legal}</h4>
            {legalLinks.map((item) => (
              <Link key={item.slug} href={buildMarketHref(locale, country, item.slug)}>
                {item.label}
              </Link>
            ))}
            <CookiePreferencesButton label={cookieCopy.preferencesCta} className="footer-cookie-button footer-cookie-button-inline" />
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <span>{copy.footer.rights}</span>
        <CookiePreferencesButton label={cookieCopy.preferencesCta} className="footer-cookie-button" />
        <span>{copy.market.supportZone[locale]}</span>
      </div>
    </footer>
  );
}
