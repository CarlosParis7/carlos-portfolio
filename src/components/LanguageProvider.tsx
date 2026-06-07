"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Lazy initializer reads the saved preference once, before first paint,
  // avoiding a setState-in-effect cascade. SSR falls back to "es".
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "es";
    const saved = localStorage.getItem("language");
    return saved === "en" || saved === "es" ? saved : "es";
  });

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
