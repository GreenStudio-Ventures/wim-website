"use client";

import { COOKIE_CONSENT_EVENT } from "@/lib/cookie-consent";

type CookiePreferencesButtonProps = {
  label: string;
  className?: string;
};

export function CookiePreferencesButton({ label, className }: CookiePreferencesButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))}
    >
      {label}
    </button>
  );
}
