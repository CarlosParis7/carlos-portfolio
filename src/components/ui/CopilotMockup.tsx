/**
 * Code-built replica of the Atlas Copilot chat UI (dark, teal accent),
 * used as the Showcase mockup for the Atlas Copilot project. Built in markup so
 * it scales crisply and fits the card at any size. Decorative only.
 */

"use client";

import { FileText, Sparkles } from "lucide-react";
import { useTranslations } from "@/lib/useTranslations";

const COPY = {
  es: {
    sources: "Fuentes",
    docs: ["Manual.pdf", "Contratos.docx", "Políticas.pdf"],
    online: "Asistente · en línea",
    citation: "Manual.pdf · p.4",
    placeholder: "Pregunta sobre tus documentos...",
  },
  en: {
    sources: "Sources",
    docs: ["Manual.pdf", "Contracts.docx", "Policies.pdf"],
    online: "Assistant · online",
    citation: "Manual.pdf · p.4",
    placeholder: "Ask about your documents...",
  },
} as const;

export function CopilotMockup() {
  const { language } = useTranslations();
  const t = COPY[language];
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex bg-[#081513] text-slate-200 text-left overflow-hidden"
    >
      {/* Sidebar: knowledge sources */}
      <aside className="hidden sm:flex w-[30%] min-w-[120px] flex-col gap-1.5 p-2.5 bg-[#0b1c19] border-r border-emerald-500/10">
        <div className="flex items-center gap-1.5 mb-1">
          <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" strokeWidth={2.2} />
          <span className="text-[9px] font-bold text-white truncate">Atlas</span>
        </div>
        <span className="text-[7px] uppercase tracking-wide text-slate-500">{t.sources}</span>
        {t.docs.map((d) => (
          <div
            key={d}
            className="flex items-center gap-1.5 rounded-md bg-white/[0.03] border border-white/5 px-1.5 py-1"
          >
            <FileText className="w-2.5 h-2.5 text-emerald-400/80 shrink-0" strokeWidth={2} />
            <span className="text-[8px] text-slate-300 truncate">{d}</span>
          </div>
        ))}
      </aside>

      {/* Chat */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center gap-1.5 px-3 h-7 border-b border-white/5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[8px] font-medium text-slate-300">{t.online}</span>
        </div>

        <div className="flex-1 p-2.5 flex flex-col gap-2 min-h-0 overflow-hidden">
          {/* User question */}
          <div className="self-end max-w-[80%] rounded-xl rounded-br-sm bg-emerald-500/90 px-2.5 py-1.5">
            <div className="w-24 h-1.5 rounded-full bg-white/70 mb-1" />
            <div className="w-16 h-1.5 rounded-full bg-white/50" />
          </div>

          {/* AI answer */}
          <div className="self-start max-w-[88%] rounded-xl rounded-bl-sm bg-white/[0.05] border border-white/5 px-2.5 py-2">
            <div className="flex items-center gap-1 mb-1.5">
              <Sparkles className="w-2 h-2 text-emerald-400" strokeWidth={2.4} />
              <span className="text-[6px] uppercase tracking-wide text-emerald-400/80">Atlas</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-full h-1.5 rounded-full bg-white/15" />
              <div className="w-11/12 h-1.5 rounded-full bg-white/15" />
              <div className="w-3/4 h-1.5 rounded-full bg-white/15" />
            </div>
            {/* citation chip */}
            <div className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5">
              <FileText className="w-2 h-2 text-emerald-400" strokeWidth={2} />
              <span className="text-[6px] text-emerald-300">{t.citation}</span>
            </div>
          </div>

          {/* Composer */}
          <div className="mt-auto flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-2.5 py-1.5 shrink-0">
            <span className="text-[8px] text-slate-500 flex-1 truncate">{t.placeholder}</span>
            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <span className="text-[8px] text-white leading-none">↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
