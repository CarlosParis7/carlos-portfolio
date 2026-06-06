import { translations, Language } from "./translations";

export function getTranslation(language: Language, key: keyof typeof translations.en) {
  return translations[language][key];
}

export { translations };
