"use client";

import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "./LanguageProvider";
import type { Language } from "@/lib/translations";

export function Providers({
  language,
  children,
}: {
  language: Language;
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider language={language}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageProvider>
  );
}
