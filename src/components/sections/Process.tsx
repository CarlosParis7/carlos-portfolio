"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/lib/useTranslations";

const ease = [0.16, 1, 0.3, 1] as const;

export function Process() {
  const { t } = useTranslations();

  const steps = [
    { tag: "intake", title: t("proc1Title"), desc: t("proc1Desc") },
    { tag: "design", title: t("proc2Title"), desc: t("proc2Desc") },
    { tag: "build", title: t("proc3Title"), desc: t("proc3Desc") },
    { tag: "ship", title: t("proc4Title"), desc: t("proc4Desc") },
  ];

  return (
    <section className="py-28 md:py-36 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[0.95] text-balance">
            {t("processHead")}
          </h2>
          <p className="text-sm text-foreground/55 max-w-xs leading-relaxed sm:text-right">
            {t("processSub")}
          </p>
        </div>

        {/* Timeline horizontal — connector line behind the steps */}
        <div className="relative">
          {/* Connector line visible on lg+ */}
          <div className="hidden lg:block absolute top-[1.75rem] left-0 right-0 h-px bg-white/8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.tag}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease }}
                className="relative group pt-14 pb-8 pr-8 border-b lg:border-b-0 lg:border-r border-white/8 last:border-0"
              >
                {/* Step dot on the connector line */}
                <span className="absolute top-[1.35rem] left-0 flex items-center gap-3">
                  <span className="w-3.5 h-3.5 rounded-full border border-accent/60 bg-background group-hover:bg-accent group-hover:border-accent transition-colors duration-300" />
                  <span className="tick text-[11px] text-accent/50 group-hover:text-accent/80 transition-colors duration-300">
                    {step.tag}
                  </span>
                </span>

                <h3 className="text-base font-semibold mb-2 text-foreground/90">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
