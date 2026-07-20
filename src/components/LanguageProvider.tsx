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

export function LanguageProvider({
  initialLanguage,
  children,
}: {
  initialLanguage: Language;
  children: React.ReactNode;
}) {
  // The server already resolved the language (cookie → Accept-Language header)
  // and rendered <html lang> plus every string in it. Hydrating from that same
  // value keeps SSR and the client identical: no mismatch, no flash of English.
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // A cookie (not just localStorage) so the next SSR renders in this language.
    document.cookie = `language=${lang}; path=/; max-age=31536000; samesite=lax`;
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
