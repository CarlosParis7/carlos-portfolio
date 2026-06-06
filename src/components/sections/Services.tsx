"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Code2, LayoutDashboard, CreditCard } from "lucide-react";

const services = [
  {
    title: "Frontend Modern",
    description:
      "React, Next.js, TypeScript. Componentes reutilizables, SSR/SSG, optimización de performance y UX completa.",
    icon: Code2,
  },
  {
    title: "Backend Escalable",
    description:
      "Node.js, APIs REST, autenticación, bases de datos relacionales y no-SQL. Arquitectura limpia y mantenible.",
    icon: Monitor,
  },
  {
    title: "Bases de Datos",
    description:
      "PostgreSQL, Supabase, diseño de esquemas normalizados, queries optimizadas, indexación y migraciones.",
    icon: Cpu,
  },
  {
    title: "UI/UX & Diseño",
    description: "Interfaces intuitivas, accesibilidad (WCAG), diseño responsive, Tailwind CSS, componentes reutilizables.",
    icon: LayoutDashboard,
  },
  {
    title: "DevOps & Deploy",
    description:
      "CI/CD, Vercel, Docker, Git, testing automatizado, monitoreo. Pipelines confiables para producción.",
    icon: CreditCard,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Services() {
  const [feature, ...rest] = services;
  const FeatureIcon = feature.icon;

  return (
    <section id="services" className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] text-balance max-w-xl">
            Mis habilidades,
            <br />
            <span className="text-foreground/40">dominio técnico.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          {/* Featured service: large accent-washed block, not a flat card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="hairline accent-wash rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[340px] relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <FeatureIcon className="w-12 h-12 text-accent" strokeWidth={1.5} />
              <span className="tick text-sm text-foreground/30">/ 01</span>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-foreground/60 text-lg max-w-md leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>

          {/* The rest as a dense, ruled list — no repeated floating cards */}
          <div className="flex flex-col">
            {rest.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                  className="group flex items-start gap-5 py-5 border-b border-white/10 first:border-t hover:px-3 transition-[padding] duration-300"
                >
                  <span className="tick text-sm text-foreground/30 pt-1 w-10 shrink-0">
                    0{i + 2}
                  </span>
                  <Icon className="w-6 h-6 text-accent/70 shrink-0 mt-0.5 group-hover:text-accent transition-colors" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
