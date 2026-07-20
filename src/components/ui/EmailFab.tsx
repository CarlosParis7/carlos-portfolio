"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslations } from "@/lib/useTranslations";

/** Sticky email button, revealed after the user scrolls past the hero. */
export function EmailFab() {
  const { t } = useTranslations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          aria-label={t("faqWrite")}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group fixed bottom-6 right-6 safe-bottom z-50 flex items-center justify-center w-14 h-14 rounded-full bg-accent text-black shadow-lg shadow-accent/30"
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-ping" />
          <Mail className="relative z-10 w-6 h-6" strokeWidth={2} />

          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-sm font-medium text-background opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            {t("faqWrite")}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
