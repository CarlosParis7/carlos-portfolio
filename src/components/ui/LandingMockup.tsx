/**
 * Code-built mini landing page (aesthetic-clinic style) used as the Showcase
 * mockup for the "Landing Pages" project. Warm rose accent to add contrast
 * against the card's blue gradient. Decorative only.
 */

"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "@/lib/useTranslations";

const COPY = {
  es: {
    nav: ["Servicios", "Precios"],
    book: "Reservar",
    overline: "Clínica de Estética",
    titleA: "Realza tu belleza",
    titleB: "natural",
    sub: "Tratamientos faciales y corporales con tecnología de punta.",
    cta: "Agenda tu cita",
    more: "Ver más",
    alt: "Tratamiento facial en clínica de estética",
    clients: "+500 clientas",
    strip: ["Facial", "Corporal", "Láser", "Masajes"],
  },
  en: {
    nav: ["Services", "Pricing"],
    book: "Book",
    overline: "Aesthetic Clinic",
    titleA: "Enhance your natural",
    titleB: "beauty",
    sub: "Facial and body treatments with cutting-edge technology.",
    cta: "Book your appointment",
    more: "See more",
    alt: "Facial treatment at an aesthetic clinic",
    clients: "+500 clients",
    strip: ["Facial", "Body", "Laser", "Massage"],
  },
} as const;

export function LandingMockup() {
  const { language } = useTranslations();
  const t = COPY[language];
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#fdf2f5] to-white text-left overflow-hidden"
    >
      {/* Mini nav */}
      <div className="flex items-center justify-between px-3 h-7 border-b border-rose-100/70 shrink-0">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-rose-400 to-pink-500" />
          <span className="text-[8px] font-bold text-slate-800">Bella Piel</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[7px] text-slate-400">
          <span>{t.nav[0]}</span>
          <span>{t.nav[1]}</span>
          <span className="px-1.5 py-0.5 rounded-full bg-rose-400 text-white">{t.book}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="flex-1 flex min-h-0">
        {/* Copy */}
        <div className="flex-1 flex flex-col justify-center gap-1 p-3 min-w-0">
          <span className="text-[7px] font-semibold uppercase tracking-wide text-rose-500">
            {t.overline}
          </span>
          <div className="text-[13px] font-bold text-slate-900 leading-[1.1]">
            {t.titleA}
            <br />
            <span className="text-rose-500">{t.titleB}</span>
          </div>
          <p className="text-[7px] text-slate-500 leading-snug mt-0.5">
            {t.sub}
          </p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-[7px] font-semibold text-white shadow-sm shadow-rose-300/50">
              {t.cta}
            </div>
            <div className="px-2 py-1 rounded-full border border-slate-200 text-[7px] font-medium text-slate-500">
              {t.more}
            </div>
          </div>
        </div>

        {/* Image side */}
        <div className="hidden sm:block w-[42%] p-3 pl-0">
          <div className="relative h-full rounded-xl overflow-hidden shadow-sm bg-rose-100">
            <Image
              src="/estetica.jpg"
              alt={t.alt}
              fill
              sizes="160px"
              className="object-cover"
            />
            {/* floating rating chip */}
            <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-white/90 backdrop-blur-sm flex items-center gap-1 px-1.5 py-1 shadow-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-1.5 h-1.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[6px] font-medium text-slate-600">{t.clients}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="flex items-center justify-around px-3 py-1.5 border-t border-rose-100/70 text-[6px] font-medium text-slate-400 shrink-0">
        {t.strip.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}
