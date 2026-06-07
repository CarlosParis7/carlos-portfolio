"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

/** Floating language switch, bottom-left. Mirrors EmailFab (bottom-right). */
export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const next = language === "en" ? "es" : "en";

  return (
    <motion.button
      type="button"
      onClick={() => setLanguage(next)}
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
      title={language === "en" ? "Cambiar a español" : "Switch to English"}
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 left-6 safe-bottom-left z-50 flex items-center gap-2 glass rounded-full pl-3.5 pr-4 py-3 text-foreground/80 hover:text-foreground transition-colors"
    >
      <Globe className="w-5 h-5 text-accent" strokeWidth={2} />
      <span
        className="text-sm font-semibold tracking-wide tabular-nums"
        suppressHydrationWarning
      >
        {language.toUpperCase()}
      </span>
    </motion.button>
  );
}
