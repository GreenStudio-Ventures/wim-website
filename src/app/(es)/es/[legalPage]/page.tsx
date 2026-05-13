import { notFound, redirect } from "next/navigation";

import { isLegalPageSlug, legalPageSlugs } from "@/lib/legal-content";

type PageProps = {
  params: Promise<{ legalPage: string }>;
};

export function generateStaticParams() {
  return legalPageSlugs.map((legalPage) => ({ legalPage }));
}

export default async function Page({ params }: PageProps) {
  const { legalPage } = await params;

  if (!isLegalPageSlug(legalPage)) {
    notFound();
  }

  redirect(`/es/co/${legalPage}`);
}
