import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { EmailFab } from "@/components/ui/EmailFab";
import { Providers } from "@/components/Providers";
import { SITE } from "@/lib/site";
import { translations, languages, isLanguage } from "@/lib/translations";

// The language lives in the URL (/es, /en), so both versions are prerendered
// and served from the CDN. proxy.ts sends "/" to the visitor's language.
export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}
export const dynamicParams = false;

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = `${SITE.name} — ${SITE.role}`;

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const description = translations[lang].metaDescription;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: TITLE,
      template: `%s | ${SITE.name}`,
    },
    description,
    keywords: [
      "Carlos París",
      "developer Panamá",
      "desarrollador full-stack Panamá",
      "programador Panamá",
      "full-stack developer",
      "SaaS",
      "sistemas POS",
      "Next.js",
      "React",
      "TypeScript",
    ],
    applicationName: SITE.name,
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    publisher: SITE.name,
    // Each language is its own indexable URL; hreflang tells search engines
    // they are translations of each other.
    alternates: {
      canonical: `/${lang}`,
      languages: { es: "/es", en: "/en", "x-default": "/en" },
    },
    openGraph: {
      type: "profile",
      locale: lang === "es" ? "es_PA" : "en_US",
      url: `${SITE.url}/${lang}`,
      siteName: SITE.name,
      title: TITLE,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    manifest: "/manifest.webmanifest",
    category: "technology",
  };
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: `${SITE.url}/${lang}`,
    jobTitle: SITE.role,
    description: translations[lang].metaDescription,
    image: `${SITE.url}/${lang}/opengraph-image`,
    email: SITE.email,
    address: { "@type": "PostalAddress", addressCountry: "PA" },
    sameAs: [SITE.socials.github, SITE.socials.linkedin, SITE.socials.instagram],
  };

  return (
    <html
      lang={lang}
      className={`${geist.variable} ${geistMono.variable} antialiased dark scroll-smooth scroll-pt-24 bg-background text-foreground`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          {translations[lang].skipLink}
        </a>
        <Providers language={lang}>
          {children}
          <EmailFab />
        </Providers>
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
