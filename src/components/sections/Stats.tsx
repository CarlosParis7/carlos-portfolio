"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "+20",
    label: "Proyectos completados",
    sub: "SaaS · POS · IA · Web",
  },
  {
    value: "Full-Stack",
    label: "Frontend + Backend",
    sub: "TypeScript · React · Node.js",
  },
  {
    value: "4+",
    label: "Años de experiencia",
    sub: "Desarrollando productos reales",
  },
  {
    value: "🇵🇦",
    label: "Panamá",
    sub: "Disponible para remoto",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Stats() {
  return (
    <section className="py-20 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease }}
            className="bg-matte px-6 py-8 md:px-8 md:py-10 flex flex-col gap-3"
          >
            <div className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-none">
              {stat.value}
            </div>
            <div>
              <div className="text-sm font-medium text-foreground/80">{stat.label}</div>
              <div className="mt-1 text-xs text-foreground/40 tick">{stat.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
