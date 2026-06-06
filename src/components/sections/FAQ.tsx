"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { mailLink } from "@/lib/site";

const faqs = [
  {
    q: "¿Cómo manejas la comunicación en un equipo?",
    a: "Prefiero comunicación asíncrona clara: updates escritos, decisiones documentadas y PRs bien descritos. En reuniones voy directo al punto. No necesito microgestión para rendir.",
  },
  {
    q: "¿Cómo reaccionas cuando el feedback es negativo?",
    a: "Lo busco activamente. Un PR con comentarios es una oportunidad, no una crítica. Prefiero que me señalen problemas temprano a que lleguen a producción.",
  },
  {
    q: "¿Cómo priorizas cuando tienes múltiples tareas urgentes?",
    a: "Primero entiendo el impacto real de cada tarea. Comunico el trade-off, elijo según lo que bloquea al equipo y actualizo a quien corresponde. No desaparezco con la cabeza abajo.",
  },
  {
    q: "¿Trabajas bien de forma remota?",
    a: "Sí. Tengo experiencia construyendo productos completos en remoto. Soy autónomo, organizado y sé cuándo escalar un problema versus resolverlo solo.",
  },
  {
    q: "¿Cómo aprendes tecnologías nuevas?",
    a: "Construyendo algo real con ellas. Leer documentación oficial, armar un proyecto pequeño y entender el porqué detrás del diseño. No me limito a copiar ejemplos.",
  },
  {
    q: "¿Qué buscas en un equipo de trabajo?",
    a: "Gente que tenga criterio, que dé feedback directo y que se preocupe por la calidad del código. Un entorno donde pueda crecer y donde mis contribuciones importen.",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border-b border-white/8 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base md:text-lg font-medium text-foreground">{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-accent"
        >
          <Plus className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-foreground/65 leading-relaxed max-w-2xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] mb-5 text-balance">
            Más allá del código.
          </h2>
          <p className="text-foreground/55 text-lg leading-relaxed">
            Habilidades blandas que no aparecen en el CV pero que importan en el trabajo real.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/8">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/40 mb-4 text-sm">¿Quieres saber algo más?</p>
          <a
            href={mailLink("Quiero saber más sobre tu perfil")}
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            Escríbeme
          </a>
        </div>
      </div>
    </section>
  );
}
