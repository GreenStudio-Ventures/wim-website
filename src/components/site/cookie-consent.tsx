"use client";

import { useEffect, useState } from "react";

import { CloseIcon } from "@/components/site/icons";
import {
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_CONSENT_COOKIE_NAME,
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_MAX_AGE,
  getCookieUiCopy,
  type CookieConsentRecord,
  type CookiePreferences,
  type CookieRegulationMode,
} from "@/lib/cookie-consent";
import type { Locale } from "@/lib/site-config";

type CookieConsentProps = {
  locale: Locale;
  regulationMode: CookieRegulationMode;
  visitorCountryCode: string;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function readCookieValue(name: string) {
  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));

  return cookie ? cookie.slice(name.length + 1) : null;
}

function parseConsentCookie(rawValue: string | null): CookieConsentRecord | null {
  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(rawValue)) as Partial<CookieConsentRecord>;

    if (
      parsed.version !== 1 ||
      parsed.necessary !== true ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.marketing !== "boolean" ||
      (parsed.mode !== "strict" && parsed.mode !== "notice") ||
      typeof parsed.region !== "string" ||
      typeof parsed.updatedAt !== "string"
    ) {
      return null;
    }

    return parsed as CookieConsentRecord;
  } catch {
    return null;
  }
}

function writeConsentCookie(record: CookieConsentRecord) {
  document.cookie = [
    `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(record))}`,
    `Max-Age=${COOKIE_CONSENT_MAX_AGE}`,
    "Path=/",
    "SameSite=Lax",
  ].join("; ");
}

function emitConsentChange(record: CookieConsentRecord) {
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_CHANGE_EVENT, {
      detail: record,
    }),
  );
}

export function CookieConsent({ locale, regulationMode, visitorCountryCode }: CookieConsentProps) {
  const copy = getCookieUiCopy(locale);
  const [ready, setReady] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [hasSavedChoice, setHasSavedChoice] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const storedConsent = parseConsentCookie(readCookieValue(COOKIE_CONSENT_COOKIE_NAME));

      if (storedConsent) {
        setPreferences({
          necessary: true,
          analytics: storedConsent.analytics,
          marketing: storedConsent.marketing,
        });
        setHasSavedChoice(true);
        emitConsentChange(storedConsent);
      } else {
        setBannerVisible(true);
      }

      setReady(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const openPreferences = () => setPanelOpen(true);

    window.addEventListener(COOKIE_CONSENT_EVENT, openPreferences);

    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, openPreferences);
  }, []);

  useEffect(() => {
    if (!panelOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPanelOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [panelOpen]);

  const savePreferences = (nextPreferences: CookiePreferences) => {
    const record: CookieConsentRecord = {
      ...nextPreferences,
      mode: regulationMode,
      region: visitorCountryCode,
      updatedAt: new Date().toISOString(),
      version: 1,
    };

    writeConsentCookie(record);
    emitConsentChange(record);
    setPreferences(nextPreferences);
    setHasSavedChoice(true);
    setBannerVisible(false);
    setPanelOpen(false);
  };

  const rejectOptional = () =>
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });

  const acceptAll = () =>
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });

  const togglePreference = (key: "analytics" | "marketing") =>
    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }));

  if (!ready) {
    return null;
  }

  const bannerDescription = regulationMode === "strict" ? copy.strictDescription : copy.noticeDescription;
  const bannerNote = regulationMode === "strict" ? copy.strictNote : copy.noticeNote;
  const badgeLabel = regulationMode === "strict" ? copy.strictBadge : copy.noticeBadge;
  const rejectLabel = regulationMode === "strict" ? copy.buttons.rejectOptional : copy.buttons.keepEssential;

  return (
    <>
      {bannerVisible && !hasSavedChoice ? (
        <section className="cookie-banner grain-surface" aria-label={copy.title}>
          <div className="cookie-banner-copy">
            <div className="cookie-meta-row">
              <span className={`cookie-chip ${regulationMode === "strict" ? "cookie-chip-strict" : ""}`}>
                {badgeLabel}
              </span>
            </div>
            <h2>{copy.title}</h2>
            <p>{bannerDescription}</p>
          </div>

          <div className="cookie-banner-actions">
            <button type="button" className="cookie-action-button" onClick={rejectOptional}>
              {rejectLabel}
            </button>
            <button type="button" className="cookie-action-link" onClick={() => setPanelOpen(true)}>
              {copy.buttons.customize}
            </button>
            <button type="button" className="cookie-action-button cookie-action-button-primary" onClick={acceptAll}>
              {copy.buttons.acceptAll}
            </button>
          </div>
        </section>
      ) : null}

      {panelOpen ? (
        <div className="cookie-modal-shell">
          <button
            type="button"
            className="cookie-modal-backdrop"
            aria-label={copy.buttons.close}
            onClick={() => setPanelOpen(false)}
          />

          <section className="cookie-modal grain-surface" role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title">
            <div className="cookie-modal-head">
              <div className="cookie-modal-copy">
                <div className="cookie-meta-row">
                  <span className={`cookie-chip ${regulationMode === "strict" ? "cookie-chip-strict" : ""}`}>
                    {badgeLabel}
                  </span>
                </div>
                <h2 id="cookie-modal-title">{copy.title}</h2>
                <p>{bannerDescription}</p>
              </div>

              <button
                type="button"
                className="cookie-close-button"
                aria-label={copy.buttons.close}
                onClick={() => setPanelOpen(false)}
              >
                <CloseIcon className="nav-icon" />
              </button>
            </div>

            <p className="cookie-caption">{bannerNote}</p>

            <div className="cookie-option-grid">
              <article className="cookie-option">
                <div className="cookie-option-copy">
                  <strong>{copy.categories.necessary.title}</strong>
                  <p>{copy.categories.necessary.description}</p>
                </div>
                <span className="cookie-lock-chip">{copy.categories.necessary.alwaysOn}</span>
              </article>

              <article className="cookie-option">
                <div className="cookie-option-copy">
                  <strong>{copy.categories.analytics.title}</strong>
                  <p>{copy.categories.analytics.description}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={preferences.analytics}
                  className={`cookie-switch ${preferences.analytics ? "is-on" : ""}`}
                  onClick={() => togglePreference("analytics")}
                >
                  <span className="cookie-switch-thumb" />
                </button>
              </article>

              <article className="cookie-option">
                <div className="cookie-option-copy">
                  <strong>{copy.categories.marketing.title}</strong>
                  <p>{copy.categories.marketing.description}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={preferences.marketing}
                  className={`cookie-switch ${preferences.marketing ? "is-on" : ""}`}
                  onClick={() => togglePreference("marketing")}
                >
                  <span className="cookie-switch-thumb" />
                </button>
              </article>
            </div>

            <div className="cookie-modal-actions">
              <button type="button" className="cookie-action-button" onClick={rejectOptional}>
                {rejectLabel}
              </button>
              <button type="button" className="nav-button" onClick={() => savePreferences(preferences)}>
                {copy.buttons.save}
              </button>
              <button type="button" className="cookie-action-button cookie-action-button-primary" onClick={acceptAll}>
                {copy.buttons.acceptAll}
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
