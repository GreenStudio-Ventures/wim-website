import type { Country, Locale } from "@/lib/site-config";

export const legalPageSlugs = [
  "terms-and-conditions",
  "privacy-policy",
  "cookie-policy",
  "legal-notice",
] as const;

export type LegalPageSlug = (typeof legalPageSlugs)[number];

type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalPageEntry = {
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
};

type CompanyFact = {
  label: string;
  value: string;
};

type CompanyProfile = {
  brandAttribution: string;
  studioName: string;
  studioTagline: string;
  location: string;
  capabilities: string[];
  supportLabel: string;
  supportPhone: string;
  supportHref: string;
  talkLabel: string;
  facts: CompanyFact[];
};

const supportWhatsappHref = "https://wa.me/573172723452?text=Hola%2C%20necesito%20soporte%20para%20WIM";

const legalLinkLabels: Record<LegalPageSlug, Record<Locale, string>> = {
  "terms-and-conditions": {
    es: "Términos y Condiciones",
    en: "Terms & Conditions",
  },
  "privacy-policy": {
    es: "Política de Privacidad",
    en: "Privacy Policy",
  },
  "cookie-policy": {
    es: "Política de Cookies",
    en: "Cookie Policy",
  },
  "legal-notice": {
    es: "Aviso Legal",
    en: "Legal Notice",
  },
};

const companyProfiles: Record<Locale, CompanyProfile> = {
  es: {
    brandAttribution: "WIM es una marca de GreenStudio Ventures S.A.S.",
    studioName: "GreenStudio Ventures S.A.S.",
    studioTagline: "We turn your ideas into digital products that work and sell.",
    location: "Irvine, California, US",
    capabilities: [
      "Designers prioritize UX/UI.",
      "Software developers, AI-first.",
      "Venture Studio, Innovation Hub.",
    ],
    supportLabel: "Soporte por WhatsApp",
    supportPhone: "+57 317 272 3452",
    supportHref: supportWhatsappHref,
    talkLabel: "Let's Talk",
    facts: [
      {
        label: "Identificación",
        value: "901835709-5",
      },
      {
        label: "Categoría",
        value: "Sociedad o persona jurídica principal o ESAL",
      },
      {
        label: "Cámara de Comercio",
        value: "Medellín para Antioquia",
      },
      {
        label: "Ubicación operativa",
        value: "Irvine, California, US",
      },
    ],
  },
  en: {
    brandAttribution: "WIM is a brand of GreenStudio Ventures S.A.S.",
    studioName: "GreenStudio Ventures S.A.S.",
    studioTagline: "We turn your ideas into digital products that work and sell.",
    location: "Irvine, California, US",
    capabilities: [
      "Designers prioritize UX/UI.",
      "Software developers, AI-first.",
      "Venture Studio, Innovation Hub.",
    ],
    supportLabel: "WhatsApp support",
    supportPhone: "+57 317 272 3452",
    supportHref: supportWhatsappHref,
    talkLabel: "Let's Talk",
    facts: [
      {
        label: "Tax ID",
        value: "901835709-5",
      },
      {
        label: "Category",
        value: "Primary legal entity or nonprofit-type registration",
      },
      {
        label: "Chamber of Commerce",
        value: "Medellin for Antioquia",
      },
      {
        label: "Operating base",
        value: "Irvine, California, US",
      },
    ],
  },
};

