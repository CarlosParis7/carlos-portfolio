"use client";

import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./LanguageProvider";
import type { Language } from "@/lib/translations";

export function Providers({
  initialLanguage,
  children,
}: {
  initialLanguage: Language;
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageProvider>
  );
}
