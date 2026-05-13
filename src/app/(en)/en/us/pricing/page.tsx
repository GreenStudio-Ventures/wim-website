import { PricingPageContent, getPricingMetadata } from "@/components/site/pages/pricing-page";

export const metadata = getPricingMetadata("en", "us");

export default function Page() {
  return <PricingPageContent locale="en" country="us" />;
}
