"use client";

import { motion } from "framer-motion";
import { SwiftPosDashboard } from "@/components/ui/SwiftPosDashboard";
import { BoxExpressDashboard } from "@/components/ui/BoxExpressDashboard";
import { CopilotMockup } from "@/components/ui/CopilotMockup";
import { LandingMockup } from "@/components/ui/LandingMockup";

type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  color: string;
  mockup: React.ReactNode;
};

const projects: Project[] = [
  {
    title: "SwiftPOS",
    category: "SaaS · Punto de Venta",
    status: "En producción",
    description:
      "Diseñé la arquitectura completa: Next.js en frontend, Node.js + Postgres en backend, módulos de inventario, reportes de ventas y análisis asistido por IA.",
    color: "from-orange-500/20 to-red-500/20",
    mockup: <SwiftPosDashboard />,
  },
  {
    title: "BoxExpress",
    category: "SaaS · Logística",
    status: "En producción",
    description:
      "Construí el sistema de tracking, notificaciones por WhatsApp vía Twilio, dashboard de rentabilidad y la lógica de gestión de casilleros P.O. Box.",
    color: "from-indigo-500/20 to-cyan-500/20",
    mockup: <BoxExpressDashboard />,
  },
  {
    title: "Atlas Copilot",
    category: "IA · RAG",
    status: "En producción",
    description:
      "Implementé el pipeline RAG completo: ingesta de documentos, embeddings con OpenAI, búsqueda vectorial en Supabase pgvector y UI de chat en tiempo real.",
    color: "from-emerald-500/20 to-teal-500/20",
    mockup: <CopilotMockup />,
  },
  {
    title: "Landing Pages",
    category: "Experiencia Web",
    status: "Entregadas",
    description:
      "Diseñé y desarrollé sitios de alta conversión para clientes: clínicas de estética, firmas legales y fotógrafos. Métricas, SEO y animaciones incluidas.",
    color: "from-rose-500/20 to-pink-500/20",
    mockup: <LandingMockup />,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease }}
      className={`group relative rounded-3xl overflow-hidden hairline ${
        featured
          ? "lg:col-span-3 flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch min-h-[360px]"
          : "h-[380px]"
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-35 transition-opacity duration-500`} />

      {/* Status badge */}
      <div className="absolute top-6 right-6 z-30">
        <span className="tick text-xs font-medium px-3 py-1 rounded-full bg-black/40 border border-white/10 text-foreground/80 backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      {/* Text block */}
      <div
        className={`relative z-20 flex flex-col p-7 ${
          featured ? "lg:order-1 lg:justify-center lg:p-8" : "absolute inset-x-0 top-0 min-h-[190px]"
        }`}
      >
        <p className="tick text-xs text-accent/60 mb-2">
          {project.category}
        </p>
        <h3 className={`font-bold tracking-tight mb-2 ${featured ? "text-3xl md:text-4xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="text-[13px] text-foreground/55 max-w-md leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Mockup */}
      <div
        className={`relative z-10 overflow-hidden shadow-2xl border-white/10 ${
          featured
            ? "order-last lg:order-2 mx-6 mb-6 mt-2 h-[300px] sm:h-[360px] lg:h-auto lg:m-8 rounded-xl border bg-[#0a0a0a]/60 backdrop-blur-md"
            : "absolute left-7 right-7 bottom-0 h-[52%] rounded-t-xl border-x border-t bg-[#0a0a0a]/60 backdrop-blur-md"
        }`}
      >
        <div className="relative h-6 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2 z-10">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <div className="relative h-[calc(100%-1.5rem)]">{project.mockup}</div>
      </div>
    </motion.div>
  );
}

export function Showcase() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-28 md:py-36 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] text-balance">
            Proyectos que
            <br />
            <span className="text-foreground/40">diseñé y construí.</span>
          </h2>
          <p className="text-sm text-foreground/40 max-w-xs leading-relaxed sm:text-right">
            De la arquitectura al deploy. Diseño,
            frontend, backend y base de datos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProjectCard project={featured} index={0} featured />
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
