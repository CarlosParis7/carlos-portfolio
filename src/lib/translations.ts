export const translations = {
  en: {
    // Navbar
    skipLink: "Skip to main content",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    letsTalk: "Let's talk",

    // Hero
    heroTitle: "Full-Stack Developer & AI Enthusiast",
    heroSubtitle: "Building products that matter with Next.js, React, and AI automation",
    heroCTA: "View my work",

    // About
    aboutTitle: "About me",
    aboutDescription: "I'm Carlos, a full-stack developer from Panama specializing in creating modern web applications and AI-powered solutions. With expertise in Next.js, React, and cloud infrastructure, I help startups and businesses transform their ideas into reality.",

    // Services
    servicesTitle: "Services",
    serviceTech: "Tech Development",
    serviceTechDesc: "Full-stack web applications with Next.js, React, and TypeScript",
    serviceSaaS: "SaaS Solutions",
    serviceSaaSDesc: "End-to-end SaaS platforms with authentication, databases, and real-time features",
    serviceAI: "AI Integration",
    serviceAIDesc: "Intelligent automation and AI-powered features using Claude API and RAG systems",
    servicePOS: "POS Systems",
    servicePOSDesc: "Custom point-of-sale systems for retail and restaurant businesses",

    // Contact
    contactTitle: "Get in touch",
    contactDesc: "Have a project in mind? I'd love to help bring it to life.",
    contactEmail: "Send an email",
    contactCall: "Schedule a call",

    // Footer
    footerMade: "Made with ❤️ in Panama",
  },
  es: {
    // Navbar
    skipLink: "Saltar al contenido",
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
    letsTalk: "Trabajemos juntos",

    // Hero
    heroTitle: "Full-Stack Developer & Entusiasta de IA",
    heroSubtitle: "Construyendo productos que importan con Next.js, React y automatización con IA",
    heroCTA: "Ver mi trabajo",

    // About
    aboutTitle: "Sobre mí",
    aboutDescription: "Soy Carlos, desarrollador full-stack de Panamá especializado en crear aplicaciones web modernas y soluciones impulsadas por IA. Con experiencia en Next.js, React e infraestructura en la nube, ayudo a startups y negocios a convertir sus ideas en realidad.",

    // Services
    servicesTitle: "Servicios",
    serviceTech: "Desarrollo Técnico",
    serviceTechDesc: "Aplicaciones web full-stack con Next.js, React y TypeScript",
    serviceSaaS: "Soluciones SaaS",
    serviceSaaSDesc: "Plataformas SaaS completas con autenticación, bases de datos y características en tiempo real",
    serviceAI: "Integración de IA",
    serviceAIDesc: "Automatización inteligente y características impulsadas por IA usando Claude API y sistemas RAG",
    servicePOS: "Sistemas POS",
    servicePOSDesc: "Sistemas personalizados de punto de venta para negocios de retail y restaurantes",

    // Contact
    contactTitle: "Ponte en contacto",
    contactDesc: "¿Tienes un proyecto en mente? Me encantaría ayudarte a hacerlo realidad.",
    contactEmail: "Envíame un email",
    contactCall: "Agenda una llamada",

    // Footer
    footerMade: "Hecho con ❤️ en Panamá",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
