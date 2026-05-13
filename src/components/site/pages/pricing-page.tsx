import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon } from "@/components/site/icons";
import { Reveal } from "@/components/site/reveal";
import { getSiteCopy } from "@/lib/site-copy";
import { createMarketMetadata } from "@/lib/seo";
import type { Country, Locale } from "@/lib/site-config";

export function getPricingMetadata(locale: Locale, country: Country): Metadata {
  const copy = getSiteCopy(locale, country);

  return createMarketMetadata({
    locale,
    country,
    path: "pricing",
    title: copy.meta.pricingTitle,
    description: copy.pricing.description,
  });
}

export function PricingPageContent({ locale, country }: { locale: Locale; country: Country }) {
  const copy = getSiteCopy(locale, country);

  return (
    <main>
      <section className="section-block pricing-hero-section">
        <div className="page-shell pricing-hero-shell">
          <Reveal className="section-heading section-heading-left">
            <span className="section-kicker">{copy.pricing.eyebrow}</span>
            <h1 className="hero-title pricing-title">{copy.pricing.title}</h1>
            <p>{copy.pricing.description}</p>
            <small className="section-note">{copy.pricing.note}</small>
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="page-shell">
          <div className="pricing-grid">
            {copy.pricing.cards.map((plan, index) => {
              const href = plan.featured || plan.name === "Scale" ? copy.links.sales : copy.links.start;

              return (
                <Reveal
                  key={plan.name}
                  className={`pricing-card grain-surface ${plan.featured ? "pricing-card-featured" : ""}`}
                  delay={index * 0.05}
                >
                  <div className="pricing-card-head">
                    <div>
                      <span className="eyebrow-label">{plan.name}</span>
                      {plan.featured ? <span className="surface-chip surface-chip-dark">{copy.pricing.mostPopular}</span> : null}
                    </div>
                    <strong>{plan.priceLabel}</strong>
                  </div>
                  <p>{plan.description}</p>
                  <ul className="plan-feature-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <CheckIcon className="bullet-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={href} className={`nav-button ${plan.featured ? "" : "nav-button-secondary"}`}>
                    {plan.cta}
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="page-shell">
          <Reveal className="enterprise-card grain-surface">
            <div>
              <span className="section-kicker">Scale</span>
              <h2>{copy.pricing.enterpriseTitle}</h2>
              <p>{copy.pricing.enterpriseDescription}</p>
            </div>
            <a href={copy.links.sales} className="nav-button">
              <span>{copy.pricing.enterpriseCta}</span>
              <ArrowRightIcon className="button-icon" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="cta-band-section">
        <div className="page-shell">
          <Reveal className="cta-band grain-surface wim-cta-band">
            <div>
              <span className="section-kicker">{copy.ctaBand.eyebrow}</span>
              <h2>{copy.ctaBand.title}</h2>
              <p>{copy.ctaBand.description}</p>
            </div>
            <div className="hero-actions cta-actions">
              <a href={copy.links.start} className="nav-button">
                <span>{copy.ctaBand.primaryCta}</span>
                <ArrowRightIcon className="button-icon" />
              </a>
              <Link href={copy.links.home} className="nav-button nav-button-secondary">
                {locale === "es" ? "Volver al home" : "Back home"}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
