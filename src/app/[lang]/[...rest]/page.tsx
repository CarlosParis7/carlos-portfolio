import { notFound } from "next/navigation";

// Any unknown path under /es or /en renders [lang]/not-found.tsx inside the
// localized layout instead of Next's unstyled default 404.
export default function CatchAll() {
  notFound();
}
