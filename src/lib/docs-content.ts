import type { Locale } from "@/lib/site-config";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "numbered"; items: string[] }
  | { type: "bullets"; items: string[] }
  | { type: "note"; text: string }
  | { type: "code"; language: string; content: string }
  | { type: "heading"; text: string };

export type DocSection = {
  title: string;
  blocks: ContentBlock[];
};

export type DocArticle = {
  slug: string;
  categoryKey: DocCategoryKey;
  title: string;
  description: string;
  estimatedTime: string;
  sections: DocSection[];
};

export type DocCategoryKey =
  | "getting-started"
  | "integrations"
  | "invoicing"
  | "operations";

type DocsLocaleContent = {
  indexTitle: string;
  indexDescription: string;
  minutesLabel: string;
  readGuideLabel: string;
  categories: Record<DocCategoryKey, string>;
  articles: Record<string, DocArticle>;
};

const docsContent: Record<Locale, DocsLocaleContent> = {
  es: {
    indexTitle: "Centro de ayuda",
    indexDescription:
      "Guías paso a paso para configurar WIM y operar tu negocio de facturación mayorista Microsoft.",
    minutesLabel: "min",
    readGuideLabel: "Leer guía",
    categories: {
      "getting-started": "Primeros pasos",
      integrations: "Integraciones",
      invoicing: "Facturación",
      operations: "Operación diaria",
    },
    articles: {
      "getting-started": {
        slug: "getting-started",
        categoryKey: "getting-started",
        title: "Cómo empezar con WIM",
        description:
          "Crea tu workspace, invita a tu equipo y prepará el sistema para emitir tu primera factura.",
        estimatedTime: "8",
        sections: [
          {
            title: "Crear tu cuenta y workspace",
            blocks: [
              {
                type: "paragraph",
                text: "WIM organiza la información por workspaces. Cada workspace es un entorno aislado: sus clientes, suscripciones, facturas e integraciones no se mezclan con otros.",
              },
              {
                type: "numbered",
                items: [
                  "Ingresa a app.billbywim.com y crea tu cuenta con tu correo corporativo.",
                  "Confirma el correo desde el mensaje que te enviamos.",
                  "Crea tu primer workspace asignando un nombre — típicamente el de tu empresa.",
                  "Cambia entre workspaces desde el icono superior izquierdo del sidebar.",
                ],
              },
              {
                type: "note",
                text: "Puedes tener varios workspaces si operás distintas empresas o ambientes (prod / pruebas). Cada uno guarda su propia configuración y datos.",
              },
            ],
          },
          {
            title: "Completar los datos de tu empresa",
            blocks: [
              {
                type: "paragraph",
                text: "Antes de facturar necesitamos saber a quién facturás como — razón social, NIT, dirección y moneda base.",
              },
              {
                type: "numbered",
                items: [
                  "Ve a Ajustes → Workspace.",
                  "Completá razón social, NIT, dirección, ciudad y país.",
                  "Configurá la moneda base y la TRM mensual (si facturás en USD).",
                  "Subí tu logo desde la sección de marca.",
                ],
              },
            ],
          },
          {
            title: "Invitar a tu equipo",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Andá a Ajustes → Users.",
                  "Hacé clic en 'Agregar usuario'.",
                  "Escribí el correo y elegí el rol (admin / member).",
                  "El invitado recibe un correo para activar su cuenta.",
                ],
              },
              {
                type: "note",
                text: "Solo los admins pueden conectar integraciones, ejecutar cargas masivas y enviar facturas a Siigo.",
              },
            ],
          },
        ],
      },
      "siigo-integration": {
        slug: "siigo-integration",
        categoryKey: "integrations",
        title: "Conectar Siigo",
        description:
          "Vinculá tu cuenta Siigo para sincronizar clientes, productos y enviar facturas oficiales a la DIAN.",
        estimatedTime: "6",
        sections: [
          {
            title: "Antes de empezar",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Tu plan Siigo debe tener acceso a la API (Premium o superior).",
                  "Necesitás un usuario admin de Siigo con clave de acceso generada.",
                  "Tener al menos un vendedor y un centro de costo activo en Siigo.",
                ],
              },
            ],
          },
          {
            title: "Conectar la cuenta",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Ve a Ajustes → Integración Siigo.",
                  "Pegá tu usuario Siigo (email) y la access key.",
                  "Elegí el almacén default que se usará en las facturas.",
                  "Guardá. WIM ejecuta una sincronización inicial de clientes, productos y vendedores.",
                ],
              },
              {
                type: "note",
                text: "La primera sincronización puede tomar entre 2 y 10 minutos según el tamaño de tu catálogo. Podés cerrar la pestaña — el proceso continúa en segundo plano.",
              },
            ],
          },
          {
            title: "Enviar facturas a Siigo",
            blocks: [
              {
                type: "paragraph",
                text: "Una vez conectada la integración, podés enviar facturas individuales o por lote.",
              },
              {
                type: "bullets",
                items: [
                  "Individual: desde el detalle de factura → botón 'Sincronizar con Siigo'.",
                  "Por lote: el cron interno corre cada 30 min y envía las facturas en estado 'reviewed'.",
                  "Estado en la factura: draft → under review → reviewed → sent (oficial en Siigo).",
                ],
              },
            ],
          },
        ],
      },
      "tdsynnex-integration": {
        slug: "tdsynnex-integration",
        categoryKey: "integrations",
        title: "Conectar TD SYNNEX",
        description:
          "Importá automáticamente clientes, pedidos, suscripciones y catálogo desde tu cuenta TD SYNNEX.",
        estimatedTime: "5",
        sections: [
          {
            title: "Requisitos",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Cuenta activa de TD SYNNEX con permisos de API.",
                  "Token de acceso o credenciales (usuario + secret) provistos por TD SYNNEX.",
                  "Conocer tu account number de TD SYNNEX.",
                ],
              },
            ],
          },
          {
            title: "Conectar",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Ajustes → Integración TD SYNNEX.",
                  "Pegá account number, usuario y secret.",
                  "Probá la conexión con el botón 'Validar'.",
                  "Si responde 'OK', guardá. WIM ejecuta la primera sincronización.",
                ],
              },
              {
                type: "note",
                text: "El sync se ejecuta automáticamente cada 30 minutos. Si necesitás forzarlo manualmente, hay un botón 'Sincronizar ahora' en la misma página.",
              },
            ],
          },
          {
            title: "Qué se importa",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Clientes finales (con NIT, contacto y moneda).",
                  "Pedidos mayoristas con sus líneas.",
                  "Suscripciones activas con plan, precio y ciclo de facturación.",
                  "Productos del catálogo SaaS y consumo.",
                ],
              },
            ],
          },
        ],
      },
      "first-invoice": {
        slug: "first-invoice",
        categoryKey: "invoicing",
        title: "Crear tu primera factura",
        description:
          "Desde cero: cliente, suscripciones, líneas y envío a Siigo. Caso típico de reseller Microsoft.",
        estimatedTime: "12",
        sections: [
          {
            title: "Asegurate de tener cliente y suscripciones",
            blocks: [
              {
                type: "paragraph",
                text: "Si conectaste TD SYNNEX, lo más probable es que el cliente y las suscripciones ya estén importados. Verificá en /clientes y /suscripciones.",
              },
              {
                type: "bullets",
                items: [
                  "El cliente debe tener NIT y razón social válidos para que Siigo lo acepte.",
                  "Las suscripciones deben estar en estado 'activa' y vinculadas a productos del catálogo.",
                  "Si no aparece, podés crearlo manualmente desde /clientes → 'Agregar cliente'.",
                ],
              },
            ],
          },
          {
            title: "Generar la factura del mes",
            blocks: [
              {
                type: "paragraph",
                text: "WIM genera facturas mensuales automáticamente desde el primer día de cada mes (cohorte = mes de facturación). Para generar manualmente:",
              },
              {
                type: "numbered",
                items: [
                  "Ve a /facturas → 'Nueva factura'.",
                  "Elegí cliente y mes de facturación.",
                  "WIM rellena las líneas a partir de las suscripciones activas del cliente.",
                  "Revisá margen, TRM, descripciones y totales.",
                  "Cambiá el estado a 'reviewed' cuando esté lista.",
                ],
              },
            ],
          },
          {
            title: "Enviar a Siigo",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Desde el detalle de factura, click en 'Sincronizar con Siigo'.",
                  "WIM crea la factura en Siigo y devuelve el número oficial DIAN.",
                  "El estado cambia a 'sent' y se guarda el siigo_invoice_id.",
                ],
              },
              {
                type: "note",
                text: "Si Siigo rechaza la factura (cliente sin NIT, producto sin código, etc.) verás el error exacto en el detalle. Corregí y reintentá.",
              },
            ],
          },
        ],
      },
      "split-bill": {
        slug: "split-bill",
        categoryKey: "invoicing",
        title: "División por NIT (split bill)",
        description:
          "Cuando un cliente paga consolidado pero factura a varias entidades legales, dividí la factura en hijas por NIT destino.",
        estimatedTime: "5",
        sections: [
          {
            title: "Cuándo usarlo",
            blocks: [
              {
                type: "paragraph",
                text: "Algunos clientes (grupos empresariales) pagan un único monto pero requieren facturas separadas por cada empresa legal. WIM resuelve eso creando una factura 'padre' visible para vos y una factura 'hija' por cada NIT destino.",
              },
            ],
          },
          {
            title: "Configurar el split",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Abrí la factura padre.",
                  "Sección 'Dividir factura' → 'Agregar NIT destino'.",
                  "Para cada NIT: razón social, dirección, % o monto a derivar.",
                  "Click en 'Generar hijas'. Cada hija aparece en /facturas con badge de split.",
                ],
              },
            ],
          },
          {
            title: "Reglas y restricciones",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Solo se envían a Siigo las facturas hijas (la padre es de control interno).",
                  "La suma de las hijas debe igualar el total de la padre.",
                  "Si modificás líneas de la padre después de splitear, las hijas se regeneran.",
                ],
              },
            ],
          },
        ],
      },
      "margin-rules": {
        slug: "margin-rules",
        categoryKey: "invoicing",
        title: "Reglas de margen",
        description:
          "Cómo configurar márgenes por proveedor, cliente y producto — y entender la jerarquía cuando se solapan.",
        estimatedTime: "6",
        sections: [
          {
            title: "Jerarquía de margen",
            blocks: [
              {
                type: "paragraph",
                text: "WIM evalúa el margen para cada línea de factura en este orden — gana el primer nivel que matchee:",
              },
              {
                type: "numbered",
                items: [
                  "Override manual en la línea (si lo escribiste en el detalle de factura).",
                  "Regla cliente + producto específico.",
                  "Regla cliente (margen global del cliente).",
                  "Margen default del proveedor (TD SYNNEX, Nexsys, etc.).",
                  "0% si nada matchea.",
                ],
              },
            ],
          },
          {
            title: "Configurar margen por proveedor",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Andá a /proveedores.",
                  "Editá el proveedor (ej. TD SYNNEX).",
                  "Campo 'Margen default' → escribí el porcentaje (ej. 15).",
                  "Guardá. Aplicará a todas las líneas nuevas a menos que haya un override más específico.",
                ],
              },
            ],
          },
          {
            title: "Reglas por cliente",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Andá a /clientes/tarifas.",
                  "Buscá el cliente o creá una regla nueva.",
                  "Asignále un margen global y/o márgenes por producto.",
                  "Guardá. Próximas facturas usarán esta regla.",
                ],
              },
              {
                type: "note",
                text: "Si querés un margen distinto para un solo producto de un solo cliente, configurá la regla específica cliente+producto — gana sobre el margen global del cliente.",
              },
            ],
          },
        ],
      },
      "bulk-import-nexsys": {
        slug: "bulk-import-nexsys",
        categoryKey: "invoicing",
        title: "Carga masiva Nexsys",
        description:
          "Subí el reporte mensual de Nexsys (Excel) y dejá que WIM genere las facturas con productos agrupados y mapeo de clientes.",
        estimatedTime: "10",
        sections: [
          {
            title: "Cuándo usar el wizard",
            blocks: [
              {
                type: "paragraph",
                text: "Nexsys no tiene API. Cada mes te entregan un reporte Excel/CSV con todos los movimientos de suscripciones (ciclo, alta, renovación, etc.) en USD. El wizard convierte ese reporte en facturas listas para revisar y enviar a Siigo.",
              },
            ],
          },
          {
            title: "Flujo paso a paso",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Andá a /facturas → 'Carga masiva' → elegí 'Nexsys' como proveedor.",
                  "Subí el Excel. WIM detecta el header y parsea las filas.",
                  "Paso 'Vista previa': revisá totales en USD, breakdown por movimiento y cantidad de clientes detectados.",
                  "Paso 'Productos agrupados': para cada producto único del reporte, decidí si lo vinculás a un producto existente del catálogo o creás uno nuevo.",
                  "Paso 'Clientes': revisá los clientes detectados. Los que ya existen se vinculan automáticamente. Para los nuevos podés crearlos con nombre y un flag 'pendiente_completar' para llenar NIT después.",
                  "Paso 'Confirmación': WIM genera una factura combinada por cliente con todas sus líneas, aplica TRM del mes y margen según jerarquía.",
                ],
              },
              {
                type: "note",
                text: "El proceso es idempotente: si volvés a subir el mismo reporte, WIM detecta movimientos ya facturados y no los duplica.",
              },
            ],
          },
          {
            title: "Buenas prácticas",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Verificá que la TRM del mes esté cargada en Ajustes → Workspace antes de correr la carga.",
                  "Configurá el margen default del proveedor Nexsys antes de la primera carga — evita pasar línea por línea.",
                  "Si tenés clientes con NIT pendiente, completalos antes de enviar a Siigo (Siigo requiere NIT).",
                ],
              },
            ],
          },
        ],
      },
      "workspace-switcher": {
        slug: "workspace-switcher",
        categoryKey: "operations",
        title: "Cambiar entre workspaces",
        description:
          "Cómo alternar entre distintos workspaces y garantizar que la app cargue los datos correctos.",
        estimatedTime: "3",
        sections: [
          {
            title: "Cambiar de workspace",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Hacé clic en el icono del workspace en la esquina superior izquierda del sidebar.",
                  "Seleccioná el workspace destino del listado.",
                  "WIM recarga automáticamente con los datos del nuevo workspace.",
                ],
              },
              {
                type: "note",
                text: "Si después de cambiar seguís viendo datos del workspace anterior, refrescá con Cmd+Shift+R (Mac) o Ctrl+F5 (Windows). Persiste → cerrá sesión y volvé a entrar.",
              },
            ],
          },
          {
            title: "Crear un workspace nuevo",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Click en el mismo menú del switcher.",
                  "Opción 'Crear nuevo workspace'.",
                  "Asigná nombre y guardá. Vos quedás como admin.",
                ],
              },
            ],
          },
        ],
      },
      "trm-monthly": {
        slug: "trm-monthly",
        categoryKey: "operations",
        title: "Configurar TRM mensual",
        description:
          "Por qué la TRM es crítica para facturas USD y cómo cargarla cada mes.",
        estimatedTime: "3",
        sections: [
          {
            title: "Qué es la TRM en WIM",
            blocks: [
              {
                type: "paragraph",
                text: "La Tasa Representativa del Mercado convierte precios en USD (TD SYNNEX, Nexsys, CSP directo) a COP para facturar al cliente final. WIM usa una única TRM por mes — la que cargues vos.",
              },
              {
                type: "note",
                text: "Sin TRM cargada, las facturas con líneas en USD quedan trabadas. WIM te avisa en el detalle de la factura.",
              },
            ],
          },
          {
            title: "Cargar la TRM del mes",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Andá a Ajustes → Workspace → sección TRM.",
                  "Elegí el mes y escribí el valor TRM (ej. 4150).",
                  "Guardá. Aplicará a todas las facturas con billing_month del mismo mes.",
                ],
              },
              {
                type: "bullets",
                items: [
                  "Recomendado: cargar la TRM al inicio del mes con un valor estimado conservador.",
                  "Ajustar a fin de mes con el valor oficial DIAN — WIM regenera líneas en facturas no enviadas.",
                ],
              },
            ],
          },
        ],
      },
    },
  },
  en: {
    indexTitle: "Help center",
    indexDescription:
      "Step-by-step guides to configure WIM and operate your Microsoft wholesale invoicing business.",
    minutesLabel: "min",
    readGuideLabel: "Read guide",
    categories: {
      "getting-started": "Getting started",
      integrations: "Integrations",
      invoicing: "Invoicing",
      operations: "Daily operations",
    },
    articles: {
      "getting-started": {
        slug: "getting-started",
        categoryKey: "getting-started",
        title: "Getting started with WIM",
        description:
          "Create your workspace, invite your team, and get the system ready to issue your first invoice.",
        estimatedTime: "8",
        sections: [
          {
            title: "Create your account and workspace",
            blocks: [
              {
                type: "paragraph",
                text: "WIM organizes data by workspaces. Each workspace is an isolated environment — its customers, subscriptions, invoices, and integrations do not mix with others.",
              },
              {
                type: "numbered",
                items: [
                  "Go to app.billbywim.com and create your account with your work email.",
                  "Confirm your email from the message we sent.",
                  "Create your first workspace with a name — usually your company.",
                  "Switch between workspaces from the icon at the top-left of the sidebar.",
                ],
              },
              {
                type: "note",
                text: "You can have multiple workspaces if you run separate companies or environments (prod / test). Each one keeps its own configuration and data.",
              },
            ],
          },
          {
            title: "Complete your company data",
            blocks: [
              {
                type: "paragraph",
                text: "Before invoicing we need to know who you are billing as — legal name, tax ID, address, and base currency.",
              },
              {
                type: "numbered",
                items: [
                  "Go to Settings → Workspace.",
                  "Fill in legal name, tax ID, address, city, and country.",
                  "Set the base currency and monthly FX rate (if billing in USD).",
                  "Upload your logo in the branding section.",
                ],
              },
            ],
          },
          {
            title: "Invite your team",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Go to Settings → Users.",
                  "Click 'Add user'.",
                  "Type the email and choose the role (admin / member).",
                  "The invitee receives an email to activate their account.",
                ],
              },
              {
                type: "note",
                text: "Only admins can connect integrations, run bulk imports, and send invoices to Siigo.",
              },
            ],
          },
        ],
      },
      "siigo-integration": {
        slug: "siigo-integration",
        categoryKey: "integrations",
        title: "Connect Siigo",
        description:
          "Link your Siigo account to sync customers, products, and send official DIAN invoices.",
        estimatedTime: "6",
        sections: [
          {
            title: "Before you start",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Your Siigo plan must include API access (Premium or higher).",
                  "You need a Siigo admin user with a generated access key.",
                  "Have at least one active seller and cost center in Siigo.",
                ],
              },
            ],
          },
          {
            title: "Connect the account",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Go to Settings → Siigo integration.",
                  "Paste your Siigo user (email) and access key.",
                  "Pick the default warehouse used on invoices.",
                  "Save. WIM runs an initial sync of customers, products, and sellers.",
                ],
              },
              {
                type: "note",
                text: "The first sync can take 2-10 minutes depending on your catalog size. You can close the tab — the process keeps running in the background.",
              },
            ],
          },
          {
            title: "Send invoices to Siigo",
            blocks: [
              {
                type: "paragraph",
                text: "Once connected, you can send invoices one by one or in batch.",
              },
              {
                type: "bullets",
                items: [
                  "Single: from the invoice detail → 'Sync to Siigo' button.",
                  "Batch: an internal cron runs every 30 min and sends invoices in 'reviewed' status.",
                  "Invoice lifecycle: draft → under review → reviewed → sent (official in Siigo).",
                ],
              },
            ],
          },
        ],
      },
      "tdsynnex-integration": {
        slug: "tdsynnex-integration",
        categoryKey: "integrations",
        title: "Connect TD SYNNEX",
        description:
          "Automatically import customers, orders, subscriptions, and catalog from your TD SYNNEX account.",
        estimatedTime: "5",
        sections: [
          {
            title: "Requirements",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Active TD SYNNEX account with API permissions.",
                  "Access token or credentials (user + secret) provided by TD SYNNEX.",
                  "Know your TD SYNNEX account number.",
                ],
              },
            ],
          },
          {
            title: "Connect",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Settings → TD SYNNEX integration.",
                  "Paste account number, user, and secret.",
                  "Test with the 'Validate' button.",
                  "If it responds 'OK', save. WIM runs the first sync.",
                ],
              },
              {
                type: "note",
                text: "The sync runs automatically every 30 minutes. If you need to force it manually, there's a 'Sync now' button on the same page.",
              },
            ],
          },
          {
            title: "What gets imported",
            blocks: [
              {
                type: "bullets",
                items: [
                  "End customers (with tax ID, contact, and currency).",
                  "Wholesale orders with their lines.",
                  "Active subscriptions with plan, price, and billing cycle.",
                  "SaaS and consumption catalog products.",
                ],
              },
            ],
          },
        ],
      },
      "first-invoice": {
        slug: "first-invoice",
        categoryKey: "invoicing",
        title: "Create your first invoice",
        description:
          "From scratch: customer, subscriptions, lines, and Siigo sync. Typical Microsoft reseller flow.",
        estimatedTime: "12",
        sections: [
          {
            title: "Make sure you have customer and subscriptions",
            blocks: [
              {
                type: "paragraph",
                text: "If you connected TD SYNNEX, the customer and subscriptions are most likely already imported. Verify in /customers and /subscriptions.",
              },
              {
                type: "bullets",
                items: [
                  "The customer must have a valid tax ID and legal name for Siigo to accept it.",
                  "Subscriptions must be 'active' and linked to catalog products.",
                  "If missing, you can create it manually in /customers → 'Add customer'.",
                ],
              },
            ],
          },
          {
            title: "Generate the monthly invoice",
            blocks: [
              {
                type: "paragraph",
                text: "WIM auto-generates monthly invoices on the first day of each month (cohort = billing month). To do it manually:",
              },
              {
                type: "numbered",
                items: [
                  "Go to /invoices → 'New invoice'.",
                  "Pick the customer and billing month.",
                  "WIM populates lines from the customer's active subscriptions.",
                  "Review margin, FX rate, descriptions, and totals.",
                  "Change status to 'reviewed' when ready.",
                ],
              },
            ],
          },
          {
            title: "Send to Siigo",
            blocks: [
              {
                type: "numbered",
                items: [
                  "From the invoice detail, click 'Sync to Siigo'.",
                  "WIM creates the invoice in Siigo and returns the official DIAN number.",
                  "Status changes to 'sent' and we save the siigo_invoice_id.",
                ],
              },
              {
                type: "note",
                text: "If Siigo rejects the invoice (customer without tax ID, product without code, etc.) you'll see the exact error in the detail. Fix and retry.",
              },
            ],
          },
        ],
      },
      "split-bill": {
        slug: "split-bill",
        categoryKey: "invoicing",
        title: "Split bill by tax ID",
        description:
          "When a customer pays consolidated but invoices to multiple legal entities, split the parent invoice into children by destination tax ID.",
        estimatedTime: "5",
        sections: [
          {
            title: "When to use it",
            blocks: [
              {
                type: "paragraph",
                text: "Some customers (business groups) pay one amount but require separate invoices per legal entity. WIM solves that by creating a 'parent' invoice visible to you and a 'child' invoice per destination tax ID.",
              },
            ],
          },
          {
            title: "Configure the split",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Open the parent invoice.",
                  "Section 'Split invoice' → 'Add destination tax ID'.",
                  "For each tax ID: legal name, address, % or amount to allocate.",
                  "Click 'Generate children'. Each child appears in /invoices with a split badge.",
                ],
              },
            ],
          },
          {
            title: "Rules and constraints",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Only child invoices are sent to Siigo (parent is for internal control).",
                  "The sum of children must equal the parent total.",
                  "If you modify parent lines after splitting, children are regenerated.",
                ],
              },
            ],
          },
        ],
      },
      "margin-rules": {
        slug: "margin-rules",
        categoryKey: "invoicing",
        title: "Margin rules",
        description:
          "How to configure margins per supplier, customer, and product — and understand the hierarchy when they overlap.",
        estimatedTime: "6",
        sections: [
          {
            title: "Margin hierarchy",
            blocks: [
              {
                type: "paragraph",
                text: "WIM evaluates margin for each invoice line in this order — first match wins:",
              },
              {
                type: "numbered",
                items: [
                  "Manual override on the line (if typed in the invoice detail).",
                  "Customer + specific product rule.",
                  "Customer rule (global customer margin).",
                  "Supplier default margin (TD SYNNEX, Nexsys, etc.).",
                  "0% if nothing matches.",
                ],
              },
            ],
          },
          {
            title: "Configure supplier margin",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Go to /suppliers.",
                  "Edit the supplier (e.g. TD SYNNEX).",
                  "Field 'Default margin' → type the percentage (e.g. 15).",
                  "Save. Applies to all new lines unless there's a more specific override.",
                ],
              },
            ],
          },
          {
            title: "Customer rules",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Go to /customers/rates.",
                  "Search the customer or create a new rule.",
                  "Assign a global margin and/or per-product margins.",
                  "Save. Future invoices will use this rule.",
                ],
              },
              {
                type: "note",
                text: "If you want a distinct margin for a single product of a single customer, set the specific customer+product rule — wins over the global customer margin.",
              },
            ],
          },
        ],
      },
      "bulk-import-nexsys": {
        slug: "bulk-import-nexsys",
        categoryKey: "invoicing",
        title: "Nexsys bulk import",
        description:
          "Upload the monthly Nexsys (Excel) report and let WIM generate invoices with grouped products and customer mapping.",
        estimatedTime: "10",
        sections: [
          {
            title: "When to use the wizard",
            blocks: [
              {
                type: "paragraph",
                text: "Nexsys has no API. Each month they deliver an Excel/CSV report with all subscription movements (cycle, new, renewal, etc.) in USD. The wizard turns that report into invoices ready to review and send to Siigo.",
              },
            ],
          },
          {
            title: "Step-by-step flow",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Go to /invoices → 'Bulk import' → pick 'Nexsys' as supplier.",
                  "Upload the Excel. WIM detects the header and parses rows.",
                  "'Preview' step: review totals in USD, movement breakdown, and detected customer count.",
                  "'Grouped products' step: for each unique product in the report, decide whether to link it to an existing catalog product or create a new one.",
                  "'Customers' step: review detected customers. Existing ones link automatically. For new ones you can create them with name and a 'pending_complete' flag to fill tax ID later.",
                  "'Confirmation' step: WIM generates one combined invoice per customer with all its lines, applies monthly FX and margin per hierarchy.",
                ],
              },
              {
                type: "note",
                text: "The process is idempotent: if you re-upload the same report, WIM detects already-billed movements and won't duplicate them.",
              },
            ],
          },
          {
            title: "Best practices",
            blocks: [
              {
                type: "bullets",
                items: [
                  "Verify the monthly FX is loaded in Settings → Workspace before running the import.",
                  "Configure the Nexsys supplier's default margin before the first import — avoids going line by line.",
                  "If you have customers with pending tax ID, complete them before sending to Siigo (Siigo requires it).",
                ],
              },
            ],
          },
        ],
      },
      "workspace-switcher": {
        slug: "workspace-switcher",
        categoryKey: "operations",
        title: "Switch between workspaces",
        description:
          "How to alternate between workspaces and ensure the app loads the correct data.",
        estimatedTime: "3",
        sections: [
          {
            title: "Switch workspace",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Click the workspace icon at the top-left of the sidebar.",
                  "Select the target workspace from the list.",
                  "WIM auto-reloads with the new workspace's data.",
                ],
              },
              {
                type: "note",
                text: "If you still see previous workspace data after switching, refresh with Cmd+Shift+R (Mac) or Ctrl+F5 (Windows). If it persists, sign out and back in.",
              },
            ],
          },
          {
            title: "Create a new workspace",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Click the same switcher menu.",
                  "'Create new workspace' option.",
                  "Pick a name and save. You become the admin.",
                ],
              },
            ],
          },
        ],
      },
      "trm-monthly": {
        slug: "trm-monthly",
        categoryKey: "operations",
        title: "Configure monthly FX rate",
        description:
          "Why FX is critical for USD invoices and how to load it each month.",
        estimatedTime: "3",
        sections: [
          {
            title: "What FX means in WIM",
            blocks: [
              {
                type: "paragraph",
                text: "The FX rate (TRM in Colombia) converts USD prices (TD SYNNEX, Nexsys, direct CSP) to COP to invoice the end customer. WIM uses a single FX per month — the one you load.",
              },
              {
                type: "note",
                text: "Without FX loaded, invoices with USD lines get stuck. WIM warns you in the invoice detail.",
              },
            ],
          },
          {
            title: "Load the month's FX",
            blocks: [
              {
                type: "numbered",
                items: [
                  "Go to Settings → Workspace → FX section.",
                  "Pick the month and type the FX value (e.g. 4150).",
                  "Save. Applies to all invoices with the same billing_month.",
                ],
              },
              {
                type: "bullets",
                items: [
                  "Recommended: load FX at the start of the month with a conservative estimate.",
                  "Adjust at month-end with the official DIAN value — WIM regenerates lines on unsent invoices.",
                ],
              },
            ],
          },
        ],
      },
    },
  },
};

export const DOCS_ARTICLE_ORDER = [
  "getting-started",
  "siigo-integration",
  "tdsynnex-integration",
  "first-invoice",
  "split-bill",
  "margin-rules",
  "bulk-import-nexsys",
  "workspace-switcher",
  "trm-monthly",
];

export function getDocsContent(locale: Locale): DocsLocaleContent {
  return docsContent[locale];
}

export function getArticleList(locale: Locale): DocArticle[] {
  const content = getDocsContent(locale);
  return DOCS_ARTICLE_ORDER.map((slug) => content.articles[slug]).filter(Boolean);
}

export function getArticle(locale: Locale, slug: string): DocArticle | undefined {
  return getDocsContent(locale).articles[slug];
}

export function getArticlesByCategory(locale: Locale): Map<DocCategoryKey, DocArticle[]> {
  const articles = getArticleList(locale);
  const map = new Map<DocCategoryKey, DocArticle[]>();

  for (const article of articles) {
    const list = map.get(article.categoryKey) ?? [];
    list.push(article);
    map.set(article.categoryKey, list);
  }

  return map;
}
