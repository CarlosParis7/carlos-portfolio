"use client";

import { useTranslations } from "@/lib/useTranslations";

type Item = { name: string; logo?: string };

export function Trust() {
  const { t } = useTranslations();

  // Logos that live in /public; the rest render as text.
  // Top lane: languages, frontend, design
  const laneTop: Item[] = [
    { name: "TypeScript", logo: "/typescript.svg" },
    { name: "Python", logo: "/si-python.svg" },
    { name: "React", logo: "/React_light.svg" },
    { name: "Next.js", logo: "/nextjs_icon_dark.svg" },
    { name: "Tailwind", logo: "/si-tailwindcss.svg" },
    { name: "Framer Motion", logo: "/si-framer.svg" },
    { name: "Figma", logo: "/si-figma.svg" },
    { name: "Node.js", logo: "/nodejs.svg" },
    { name: "REST APIs" },
  ];
  // Bottom lane: data, AI, payments, automation, infra, tooling
  const laneBottom: Item[] = [
    { name: "PostgreSQL", logo: "/postgresql.svg" },
    { name: "Supabase", logo: "/supabase.svg" },
    { name: "Prisma", logo: "/si-prisma.svg" },
    { name: "OpenAI", logo: "/si-openai.svg" },
    { name: "RAG" },
    { name: "Stripe", logo: "/stripe.svg" },
    { name: "n8n", logo: "/si-n8n.svg" },
    { name: "Make", logo: "/si-make.svg" },
    { name: "Docker", logo: "/docker.svg" },
    { name: "Vercel", logo: "/si-vercel.svg" },
    { name: "AWS", logo: "/si-aws.svg" },
    { name: "Playwright", logo: "/si-playwright.svg" },
    { name: "Git", logo: "/git.svg" },
    { name: "GitHub", logo: "/si-github.svg" },
  ];

  return (
    <section className="py-20 md:py-24 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-foreground/55 mb-12 px-6 text-center">
          {t("trustLabel")}
        </p>

        <div className="flex flex-col gap-4">
          <Lane items={laneTop} direction="normal" />
          <Lane items={laneBottom} direction="reverse" />
        </div>
      </div>
    </section>
  );
}

function Lane({
  items,
  direction,
}: {
  items: Item[];
  direction: "normal" | "reverse";
}) {
  return (
    <div
      className="flex w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div
        aria-hidden="true"
        className={`flex w-max ${
          direction === "reverse" ? "animate-marquee-rev" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="group flex items-center gap-3 px-7 shrink-0">
            {item.logo ? (
              <img
                src={item.logo}
                alt=""
                width={26}
                height={26}
                loading="lazy"
                className="h-[26px] w-[26px] object-contain"
              />
            ) : (
              <span className="h-1 w-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300" />
            )}
            <span className="text-lg md:text-xl font-medium text-white/40 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              {item.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
