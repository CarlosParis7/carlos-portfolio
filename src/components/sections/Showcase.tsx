"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import { SwiftPosDashboard } from "@/components/ui/SwiftPosDashboard";
import { BoxExpressDashboard } from "@/components/ui/BoxExpressDashboard";
import { CopilotMockup } from "@/components/ui/CopilotMockup";
import { LandingMockup } from "@/components/ui/LandingMockup";
import { useTranslations } from "@/lib/useTranslations";

type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  color: string;
  mockup: React.ReactNode;
  /** Live demo URL. When present the whole row becomes a link. */
  url?: string;
  /** Demo login shown so recruiters can get straight in. */
  demo?: { user: string; pass: string };
};

const ease = [0.16, 1, 0.3, 1] as const;
const enter = {
  initial: { y: 28 },
  whileInView: { y: 0 },
  viewport: { once: true },
};

/**
 * Cobrix goes first and deep: it is the one project in daily use by a real
 * business, so it gets a full case study (problem, role, hard decisions) and
 * REAL screenshots instead of a drawn mockup.
 */
function CobrixCase() {
  const { t, mail } = useTranslations();
  const facts = [t("caseFact1"), t("caseFact2"), t("caseFact3"), t("caseFact4"), t("caseFact5")];
  const decisions = [
    { title: t("caseD1Title"), body: t("caseD1") },
    { title: t("caseD2Title"), body: t("caseD2") },
    { title: t("caseD3Title"), body: t("caseD3") },
  ];
  const stack = ["React", "TypeScript", "NestJS", "PostgreSQL", "Socket.IO", "ESC/POS"];

  return (
    <motion.article
      {...enter}
      transition={{ duration: 0.6, ease }}
      className="relative rounded-3xl overflow-hidden hairline bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-transparent to-orange-600/10 pointer-events-none" />

      <div className="relative p-7 md:p-10">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="tick text-xs text-amber-400/90">{t("caseLabel")}</span>
          <span className="text-foreground/25">·</span>
          <span className="tick text-xs text-accent/70">{t("projCobrixCat")}</span>
          <span className="ml-auto inline-flex items-center gap-2 tick text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {t("statusClient")}
          </span>
        </div>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Cobrix</h3>
        <p className="text-base md:text-lg text-foreground/75 max-w-3xl leading-relaxed">{t("casePitch")}</p>

        {/* Real screenshots */}
        <div className="relative mt-8 mb-10">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/cobrix-pedido.png"
              alt={t("caseShotAlt")}
              width={2880}
              height={1800}
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="w-full h-auto"
            />
          </div>
          <div className="hidden md:block absolute -bottom-10 -left-4 w-[30%] rounded-lg overflow-hidden border border-white/15 shadow-2xl ring-1 ring-black/60">
            <Image
              src="/cobrix-mapa.png"
              alt={t("caseShotMapAlt")}
              width={2880}
              height={1800}
              sizes="420px"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Problem · Role · Result */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-10 pt-6">
          {[
            [t("caseProblemTitle"), t("caseProblem")],
            [t("caseRoleTitle"), t("caseRole")],
            [t("caseResultTitle"), t("caseResult")],
          ].map(([title, body]) => (
            <div key={title}>
              <h4 className="tick text-xs text-foreground/50 mb-2">{title}</h4>
              <p className="text-[15px] text-foreground/80 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Hard decisions */}
        <h4 className="tick text-xs text-foreground/50 mt-12 mb-4">{t("caseDecisionsTitle")}</h4>
        <ol className="grid gap-4 md:grid-cols-3">
          {decisions.map((d, i) => (
            <li key={d.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <span className="tick text-xs text-amber-400/90">0{i + 1}</span>
              <p className="mt-2 font-semibold text-foreground">{d.title}</p>
              <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{d.body}</p>
            </li>
          ))}
        </ol>

        {/* Verifiable facts and stack */}
        <ul className="mt-10 flex flex-wrap gap-2">
          {facts.map((f) => (
            <li key={f} className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-foreground/85">
              <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-4 tick text-xs text-foreground/55">{stack.join(" · ")}</p>

        {/* Private code: offer a walkthrough instead of hiding it */}
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-6">
          <span className="inline-flex items-center gap-2 text-sm text-foreground/60">
            <Lock className="w-4 h-4" aria-hidden="true" />
            {t("caseCodeNote")}
          </span>
          <a
            href={mail(t("caseCodeMailSubject"))}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            {t("caseCodeCta")}
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/** The rest: one per row, text and visual alternating (no uniform card grid). */
function ProjectRow({
  project,
  index,
  demoLabel,
  demoCredsLabel,
}: {
  project: Project;
  index: number;
  demoLabel: string;
  demoCredsLabel: string;
}) {
  const reverse = index % 2 === 1;
  const content = (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

      <div className={`relative z-10 flex flex-col justify-center p-7 md:p-10 ${reverse ? "lg:order-2" : ""}`}>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <p className="tick text-xs text-accent/70">{project.category}</p>
          <span className="tick text-xs font-medium px-3 py-1 rounded-full bg-black/40 border border-white/10 text-foreground/80">
            {project.status}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{project.title}</h3>
        <p className="text-[15px] text-foreground/70 max-w-md leading-relaxed">{project.description}</p>

        {project.url && (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent w-fit">
            {demoLabel}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
        {project.demo && (
          <span className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 tick text-xs">
            <span className="text-foreground/55">{demoCredsLabel}</span>
            <span className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-0.5 text-foreground/90">{project.demo.user}</span>
            <span className="text-foreground/40">/</span>
            <span className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-0.5 text-foreground/90">{project.demo.pass}</span>
          </span>
        )}
      </div>

      {/* Whole visual (it used to be cut in half inside the card) */}
      <div className={`relative z-10 m-6 lg:m-8 h-[280px] sm:h-[340px] rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]/60 shadow-2xl ${reverse ? "lg:order-1" : ""}`}>
        <div className="h-6 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <div className="relative h-[calc(100%-1.5rem)]">{project.mockup}</div>
      </div>
    </>
  );

  const className = `group relative grid lg:grid-cols-2 items-center rounded-3xl overflow-hidden hairline ${
    project.url ? "cursor-pointer transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1" : ""
  }`;
  const motionProps = { ...enter, transition: { delay: 0.05, duration: 0.6, ease }, className };

  return project.url ? (
    <motion.a {...motionProps} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} — ${demoLabel}`}>
      {content}
    </motion.a>
  ) : (
    <motion.div {...motionProps}>{content}</motion.div>
  );
}

export function Showcase() {
  const { t } = useTranslations();

  // Honest labels: "in production" only for what a real client uses.
  const projects: Project[] = [
    {
      title: "SwiftPOS",
      category: t("projSwiftCat"),
      status: t("statusDemo"),
      description: t("projSwiftDesc"),
      color: "from-orange-500/20 to-red-500/20",
      mockup: <SwiftPosDashboard />,
      url: "https://swiftpospty.vercel.app/login",
      demo: { user: "demo", pass: "demo123" },
    },
    {
      title: "BoxExpress",
      category: t("projBoxCat"),
      status: t("statusDemo"),
      description: t("projBoxDesc"),
      color: "from-indigo-500/20 to-cyan-500/20",
      mockup: <BoxExpressDashboard />,
      url: "https://poboxweb.vercel.app/",
    },
    {
      title: "Atlas Copilot",
      category: t("projAtlasCat"),
      status: t("statusDemo"),
      description: t("projAtlasDesc"),
      url: "https://ai-knowledge-copilot-web.vercel.app/login",
      color: "from-emerald-500/20 to-teal-500/20",
      mockup: <CopilotMockup />,
    },
    {
      title: "Landing Pages",
      category: t("projLandingCat"),
      status: t("statusClients"),
      description: t("projLandingDesc"),
      color: "from-rose-500/20 to-pink-500/20",
      mockup: <LandingMockup />,
    },
  ];

  return (
    <section id="projects" className="py-28 md:py-36 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] text-balance">
            {t("showcaseHeadA")}
            <br />
            <span className="text-foreground/55">{t("showcaseHeadB")}</span>
          </h2>
          <p className="text-sm text-foreground/65 max-w-xs leading-relaxed sm:text-right">
            {t("showcaseSub")}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <CobrixCase />
          {projects.map((project, i) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={i}
              demoLabel={t("viewDemo")}
              demoCredsLabel={t("demoCreds")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
