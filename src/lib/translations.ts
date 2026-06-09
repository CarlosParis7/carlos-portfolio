// Full bilingual content for the portfolio. ES is the source of truth for
// voice (Carlos writes like this); EN mirrors it without buzzwords.
// Keep both arrays in sync when editing lists.

export const translations = {
  es: {
    // Navbar
    skipLink: "Saltar al contenido",
    navAbout: "Sobre mí",
    navProjects: "Proyectos",
    navContact: "Contacto",
    letsTalk: "Trabajemos juntos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",

    // Hero
    heroStatus: "Disponible para proyectos",
    heroLine1: "Full-Stack",
    heroLine2: "Developer",
    heroLine3: "especializado.",
    heroBio:
      "Soy Carlos, desarrollador full-stack en Panamá. Construyo productos completos con TypeScript, React y Next.js, y los sostengo con un backend en Node y Postgres que aguanta producción.",
    heroBioName: "desarrollador full-stack",
    ctaWork: "Trabajemos juntos",
    ctaCv: "Descargar CV",
    ctaGithub: "Ver GitHub",
    heroCaptionRole: "Full-Stack Developer · Panamá",

    // About
    aboutHeadA: "Full-Stack",
    aboutHeadB: "con foco en",
    aboutHeadC: "calidad.",
    aboutP1:
      "Vivo en Panamá y trabajo con empresas dentro y fuera del país. En el frontend uso React y Next.js; en el backend, Node con Postgres y Supabase. Me toca todo el ciclo: de la primera pantalla al deploy.",
    aboutP2:
      "He levantado SaaS desde cero, sistemas POS para comercios reales, integraciones de IA con RAG y plataformas que no se pueden caer. Escribo código que el próximo dev (a veces yo mismo en seis meses) pueda leer sin maldecir.",
    aboutP3Pre: "Busco proyectos donde el detalle importe y donde pueda ",
    aboutP3Strong: "dejar el código mejor de lo que lo encontré.",
    aboutRole: "Full-Stack Developer",
    aboutLocation: "Ciudad de Panamá · GMT-5",
    aboutAvailable: "Disponible para proyectos",
    aboutHl1Value: "SaaS",
    aboutHl1Label: "construidos desde cero",
    aboutHl2Value: "POS",
    aboutHl2Label: "en comercios reales",
    aboutHl3Value: "RAG",
    aboutHl3Label: "integraciones de IA",

    // Stats / facts (rewritten as a sentence-led fact strip, not metric cards)
    factsHead: "En números, rápido.",
    fact1Value: "20+",
    fact1Label: "productos enviados a producción",
    fact2Value: "4 años",
    fact2Label: "construyendo software que se usa a diario",
    fact3Value: "Panamá",
    fact3Label: "base local, trabajo remoto sin fricción",

    // Trust
    trustLabel: "El stack con el que construyo a diario",

    // Services
    servicesHeadA: "Lo que hago",
    servicesHeadB: "y cómo lo hago.",
    svcFrontendTitle: "Frontend que se siente bien",
    svcFrontendDesc:
      "React, Next.js y TypeScript. Componentes reutilizables, SSR cuando suma, y una UI que carga rápido y no estorba.",
    svcBackendTitle: "Backend que no se cae",
    svcBackendDesc:
      "APIs en Node, autenticación, colas y manejo de errores pensado para producción, no para la demo.",
    svcDbTitle: "Datos bien modelados",
    svcDbDesc:
      "Postgres y Supabase. Esquemas normalizados, queries que no se arrastran, índices y migraciones versionadas.",
    svcUiTitle: "Diseño e interfaz",
    svcUiDesc:
      "Interfaces accesibles (WCAG), responsive de verdad y Tailwind. El detalle visual lo trabajo, no lo dejo al azar.",
    svcDevopsTitle: "Deploy y monitoreo",
    svcDevopsDesc:
      "CI/CD en Vercel, Docker cuando hace falta y observabilidad desde el día uno. Si algo se rompe, me entero yo primero.",

    // Showcase
    showcaseHeadA: "Proyectos que",
    showcaseHeadB: "diseñé y construí.",
    showcaseSub: "De la arquitectura al deploy: diseño, frontend, backend y base de datos.",
    viewDemo: "Ver demo",
    statusLive: "En producción",
    statusDelivered: "Entregado",
    projSwiftDesc:
      "Arquitectura completa: Next.js al frente, Node y Postgres atrás. Inventario, reportes de ventas y análisis asistido por IA.",
    projBoxDesc:
      "Tracking en vivo, avisos por WhatsApp con Twilio, dashboard de rentabilidad y la lógica de casilleros P.O. Box.",
    projAtlasDesc:
      "Pipeline RAG de punta a punta: ingesta de documentos, embeddings con OpenAI, búsqueda vectorial en pgvector y chat en tiempo real.",
    projLandingDesc:
      "Sitios de alta conversión para clientes reales: clínicas estéticas, firmas legales y fotógrafos. SEO, métricas y animación incluidos.",
    projSwiftCat: "SaaS · Punto de venta",
    projBoxCat: "SaaS · Logística",
    projAtlasCat: "IA · RAG",
    projLandingCat: "Web · Clientes",

    // Code showcase
    codeHeadA: "Código que",
    codeHeadB: "habla por sí solo.",

    // Process
    processHead: "Cómo trabajo.",
    processSub: "Cuatro fases. Sin saltarme pasos.",
    proc1Title: "Entender el problema",
    proc1Desc:
      "Antes de escribir una línea, entiendo qué se quiere lograr y por qué. Aterrizo la idea en requisitos concretos.",
    proc2Title: "Definir la arquitectura",
    proc2Desc:
      "Elijo el stack que resuelve el problema, no el de moda. Diseño los datos y los flujos principales primero.",
    proc3Title: "Construir con criterio",
    proc3Desc:
      "Código tipado y probado. Avanzo por partes, con demos tempranas para validar antes de seguir.",
    proc4Title: "Desplegar y medir",
    proc4Desc:
      "CI/CD y monitoreo desde el primer deploy. Si algo falla, lo sé antes que el usuario.",

    // FAQ
    faqHead: "Más allá del código.",
    faqSub: "Lo que no aparece en el CV pero define cómo es trabajar conmigo.",
    faq1Q: "¿Cómo te comunicas dentro de un equipo?",
    faq1A: "Asíncrono y claro: updates escritos, decisiones documentadas, PRs que se entienden solos. En reuniones voy al grano. No necesito que me persigan para entregar.",
    faq2Q: "¿Cómo reaccionas al feedback duro?",
    faq2A: "Lo busco. Un PR lleno de comentarios es información, no un ataque. Prefiero que me marquen un problema hoy a que estalle en producción el viernes.",
    faq3Q: "¿Cómo priorizas con varias cosas urgentes a la vez?",
    faq3A: "Miro el impacto real de cada una, comunico el trade-off y ataco lo que bloquea al equipo. Mantengo a la gente al tanto; no desaparezco con la cabeza metida en el código.",
    faq4Q: "¿Trabajas bien en remoto?",
    faq4A: "Sí, llevo años haciéndolo. Soy organizado y autónomo, y sé distinguir cuándo resolver algo solo y cuándo escalarlo.",
    faq5Q: "¿Cómo aprendes algo nuevo?",
    faq5A: "Construyendo algo real con eso. Leo la documentación oficial, armo un proyecto chico y entiendo el porqué del diseño. No me quedo copiando ejemplos.",
    faq6Q: "¿Qué buscas en un equipo?",
    faq6A: "Gente con criterio, que dé feedback directo y que le importe la calidad del código. Un lugar donde pueda crecer y donde lo que hago cuente.",
    faqMore: "¿Quieres saber algo más?",
    faqWrite: "Escríbeme",

    // Email (mailto subject/body)
    mailSubject: "Hablemos de un proyecto",
    mailSubjectProfile: "Quiero saber más sobre tu perfil",
    mailBody: "Hola Carlos, vi tu portfolio y me gustaría conversar sobre…",
    mailFormSubjectPrefix: "Proyecto:",
    mailFormGreeting: "Hola Carlos, soy",
    mailFormSentFrom: "Enviado desde carlosparis.dev",

    // Contact
    contactHeadA: "Hablemos",
    contactHeadB: "cuando quieras.",
    contactSub:
      "Si tienes una posición abierta, un proyecto en mente o solo quieres conversar sobre tech, respondo rápido.",
    formName: "Tu nombre",
    formNamePh: "Juan Pérez",
    formRole: "Empresa o rol",
    formRolePh: "Frontend Dev en Acme, colaboración, etc.",
    formDetail: "Cuéntame más",
    formDetailPh: "Lo que tienes en mente…",
    formSubmit: "Enviar por email",
    copyEmail: "Copiar email",
    copiedEmail: "Email copiado",

    // Footer
    footerTagline: "Full-Stack Developer en Panamá.",
    footerDesc:
      "Full-Stack Developer en Panamá. Especializado en Next.js, React, TypeScript y arquitectura escalable. Construyo aplicaciones web modernas y sistemas backend robustos.",
    footerRights: "Todos los derechos reservados.",
    footerBuilt: "Hecho con Next.js y mucho café.",
  },

  en: {
    // Navbar
    skipLink: "Skip to main content",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    letsTalk: "Let's work together",
    openMenu: "Open menu",
    closeMenu: "Close menu",

    // Hero
    heroStatus: "Available for projects",
    heroLine1: "Full-Stack",
    heroLine2: "Developer",
    heroLine3: "who ships.",
    heroBio:
      "I'm Carlos, a full-stack developer based in Panama. I build complete products with TypeScript, React and Next.js, and back them with Node and Postgres that hold up in production.",
    heroBioName: "full-stack developer",
    ctaWork: "Let's work together",
    ctaCv: "Download CV",
    ctaGithub: "View GitHub",
    heroCaptionRole: "Full-Stack Developer · Panama",

    // About
    aboutHeadA: "Full-Stack",
    aboutHeadB: "with a bias for",
    aboutHeadC: "quality.",
    aboutP1:
      "I'm based in Panama and work with teams here and abroad. React and Next.js on the front, Node with Postgres and Supabase on the back. I handle the whole cycle, from the first screen to the deploy.",
    aboutP2:
      "I've built SaaS from zero, POS systems for real shops, RAG-based AI integrations, and platforms that can't go down. I write code the next developer (sometimes me, six months later) can read without cursing.",
    aboutP3Pre: "I look for projects where the details matter and where I can ",
    aboutP3Strong: "leave the code better than I found it.",
    aboutRole: "Full-Stack Developer",
    aboutLocation: "Panama City · GMT-5",
    aboutAvailable: "Available for projects",
    aboutHl1Value: "SaaS",
    aboutHl1Label: "built from scratch",
    aboutHl2Value: "POS",
    aboutHl2Label: "in real businesses",
    aboutHl3Value: "RAG",
    aboutHl3Label: "AI integrations",

    // Stats / facts
    factsHead: "The short version.",
    fact1Value: "20+",
    fact1Label: "products shipped to production",
    fact2Value: "4 years",
    fact2Label: "building software people use daily",
    fact3Value: "Panama",
    fact3Label: "local base, remote work without friction",

    // Trust
    trustLabel: "The stack I build with every day",

    // Services
    servicesHeadA: "What I do",
    servicesHeadB: "and how I do it.",
    svcFrontendTitle: "Frontend that feels right",
    svcFrontendDesc:
      "React, Next.js and TypeScript. Reusable components, SSR where it earns its place, and a UI that loads fast and stays out of the way.",
    svcBackendTitle: "Backend that holds",
    svcBackendDesc:
      "Node APIs, auth, queues and error handling built for production, not just for the demo.",
    svcDbTitle: "Data modeled well",
    svcDbDesc:
      "Postgres and Supabase. Normalized schemas, queries that don't crawl, indexes and versioned migrations.",
    svcUiTitle: "Design and interface",
    svcUiDesc:
      "Accessible interfaces (WCAG), responsive for real, and Tailwind. The visual detail is worked, not left to chance.",
    svcDevopsTitle: "Deploy and monitoring",
    svcDevopsDesc:
      "CI/CD on Vercel, Docker when needed, and observability from day one. If something breaks, I hear about it first.",

    // Showcase
    showcaseHeadA: "Projects I",
    showcaseHeadB: "designed and built.",
    showcaseSub: "From architecture to deploy: design, frontend, backend and database.",
    viewDemo: "View demo",
    statusLive: "Live",
    statusDelivered: "Delivered",
    projSwiftDesc:
      "Full architecture: Next.js up front, Node and Postgres behind. Inventory, sales reports and AI-assisted analytics.",
    projBoxDesc:
      "Live tracking, WhatsApp alerts via Twilio, a profitability dashboard, and the P.O. Box locker logic.",
    projAtlasDesc:
      "End-to-end RAG pipeline: document ingestion, OpenAI embeddings, vector search on pgvector, and real-time chat.",
    projLandingDesc:
      "High-conversion sites for real clients: aesthetic clinics, law firms and photographers. SEO, metrics and motion included.",
    projSwiftCat: "SaaS · Point of sale",
    projBoxCat: "SaaS · Logistics",
    projAtlasCat: "AI · RAG",
    projLandingCat: "Web · Clients",

    // Code showcase
    codeHeadA: "Code that",
    codeHeadB: "speaks for itself.",

    // Process
    processHead: "How I work.",
    processSub: "Four phases. No skipping steps.",
    proc1Title: "Understand the problem",
    proc1Desc:
      "Before writing a line, I figure out what we're trying to achieve and why. Then I turn it into concrete requirements.",
    proc2Title: "Define the architecture",
    proc2Desc:
      "I pick the stack that solves the problem, not the trendy one. Data model and core flows come first.",
    proc3Title: "Build with judgment",
    proc3Desc:
      "Typed, tested code. I move in increments, with early demos to validate before pushing on.",
    proc4Title: "Ship and measure",
    proc4Desc:
      "CI/CD and monitoring from the first deploy. If something fails, I know before the user does.",

    // FAQ
    faqHead: "Beyond the code.",
    faqSub: "What the CV leaves out but defines what working with me is like.",
    faq1Q: "How do you communicate inside a team?",
    faq1A: "Async and clear: written updates, documented decisions, PRs that explain themselves. In meetings I get to the point. I don't need chasing to deliver.",
    faq2Q: "How do you handle tough feedback?",
    faq2A: "I go looking for it. A PR full of comments is information, not an attack. I'd rather you flag a problem today than have it blow up in production on Friday.",
    faq3Q: "How do you prioritize when everything's urgent?",
    faq3A: "I look at the real impact of each item, surface the trade-off, and hit what's blocking the team. I keep people posted; I don't vanish head-down into the code.",
    faq4Q: "Do you work well remotely?",
    faq4A: "Yes, I've done it for years. I'm organized and self-directed, and I know when to solve something alone versus escalate it.",
    faq5Q: "How do you learn something new?",
    faq5A: "By building something real with it. I read the official docs, put together a small project, and understand the why behind the design. I don't stop at copying examples.",
    faq6Q: "What do you look for in a team?",
    faq6A: "People with judgment, who give direct feedback and care about code quality. A place where I can grow and where what I do counts.",
    faqMore: "Want to know anything else?",
    faqWrite: "Write to me",

    // Email (mailto subject/body)
    mailSubject: "Let's talk about a project",
    mailSubjectProfile: "I'd like to know more about you",
    mailBody: "Hi Carlos, I saw your portfolio and I'd like to talk about…",
    mailFormSubjectPrefix: "Project:",
    mailFormGreeting: "Hi Carlos, I'm",
    mailFormSentFrom: "Sent from carlosparis.dev",

    // Contact
    contactHeadA: "Let's talk",
    contactHeadB: "whenever you want.",
    contactSub:
      "If you have an open position, a project in mind, or just want to talk tech, I reply fast.",
    formName: "Your name",
    formNamePh: "John Doe",
    formRole: "Company or role",
    formRolePh: "Frontend Dev at Acme, a collaboration, etc.",
    formDetail: "Tell me more",
    formDetailPh: "What you have in mind…",
    formSubmit: "Send by email",
    copyEmail: "Copy email",
    copiedEmail: "Email copied",

    // Footer
    footerTagline: "Full-Stack Developer in Panama.",
    footerDesc:
      "Full-Stack Developer in Panama. Specialized in Next.js, React, TypeScript and scalable architecture. I build modern web apps and robust backend systems.",
    footerRights: "All rights reserved.",
    footerBuilt: "Built with Next.js and a lot of coffee.",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
