import { DocsIndexPage } from "@/components/site/docs/docs-index-page";
import { createMarketMetadata } from "@/lib/seo";

export const metadata = createMarketMetadata({
  locale: "es",
  country: "co",
  title: "Centro de ayuda | WIM",
  description:
    "Guías paso a paso para configurar WIM y operar tu negocio de facturación mayorista Microsoft.",
  path: "docs",
});

export default function Page() {
  return <DocsIndexPage locale="es" country="co" />;
}
