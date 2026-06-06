"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:bg-white/5 transition-colors"
        disabled
      >
        <Globe className="w-5 h-5" />
        <span className="ml-1 text-xs font-semibold">EN</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
      className="flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:bg-white/5 transition-colors"
      title={language === "en" ? "Spanish (ES)" : "English (EN)"}
    >
      <Globe className="w-5 h-5" />
      <span className="ml-1 text-xs font-semibold">
        {language.toUpperCase()}
      </span>
    </button>
  );
}
