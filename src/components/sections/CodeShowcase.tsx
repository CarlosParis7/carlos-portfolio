"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Snippets ────────────────────────────────────────────────────────────────

const SNIPPETS = [
  {
    file: "useDebounce.ts",
    lang: "React",
    desc: "Hook que elimina llamadas redundantes a la API en búsquedas en tiempo real.",
    code: `// Evita llamadas innecesarias mientras el usuario escribe
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// Uso: búsqueda con 300ms de debounce
const query = useDebounce(searchInput, 300);`,
  },
  {
    file: "products.ts",
    lang: "Node.js",
    desc: "Endpoint REST con validación de esquema, paginación y manejo de errores tipado.",
    code: `// GET /api/products — paginado y validado
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const limit = Math.min(50, Number(searchParams.get("limit") ?? 20));

  try {
    const [items, total] = await Promise.all([
      db.product.findMany({
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      db.product.count(),
    ]);

    return Response.json({
      data: items,
      meta: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (err) {
    return Response.json({ error: "Error al obtener productos" }, { status: 500 });
  }
}`,
  },
  {
    file: "inventory.ts",
    lang: "Supabase",
    desc: "Query con RLS, join tipado y actualización optimista del inventario en tiempo real.",
    code: `// Ajuste de inventario con validación y auditoría
async function adjustStock(
  productId: string,
  delta: number,
  reason: string,
) {
  const { data: product, error } = await supabase
    .from("products")
    .select("id, stock, name")
    .eq("id", productId)
    .single();

  if (error || !product) throw new Error("Producto no encontrado");
  if (product.stock + delta < 0) throw new Error("Stock insuficiente");

  const { error: updateError } = await supabase
    .from("products")
    .update({ stock: product.stock + delta })
    .eq("id", productId);

  if (updateError) throw updateError;

  // Registro de auditoría para trazabilidad
  await supabase.from("stock_movements").insert({
    product_id: productId,
    delta,
    reason,
    snapshot: product.stock + delta,
  });
}`,
  },
] as const;

// ─── Tokenizer ───────────────────────────────────────────────────────────────

