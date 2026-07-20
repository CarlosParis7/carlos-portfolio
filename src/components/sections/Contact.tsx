"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, Download } from "lucide-react";
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
      className="px-3 py-3 bg-accent/80 text-black hover:bg-accent transition-colors relative w-10 flex items-center justify-center"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Check className="w-4 h-4" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Copy className="w-4 h-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export function Contact() {
  const { t, cv, mail } = useTranslations();
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [detail, setDetail] = useState("");

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    const subject = project
      ? `${t("mailFormSubjectPrefix")} ${project}`
      : t("mailSubject");
    const body = [
      name && `${t("mailFormGreeting")} ${name}.`,
      detail && detail,
      "",
      t("mailFormSentFrom"),
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = mail(subject, body);
  }

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[0.95] tracking-tight text-balance">
            {t("contactHeadA")}
            <br />
            <span className="text-foreground/40">{t("contactHeadB")}</span>
          </h2>
          <p className="text-lg text-foreground/55 mb-8 max-w-md leading-relaxed">
            {t("contactSub")}
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center rounded-full overflow-hidden border border-white/10">
              <a
                href={mail()}
                className="inline-flex items-center gap-2 bg-accent text-black pl-5 pr-4 py-3 font-semibold hover:bg-accent/90 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {SITE.email}
              </a>
              <CopyEmailButton email={SITE.email} />
            </div>
            <a
              href={cv.href}
              download={cv.download}
              className="inline-flex items-center gap-2 glass px-5 py-3 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              <Download className="w-4 h-4" />
              {t("ctaCv")}
            </a>
            <a
              href={SITE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center glass w-12 h-12 rounded-full text-foreground/70 hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={SITE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center glass w-12 h-12 rounded-full text-foreground/70 hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-white/10"
          >
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground/70 mb-1.5 block">{t("formName")}</label>
                <input id="contact-name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder:text-white/30" placeholder={t("formNamePh")} />
              </div>
              <div>
                <label htmlFor="contact-project" className="text-sm font-medium text-foreground/70 mb-1.5 block">{t("formRole")}</label>
                <input id="contact-project" name="project" type="text" value={project} onChange={(e) => setProject(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder:text-white/30" placeholder={t("formRolePh")} />
              </div>
              <div>
                <label htmlFor="contact-detail" className="text-sm font-medium text-foreground/70 mb-1.5 block">{t("formDetail")}</label>
                <textarea id="contact-detail" name="detail" rows={3} value={detail} onChange={(e) => setDetail(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder:text-white/30 resize-none" placeholder={t("formDetailPh")} />
              </div>
              <button type="submit" className="w-full mt-4 bg-white text-black font-semibold rounded-xl px-4 py-3 hover:bg-white/90 transition-colors">
                {t("formSubmit")}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
