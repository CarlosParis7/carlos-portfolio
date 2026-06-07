// Single source of truth for site-wide constants (URL, contact, socials).
// Update NEXT_PUBLIC_SITE_URL in your env to the real production domain.

export const SITE = {
  name: "Carlos París",
  role: "Full-Stack Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://carlosparis.dev",
  description:
    "Full-Stack Developer en Panamá. Especializado en Next.js, React, TypeScript y arquitectura escalable. Construyo aplicaciones web modernas y sistemas backend robustos.",
  locale: "es_PA",
  email: "carlosparis391@gmail.com",
  socials: {
    github: "https://github.com/CarlosParis7",
    linkedin: "https://www.linkedin.com/in/carlos-paris21",
    instagram: "https://instagram.com/bytelabs_",
  },
} as const;

/** Builds a mailto link with a pre-filled subject + body. */
export function mailLink(
  subject: string = "Hablemos de un proyecto",
  body: string = "Hola Carlos, vi tu portfolio y me gustaría conversar sobre…",
) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
