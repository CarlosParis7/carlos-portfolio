"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] text-balance">
            Full-Stack
            <br />
            <span className="text-foreground/40">con foco en</span>
            <br />
            calidad.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="space-y-6 text-lg text-foreground/65 leading-relaxed max-w-xl"
        >
          <p>
            Soy Carlos, Full-Stack Developer basado en Panamá. Me especializo en
            desarrollar aplicaciones web modernas usando TypeScript, React y Next.js
            en el frontend, y Node.js con arquitectura escalable en el backend.
          </p>
          <p>
            Domino el stack completo: desde la experiencia del usuario (React, Next.js,
            UI/UX) hasta infraestructura robusta (Node.js, Supabase, Postgres, APIs REST).
            He trabajado en SaaS, sistemas POS, integraciones de IA y plataformas de alta
            disponibilidad. Mi enfoque es escribir código limpio, eficiente y mantenible.
          </p>
          <p>
            Busco proyectos donde pueda aplicar mis habilidades técnicas y{" "}
            <span className="text-foreground">contribuir al crecimiento del equipo.</span>
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {[
              "TypeScript",
              "React / Next.js",
              "Node",
              "Supabase / Postgres",
              "IA / RAG",
              "UI/UX",
            ].map((tag) => (
              <span
                key={tag}
                className="tick text-sm px-3 py-1.5 rounded-full border border-white/10 text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
