"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Download, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { useTranslations } from "@/lib/useTranslations";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 4 5 4 5 4c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 11c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslations();

  function handleCopy() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? t("copiedEmail") : t("copyEmail")}
      title={copied ? t("copiedEmail") : t("copyEmail")}
      className="glass inline-flex h-12 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium text-foreground/80 transition-colors hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
      <span aria-live="polite">{copied ? t("copiedEmail") : t("copyEmail")}</span>
    </button>
  );
}

export function Contact() {
  const { t, cv, mail } = useTranslations();

  const links = [
    { label: "LinkedIn", href: SITE.socials.linkedin, Icon: LinkedinIcon },
    { label: "GitHub", href: SITE.socials.github, Icon: GithubIcon },
  ];

  return (
    <section id="contact" className="pt-32 pb-20 md:pt-40 md:pb-24 px-6 relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight text-balance">
          {t("contactHeadA")}
          <br />
          <span className="text-foreground/40">{t("contactHeadB")}</span>
        </h2>
        <p className="mt-6 text-lg text-foreground/60 max-w-md leading-relaxed">
          {t("contactSub")}
        </p>

        {/* The email IS the call to action: one big target, no fake form */}
        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={mail()}
            className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white text-[clamp(1.25rem,3vw,2.25rem)] leading-none underline decoration-accent/40 decoration-2 underline-offset-[0.25em] transition-colors hover:text-accent hover:decoration-accent"
          >
            {SITE.email}
            <ArrowUpRight className="h-[0.7em] w-[0.7em] shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <CopyEmailButton email={SITE.email} />
        </div>

        {/* Secondary channels: quiet text links, not competing buttons */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground/65 transition-colors hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </a>
          ))}
          <a
            href={cv.href}
            download={cv.download}
            className="inline-flex items-center gap-2 text-foreground/65 transition-colors hover:text-white"
          >
            <Download className="h-4 w-4" />
            {t("ctaCv")}
          </a>
        </div>
      </div>
    </section>
  );
}