type Token = { text: string; cls: string };

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  const lines = code.split("\n");

  for (let li = 0; li < lines.length; li++) {
    if (li > 0) tokens.push({ text: "\n", cls: "" });
    const line = lines[li];

    if (/^\s*\/\//.test(line)) {
      tokens.push({ text: line, cls: "text-foreground/35" });
      continue;
    }

    let rest = line;
    while (rest.length > 0) {
      const kw = rest.match(/^(function|const|return|export|import|from|type|interface|let|var|if|else|for|while|of|in|async|await|new|typeof|extends|implements|class|throw|try|catch)\b/);
      if (kw) { tokens.push({ text: kw[0], cls: "text-[#569cd6]" }); rest = rest.slice(kw[0].length); continue; }

      const tp = rest.match(/^[A-Z][A-Za-z0-9_<>[\]|,\s]*(?=[\s,;>()])/);
      if (tp && tp[0].length > 0) { tokens.push({ text: tp[0], cls: "text-[#4ec9b0]" }); rest = rest.slice(tp[0].length); continue; }

      const str = rest.match(/^(['"`])(?:\\.|(?!\1)[^\\])*\1/);
      if (str) { tokens.push({ text: str[0], cls: "text-[#ce9178]" }); rest = rest.slice(str[0].length); continue; }

      const num = rest.match(/^\d+/);
      if (num) { tokens.push({ text: num[0], cls: "text-[#b5cea8]" }); rest = rest.slice(num[0].length); continue; }

      const fn = rest.match(/^([a-z_$][a-zA-Z0-9_$]*)(?=\s*[(<])/);
      if (fn) { tokens.push({ text: fn[0], cls: "text-[#dcdcaa]" }); rest = rest.slice(fn[0].length); continue; }

      const punct = rest.match(/^[{}[\](),:;<>|&=+\-*/%!?.]/);
      if (punct) { tokens.push({ text: punct[0], cls: "text-foreground/35" }); rest = rest.slice(1); continue; }

      const word = rest.match(/^[a-z_$][a-zA-Z0-9_$]*/);
      if (word) { tokens.push({ text: word[0], cls: "text-foreground/85" }); rest = rest.slice(word[0].length); continue; }

      tokens.push({ text: rest[0], cls: "text-foreground/60" });
      rest = rest.slice(1);
    }
  }
  return tokens;
}

// Pre-tokenize all snippets at module load time
const COMPILED = SNIPPETS.map((s) => {
  const tokens = tokenize(s.code);
  const boundaries = tokens.reduce<number[]>((acc, t) => {
    acc.push((acc[acc.length - 1] ?? 0) + t.text.length);
    return acc;
  }, []);
  return { tokens, boundaries, total: boundaries[boundaries.length - 1] ?? 0 };
});

// ─── RenderedCode ─────────────────────────────────────────────────────────────

function RenderedCode({
  snippetIdx,
  visible,
}: {
  snippetIdx: number;
  visible: number;
}) {
  const { tokens, boundaries, total } = COMPILED[snippetIdx];
  return (
    <>
      {tokens.map((tok, i) => {
        const start = i === 0 ? 0 : boundaries[i - 1];
        if (start >= visible) return null;
        const shown = tok.text.slice(0, visible - start);
        return (
          <span key={i} className={tok.cls}>
            {shown}
          </span>
        );
      })}
      {visible < total && (
        <span className="inline-block w-[2px] h-[1.1em] bg-accent align-middle animate-pulse ml-[1px]" />
      )}
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const SPEED = 22; // ms per character

export function CodeShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  const runAnimation = useCallback((tabIdx: number) => {
    cancelAnimationFrame(rafRef.current);
    setVisible(0);
    const total = COMPILED[tabIdx].total;
    startRef.current = performance.now();

    function tick(now: number) {
      const elapsed = now - startRef.current;
      const next = Math.min(Math.round(elapsed / SPEED), total);
      setVisible(next);
      if (next < total) rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // Start on scroll into view
  useEffect(() => {
    if (!inView) return;
    runAnimation(activeTab);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleTab(idx: number) {
    if (idx === activeTab) return;
    setActiveTab(idx);
    runAnimation(idx);
  }

  const snippet = SNIPPETS[activeTab];

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-36 px-6 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[0.95]">
            Código que
            <br />
            <span className="text-foreground/40">habla por sí solo.</span>
          </h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-sm text-foreground/40 max-w-xs sm:text-right leading-relaxed"
            >
              {snippet.desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Editor window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#0d0d0d]"
        >
          {/* Window chrome + tabs */}
          <div className="flex items-stretch border-b border-white/6 bg-white/[0.015]">
            {/* Traffic lights */}
            <div className="flex items-center gap-2 px-4 shrink-0">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
            </div>

            {/* File tabs */}
            <div className="flex items-stretch overflow-x-auto">
              {SNIPPETS.map((s, i) => (
                <button
                  key={s.file}
                  type="button"
                  onClick={() => handleTab(i)}
                  className={`relative px-4 py-2.5 tick text-[11px] whitespace-nowrap transition-colors duration-200 border-r border-white/6 ${
                    i === activeTab
                      ? "text-foreground/90 bg-white/[0.04]"
                      : "text-foreground/35 hover:text-foreground/60 hover:bg-white/[0.02]"
                  }`}
                >
                  {s.file}
                  {i === activeTab && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Lang badge */}
            <div className="ml-auto flex items-center px-4 shrink-0">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="tick text-[11px] text-accent/50"
                >
                  {snippet.lang}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Line numbers + code */}
          <div className="flex overflow-x-auto">
            {/* Gutter */}
            <div
              aria-hidden="true"
              className="hidden sm:flex flex-col items-end px-4 pt-6 pb-6 text-foreground/15 tick text-[12px] leading-[1.75] select-none shrink-0 border-r border-white/5"
            >
              {SNIPPETS[activeTab].code.split("\n").map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>

            {/* Code body */}
            <div className="p-5 sm:p-6 md:p-8 flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-mono text-[12.5px] md:text-[13.5px] leading-[1.75] whitespace-pre"
                >
                  <code>
                    <RenderedCode snippetIdx={activeTab} visible={visible} />
                  </code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </div>

          {/* Ambient cian glow */}
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-accent/6 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
