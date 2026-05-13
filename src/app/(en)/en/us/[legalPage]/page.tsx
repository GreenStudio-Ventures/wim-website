import { notFound } from "next/navigation";

import { LegalPageContent, getLegalMetadata } from "@/components/site/pages/legal-page";
import { isLegalPageSlug, legalPageSlugs } from "@/lib/legal-content";

type PageProps = {
  params: Promise<{ legalPage: string }>;
};

export function generateStaticParams() {
  return legalPageSlugs.map((legalPage) => ({ legalPage }));
}

export async function generateMetadata({ params }: PageProps) {
  const { legalPage } = await params;

  if (!isLegalPageSlug(legalPage)) {
    notFound();
  }

  return getLegalMetadata("en", "us", legalPage);
}

export default async function Page({ params }: PageProps) {
  const { legalPage } = await params;

  if (!isLegalPageSlug(legalPage)) {
    notFound();
  }

  return <LegalPageContent locale="en" country="us" slug={legalPage} />;
}
