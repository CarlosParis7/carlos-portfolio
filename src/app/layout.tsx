import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies, headers } from "next/headers";
import "./globals.css";
import { GlobalSpotlight } from "@/components/ui/GlobalSpotlight";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { EmailFab } from "@/components/ui/EmailFab";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Providers } from "@/components/Providers";
import { SITE } from "@/lib/site";
import { translations, type Language } from "@/lib/translations";

// Resolve the language on the server so SSR renders the right copy and <html
// lang>, and the client hydrates from the same value (no mismatch, no flash).
// A saved cookie wins; otherwise fall back to the browser's Accept-Language.
// Reading cookies/headers opts this route into dynamic rendering, which is the
// price of a server-known locale.
async function resolveLanguage(): Promise<Language> {
  const saved = (await cookies()).get("language")?.value;
  if (saved === "en" || saved === "es") return saved;
  const accept = (await headers()).get("accept-language")?.toLowerCase() ?? "";
  return accept.startsWith("es") ? "es" : "en";
}

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = `${SITE.name} — ${SITE.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Carlos París",
    "developer Panamá",
    "desarrollador full-stack Panamá",
    "programador Panamá",
    "freelance developer",
    "SaaS",
    "sistemas POS",
    "automatización con IA",
    "Next.js",
    "React",
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE.description,
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

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: SITE.role,
  description: SITE.description,
  image: `${SITE.url}/opengraph-image`,
  email: SITE.email,
  address: { "@type": "PostalAddress", addressCountry: "PA" },
  sameAs: [SITE.socials.github, SITE.socials.linkedin, SITE.socials.instagram],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await resolveLanguage();
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
        <ScrollProgress />
        <GlobalSpotlight />
        <Providers initialLanguage={lang}>
          {children}
          <LanguageToggle />
          <EmailFab />
        </Providers>
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
