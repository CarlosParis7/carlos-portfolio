"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

/** Language switch, lives in the navbar next to the CTA. */
export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const next = language === "en" ? "es" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(next)}
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
      title={language === "en" ? "Cambiar a español" : "Switch to English"}
      className="flex items-center gap-1.5 h-9 rounded-full px-3 text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
    >
      <Globe className="w-4 h-4 text-accent" strokeWidth={2} />
      <span
        className="text-sm font-semibold tracking-wide tabular-nums"
        suppressHydrationWarning
      >
        {language.toUpperCase()}
      </span>
    </button>
  );
}
