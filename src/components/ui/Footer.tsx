"use client";

import { Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { useTranslations } from "@/lib/useTranslations";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 4 5 4 5 4c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 11c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { label: "GitHub", href: SITE.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: SITE.socials.linkedin, Icon: LinkedinIcon },
];

export function Footer() {
  const { t, mail } = useTranslations();

  const navLinks = [
    { label: t("navAbout"), href: "#about" },
    { label: t("navProjects"), href: "#projects" },
    { label: t("faqHead").replace(/\.$/, ""), href: "#faq" },
    { label: t("navContact"), href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/5 px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand + tagline */}
          <div className="max-w-sm">
            <span className="flex items-center gap-2 font-semibold tracking-tight text-foreground text-lg mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Carlos<span className="text-foreground/40">.dev</span>
            </span>
            <p className="text-sm text-foreground/55 leading-relaxed">
              {t("footerDesc")}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label={t("navContact")} className="flex flex-col gap-3">
            <span className="tick text-xs text-foreground/30">
              —
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="tick text-xs text-foreground/30">
              —
            </span>
            <a
              href={mail()}
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              {SITE.email}
            </a>
            <div className="flex gap-3 mt-1">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-foreground/40">
          <span>
            &copy; {new Date().getFullYear()} {SITE.name}. {t("footerRights")}
          </span>
          <span className="flex items-center gap-1.5">
            {t("footerBuilt")}
          </span>
        </div>
      </div>
    </footer>
  );
}
