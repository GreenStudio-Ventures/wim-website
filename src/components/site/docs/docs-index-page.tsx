import Link from "next/link";

import {
  getArticlesByCategory,
  getDocsContent,
  DOCS_ARTICLE_ORDER,
  type DocCategoryKey,
} from "@/lib/docs-content";
import { buildMarketHref, type Country, type Locale } from "@/lib/site-config";

type DocsIndexPageProps = {
  locale: Locale;
  country: Country;
};

const categoryOrder: DocCategoryKey[] = [
  "getting-started",
  "integrations",
  "invoicing",
  "operations",
];

const categoryIcons: Record<DocCategoryKey, string> = {
  "getting-started": "→",
  integrations: "◆",
  invoicing: "$",
  operations: "⚙",
};

export function DocsIndexPage({ locale, country }: DocsIndexPageProps) {
  const content = getDocsContent(locale);
  const byCategory = getArticlesByCategory(locale);

  const totalArticles = DOCS_ARTICLE_ORDER.length;

  return (
    <main className="docs-index-main">
      <div className="docs-index-hero">
        <div className="page-shell">
          <div className="docs-index-hero-inner">
            <span className="section-kicker">
              {totalArticles} {locale === "es" ? "guías" : "guides"}
            </span>
            <h1 className="docs-index-title">{content.indexTitle}</h1>
            <p className="docs-index-description">{content.indexDescription}</p>
          </div>
        </div>
      </div>

      <div className="page-shell">
        <div className="docs-index-grid">
          {categoryOrder.map((catKey) => {
            const articles = byCategory.get(catKey);
            if (!articles || articles.length === 0) return null;
            const catLabel = content.categories[catKey];

            return (
              <section key={catKey} className="docs-category-section">
                <div className="docs-category-header">
                  <span className="docs-category-icon">{categoryIcons[catKey]}</span>
                  <h2 className="docs-category-title">{catLabel}</h2>
                </div>
                <div className="docs-article-list">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={buildMarketHref(locale, country, `docs/${article.slug}`)}
                      className="docs-article-card"
                    >
                      <div className="docs-article-card-body">
                        <strong className="docs-article-card-title">{article.title}</strong>
                        <p className="docs-article-card-desc">{article.description}</p>
                      </div>
                      <div className="docs-article-card-meta">
                        <span className="docs-article-time">
                          {article.estimatedTime} {content.minutesLabel}
                        </span>
                        <span className="docs-article-cta">{content.readGuideLabel} →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
