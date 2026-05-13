import { DocsIndexPage } from "@/components/site/docs/docs-index-page";
import { createMarketMetadata } from "@/lib/seo";

export const metadata = createMarketMetadata({
  locale: "en",
  country: "us",
  title: "Help center | WIM",
  description:
    "Step-by-step guides to configure WIM and operate your Microsoft wholesale invoicing business.",
  path: "docs",
});

export default function Page() {
  return <DocsIndexPage locale="en" country="us" />;
}
