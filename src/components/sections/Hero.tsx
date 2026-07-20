"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { SITE } from "@/lib/site";
import { useEffect, useState } from "react";
import { useTranslations } from "@/lib/useTranslations";

function PanamaTime() {
  const [time, setTime] = useState("");
  const { language } = useTranslations();

  useEffect(() => {
    function update() {
      setTime(
        new Intl.DateTimeFormat(language === "en" ? "en-US" : "es-PA", {
          timeZone: "America/Panama",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [language]);

  if (!time) return null;
  return (
    <span className="hidden sm:inline">
      {time} · {language === "en" ? "Panama City" : "Ciudad de Panamá"}
    </span>
  );
}

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
          <PanamaTime />
        </motion.div>

        {/* Asymmetric split: oversized headline left, tall portrait right */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-end">
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
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="glow bg-accent text-black px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group"
              >
                {t("ctaWork")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={cv.href}
                download={cv.download}
                className="glass text-foreground px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t("ctaCv")}
              </a>
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-foreground px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                {t("ctaGithub")}
              </a>
            </motion.div>
          </div>

          {/* Portrait — editorial, not boxed. The photo's own dark studio
              backdrop melts into the page; masks + caption do the composing,
              not a glass card. Visible by default; motion only refines it. */}
          <motion.figure
            initial={{ opacity: 0.001, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="relative m-0 w-full h-[460px] sm:h-[560px] lg:h-[660px] lg:-mr-4 xl:-mr-12 self-end"
          >
            <Image
              src="/carlos.jpeg"
              alt={
                t("heroCaptionRole") === "Full-Stack Developer · Panama"
                  ? "Carlos París, full-stack developer, portrait on a dark background"
                  : "Carlos París, full-stack developer, retrato sobre fondo oscuro"
              }
              fill
              priority
              sizes="(max-width: 1024px) 85vw, 48vw"
              className="object-cover object-[50%_18%] select-none [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_88%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
            />

            {/* Page bg seeps back over the edges so the portrait reads as
                emerging from the dark, never as a pasted rectangle */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(115%_92%_at_50%_30%,transparent_58%,var(--matte)_100%)]" />
            {/* Cyan floor glow tying the figure to the brand accent */}
            <div className="absolute inset-x-8 bottom-0 h-24 bg-accent/15 blur-3xl rounded-full pointer-events-none" />

            {/* Editorial caption, lower-left, sitting on the floor glow */}
            <figcaption className="absolute bottom-2 left-0 z-10 flex items-center gap-3">
              <span className="block h-9 w-px bg-accent" />
              <span>
                <span className="block text-white font-semibold tracking-tight text-xl leading-none">
                  Carlos París
                </span>
                <span className="tick mt-2 block text-[11px] uppercase tracking-wider text-foreground/60">
                  {t("heroCaptionRole")}
                </span>
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
