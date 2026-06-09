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

          {/* Identity anchor: fills the left column, balances the long copy on the right */}
          <div className="mt-10 flex items-center gap-4">
            <img
              src="/carlos.jpeg"
              alt="Carlos Paris"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover ring-1 ring-white/15"
            />
            <div className="min-w-0">
              <p className="font-semibold text-white leading-tight">
                {t("aboutRole")}
              </p>
              <p className="tick text-sm text-foreground/50 mt-0.5">
                {t("aboutLocation")}
              </p>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="tick text-xs text-foreground/70">
              {t("aboutAvailable")}
            </span>
          </div>
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
