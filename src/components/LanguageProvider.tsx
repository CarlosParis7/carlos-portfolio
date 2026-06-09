"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

/**
 * Resolves the initial language: an explicit saved choice wins; otherwise we
 * detect from the browser locale and default to English for any non-Spanish
 * visitor (the portfolio targets the US job market). Mirrors the pre-paint
 * script in layout.tsx so SSR ("en") and the client agree without a flash.
 */
function resolveInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("language");
  if (saved === "en" || saved === "es") return saved;
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Lazy initializer resolves the language once, before first paint,
  // avoiding a setState-in-effect cascade. SSR falls back to "en".
  const [language, setLanguageState] = useState<Language>(resolveInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
