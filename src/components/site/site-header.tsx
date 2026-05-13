"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ArrowRightIcon,
  CloseIcon,
  GlobeIcon,
  MenuIcon,
} from "@/components/site/icons";
import {
  buildMarketHref,
  locales,
  type Country,
  type Locale,
} from "@/lib/site-config";
import type { SiteCopy } from "@/lib/site-copy";

type SiteHeaderProps = {
  locale: Locale;
  country: Country;
  copy: SiteCopy;
};

export function SiteHeader({ locale, country, copy }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const restPath = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length <= 2) return "";
    return segments.slice(2).join("/");
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  const homeHref = buildMarketHref(locale, country);
  const modulesHref = `${homeHref}#modules`;
  const providersHref = `${homeHref}#providers`;
  const pricingHref = buildMarketHref(locale, country, "pricing");

  const localeHref = (nextLocale: Locale) => buildMarketHref(nextLocale, country, restPath);

  useEffect(() => {
    if (!menuOpen) return;

    const { body, documentElement } = document;
    const originalBodyOverflow = body.style.overflow;
    const originalHtmlOverflow = documentElement.style.overflow;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    return () => {
      body.style.overflow = originalBodyOverflow;
      documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <div className="nav-brand-row">
            <Link href={homeHref} className="nav-brand" aria-label="WIM home">
              <Image src="/logo.svg" alt="WIM" width={120} height={32} priority />
            </Link>

            <nav className="nav-primary" aria-label="Primary">
              <Link href={modulesHref} className="nav-link">
                {copy.navigation.modules}
              </Link>
              <Link href={providersHref} className="nav-link">
                {copy.navigation.providers}
              </Link>
              <Link href={pricingHref} className="nav-link">
                {copy.navigation.pricing}
              </Link>
            </nav>
          </div>

          <div className="header-controls">
            <div className="toggle-stack desktop-only">
              <div className="toggle-group" aria-label={copy.navigation.languages}>
                <GlobeIcon className="toggle-icon" />
                {locales.map((language) => (
                  <Link
                    key={language}
                    href={localeHref(language)}
                    className={`toggle-link ${language === locale ? "is-active" : ""}`}
                  >
                    {language.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            <a href={copy.links.login} className="nav-link desktop-only">
              {copy.navigation.signIn}
            </a>
            <a href={copy.links.start} className="nav-button desktop-only wim-cta-primary">
              <span>{copy.navigation.start}</span>
              <ArrowRightIcon className="button-icon" />
            </a>

            <button
              type="button"
              className="mobile-menu-button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? copy.navigation.close : copy.navigation.menu}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <CloseIcon className="nav-icon" /> : <MenuIcon className="nav-icon" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? <button type="button" className="mobile-backdrop" onClick={closeMenu} /> : null}

      <aside className={`mobile-sheet ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-sheet-panel">
          <div className="mobile-sheet-head">
            <strong>{copy.navigation.menu}</strong>
            <button type="button" className="mobile-close-button" onClick={closeMenu}>
              <CloseIcon className="nav-icon" />
            </button>
          </div>

          <div className="mobile-sheet-body">
            <div className="mobile-nav-group">
              <Link href={modulesHref} className="mobile-nav-link" onClick={closeMenu}>
                {copy.navigation.modules}
              </Link>
              <Link href={providersHref} className="mobile-nav-link" onClick={closeMenu}>
                {copy.navigation.providers}
              </Link>
              <Link href={pricingHref} className="mobile-nav-link" onClick={closeMenu}>
                {copy.navigation.pricing}
              </Link>
            </div>

            <div className="mobile-nav-group">
              <span className="mobile-nav-label">{copy.navigation.languages}</span>
              <div className="toggle-group">
                {locales.map((language) => (
                  <Link
                    key={language}
                    href={localeHref(language)}
                    className={`toggle-link ${language === locale ? "is-active" : ""}`}
                    onClick={closeMenu}
                  >
                    {language.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mobile-nav-actions">
              <a href={copy.links.login} className="nav-link" onClick={closeMenu}>
                {copy.navigation.signIn}
              </a>
              <a href={copy.links.start} className="nav-button nav-button-block" onClick={closeMenu}>
                <span>{copy.navigation.start}</span>
                <ArrowRightIcon className="button-icon" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
