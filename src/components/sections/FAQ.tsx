"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useTranslations } from "@/lib/useTranslations";

type Faq = { q: string; a: string };

function FaqItem({ faq, index }: { faq: Faq; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border-b border-white/8 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base md:text-lg font-medium text-foreground">{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-accent"
        >
          <Plus className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-foreground/65 leading-relaxed max-w-2xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const { t, mail } = useTranslations();

  const faqs: Faq[] = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
    { q: t("faq5Q"), a: t("faq5A") },
    { q: t("faq6Q"), a: t("faq6A") },
  ];

  return (
    <section id="faq" className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] mb-5 text-balance">
            {t("faqHead")}
          </h2>
          <p className="text-foreground/55 text-lg leading-relaxed">
            {t("faqSub")}
          </p>
        </div>

        <div className="flex flex-col border-t border-white/8">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/55 mb-4 text-sm">{t("faqMore")}</p>
          <a
            href={mail(t("mailSubjectProfile"))}
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            {t("faqWrite")}
          </a>
        </div>
      </div>
    </section>
  );
}
