import {
  buildMarketHref,
  countrySettings,
  type Country,
  type Locale,
  type Localized,
} from "@/lib/site-config";

type ContentCard = {
  title: string;
  description: string;
  eyebrow?: string;
};

type ProviderEntry = {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  status: "live" | "soon";
};

type PainPoint = {
  title: string;
  description: string;
};

type BaseCopy = {
  meta: {
    homeTitle: string;
    pricingTitle: string;
    description: string;
  };
  navigation: {
    modules: string;
    providers: string;
    pricing: string;
    signIn: string;
    start: string;
    languages: string;
    menu: string;
    close: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    rotationLabel: string;
    rotatingPhrases: string[];
    primaryCta: string;
    secondaryCta: string;
    flowSteps: Array<{ label: string; title: string; caption: string }>;
    trustChip: string;
  };
  pain: {
    eyebrow: string;
    title: string;
    description: string;
    points: PainPoint[];
  };
  modules: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ContentCard[];
  };
  proration: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    media: { kind: "video" | "image"; placeholderLabel: string; caption: string };
  };
  splitBill: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    media: { kind: "video" | "image"; placeholderLabel: string; caption: string };
  };
  providers: {
    eyebrow: string;
    title: string;
    description: string;
    soonLabel: string;
    liveLabel: string;
    entries: ProviderEntry[];
  };
  siigo: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    media: { kind: "video" | "image"; placeholderLabel: string; caption: string };
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    mostPopular: string;
    cards: Array<{
      name: string;
      description: string;
      features: string[];
      cta: string;
      featured?: boolean;
      priceLabel: string;
    }>;
    enterpriseTitle: string;
    enterpriseDescription: string;
    enterpriseCta: string;
  };
  ctaBand: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    tagline: string;
    product: string;
    providers: string;
    company: string;
    legal: string;
    rights: string;
  };
};

