import { NextResponse, type NextRequest } from "next/server";
import { isLanguage, type Language } from "@/lib/translations";

/** Saved choice wins; otherwise the first es/en in the browser's language list. */
function preferredLanguage(request: NextRequest): Language {
  const saved = request.cookies.get("language")?.value;
  if (saved && isLanguage(saved)) return saved;

  const accepted = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => part.trim().slice(0, 2).toLowerCase());
  return accepted.find(isLanguage) ?? "en";
}

// Every page lives under /es or /en; anything else is sent to the visitor's
// language, keeping the rest of the path (unknown paths then 404 in-language).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isLanguage(pathname.split("/")[1])) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLanguage(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, files with an extension (PDFs, images, robots.txt,
  // sitemap.xml, manifest) and the generated icon.
  matcher: ["/((?!_next|icon|.*\\..*).*)"],
};
