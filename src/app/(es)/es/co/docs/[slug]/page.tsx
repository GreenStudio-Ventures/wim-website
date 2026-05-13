import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocsArticlePage } from "@/components/site/docs/docs-article-page";
import { getArticle, DOCS_ARTICLE_ORDER } from "@/lib/docs-content";
import { createMarketMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return DOCS_ARTICLE_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("es", slug);

  if (!article) {
    return { title: "Guía no encontrada | WIM" };
  }

  return createMarketMetadata({
    locale: "es",
    country: "co",
    title: `${article.title} | WIM`,
    description: article.description,
    path: `docs/${slug}`,
    type: "article",
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getArticle("es", slug);

  if (!article) {
    notFound();
  }

  return <DocsArticlePage locale="es" country="co" article={article} />;
}
