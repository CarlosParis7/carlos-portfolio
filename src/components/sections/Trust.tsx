"use client";

import { useTranslations } from "@/lib/useTranslations";

export function Trust() {
  const { t } = useTranslations();
  const logos = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Postgres",
    "Supabase",
    "Tailwind",
    "Vercel",
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-foreground/40 mb-10 px-6">{t("trustLabel")}</p>

        <div
          className="flex w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div
            aria-hidden="true"
            className="flex w-max animate-marquee hover:[animation-play-state:paused]"
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="px-12 text-2xl md:text-3xl font-bold text-white/45 hover:text-white transition-colors duration-300"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
