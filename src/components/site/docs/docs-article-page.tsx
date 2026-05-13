import Link from "next/link";

import type { ContentBlock, DocArticle } from "@/lib/docs-content";
import { getArticleList, getDocsContent } from "@/lib/docs-content";
import { buildMarketHref, type Country, type Locale } from "@/lib/site-config";

type DocsArticlePageProps = {
  locale: Locale;
  country: Country;
  article: DocArticle;
};

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="docs-block-paragraph">
          {block.text}
        </p>
      );

    case "numbered":
      return (
        <ol key={index} className="docs-block-numbered">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );

    case "bullets":
      return (
        <ul key={index} className="docs-block-bullets">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "note":
      return (
        <div key={index} className="docs-block-note">
          <span className="docs-note-icon">ℹ</span>
          <p>{block.text}</p>
        </div>
      );

    case "code":
      return (
        <div key={index} className="docs-block-code">
          <div className="docs-code-lang">{block.language}</div>
          <pre>
            <code>{block.content}</code>
          </pre>
        </div>
      );

    case "heading":
      return (
        <h4 key={index} className="docs-block-heading">
          {block.text}
        </h4>
      );

    default:
      return null;
  }
}

export function DocsArticlePage({ locale, country, article }: DocsArticlePageProps) {
  const content = getDocsContent(locale);
  const allArticles = getArticleList(locale);
  const currentIndex = allArticles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const categoryLabel = content.categories[article.categoryKey];
  const docsHref = buildMarketHref(locale, country, "docs");
  const backLabel = locale === "es" ? "Centro de ayuda" : "Help center";

  return (
    <div className="docs-article-shell">
      <aside className="docs-sidebar">
        <div className="docs-sidebar-inner pr-4">
          <Link href={docsHref} className="docs-sidebar-back">
            ← {backLabel}
          </Link>

          <nav className="docs-sidebar-nav" aria-label="Docs navigation">
            <span className="docs-sidebar-section">{categoryLabel}</span>
            {allArticles
              .filter((a) => a.categoryKey === article.categoryKey)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={buildMarketHref(locale, country, `docs/${a.slug}`)}
                  className={`docs-sidebar-link ${a.slug === article.slug ? "is-active" : ""}`}
                >
                  {a.title}
                </Link>
              ))}
          </nav>

          <div className="docs-sidebar-all">
            <span className="docs-sidebar-section">
              {locale === "es" ? "Todas las guías" : "All guides"}
            </span>
            {allArticles.map((a) => (
              <Link
                key={a.slug}
                href={buildMarketHref(locale, country, `docs/${a.slug}`)}
                className={`docs-sidebar-link ${a.slug === article.slug ? "is-active" : ""}`}
              >
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <main className="docs-article-main">
        <div className="docs-article-breadcrumb">
          <Link href={docsHref}>{backLabel}</Link>
          <span>/</span>
          <span>{categoryLabel}</span>
        </div>

        <header className="docs-article-header">
          <span className="docs-article-time-badge">
            {article.estimatedTime} {content.minutesLabel}
          </span>
          <h1 className="docs-article-title">{article.title}</h1>
          <p className="docs-article-lead">{article.description}</p>
        </header>

        <div className="docs-article-toc">
          <span className="docs-toc-label">
            {locale === "es" ? "En esta guía" : "In this guide"}
          </span>
          <ol className="docs-toc-list">
            {article.sections.map((section, i) => (
              <li key={i}>
                <a href={`#section-${i}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </div>

        <div className="docs-article-body">
          {article.sections.map((section, sectionIndex) => (
            <section key={sectionIndex} id={`section-${sectionIndex}`} className="docs-section">
              <h2 className="docs-section-title">{section.title}</h2>
              <div className="docs-section-blocks">
                {section.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
              </div>
            </section>
          ))}
        </div>

        <nav className="docs-article-nav">
          {prevArticle ? (
            <Link
              href={buildMarketHref(locale, country, `docs/${prevArticle.slug}`)}
              className="docs-nav-prev"
            >
              <span className="docs-nav-direction">← {locale === "es" ? "Anterior" : "Previous"}</span>
              <span className="docs-nav-title">{prevArticle.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <Link
              href={buildMarketHref(locale, country, `docs/${nextArticle.slug}`)}
              className="docs-nav-next"
            >
              <span className="docs-nav-direction">{locale === "es" ? "Siguiente" : "Next"} →</span>
              <span className="docs-nav-title">{nextArticle.title}</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>
    </div>
  );
}
