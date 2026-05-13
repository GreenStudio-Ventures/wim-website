# WIM — Website

Landing site para **WIM** (Wholesale Invoice Manager) — la herramienta que convierte facturas de mayoristas Microsoft (TD SYNNEX, CSP directo) en facturas listas para tus clientes finales, con proración, división por NIT y sincronización a Siigo.

Stack: Next.js 16 (App Router) + Tailwind + OpenNext + Cloudflare Workers.

## Scripts

- `npm run dev` — local dev en `http://localhost:3000`.
- `npm run build` — build Next.js.
- `npm run preview` — build + preview en Worker local.
- `npm run deploy` — build + deploy a Cloudflare (`billbywim.com`).
- `npm run check` — typecheck + dry-run de deploy.

## Estructura

- `src/app/(default)` — landing principal.
- `src/app/(es)` / `src/app/(en)` — variantes localizadas (`/es/co`, `/en/us`).
- `src/lib/site-copy.ts` — copy centralizado por idioma.
- `src/lib/site-config.ts` — locales, países, helpers.
- `src/lib/seo.ts` — metadata SEO + sitemap.

## Despliegue

`billbywim.com` (apex) y `www.billbywim.com` apuntan al worker `wim-website` en Cloudflare. Custom domain gestionado vía Cloudflare → Workers → wim-website → Custom Domains.
