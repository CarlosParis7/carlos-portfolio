"use client";

import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
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
  language,
  children,
}: {
  language: Language;
  children: React.ReactNode;
}) {
  const router = useRouter();

  // The URL is the source of truth (/es, /en). Switching means navigating to
  // the other prerendered page, keeping the section the visitor is reading.
  const setLanguage = (lang: Language) => {
    // Remembered so "/" sends them back to this language next time (proxy.ts).
    document.cookie = `language=${lang}; path=/; max-age=31536000; samesite=lax`;
    router.push(`/${lang}${window.location.hash}`, { scroll: false });
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