const legalPages: Record<Locale, Record<LegalPageSlug, LegalPageEntry>> = {
  es: {
    "terms-and-conditions": {
      eyebrow: "Legal",
      title: "Términos y Condiciones",
      metaTitle: "WIM | Términos y Condiciones",
      metaDescription: "Condiciones de uso del sitio web, materiales comerciales y flujos de contacto de WIM.",
      intro:
        "Estos términos regulan el acceso y uso del sitio web de WIM, sus materiales comerciales, formularios, demos y flujos de contacto. Si posteriormente contratas el software o servicios asociados, podrán aplicarse condiciones comerciales adicionales en la propuesta o contrato correspondiente.",
      updatedAt: "8 de marzo de 2026",
      sections: [
        {
          title: "1. Alcance",
          paragraphs: [
            "El sitio tiene fines informativos, comerciales y de soporte inicial para marcas interesadas en WIM. El uso del sitio no sustituye una propuesta comercial, un contrato de licencia, un acuerdo de onboarding ni un anexo de tratamiento de datos cuando esos documentos sean necesarios.",
            "Nos reservamos el derecho de actualizar la oferta, la estructura del producto, los precios de referencia, las integraciones y el contenido mostrado en cualquier momento.",
          ],
        },
        {
          title: "2. Uso permitido",
          paragraphs: [
            "Debes usar el sitio de forma lícita, con información veraz y sin intentar acceder sin autorización a sistemas, cuentas, demos privadas o infraestructura técnica relacionada con WIM o GreenStudio Ventures S.A.S.",
          ],
          bullets: [
            "No debes introducir código malicioso, automatizaciones abusivas ni interferir con la disponibilidad del sitio.",
            "No debes copiar, revender o reutilizar materiales del sitio para fines engañosos o competencia desleal.",
            "No debes suplantar a terceros al solicitar demos, soporte o acceso comercial.",
          ],
        },
        {
          title: "3. Propiedad intelectual",
          paragraphs: [
            "La marca WIM, sus diseños, copys, mockups, interfaces, código, estructura del sitio y materiales visuales pertenecen a GreenStudio Ventures S.A.S. o a sus respectivos titulares cuando corresponda.",
            "No se concede ninguna licencia sobre marcas, software o activos creativos salvo autorización expresa y por escrito.",
          ],
        },
        {
          title: "4. Información comercial y demos",
          paragraphs: [
            "Las capturas, videos, precios base, comparativas y ejemplos publicados en el sitio son ilustrativos y pueden variar por país, vertical, alcance operativo, volumen de sucursales o integraciones necesarias.",
            "La versión final de cualquier servicio, plazo, soporte, SLA o condición económica será la que figure en la propuesta comercial o contrato aplicable.",
          ],
        },
        {
          title: "5. Contacto y soporte",
          paragraphs: [
            "El canal de soporte y contacto visible en este sitio opera vía WhatsApp en el número +57 317 272 3452. También podemos usar este canal para responder solicitudes de información, demos, onboarding o soporte inicial.",
            "El uso del canal de soporte no implica por sí mismo la aceptación de un SLA específico, salvo que exista un acuerdo comercial separado.",
          ],
        },
      ],
    },
    "privacy-policy": {
      eyebrow: "Legal",
      title: "Política de Privacidad",
      metaTitle: "WIM | Política de Privacidad",
      metaDescription: "Tratamiento de datos personales asociados al sitio web, formularios y contacto comercial de WIM.",
      intro:
        "Esta política explica cómo GreenStudio Ventures S.A.S., como empresa detrás de WIM, trata los datos personales recolectados a través del sitio web, formularios de contacto, solicitudes comerciales, cookies y canales de soporte visibles en la web.",
      updatedAt: "8 de marzo de 2026",
      sections: [
        {
          title: "1. Responsable del tratamiento",
          paragraphs: [
            "El responsable del tratamiento relacionado con este sitio es GreenStudio Ventures S.A.S., identificada con 901835709-5, con operación comercial desde Irvine, California, US, y registro en la Cámara de Comercio de Medellín para Antioquia.",
          ],
        },
        {
          title: "2. Datos que podemos tratar",
          paragraphs: [
            "Podemos tratar datos de identificación y contacto cuando solicitas una demo, una llamada, soporte o información comercial. También podemos tratar datos de empresa, mercado, idioma preferido, país de operación, interacciones con formularios y preferencias de consentimiento de cookies.",
          ],
          bullets: [
            "Nombre, cargo, empresa y teléfono o canal de contacto.",
            "Información operativa compartida para demos, onboarding o soporte.",
            "Datos técnicos básicos como idioma, país estimado, cookies necesarias y preferencias de consentimiento.",
          ],
        },
        {
          title: "3. Finalidades",
          paragraphs: [
            "Usamos la información para responder solicitudes, gestionar contacto comercial, preparar demos, brindar soporte, operar correctamente el sitio, recordar idioma o región y mejorar la experiencia del producto y del sitio.",
            "Si autorizas cookies opcionales, también podremos usar información agregada para medición analítica o evaluación de campañas.",
          ],
        },
        {
          title: "4. Base jurídica y conservación",
          paragraphs: [
            "Tratamos datos con base en la ejecución de medidas precontractuales, el interés legítimo en operar y asegurar el sitio, el cumplimiento de obligaciones legales y, cuando aplique, tu consentimiento para cookies o comunicaciones concretas.",
            "Conservamos la información durante el tiempo necesario para atender la relación comercial o de soporte, cumplir obligaciones legales y documentar decisiones operativas o de seguridad.",
          ],
        },
        {
          title: "5. Compartición y derechos",
          paragraphs: [
            "Podemos compartir datos con proveedores tecnológicos, hosting, analítica, mensajería o soporte cuando sea necesario para operar el sitio o atender tu solicitud, siempre bajo controles razonables y en el marco aplicable.",
            "Puedes solicitar acceso, actualización, corrección o eliminación de tus datos, así como revocar consentimientos aplicables, a través del canal de soporte publicado en este sitio.",
          ],
        },
      ],
    },
    "cookie-policy": {
      eyebrow: "Legal",
      title: "Política de Cookies",
      metaTitle: "WIM | Política de Cookies",
      metaDescription: "Cómo usa WIM las cookies necesarias, analíticas y de marketing, y cómo puedes gestionarlas.",
      intro:
        "Esta política describe las cookies y tecnologías similares usadas por el sitio de WIM, las categorías disponibles, cómo gestionamos el consentimiento y cómo puedes cambiar tus preferencias en cualquier momento.",
      updatedAt: "8 de marzo de 2026",
      sections: [
        {
          title: "1. Qué usamos",
          paragraphs: [
            "El sitio puede usar cookies necesarias para recordar idioma, sesión técnica y tu elección de consentimiento. También puede habilitar cookies analíticas o de marketing cuando la persona usuaria las acepte expresamente.",
          ],
        },
        {
          title: "2. Categorías",
          paragraphs: [
            "Las cookies necesarias permanecen activas porque son imprescindibles para el funcionamiento básico del sitio y para guardar tu preferencia de privacidad.",
          ],
          bullets: [
            "Necesarias: idioma, funcionamiento técnico y preferencia de consentimiento.",
            "Analítica: medición de uso y rendimiento del sitio.",
            "Marketing: atribución de campañas y medición comercial externa.",
          ],
        },
        {
          title: "3. Gestión del consentimiento",
          paragraphs: [
            "Para regiones sujetas a un régimen estricto tipo RGPD/LSSI-CE, las cookies opcionales no se activan hasta recibir una acción afirmativa clara. Para otras regiones mostramos un aviso informativo, pero mantenemos las opcionales apagadas hasta que elijas.",
            "Puedes aceptar todas, rechazar las opcionales o personalizar categorías desde el banner inicial o desde el enlace persistente de preferencias de cookies en el footer.",
          ],
        },
        {
          title: "4. Conservación y revocación",
          paragraphs: [
            "La cookie que guarda tu preferencia de consentimiento se conserva por un periodo limitado para evitar pedirte la misma decisión en cada visita. Puedes borrar cookies desde tu navegador o reabrir el panel de preferencias para cambiar tu elección.",
          ],
        },
      ],
    },
    "legal-notice": {
      eyebrow: "Legal",
      title: "Aviso Legal",
      metaTitle: "WIM | Aviso Legal",
      metaDescription: "Datos del titular del sitio, atribución de marca y condiciones generales de responsabilidad.",
      intro:
        "Este aviso legal identifica al titular del sitio, la empresa detrás de la marca WIM y ciertas reglas generales sobre responsabilidad, propiedad intelectual y canales de contacto publicados en la web.",
      updatedAt: "8 de marzo de 2026",
      sections: [
        {
          title: "1. Titularidad del sitio y de la marca",
          paragraphs: [
            "WIM es una marca operada por GreenStudio Ventures S.A.S. desde este sitio web. La referencia comercial a WIM no altera la titularidad corporativa de GreenStudio Ventures S.A.S. sobre los activos, materiales y operación web aquí mostrados, salvo indicación distinta.",
          ],
        },
        {
          title: "2. Datos corporativos",
          paragraphs: [
            "GreenStudio Ventures S.A.S. se identifica con el número 901835709-5. La categoría informada para la entidad es sociedad o persona jurídica principal o ESAL, y la referencia de cámara de comercio asociada es Medellín para Antioquia.",
            "La operación comercial visible en el sitio también se presenta desde Irvine, California, US.",
          ],
        },
        {
          title: "3. Responsabilidad",
          paragraphs: [
            "Trabajamos para mantener la información del sitio actualizada y disponible, pero no garantizamos la ausencia absoluta de errores, interrupciones temporales o cambios sobre funcionalidades, precios o materiales publicados.",
            "No asumimos responsabilidad por decisiones de negocio tomadas únicamente con base en información general del sitio sin una validación comercial o contractual posterior.",
          ],
        },
        {
          title: "4. Contacto",
          paragraphs: [
            "El canal de soporte publicado en este sitio opera vía WhatsApp en el número +57 317 272 3452. Ese canal también puede utilizarse para solicitudes comerciales o aclaraciones sobre estas políticas.",
          ],
        },
      ],
    },
  },
  en: {
    "terms-and-conditions": {
      eyebrow: "Legal",
      title: "Terms & Conditions",
      metaTitle: "WIM | Terms & Conditions",
      metaDescription: "Rules governing the use of the WIM website, commercial materials, and contact flows.",
      intro:
        "These terms govern access to and use of the WIM website, its commercial materials, forms, demos, and contact flows. If you later purchase software or related services, additional commercial terms may apply in the relevant proposal or agreement.",
      updatedAt: "March 8, 2026",
      sections: [
        {
          title: "1. Scope",
          paragraphs: [
            "This website is intended for informational, commercial, and early support purposes for brands evaluating WIM. Website use does not replace a commercial proposal, license agreement, onboarding statement of work, or data processing addendum where those documents are required.",
            "We may update the offer, product structure, reference pricing, integrations, and website content at any time.",
          ],
        },
        {
          title: "2. Permitted use",
          paragraphs: [
            "You must use the site lawfully, provide truthful information, and avoid any unauthorized attempt to access systems, accounts, private demos, or technical infrastructure related to WIM or GreenStudio Ventures S.A.S.",
          ],
          bullets: [
            "Do not introduce malicious code, abusive automation, or any interference with site availability.",
            "Do not copy, resell, or reuse site materials for misleading purposes or unfair competition.",
            "Do not impersonate third parties when requesting demos, support, or commercial access.",
          ],
        },
        {
          title: "3. Intellectual property",
          paragraphs: [
            "The WIM brand, website design, copy, mockups, interfaces, code, structure, and visual materials belong to GreenStudio Ventures S.A.S. or their respective owners where applicable.",
            "No license over trademarks, software, or creative assets is granted unless expressly approved in writing.",
          ],
        },
        {
          title: "4. Commercial information and demos",
          paragraphs: [
            "Screenshots, videos, base pricing, comparisons, and examples on the site are illustrative and may vary by market, industry, operational scope, location count, or required integrations.",
            "The final version of any service, timeline, support scope, SLA, or commercial term will be the one stated in the applicable proposal or agreement.",
          ],
        },
        {
          title: "5. Contact and support",
          paragraphs: [
            "The support and contact channel shown on this website operates via WhatsApp at +57 317 272 3452. We may also use that channel for information requests, demos, onboarding, or early support.",
            "Use of the support channel does not by itself create a specific SLA unless a separate commercial agreement says otherwise.",
          ],
        },
      ],
    },
    "privacy-policy": {
      eyebrow: "Legal",
      title: "Privacy Policy",
      metaTitle: "WIM | Privacy Policy",
      metaDescription: "How personal data is handled across the WIM website, forms, and commercial contact flows.",
      intro:
        "This policy explains how GreenStudio Ventures S.A.S., as the company behind WIM, handles personal data collected through the website, contact forms, commercial requests, cookies, and support channels shown on the site.",
      updatedAt: "March 8, 2026",
      sections: [
        {
          title: "1. Data controller",
          paragraphs: [
            "The controller for processing related to this website is GreenStudio Ventures S.A.S., identified under 901835709-5, operating commercially from Irvine, California, US, and registered with the Medellin Chamber of Commerce for Antioquia.",
          ],
        },
        {
          title: "2. Data we may process",
          paragraphs: [
            "We may process identification and contact data when you request a demo, a call, support, or commercial information. We may also process company information, market context, preferred language, operating country, form interactions, and cookie consent preferences.",
          ],
          bullets: [
            "Name, role, company, and phone or contact channel.",
            "Operational information shared for demos, onboarding, or support.",
            "Basic technical data such as language, estimated country, necessary cookies, and consent preferences.",
          ],
        },
        {
          title: "3. Purposes",
          paragraphs: [
            "We use the information to respond to requests, manage commercial conversations, prepare demos, deliver support, operate the website correctly, remember language or region, and improve the product and website experience.",
            "If you authorize optional cookies, we may also use aggregated information for analytics or campaign evaluation.",
          ],
        },
        {
          title: "4. Legal basis and retention",
          paragraphs: [
            "We process data based on pre-contractual measures, legitimate interest in operating and securing the website, compliance with legal obligations, and, where required, your consent for cookies or specific communications.",
            "We retain information for as long as needed to handle the commercial or support relationship, meet legal obligations, and document operational or security decisions.",
          ],
        },
        {
          title: "5. Sharing and rights",
          paragraphs: [
            "We may share data with technology providers, hosting, analytics, messaging, or support vendors when necessary to run the website or respond to your request, subject to reasonable controls and applicable requirements.",
            "You may request access, update, correction, deletion, or revocation of applicable consent through the support channel published on this website.",
          ],
        },
      ],
    },
    "cookie-policy": {
      eyebrow: "Legal",
      title: "Cookie Policy",
      metaTitle: "WIM | Cookie Policy",
      metaDescription: "How WIM uses necessary, analytics, and marketing cookies and how you can manage them.",
      intro:
        "This policy describes the cookies and similar technologies used by the WIM website, the available categories, how consent is handled, and how you can change your preferences at any time.",
      updatedAt: "March 8, 2026",
      sections: [
        {
          title: "1. What we use",
          paragraphs: [
            "The site may use necessary cookies to remember language, technical session behavior, and your consent choice. Analytics or marketing cookies may be enabled only when the user accepts them explicitly.",
          ],
        },
        {
          title: "2. Categories",
          paragraphs: [
            "Necessary cookies remain enabled because they are required for the basic functioning of the site and for storing your privacy preference.",
          ],
          bullets: [
            "Necessary: language, technical behavior, and consent preference.",
            "Analytics: usage and performance measurement.",
            "Marketing: campaign attribution and external commercial measurement.",
          ],
        },
        {
          title: "3. Consent management",
          paragraphs: [
            "For regions subject to a strict GDPR/LSSI-style regime, optional cookies do not activate until a clear affirmative action is received. For other regions we show an informative notice, but optional categories still remain off until you choose.",
            "You can accept all, reject optional categories, or customize them from the initial banner or from the persistent cookie preferences link in the footer.",
          ],
        },
        {
          title: "4. Retention and withdrawal",
          paragraphs: [
            "The cookie storing your consent preference is kept for a limited period so the site does not ask for the same choice on every visit. You can delete cookies in your browser or reopen the preferences panel to change your decision.",
          ],
        },
      ],
    },
    "legal-notice": {
      eyebrow: "Legal",
      title: "Legal Notice",
      metaTitle: "WIM | Legal Notice",
      metaDescription: "Website ownership details, brand attribution, and general liability rules for WIM.",
      intro:
        "This legal notice identifies the website owner, the company behind the WIM brand, and a set of general rules regarding responsibility, intellectual property, and contact channels published on the website.",
      updatedAt: "March 8, 2026",
      sections: [
        {
          title: "1. Website ownership and brand attribution",
          paragraphs: [
            "WIM is a brand operated by GreenStudio Ventures S.A.S. through this website. Commercial use of the WIM name does not alter GreenStudio Ventures S.A.S. ownership over the website operation, materials, and assets shown here unless stated otherwise.",
          ],
        },
        {
          title: "2. Corporate details",
          paragraphs: [
            "GreenStudio Ventures S.A.S. is identified under 901835709-5. The entity category reported is primary legal entity or nonprofit-type registration, and the related chamber of commerce reference is Medellin for Antioquia.",
            "Commercial operations shown on the site are also presented from Irvine, California, US.",
          ],
        },
        {
          title: "3. Liability",
          paragraphs: [
            "We work to keep the website information current and available, but we do not guarantee the absolute absence of errors, temporary interruptions, or changes affecting features, pricing, or published materials.",
            "We are not responsible for business decisions made solely on the basis of general website information without subsequent commercial or contractual validation.",
          ],
        },
        {
          title: "4. Contact",
          paragraphs: [
            "The support channel published on this website operates via WhatsApp at +57 317 272 3452. That channel may also be used for commercial requests or questions about these policies.",
          ],
        },
      ],
    },
  },
};

export function isLegalPageSlug(value: string): value is LegalPageSlug {
  return legalPageSlugs.includes(value as LegalPageSlug);
}

export function getLegalPageContent(locale: Locale, slug: LegalPageSlug) {
  return legalPages[locale][slug];
}

export function getLegalLinkLabel(locale: Locale, slug: LegalPageSlug) {
  return legalLinkLabels[slug][locale];
}

export function getLegalLinkItems(locale: Locale) {
  return legalPageSlugs.map((slug) => ({
    slug,
    label: getLegalLinkLabel(locale, slug),
  }));
}

export function getCompanyProfile(locale: Locale) {
  return companyProfiles[locale];
}

export function getSupportWhatsappHref() {
  return supportWhatsappHref;
}

export function getLegalSitemapEntries(locales: Locale[], countries: Country[]) {
  return locales.flatMap((locale) =>
    countries.flatMap((country) => legalPageSlugs.map((slug) => ({ locale, country, slug }))),
  );
}
