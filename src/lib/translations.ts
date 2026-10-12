// Full bilingual content for the portfolio. ES is the source of truth for
// voice (Carlos writes like this); EN mirrors it without buzzwords.
// Keep both arrays in sync when editing lists.

export const translations = {
  es: {
    // Navbar
    metaDescription:
      "Desarrollador full-stack en Panamá. Construyo productos web completos con TypeScript, React, Next.js, Node y PostgreSQL, incluido el punto de venta que un bar usa a diario.",
    skipLink: "Saltar al contenido",
    navAbout: "Sobre mí",
    navProjects: "Proyectos",
    navContact: "Contacto",
    letsTalk: "Trabajemos juntos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",

    // Hero
    heroStatus: "Disponible para proyectos",
    heroLine1: "Software",
    heroLine2: "que negocios",
    heroLine3: "usan a diario.",
    heroBio:
      "Soy Carlos, desarrollador full-stack en Panamá. Construyo productos completos con TypeScript, React y Next.js, y los sostengo con un backend en Node y Postgres que aguanta producción.",
    heroBioName: "desarrollador full-stack",
    ctaWork: "Trabajemos juntos",
    ctaCv: "Descargar CV",
    ctaGithub: "Ver GitHub",
    heroCaptionRole: "Full-Stack Developer · Panamá",

    // About
    aboutHeadA: "Todo el ciclo,",
    aboutHeadB: "de la idea",
    aboutHeadC: "al deploy.",
    aboutP1:
      "Vivo en Panamá y trabajo con empresas dentro y fuera del país. En el frontend uso React y Next.js; en el backend, Node con Postgres y Supabase. Me toca todo el ciclo: de la primera pantalla al deploy.",
    aboutP2:
      "He levantado SaaS desde cero, un sistema POS que un comercio real usa todos los días e integraciones de IA con RAG. Escribo código que el próximo dev (a veces yo mismo en seis meses) pueda leer sin maldecir.",
    aboutP3Pre: "Busco proyectos donde el detalle importe y donde pueda ",
    aboutP3Strong: "dejar el código mejor de lo que lo encontré.",
    aboutHl1Value: "SaaS",
    aboutHl1Label: "construidos desde cero",
    aboutHl2Value: "POS",
    aboutHl2Label: "en comercios reales",
    aboutHl3Value: "RAG",
    aboutHl3Label: "integraciones de IA",

    // Trust
    trustLabel: "El stack con el que construyo a diario",

    // Showcase
    showcaseHeadA: "Proyectos que",
    showcaseHeadB: "diseñé y construí.",
    showcaseSub: "De la arquitectura al deploy: diseño, frontend, backend y base de datos.",
    viewDemo: "Ver demo",
    demoCreds: "Acceso demo",
    statusLive: "En producción",
    statusDelivered: "Entregado",
    projCobrixDesc:
      "Punto de venta para restaurantes y bares: plano de mesas, comandas a cocina y cobro en un solo flujo.",
    projCobrixCat: "SaaS · Restaurantes y bares",
    projSwiftDesc:
      "Arquitectura completa: Next.js al frente, Node y Postgres atrás. Inventario, reportes de ventas y análisis asistido por IA.",
    projBoxDesc:
      "Paquetes, clientes, facturas y un dashboard de rentabilidad para couriers con casilleros P.O. Box, sobre Supabase.",
    projAtlasDesc:
      "Pipeline RAG de punta a punta: ingesta de documentos, embeddings con OpenAI, búsqueda vectorial en pgvector y respuestas de Claude en streaming. El demo público corre en modo offline, sin costo de API.",
    projLandingDesc:
      "Sitios de alta conversión para clientes reales: clínicas estéticas, firmas legales y fotógrafos. SEO, métricas y animación incluidos.",
    projSwiftCat: "SaaS · Punto de venta",
    projBoxCat: "SaaS · Logística",
    projAtlasCat: "IA · RAG",
    projLandingCat: "Web · Clientes",

    // Estado honesto de cada proyecto
    statusClient: "Cliente real · uso diario",
    statusDemo: "Demo en vivo",
    statusClients: "Clientes reales",

    // Caso de estudio: Cobrix
    caseLabel: "Caso de estudio",
    casePitch:
      "El sistema con el que un bar de Ciudad de Panamá toma pedidos en tablets, manda comandas a cocina y barra, cobra y factura ante la DGI. En uso todos los días.",
    caseProblemTitle: "El problema",
    caseProblem:
      "Varias meseras, una cocina y una barra trabajando a la vez. Los pedidos tenían que llegar a la impresora correcta, la cuenta tenía que cuadrar al centavo y nada podía depender de que el WiFi no se cayera.",
    caseRoleTitle: "Mi rol",
    caseRole:
      "Todo el ciclo: entender la operación con el dueño, diseñar las pantallas, el frontend, el backend, la base de datos, la instalación en el local y el soporte.",
    caseResultTitle: "El resultado",
    caseResult:
      "Un punto de venta en producción que el personal usa en cada turno: mesas, comandas, división de cuentas, cierre de caja, reportes y horas del personal.",
    caseDecisionsTitle: "Decisiones difíciles",
    caseD1Title: "Sin WiFi no se pierde nada",
    caseD1:
      "Los pedidos se guardan en la tablet y se sincronizan al volver la red, sin perderse ni duplicarse.",
    caseD2Title: "Varias tablets, la misma mesa",
    caseD2:
      "Control de versiones optimista para que dos personas no se pisen la cuenta al editarla a la vez.",
    caseD3Title: "La factura cuadra al centavo",
    caseD3:
      "Cuentas divididas por producto con el ITBMS prorrateado, y facturación electrónica ante la DGI.",
    caseFact1: "+340 pruebas automáticas",
    caseFact2: "Funciona sin WiFi",
    caseFact3: "Factura electrónica DGI",
    caseFact4: "Impresoras térmicas en red y USB",
    caseFact5: "Tiempo real entre tablets",
    caseCodeNote: "El código es privado porque es de un cliente real.",
    caseCodeCta: "Te muestro el código y la arquitectura en una llamada",
    caseCodeMailSubject: "Quiero ver el código de Cobrix",
    caseShotAlt: "Pantalla real de Cobrix: tomando el pedido de una mesa",
    caseShotMapAlt: "Pantalla real de Cobrix: mapa de mesas por zona",

    faqWrite: "Escríbeme",

    // Email (mailto subject/body)
    mailSubject: "Hablemos de un proyecto",
    mailSubjectProfile: "Quiero saber más sobre tu perfil",
    mailBody: "Hola Carlos, vi tu portfolio y me gustaría conversar sobre…",

    // Contact
    contactHeadA: "Hablemos",
    contactHeadB: "cuando quieras.",
    contactSub:
      "Si tienes una posición abierta, un proyecto en mente o solo quieres conversar sobre tech, respondo rápido.",
    copyEmail: "Copiar email",
    copiedEmail: "Email copiado",

    // Footer
    footerTagline: "Full-Stack Developer en Panamá.",
    footerDesc:
      "Desarrollador full-stack en Panamá. Construyo productos web completos con TypeScript, React, Next.js, Node y PostgreSQL.",
    footerRights: "Todos los derechos reservados.",
    footerBuilt: "Hecho con Next.js y mucho café.",
  },

  en: {
    // Navbar
    metaDescription:
      "Full-stack developer in Panama. I build complete web products with TypeScript, React, Next.js, Node and PostgreSQL, including the point-of-sale system a bar runs on every day.",
    skipLink: "Skip to main content",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    letsTalk: "Let's work together",
    openMenu: "Open menu",
    closeMenu: "Close menu",

    // Hero
    heroStatus: "Available for projects",
    heroLine1: "Software",
    heroLine2: "businesses",
    heroLine3: "run on daily.",
    heroBio:
      "I'm Carlos, a full-stack developer based in Panama. I build complete products with TypeScript, React and Next.js, and back them with Node and Postgres that hold up in production.",
    heroBioName: "full-stack developer",
    ctaWork: "Let's work together",
    ctaCv: "Download Resume",
    ctaGithub: "View GitHub",
    heroCaptionRole: "Full-Stack Developer · Panama",

    // About
    aboutHeadA: "The whole cycle,",
    aboutHeadB: "from idea",
    aboutHeadC: "to deploy.",
    aboutP1:
      "I'm based in Panama and work with teams here and abroad. React and Next.js on the front, Node with Postgres and Supabase on the back. I handle the whole cycle, from the first screen to the deploy.",
    aboutP2:
      "I've built SaaS from zero, a POS system a real business uses every day, and RAG-based AI integrations. I write code the next developer (sometimes me, six months later) can read without cursing.",
    aboutP3Pre: "I look for projects where the details matter and where I can ",
    aboutP3Strong: "leave the code better than I found it.",
    aboutHl1Value: "SaaS",
    aboutHl1Label: "built from scratch",
    aboutHl2Value: "POS",
    aboutHl2Label: "in real businesses",
    aboutHl3Value: "RAG",
    aboutHl3Label: "AI integrations",

    // Trust
    trustLabel: "The stack I build with every day",

    // Showcase
    showcaseHeadA: "Projects I",
    showcaseHeadB: "designed and built.",
    showcaseSub: "From architecture to deploy: design, frontend, backend and database.",
    viewDemo: "View demo",
    demoCreds: "Demo access",
    statusLive: "Live",
    statusDelivered: "Delivered",
    projCobrixDesc:
      "Point of sale for restaurants and bars: table floor plan, kitchen tickets and checkout in one flow.",
    projCobrixCat: "SaaS · Restaurants & bars",
    projSwiftDesc:
      "Full architecture: Next.js up front, Node and Postgres behind. Inventory, sales reports and AI-assisted analytics.",
    projBoxDesc:
      "Packages, customers, invoices and a profitability dashboard for P.O. Box couriers, built on Supabase.",
    projAtlasDesc:
      "End-to-end RAG pipeline: document ingestion, OpenAI embeddings, pgvector search and streamed answers from Claude. The public demo runs in an offline mode, with no API cost.",
    projLandingDesc:
      "High-conversion sites for real clients: aesthetic clinics, law firms and photographers. SEO, metrics and motion included.",
    projSwiftCat: "SaaS · Point of sale",
    projBoxCat: "SaaS · Logistics",
    projAtlasCat: "AI · RAG",
    projLandingCat: "Web · Clients",

    // Honest status per project
    statusClient: "Real client · daily use",
    statusDemo: "Live demo",
    statusClients: "Real clients",

    // Case study: Cobrix
    caseLabel: "Case study",
    casePitch:
      "The system a bar in Panama City uses to take orders on tablets, send tickets to the kitchen and bar, take payment and file e-invoices with the tax authority (DGI). In use every day.",
    caseProblemTitle: "The problem",
    caseProblem:
      "Several servers, a kitchen and a bar working at once. Orders had to reach the right printer, the bill had to add up to the cent, and nothing could depend on the WiFi staying up.",
    caseRoleTitle: "My role",
    caseRole:
      "The whole cycle: understanding the operation with the owner, designing the screens, frontend, backend, database, on-site installation and support.",
    caseResultTitle: "The result",
    caseResult:
      "A point of sale in production that the staff uses every shift: tables, kitchen tickets, split bills, cash closing, reports and staff hours.",
    caseDecisionsTitle: "Hard decisions",
    caseD1Title: "No WiFi, nothing lost",
    caseD1:
      "Orders are saved on the tablet and sync when the network comes back, without being lost or duplicated.",
    caseD2Title: "Many tablets, one table",
    caseD2:
      "Optimistic concurrency control so two people editing the same bill never overwrite each other.",
    caseD3Title: "The bill adds up to the cent",
    caseD3:
      "Bills split by item with prorated sales tax (ITBMS), plus electronic invoicing with the DGI.",
    caseFact1: "340+ automated tests",
    caseFact2: "Works offline",
    caseFact3: "DGI e-invoicing",
    caseFact4: "Network and USB thermal printers",
    caseFact5: "Real-time across tablets",
    caseCodeNote: "The code is private because it belongs to a real client.",
    caseCodeCta: "I'll walk you through the code and architecture on a call",
    caseCodeMailSubject: "I'd like to see the Cobrix code",
    caseShotAlt: "Real Cobrix screen: taking a table's order",
    caseShotMapAlt: "Real Cobrix screen: table map by zone",

    faqWrite: "Write to me",

    // Email (mailto subject/body)
    mailSubject: "Let's talk about a project",
    mailSubjectProfile: "I'd like to know more about you",
    mailBody: "Hi Carlos, I saw your portfolio and I'd like to talk about…",

    // Contact
    contactHeadA: "Let's talk",
    contactHeadB: "whenever you want.",
    contactSub:
      "If you have an open position, a project in mind, or just want to talk tech, I reply fast.",
    copyEmail: "Copy email",
    copiedEmail: "Email copied",

    // Footer
    footerTagline: "Full-Stack Developer in Panama.",
    footerDesc:
      "Full-stack developer in Panama. I build complete web products with TypeScript, React, Next.js, Node and PostgreSQL.",
    footerRights: "All rights reserved.",
    footerBuilt: "Built with Next.js and a lot of coffee.",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export const languages = Object.keys(translations) as Language[];

export const isLanguage = (value: string): value is Language =>
  value in translations;

// Build fails if one language is missing a key the other has: a missing key
// would otherwise render as "undefined" on the page.
type MissingInEn = Exclude<keyof typeof translations.es, keyof typeof translations.en>;
type MissingInEs = Exclude<keyof typeof translations.en, keyof typeof translations.es>;
type AssertNone<T extends never> = T;
export type TranslationParity = AssertNone<MissingInEn | MissingInEs>;
