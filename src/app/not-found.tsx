import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { mailLink } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex-1 bg-matte text-foreground min-h-screen flex items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl">
        <p className="text-8xl md:text-9xl font-bold tracking-tight text-white/90">
          404
        </p>
        <h1 className="mt-4 text-2xl md:text-3xl font-semibold">
          Esta página no existe.
        </h1>
        <p className="mt-4 text-foreground/60">
          El enlace que buscas no existe o cambió de lugar. Volvamos a terreno conocido.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="glow bg-accent text-black px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all flex items-center gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          <a
            href={mailLink()}
            className="glass text-foreground px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Escríbeme
          </a>
        </div>
      </div>
    </main>
  );
}