const baseCopy: Record<Locale, BaseCopy> = {
  es: {
    meta: {
      homeTitle: "WIM | Facturación mayorista Microsoft con proración y división por NIT",
      pricingTitle: "WIM | Planes",
      description:
        "WIM convierte facturas de TD SYNNEX y CSP Microsoft en facturas listas para tus clientes finales — con proración, división por NIT y sincronización a Siigo.",
    },
    navigation: {
      modules: "Módulos",
      providers: "Proveedores",
      pricing: "Planes",
      signIn: "Ingresar",
      start: "Solicitar acceso",
      languages: "Idioma",
      menu: "Menú",
      close: "Cerrar",
    },
    hero: {
      eyebrow: "Bill by WIM",
      title: "De factura de mayorista a factura del cliente, sin desarmar tu equipo de billing.",
      subtitle:
        "Convertimos tus suscripciones Microsoft 365, Azure y Adobe en facturas listas para enviar a Siigo — con proración mensual, división por NIT y conciliación cross-currency.",
      rotationLabel: "WIM resuelve",
      rotatingPhrases: [
        "Proración Microsoft 365",
        "División por NIT",
        "Sync Siigo + DIAN",
        "TRM mensual por ciclo",
      ],
      primaryCta: "Pedir demo",
      secondaryCta: "Ver planes",
      flowSteps: [
        {
          label: "01",
          title: "Bill del mayorista",
          caption:
            "TD SYNNEX, Microsoft CSP, Adobe. WIM lee la factura entrante y la convierte en suscripciones trazables.",
        },
        {
          label: "02",
          title: "Motor WIM",
          caption:
            "Aplica margen, TRM del ciclo, proración mid-month y división por NIT — todo en un solo lugar.",
        },
        {
          label: "03",
          title: "Invoice al cliente",
          caption:
            "Factura lista en Siigo, sincronizada con DIAN y enviada a tu cliente final con el detalle limpio.",
        },
      ],
      trustChip: "Conectado a TD SYNNEX · Microsoft CSP · Siigo · DIAN",
    },
    pain: {
      eyebrow: "El dolor real",
      title: "Las facturas de mayoristas no son facturas listas para tu cliente.",
      description:
        "Cualquier reseller Microsoft sabe que el bill de TD SYNNEX o CSP no se le puede pasar al cliente como llega. Cada mes el equipo de billing pierde días reconstruyendo lo mismo.",
      points: [
        {
          title: "Proración a mano",
          description:
            "Microsoft factura mid-month y cobra ciclos cortados — y a tu cliente le tienes que cobrar el período exacto. Hoy se hace en Excel, factura por factura.",
        },
        {
          title: "Un bill, varios NIT",
          description:
            "Llega una sola línea de Microsoft que en realidad es para tres clientes (o tres NITs del mismo cliente). Dividirla manual es donde se rompe el mes.",
        },
        {
          title: "TRM y multimoneda",
          description:
            "Microsoft cobra en USD, tú facturas en COP y la TRM cambia cada mes. Cuadrarlo contra la nota crédito del mayorista se vuelve un ejercicio aparte.",
        },
        {
          title: "Doble captura a Siigo",
          description:
            "Después de hacer todo el cálculo, alguien lo retipea en Siigo. El error humano explica el 80% de las inconsistencias con DIAN.",
        },
      ],
    },
    modules: {
      eyebrow: "Módulos",
      title: "Un solo flujo para todo el ciclo de facturación mayorista.",
      description:
        "WIM no es un POS ni un ERP. Es la capa específica que conecta tu mayorista de software con tu sistema contable.",
      cards: [
        {
          eyebrow: "Catálogo",
          title: "Catálogo Microsoft completo",
          description:
            "Productos, SKUs y planes sincronizados desde TD SYNNEX y CSP. Tarifa P1M / P1Y, anual mensualizado, todo mapeado.",
        },
        {
          eyebrow: "Suscripciones",
          title: "Suscripciones por cliente",
          description:
            "Cada cliente tiene su árbol de subs activas, cancelaciones y cambios de cantidad — con histórico para auditar cualquier ciclo.",
        },
        {
          eyebrow: "Facturas",
          title: "Factura automática mensual",
          description:
            "Al cierre de ciclo WIM genera la factura del mes con margen aplicado, retenciones, vendedor y mensaje configurables por cliente.",
        },
        {
          eyebrow: "Multi-tenant",
          title: "Multi-organización",
          description:
            "Maneja varias razones sociales o partners desde una sola cuenta. Cada organización con su Siigo, su catálogo y sus reglas.",
        },
      ],
    },
    proration: {
      eyebrow: "Módulo · Proración",
      title: "Microsoft no respeta tu ciclo. WIM sí.",
      description:
        "El motor de proración entiende que un cliente que activa una sub el 12 de abril no paga el mes completo. Calcula días, mezcla tarifas anual/mensual y respeta el corte que pactaste con cada cliente.",
      bullets: [
        "Proración por días sobre cualquier ciclo (mensual, anual mensualizado).",
        "Recálculo automático cuando TD SYNNEX emite nota crédito retroactiva.",
        "Override manual con auditoría: quién, cuándo y por qué.",
        "Trazabilidad de cada línea contra la factura original del mayorista.",
      ],
      media: {
        kind: "video",
        placeholderLabel: "Video · Proración mid-month",
        caption: "Espacio reservado para video demo del módulo.",
      },
    },
    splitBill: {
      eyebrow: "Módulo · División de factura",
      title: "Una factura del mayorista, varios NIT del cliente — sin retipearla.",
      description:
        "WIM toma la factura padre y deja que asignes cantidades a múltiples NITs (clientes o sub-clientes). Cada hija sale como factura independiente a Siigo, con su propio vendedor, retenciones y mensaje.",
      bullets: [
        "Reparte las cantidades por columna en una vista tipo planilla.",
        "Cada NIT lleva su configuración impositiva (retefuente, reteICA, vendedor).",
        "Hijas que ya se sincronizaron a Siigo se protegen para no romperse.",
        "El total del padre nunca se desfasa de la suma de hijas.",
      ],
      media: {
        kind: "image",
        placeholderLabel: "Captura · Tabla de división por NIT",
        caption: "Espacio reservado para imagen del split-bill.",
      },
    },
    providers: {
      eyebrow: "Proveedores",
      title: "Conectado al mundo mayorista Microsoft — y creciendo.",
      description:
        "WIM empieza con los dos canales que mueven la mayor parte del negocio en LATAM. El resto está en la rampa de integraciones.",
      soonLabel: "Próximamente",
      liveLabel: "Disponible",
      entries: [
        {
          id: "tdsynnex",
          label: "TD SYNNEX",
          eyebrow: "Mayorista principal",
          description:
            "Sincroniza catálogo, planes, costos por SKU y notas crédito retroactivas. La integración cubre el formato de factura colombiano.",
          status: "live",
        },
        {
          id: "microsoft-csp",
          label: "Microsoft CSP directo",
          eyebrow: "Cloud Solution Provider",
          description:
            "Para partners que operan directo contra Microsoft. Lectura de suscripciones tenant por tenant y consolidación multi-partner.",
          status: "live",
        },
        {
          id: "adobe",
          label: "Adobe VIP",
          eyebrow: "Software de diseño",
          description:
            "VIP Marketplace y Reseller. Mapeo de seats y conciliación con la factura mensual de Adobe.",
          status: "soon",
        },
        {
          id: "google-workspace",
          label: "Google Workspace",
          eyebrow: "Reseller G",
          description:
            "Cuentas, dominios y licencias Google sincronizadas para el mismo flujo de proración y división por NIT.",
          status: "soon",
        },
      ],
    },
    siigo: {
      eyebrow: "Módulo · Siigo + DIAN",
      title: "Sincronización con Siigo, sin retipear nada.",
      description:
        "Cuando la factura está revisada, WIM la empuja a Siigo con todos los campos correctos: cliente, vendedor, productos mapeados, retenciones e impuestos. La autorización DIAN queda registrada de vuelta en WIM.",
      bullets: [
        "Mapeo persistente de productos y planes WIM → ítems Siigo.",
        "Vendedor Siigo autoasignado desde el cliente (con override por factura).",
        "Reintentos automáticos cuando Siigo o DIAN devuelven error temporal.",
        "Bitácora visible de cada intento, error y autorización exitosa.",
      ],
      media: {
        kind: "video",
        placeholderLabel: "Video · Sync Siigo → DIAN",
        caption: "Espacio reservado para video de la sincronización.",
      },
    },
    pricing: {
      eyebrow: "Planes",
      title: "Cobramos por suscripción facturada, no por usuario.",
      description:
        "El precio escala con el volumen de subs activas que WIM gestiona, no con la cantidad de personas de tu equipo que entran al sistema.",
      note: "Los precios mostrados son base sin IVA. Cada plan se cotiza contra el ciclo mensual real.",
      mostPopular: "Más elegido",
      cards: [
        {
          name: "Starter",
          priceLabel: "$0",
          description: "Para probar el motor de facturación contra un mes real, sin compromiso.",
          features: [
            "1 organización",
            "Hasta 50 suscripciones activas",
            "Catálogo Microsoft estándar",
            "Sync Siigo manual",
          ],
          cta: "Solicitar acceso",
        },
        {
          name: "Operator",
          priceLabel: "Desde $100 USD / mes",
          description:
            "Para resellers que ya facturan mensual y necesitan estabilizar la operación.",
          features: [
            "Hasta 1.000 suscripciones activas",
            "Proración + división por NIT",
            "Sync Siigo + DIAN automático",
            "Soporte prioritario",
          ],
          cta: "Hablar con ventas",
          featured: true,
        },
        {
          name: "Scale",
          priceLabel: "Custom",
          description:
            "Para partners multi-tenant con múltiples razones sociales o conciliación cross-border.",
          features: [
            "Suscripciones ilimitadas",
            "Multi-tenant y multi-Siigo",
            "Integraciones a medida (Adobe, Google, ERPs)",
            "Onboarding dedicado",
          ],
          cta: "Hablar con ventas",
        },
      ],
      enterpriseTitle: "¿Más de 5.000 subs o múltiples partners?",
      enterpriseDescription:
        "Diseñamos el rollout: migración de catálogo, conciliación histórica, integración con ERPs y soporte 24/7.",
      enterpriseCta: "Coordinar reunión",
    },
    ctaBand: {
      eyebrow: "Bill by WIM",
      title: "Tu próxima factura mensual no la armas a mano.",
      description:
        "Empezá con un ciclo de prueba contra tu data real. Vemos las diferencias contra Excel en menos de 48 horas.",
      primaryCta: "Pedir demo",
      secondaryCta: "Hablar con ventas",
    },
    footer: {
      tagline:
        "WIM convierte facturas de mayoristas Microsoft en facturas listas para tu cliente, con proración y división por NIT.",
      product: "Producto",
      providers: "Proveedores",
      company: "Compañía",
      legal: "Legal",
      rights: "© WIM. Todos los derechos reservados.",
    },
  },
  en: {
    meta: {
      homeTitle: "WIM | Microsoft wholesale billing with proration and split-by-tax-ID",
      pricingTitle: "WIM | Pricing",
      description:
        "WIM turns TD SYNNEX and Microsoft CSP bills into customer-ready invoices — with proration, tax-ID splitting, and Siigo sync.",
    },
    navigation: {
      modules: "Modules",
      providers: "Providers",
      pricing: "Pricing",
      signIn: "Sign in",
      start: "Request access",
      languages: "Language",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "Bill by WIM",
      title: "From wholesale bill to customer invoice — without breaking your billing team.",
      subtitle:
        "WIM turns your Microsoft 365, Azure, and Adobe subscriptions into Siigo-ready invoices, with monthly proration, split-by-tax-ID, and cross-currency reconciliation.",
      rotationLabel: "WIM solves",
      rotatingPhrases: [
        "Microsoft 365 proration",
        "Split by tax ID",
        "Siigo + DIAN sync",
        "Monthly FX rate",
      ],
      primaryCta: "Request demo",
      secondaryCta: "See pricing",
      flowSteps: [
        {
          label: "01",
          title: "Wholesale bill",
          caption:
            "TD SYNNEX, Microsoft CSP, Adobe. WIM reads the inbound bill and turns it into traceable subscriptions.",
        },
        {
          label: "02",
          title: "WIM engine",
          caption:
            "Apply margin, the cycle's FX rate, mid-month proration, and split-by-tax-ID — all in one place.",
        },
        {
          label: "03",
          title: "Customer invoice",
          caption:
            "Invoice ready in Siigo, synced with DIAN, and sent to your customer with a clean breakdown.",
        },
      ],
      trustChip: "Connected to TD SYNNEX · Microsoft CSP · Siigo · DIAN",
    },
    pain: {
      eyebrow: "The real pain",
      title: "Wholesale bills aren't invoices you can hand your customer.",
      description:
        "Every Microsoft reseller knows it: the TD SYNNEX or CSP bill can't be passed through. Each month the billing team loses days rebuilding the same thing.",
      points: [
        {
          title: "Manual proration",
          description:
            "Microsoft bills mid-month and charges partial cycles — you have to charge customers for the exact period. Today, that's done in Excel, one invoice at a time.",
        },
        {
          title: "One bill, multiple tax IDs",
          description:
            "A single Microsoft line is actually for three customers (or three tax IDs of the same group). Splitting it manually is where the month breaks.",
        },
        {
          title: "FX and multi-currency",
          description:
            "Microsoft charges in USD, you bill in COP, and the FX rate moves each month. Matching it against the wholesaler's credit note is a separate exercise.",
        },
        {
          title: "Double entry into Siigo",
          description:
            "After the math is done, someone retypes it into Siigo. Human error explains 80% of inconsistencies with DIAN.",
        },
      ],
    },
    modules: {
      eyebrow: "Modules",
      title: "One flow for the entire wholesale billing cycle.",
      description:
        "WIM isn't a POS or an ERP. It's the specific layer that connects your software wholesaler to your accounting system.",
      cards: [
        {
          eyebrow: "Catalog",
          title: "Full Microsoft catalog",
          description:
            "Products, SKUs, and plans synced from TD SYNNEX and CSP. P1M / P1Y tariffs, annual-monthlyized, all mapped.",
        },
        {
          eyebrow: "Subscriptions",
          title: "Per-customer subscriptions",
          description:
            "Each customer keeps their tree of active subs, cancellations, and quantity changes — with history to audit any cycle.",
        },
        {
          eyebrow: "Invoices",
          title: "Automatic monthly invoice",
          description:
            "At cycle close, WIM produces the monthly invoice with margin applied, withholdings, seller, and per-customer message.",
        },
        {
          eyebrow: "Multi-tenant",
          title: "Multi-organization",
          description:
            "Run multiple legal entities or partners from one account. Each one with its own Siigo, catalog, and rules.",
        },
      ],
    },
    proration: {
      eyebrow: "Module · Proration",
      title: "Microsoft doesn't respect your cycle. WIM does.",
      description:
        "The proration engine knows that a customer who activates a sub on April 12 doesn't owe a full month. It calculates days, mixes annual/monthly tariffs, and respects the cut-off you agreed with each customer.",
      bullets: [
        "Day-by-day proration over any cycle (monthly, annual-monthlyized).",
        "Auto-recalculation when TD SYNNEX issues a retroactive credit note.",
        "Manual override with audit: who, when, and why.",
        "Traceability of every line back to the wholesaler's original bill.",
      ],
      media: {
        kind: "video",
        placeholderLabel: "Video · Mid-month proration",
        caption: "Placeholder for the module demo video.",
      },
    },
    splitBill: {
      eyebrow: "Module · Split bill",
      title: "One wholesale bill, multiple customer tax IDs — without retyping it.",
      description:
        "WIM takes the parent invoice and lets you assign quantities to multiple tax IDs (customers or sub-customers). Each child invoice ships independently to Siigo, with its own seller, withholdings, and message.",
      bullets: [
        "Spread quantities across columns in a spreadsheet-style view.",
        "Each tax ID keeps its own tax setup (withholding, local tax, seller).",
        "Children already synced to Siigo are locked to avoid breakage.",
        "Parent total always matches the sum of children.",
      ],
      media: {
        kind: "image",
        placeholderLabel: "Screenshot · Split-by-tax-ID table",
        caption: "Placeholder for the split-bill screenshot.",
      },
    },
    providers: {
      eyebrow: "Providers",
      title: "Plugged into Microsoft's wholesale world — and growing.",
      description:
        "WIM starts with the two channels that drive most of the business in LatAm. The rest are on the integration ramp.",
      soonLabel: "Coming soon",
      liveLabel: "Available",
      entries: [
        {
          id: "tdsynnex",
          label: "TD SYNNEX",
          eyebrow: "Primary wholesaler",
          description:
            "Syncs catalog, plans, costs per SKU, and retroactive credit notes. The integration covers the Colombian bill format.",
          status: "live",
        },
        {
          id: "microsoft-csp",
          label: "Microsoft CSP direct",
          eyebrow: "Cloud Solution Provider",
          description:
            "For partners operating directly against Microsoft. Tenant-by-tenant subscription reads and multi-partner consolidation.",
          status: "live",
        },
        {
          id: "adobe",
          label: "Adobe VIP",
          eyebrow: "Design software",
          description:
            "VIP Marketplace and Reseller. Seat mapping and reconciliation against Adobe's monthly bill.",
          status: "soon",
        },
        {
          id: "google-workspace",
          label: "Google Workspace",
          eyebrow: "Google Reseller",
          description:
            "Accounts, domains, and Google licenses synced for the same proration and split-by-tax-ID flow.",
          status: "soon",
        },
      ],
    },
    siigo: {
      eyebrow: "Module · Siigo + DIAN",
      title: "Siigo sync, no retyping.",
      description:
        "Once an invoice is reviewed, WIM pushes it to Siigo with every field in place: customer, seller, mapped products, withholdings, and taxes. The DIAN authorization is logged back in WIM.",
      bullets: [
        "Persistent mapping of WIM products and plans to Siigo items.",
        "Siigo seller auto-assigned from customer (with per-invoice override).",
        "Automatic retries on transient Siigo or DIAN errors.",
        "Visible log of every attempt, error, and successful authorization.",
      ],
      media: {
        kind: "video",
        placeholderLabel: "Video · Siigo → DIAN sync",
        caption: "Placeholder for the sync video.",
      },
    },
    pricing: {
      eyebrow: "Pricing",
      title: "We charge per active subscription, not per user.",
      description:
        "Price scales with the number of active subs WIM manages, not with how many teammates log in.",
      note: "Prices shown are base, no VAT. Each plan is quoted against the actual monthly cycle.",
      mostPopular: "Most picked",
      cards: [
        {
          name: "Starter",
          priceLabel: "$0",
          description: "To test the billing engine against a real month, no commitment.",
          features: [
            "1 organization",
            "Up to 50 active subscriptions",
            "Standard Microsoft catalog",
            "Manual Siigo sync",
          ],
          cta: "Request access",
        },
        {
          name: "Operator",
          priceLabel: "From $100 USD / mo",
          description: "For resellers that already bill monthly and need to stabilize ops.",
          features: [
            "Up to 1,000 active subscriptions",
            "Proration + split-by-tax-ID",
            "Automatic Siigo + DIAN sync",
            "Priority support",
          ],
          cta: "Talk to sales",
          featured: true,
        },
        {
          name: "Scale",
          priceLabel: "Custom",
          description: "For multi-tenant partners with multiple legal entities or cross-border reconciliation.",
          features: [
            "Unlimited subscriptions",
            "Multi-tenant and multi-Siigo",
            "Custom integrations (Adobe, Google, ERPs)",
            "Dedicated onboarding",
          ],
          cta: "Talk to sales",
        },
      ],
      enterpriseTitle: "More than 5,000 subs or multiple partners?",
      enterpriseDescription:
        "We design the rollout: catalog migration, historical reconciliation, ERP integration, and 24/7 support.",
      enterpriseCta: "Book a session",
    },
    ctaBand: {
      eyebrow: "Bill by WIM",
      title: "Your next monthly invoice isn't built by hand.",
      description: "Start with a test cycle against your real data. We surface the deltas against Excel in under 48 hours.",
      primaryCta: "Request demo",
      secondaryCta: "Talk to sales",
    },
    footer: {
      tagline:
        "WIM turns Microsoft wholesale bills into customer-ready invoices, with proration and split-by-tax-ID.",
      product: "Product",
      providers: "Providers",
      company: "Company",
      legal: "Legal",
      rights: "© WIM. All rights reserved.",
    },
  },
};

const baseLinks: Localized<{ start: string; sales: string; login: string; home: string }> = {
  es: {
    start: "https://app.billbywim.com/onboarding",
    sales: "mailto:hello@billbywim.com?subject=Hablar%20con%20ventas",
    login: "https://app.billbywim.com/login",
    home: "/",
  },
  en: {
    start: "https://app.billbywim.com/onboarding",
    sales: "mailto:hello@billbywim.com?subject=Talk%20to%20sales",
    login: "https://app.billbywim.com/login",
    home: "/",
  },
};

export type SiteCopy = BaseCopy & {
  links: {
    start: string;
    sales: string;
    login: string;
    home: string;
    pricing: string;
  };
  market: typeof countrySettings[Country];
};

export function getSiteCopy(locale: Locale, country: Country): SiteCopy {
  return {
    ...baseCopy[locale],
    links: {
      ...baseLinks[locale],
      home: buildMarketHref(locale, country),
      pricing: buildMarketHref(locale, country, "pricing"),
    },
    market: countrySettings[country],
  };
}
