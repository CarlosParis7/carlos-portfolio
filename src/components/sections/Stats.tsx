"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/lib/useTranslations";

const ease = [0.16, 1, 0.3, 1] as const;

export function Stats() {
  const { t } = useTranslations();

  const facts = [
    { value: t("fact1Value"), label: t("fact1Label") },
    { value: t("fact2Value"), label: t("fact2Label") },
    { value: t("fact3Value"), label: t("fact3Label") },
  ];

  return (
    <section className="py-20 md:py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16 lg:items-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground/70 text-balance">
          {t("factsHead")}
        </h2>

        {/* Asymmetric inline facts, separated by hairline rules — not metric cards */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-8 sm:gap-0">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease }}
              className="flex-1 sm:px-8 first:sm:pl-0 sm:border-l first:sm:border-l-0 border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-none">
                {fact.value}
              </div>
              <p className="mt-3 text-sm text-foreground/55 leading-relaxed max-w-[22ch]">
                {fact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
