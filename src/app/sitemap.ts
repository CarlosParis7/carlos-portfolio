import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { languages } from "@/lib/translations";

// One entry per language, each pointing at its translation via hreflang.
export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = {
    languages: Object.fromEntries(languages.map((l) => [l, `${SITE.url}/${l}`])),
  };
  return languages.map((lang) => ({
    url: `${SITE.url}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates,
  }));
}
