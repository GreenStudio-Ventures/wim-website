import { WhatsappIcon } from "@/components/site/icons";
import { getCompanyProfile } from "@/lib/legal-content";
import type { Locale } from "@/lib/site-config";

type WhatsAppFloatingButtonProps = {
  locale: Locale;
};

export function WhatsAppFloatingButton({ locale }: WhatsAppFloatingButtonProps) {
  const company = getCompanyProfile(locale);
  const label = locale === "es" ? "Ventas y Soporte" : "Sales & Support";

  return (
    <a
      href={company.supportHref}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label={`${label}: ${company.supportPhone}`}
    >
      <WhatsappIcon className="whatsapp-float-icon" />
      <span>{label}</span>
    </a>
  );
}
