"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations, TranslationKey } from "./translations";

export function useTranslations() {
  const { language } = useLanguage();

  return {
    t: (key: TranslationKey) => translations[language][key],
    language,
  };
}
