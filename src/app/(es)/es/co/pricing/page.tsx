import { PricingPageContent, getPricingMetadata } from "@/components/site/pages/pricing-page";

export const metadata = getPricingMetadata("es", "co");

export default function Page() {
  return <PricingPageContent locale="es" country="co" />;
}
