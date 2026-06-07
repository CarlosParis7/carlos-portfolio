"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations, TranslationKey } from "./translations";
import { SITE } from "./site";

// CV files live in /public. Spanish and English versions are served by language.
const CV = {
  es: { href: "/cv-es.pdf", download: "Carlos_Paris_CV_ES.pdf" },
  en: { href: "/cv-en.pdf", download: "Carlos_Paris_CV_EN.pdf" },
} as const;

export function useTranslations() {
  const { language } = useLanguage();
  const t = (key: TranslationKey) => translations[language][key];

  /** Language-aware mailto link with a pre-filled subject + body. */
  const mail = (subject?: string, body?: string) =>
    `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject ?? t("mailSubject"),
    )}&body=${encodeURIComponent(body ?? t("mailBody"))}`;

  return {
    t,
    language,
    cv: CV[language],
    mail,
  };
}
