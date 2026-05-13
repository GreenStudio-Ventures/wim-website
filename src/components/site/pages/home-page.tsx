import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon } from "@/components/site/icons";
import { HeroTextCycle } from "@/components/site/hero-text-cycle";
import { Reveal } from "@/components/site/reveal";
import { MediaSlot, ProviderTag, WimFlowDiagram } from "@/components/site/visuals";
import { getSiteCopy } from "@/lib/site-copy";
import { createMarketMetadata } from "@/lib/seo";
import type { Country, Locale } from "@/lib/site-config";

export function getHomeMetadata(locale: Locale, country: Country): Metadata {
  const copy = getSiteCopy(locale, country);

  return createMarketMetadata({
    locale,
    country,
    title: copy.meta.homeTitle,
    description: copy.meta.description,
  });
}

export function HomePageContent({ locale, country }: { locale: Locale; country: Country }) {
  const copy = getSiteCopy(locale, country);

  return (
    <main>
      {/* HERO con flow diagram en lugar del panel side-card */}
      <section className="hero-section wim-hero">
        <div className="page-shell wim-hero-shell">
          <Reveal className="wim-hero-copy">
            <span className="section-kicker wim-kicker">{copy.hero.eyebrow}</span>
            <h1 className="hero-title">{copy.hero.title}</h1>
            <HeroTextCycle label={copy.hero.rotationLabel} items={copy.hero.rotatingPhrases} />
            <p className="hero-subtitle">{copy.hero.subtitle}</p>

            <div className="hero-actions">
              <a href={copy.links.start} className="nav-button wim-cta-primary">
                <span>{copy.hero.primaryCta}</span>
                <ArrowRightIcon className="button-icon" />
              </a>
              <Link href={copy.links.pricing} className="nav-button nav-button-secondary">
                {copy.hero.secondaryCta}
              </Link>
            </div>

            <p className="wim-trust-chip">{copy.hero.trustChip}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <WimFlowDiagram steps={copy.hero.flowSteps} />
          </Reveal>
        </div>
      </section>

      {/* PAIN — qué duele hoy */}
      <section className="section-block alt-surface wim-pain-section">
        <div className="page-shell">
          <Reveal className="section-heading">
            <span className="section-kicker wim-kicker-blue">{copy.pain.eyebrow}</span>
            <h2>{copy.pain.title}</h2>
            <p>{copy.pain.description}</p>
          </Reveal>

          <div className="wim-pain-grid">
            {copy.pain.points.map((point, index) => (
              <Reveal key={point.title} className="wim-pain-card" delay={index * 0.05}>
                <span className="wim-pain-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODULOS — overview general */}
      <section id="modules" className="section-block">
        <div className="page-shell">
          <Reveal className="section-heading">
            <span className="section-kicker">{copy.modules.eyebrow}</span>
            <h2>{copy.modules.title}</h2>
            <p>{copy.modules.description}</p>
          </Reveal>

          <div className="feature-grid">
            {copy.modules.cards.map((card, index) => (
              <Reveal key={card.title} className="feature-card grain-surface" delay={index * 0.04}>
                {card.eyebrow ? <span className="eyebrow-label">{card.eyebrow}</span> : null}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRORACION — feature destacado con video slot */}
      <section className="section-block alt-surface wim-feature-deep">
        <div className="page-shell split-section">
          <Reveal className="split-copy">
            <span className="section-kicker">{copy.proration.eyebrow}</span>
            <h2>{copy.proration.title}</h2>
            <p>{copy.proration.description}</p>
            <ul className="bullet-list">
              {copy.proration.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckIcon className="bullet-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <MediaSlot
              kind={copy.proration.media.kind}
              label={copy.proration.media.placeholderLabel}
              caption={copy.proration.media.caption}
              accent="green"
            />
          </Reveal>
        </div>
      </section>

      {/* SPLIT-BILL — feature destacado con image slot */}
      <section className="section-block wim-feature-deep">
        <div className="page-shell split-section split-section-flip">
          <Reveal className="split-copy">
            <span className="section-kicker wim-kicker-blue">{copy.splitBill.eyebrow}</span>
            <h2>{copy.splitBill.title}</h2>
            <p>{copy.splitBill.description}</p>
            <ul className="bullet-list">
              {copy.splitBill.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckIcon className="bullet-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <MediaSlot
              kind={copy.splitBill.media.kind}
              label={copy.splitBill.media.placeholderLabel}
              caption={copy.splitBill.media.caption}
              accent="blue"
            />
          </Reveal>
        </div>
      </section>

      {/* PROVEEDORES */}
      <section id="providers" className="section-block alt-surface">
        <div className="page-shell">
          <Reveal className="section-heading">
            <span className="section-kicker">{copy.providers.eyebrow}</span>
            <h2>{copy.providers.title}</h2>
            <p>{copy.providers.description}</p>
          </Reveal>

          <div className="wim-providers-grid">
            {copy.providers.entries.map((entry, index) => (
              <Reveal key={entry.id} className="wim-provider-card grain-surface" delay={index * 0.04}>
                <header className="wim-provider-head">
                  <strong>{entry.label}</strong>
                  <ProviderTag
                    status={entry.status}
                    label={entry.status === "live" ? copy.providers.liveLabel : copy.providers.soonLabel}
                  />
                </header>
                <span className="eyebrow-label">{entry.eyebrow}</span>
                <p>{entry.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIIGO — cierre del flow */}
      <section className="section-block wim-feature-deep">
        <div className="page-shell split-section">
          <Reveal className="split-copy">
            <span className="section-kicker">{copy.siigo.eyebrow}</span>
            <h2>{copy.siigo.title}</h2>
            <p>{copy.siigo.description}</p>
            <ul className="bullet-list">
              {copy.siigo.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckIcon className="bullet-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <MediaSlot
              kind={copy.siigo.media.kind}
              label={copy.siigo.media.placeholderLabel}
              caption={copy.siigo.media.caption}
              accent="green"
            />
          </Reveal>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section-block alt-surface">
        <div className="page-shell">
          <Reveal className="section-heading">
            <span className="section-kicker">{copy.pricing.eyebrow}</span>
            <h2>{copy.pricing.title}</h2>
            <p>{copy.pricing.description}</p>
            <small className="section-note">{copy.pricing.note}</small>
          </Reveal>

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

      {/* CTA BAND */}
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
              <a href={copy.links.sales} className="nav-button nav-button-secondary">
                {copy.ctaBand.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
