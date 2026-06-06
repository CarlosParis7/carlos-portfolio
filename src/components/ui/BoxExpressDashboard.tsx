/**
 * Code-built replica of the BoxExpress logistics dashboard (dark mode), used as
 * the Showcase mockup for the BoxExpress project. Built in markup so it scales
 * crisply and fits the card at any size. Decorative only.
 */

import { LayoutGrid, Package, Users, FileText, BarChart3 } from "lucide-react";

const stats = [
  { label: "Paquetes", value: "47", delta: "+12%", up: true },
  { label: "Facturas", value: "5", delta: "-5", up: false },
  { label: "Por Cobrar", value: "$1,250", delta: "+5%", up: true },
  { label: "Ingresos", value: "$8,340", delta: "+18%", up: true },
];

const nav = [
  { label: "Dashboard", Icon: LayoutGrid },
  { label: "Paquetes", Icon: Package },
  { label: "Clientes", Icon: Users },
  { label: "Facturas", Icon: FileText },
  { label: "Reportes", Icon: BarChart3 },
];

const bars = [
  { label: "Almacén", pct: "78%", w: "w-[78%]", c: "from-emerald-400 to-emerald-500" },
  { label: "Envíos a Tiempo", pct: "96%", w: "w-[96%]", c: "from-sky-400 to-blue-500" },
  { label: "Tickets", pct: "100%", w: "w-full", c: "from-fuchsia-400 to-pink-500" },
];

const REVENUE_PATH = "M0,24 C10,20 16,28 26,26 C36,24 42,18 54,21 C66,24 74,14 86,10 L100,6";

export function BoxExpressDashboard() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex bg-[#0b1020] text-slate-200 text-left overflow-hidden"
    >
      {/* Sidebar */}
      <aside className="hidden sm:flex w-[22%] min-w-[112px] flex-col gap-2 p-2.5 bg-[#0e1428] border-r border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 shrink-0" />
          <div className="text-[10px] font-bold text-white truncate">BoxExpress</div>
        </div>
        <nav className="flex flex-col gap-0.5 mt-1">
          {nav.map(({ label, Icon }, i) => (
            <div
              key={label}
              className={`flex items-center gap-1.5 text-[9px] font-medium rounded-md px-2 py-1.5 ${
                i === 0 ? "bg-blue-500/90 text-white" : "text-slate-500"
              }`}
            >
              <Icon className="w-2.5 h-2.5 shrink-0" strokeWidth={2.2} />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-3 h-8 border-b border-white/5 bg-[#0e1428] shrink-0">
          <div className="flex-1 h-5 rounded-md bg-white/5 border border-white/5 flex items-center px-2">
            <span className="text-[7px] text-slate-500">Buscar paquetes, clientes...</span>
          </div>
          <div className="h-5 px-2 rounded-md bg-blue-500 flex items-center shrink-0">
            <span className="text-[7px] font-semibold text-white">+ Nuevo</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-2.5 min-h-0 flex flex-col gap-2 overflow-hidden">
          <div className="text-[12px] font-bold text-white leading-none">Dashboard</div>

          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-1.5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-white/[0.04] border border-white/5 p-1.5">
                <div className="flex items-center justify-between">
                  <div className="w-3.5 h-3.5 rounded bg-blue-500/20" />
                  <span
                    className={`text-[6px] font-semibold ${
                      s.up ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {s.delta}
                  </span>
                </div>
                <div className="text-[10px] font-bold text-white leading-none mt-1 truncate">
                  {s.value}
                </div>
                <div className="text-[7px] text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Chart + operation status */}
          <div className="grid grid-cols-[1.55fr_1fr] gap-1.5 flex-1 min-h-0">
            {/* Revenue chart */}
            <div className="rounded-lg bg-white/[0.04] border border-white/5 p-2 flex flex-col min-h-0">
              <div className="text-[8px] font-bold text-white shrink-0">Ingresos Mensuales</div>
              <div className="mt-1.5 flex-1 min-h-0 relative">
                <svg viewBox="0 0 100 32" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="boxfill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${REVENUE_PATH} L100,32 L0,32 Z`} fill="url(#boxfill)" />
                  <path
                    d={REVENUE_PATH}
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="flex justify-between mt-1 text-[6px] text-slate-600 shrink-0">
                {["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            {/* Operation status */}
            <div className="rounded-lg bg-white/[0.04] border border-white/5 p-2 flex flex-col gap-2 min-h-0">
              <div className="text-[8px] font-bold text-white shrink-0">Estado de Operación</div>
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[6px] text-slate-400 truncate">{b.label}</span>
                    <span className="text-[6px] font-semibold text-white">{b.pct}</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${b.c} ${b.w}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
