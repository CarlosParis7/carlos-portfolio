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
            <span className="text-foreground/50">{t("aboutHeadB")}</span>
            <br />
            {t("aboutHeadC")}
          </h2>
        </div>

        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
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

          {/* Proof strip: what I've actually shipped, not a tech tag cloud */}
          <div className="pt-6 mt-2 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-5">
            {[
              { value: t("aboutHl1Value"), label: t("aboutHl1Label") },
              { value: t("aboutHl2Value"), label: t("aboutHl2Label") },
              { value: t("aboutHl3Value"), label: t("aboutHl3Label") },
            ].map((hl) => (
              <div key={hl.label}>
                <div className="text-2xl font-bold tracking-tight text-white leading-none">
                  {hl.value}
                </div>
                <p className="mt-1.5 text-sm text-foreground/50 max-w-[16ch] leading-snug">
                  {hl.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
