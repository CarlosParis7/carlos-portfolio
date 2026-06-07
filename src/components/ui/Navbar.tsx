"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "@/lib/useTranslations";


function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, mail } = useTranslations();

  const links = [
    { label: t("navAbout"), href: "#about", id: "about" },
    { label: t("navProjects"), href: "#projects", id: "projects" },
    { label: t("navContact"), href: "#contact", id: "contact" },
  ];

  const active = useActiveSection(links.map((l) => l.id));

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full pl-5 pr-2.5 py-2.5 sm:px-6 sm:py-3">
        <Link
          href="/"
          aria-label="Carlos París, inicio"
          className="flex items-center gap-2 font-semibold tracking-tight text-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          Carlos<span className="text-foreground/40">.dev</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative transition-colors duration-200 ${
                active === l.id
                  ? "text-accent"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={mail()}
            className="hidden sm:inline-flex bg-foreground text-background px-5 py-2 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            {t("letsTalk")}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:bg-white/5 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden max-w-7xl mx-auto mt-2 rounded-3xl p-3 flex flex-col gap-1 border border-white/10 bg-matte/80 backdrop-blur-2xl shadow-2xl shadow-black/60"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                  active === l.id
                    ? "text-accent bg-accent/5"
                    : "text-foreground/80 hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={mail()}
              onClick={() => setOpen(false)}
              className="mt-1 px-4 py-3 rounded-2xl text-base font-semibold text-center bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              {t("letsTalk")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
