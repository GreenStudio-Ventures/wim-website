import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/site/icons";
import { Reveal } from "@/components/site/reveal";
import {
  getCompanyProfile,
  getLegalLinkItems,
  getLegalPageContent,
  type LegalPageSlug,
} from "@/lib/legal-content";
import { createMarketMetadata } from "@/lib/seo";
import { buildMarketHref, type Country, type Locale } from "@/lib/site-config";

type LegalPageContentProps = {
  locale: Locale;
  country: Country;
  slug: LegalPageSlug;
};

export function getLegalMetadata(locale: Locale, country: Country, slug: LegalPageSlug): Metadata {
  const entry = getLegalPageContent(locale, slug);

  return createMarketMetadata({
    locale,
    country,
    path: slug,
    title: entry.metaTitle,
    description: entry.metaDescription,
    type: "article",
  });
}

export function LegalPageContent({ locale, country, slug }: LegalPageContentProps) {
  const entry = getLegalPageContent(locale, slug);
  const company = getCompanyProfile(locale);
  const legalLinks = getLegalLinkItems(locale);
  const homeLabel = locale === "es" ? "Volver al inicio" : "Back home";
  const quickNavLabel = locale === "es" ? "Más páginas legales" : "More legal pages";
  const companyLabel = locale === "es" ? "Empresa detrás de WIM" : "Company behind WIM";
  const capabilitiesLabel = locale === "es" ? "Qué hace GreenStudio" : "What GreenStudio does";

  return (
    <main>
      <section className="section-block pricing-hero-section legal-page-hero">
        <div className="page-shell">
          <Reveal className="section-heading section-heading-left">
            <Link href={buildMarketHref(locale, country)} className="inline-link inline-link-muted">
              {homeLabel}
            </Link>
            <span className="section-kicker">{entry.eyebrow}</span>
            <h1 className="hero-title pricing-title">{entry.title}</h1>
            <p>{entry.intro}</p>
            <small className="section-note">
              {locale === "es" ? "Última actualización" : "Last updated"}: {entry.updatedAt}
            </small>
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="page-shell legal-page-grid">
          <div className="legal-content-stack">
            {entry.sections.map((section, index) => (
              <Reveal key={section.title} className="legal-article grain-surface" delay={index * 0.04}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="bullet-list compact-bullets legal-bullet-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <ArrowRightIcon className="bullet-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}
          </div>

          <div className="legal-sidebar">
            <Reveal className="legal-side-card grain-surface">
              <span className="eyebrow-label">{companyLabel}</span>
              <h3>{company.studioName}</h3>
              <p>{company.brandAttribution}</p>
              <p>{company.studioTagline}</p>
              <p className="legal-company-location">{company.location}</p>
            </Reveal>

            <Reveal className="legal-side-card grain-surface" delay={0.04}>
              <span className="eyebrow-label">{capabilitiesLabel}</span>
              <div className="legal-pill-stack">
                {company.capabilities.map((capability) => (
                  <span key={capability} className="surface-chip surface-chip-soft">
                    {capability}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="legal-side-card grain-surface" delay={0.08}>
              <span className="eyebrow-label">{locale === "es" ? "Datos corporativos" : "Corporate details"}</span>
              <div className="legal-fact-stack">
                {company.facts.map((fact) => (
                  <div key={fact.label} className="legal-fact-row">
                    <strong>{fact.label}</strong>
                    <span>{fact.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="legal-side-card grain-surface" delay={0.12}>
              <span className="eyebrow-label">{company.supportLabel}</span>
              <h3>{company.supportPhone}</h3>
              <a href={company.supportHref} className="nav-button nav-button-block" target="_blank" rel="noreferrer">
                <span>{company.talkLabel}</span>
                <ArrowRightIcon className="button-icon" />
              </a>
            </Reveal>

            <Reveal className="legal-side-card grain-surface" delay={0.16}>
              <span className="eyebrow-label">{quickNavLabel}</span>
              <div className="legal-link-stack">
                {legalLinks.map((item) => (
                  <Link
                    key={item.slug}
                    href={buildMarketHref(locale, country, item.slug)}
                    className={`legal-link-card ${item.slug === slug ? "is-active" : ""}`}
                  >
                    <strong>{item.label}</strong>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
