import { PricingPageContent, getPricingMetadata } from "@/components/site/pages/pricing-page";

export const metadata = getPricingMetadata("en", "co");

export default function Page() {
  return <PricingPageContent locale="en" country="co" />;
}
