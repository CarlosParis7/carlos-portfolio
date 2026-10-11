"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { SITE } from "@/lib/site";
import { useTranslations } from "@/lib/useTranslations";

const ease = [0.16, 1, 0.3, 1] as const;

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 4 5 4 5 4c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 11c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function Hero() {
  const { t, cv } = useTranslations();
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 overflow-hidden">
      {/* Off-center accent glow + grid */}
      <div className="absolute top-[20%] -left-[10%] w-[680px] h-[680px] bg-accent/20 rounded-full blur-[70px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none [mask-image:radial-gradient(120%_80%_at_50%_0%,black,transparent_75%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Technical eyebrow strip — instrument-panel feel, one deliberate marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-4 text-xs text-foreground/55 tick mb-8"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {t("heroStatus").toUpperCase()}
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </motion.div>

        {/* Asymmetric split: oversized headline left, framed portrait right */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-14 lg:gap-12 items-center">
          <div>
            <h1 className="display-xl text-white">
              {[t("heroLine1"), t("heroLine2")].map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.26, ease }}
                className="block text-accent"
              >
                {t("heroLine3")}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              className="mt-8 text-lg md:text-xl text-foreground/65 max-w-md leading-relaxed text-pretty"
            >
              {t("heroBio")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {/* One primary, one secondary, GitHub as a quiet icon: no three-way tie */}
              <a
                href="#contact"
                className="glow bg-accent text-black h-[52px] px-6 rounded-full font-semibold whitespace-nowrap hover:bg-accent/90 transition-all inline-flex items-center gap-2 group"
              >
                {t("ctaWork")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={cv.href}
                download={cv.download}
                className="glass text-foreground h-[52px] px-6 rounded-full font-medium whitespace-nowrap hover:bg-white/5 transition-all inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t("ctaCv")}
              </a>
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("ctaGithub")}
                title={t("ctaGithub")}
                className="glass text-foreground/70 hover:text-foreground w-[52px] h-[52px] rounded-full hover:bg-white/5 transition-all inline-flex items-center justify-center"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Portrait — a framed card, not a faux-melt: the photo's backdrop is
              light gray, so masking it into black only left a smudged gray
              rectangle. Sized to support the headline, not compete with it. */}
          <motion.figure
            initial={{ opacity: 0.001, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="relative m-0 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] justify-self-center lg:justify-self-end"
          >
            {/* Accent glow behind the card ties it to the brand */}
            <div className="absolute -inset-8 bg-accent/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <Image
                src="/carlos.jpeg"
                alt={
                  t("heroCaptionRole") === "Full-Stack Developer · Panama"
                    ? "Carlos París, full-stack developer, portrait"
                    : "Carlos París, full-stack developer, retrato"
                }
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                className="object-cover object-[50%_30%] scale-[1.35] origin-[50%_38%] select-none"
              />
              {/* Caption sits on a bottom scrim inside the frame */}
              <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-5 pb-5 pt-14">
                <span className="block h-9 w-px bg-accent" />
                <span>
                  <span className="block text-white font-semibold tracking-tight text-lg leading-none">
                    Carlos París
                  </span>
                  <span className="tick mt-2 block text-[11px] uppercase tracking-wider text-foreground/70">
                    {t("heroCaptionRole")}
                  </span>
                </span>
              </figcaption>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
