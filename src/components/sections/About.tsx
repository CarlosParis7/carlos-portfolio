"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/lib/useTranslations";

const ease = [0.16, 1, 0.3, 1] as const;

export function About() {
  const { t } = useTranslations();

  return (
    <section id="about" className="py-28 md:py-36 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] text-balance">
            {t("aboutHeadA")}
            <br />
            <span className="text-foreground/40">{t("aboutHeadB")}</span>
            <br />
            {t("aboutHeadC")}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="space-y-6 text-lg text-foreground/65 leading-relaxed max-w-xl"
        >
          <p>{t("aboutP1")}</p>
          <p>{t("aboutP2")}</p>
          <p>
            {t("aboutP3Pre")}
            <span className="text-foreground">{t("aboutP3Strong")}</span>
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
