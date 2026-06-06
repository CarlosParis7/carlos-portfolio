/**
 * Code-built replica of the SwiftPOS dashboard, used as the featured Showcase
 * mockup. Built in markup (not a screenshot) so it scales crisply and fits the
 * card at any size. Decorative only.
 */

import {
  LayoutGrid,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  DollarSign,
  TrendingUp,
  ShoppingBag,
  AlertTriangle,
} from "lucide-react";

const metrics = [
  { label: "Ventas", value: "$60,985", Icon: DollarSign, tint: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Ingresos", value: "$60,985", Icon: TrendingUp, tint: "text-violet-600", bg: "bg-violet-50" },
  { label: "Órdenes", value: "50", Icon: ShoppingBag, tint: "text-slate-600", bg: "bg-slate-100" },
  { label: "Stock", value: "3", Icon: AlertTriangle, tint: "text-rose-600", bg: "bg-rose-50" },
];

const nav = [
  { label: "Panel", Icon: LayoutGrid },
  { label: "Punto de Venta", Icon: ShoppingCart },
  { label: "Inventario", Icon: Package },
  { label: "Clientes", Icon: Users },
  { label: "Reportes", Icon: BarChart3 },
  { label: "Ajustes", Icon: Settings },
];

const txns = [
  { who: "iPhone 15", amount: "$2,599", c: "bg-indigo-500" },
  { who: "AirPods Pro", amount: "$499", c: "bg-emerald-500" },
  { who: "iPhone 15 Pro", amount: "$2,249", c: "bg-sky-500" },
  { who: "iPhone 15", amount: "$2,599", c: "bg-violet-500" },
];

// Sales curve as an SVG path (normalised to a 0..100 x 0..40 viewBox).
const SALES_PATH = "M0,30 C12,27 18,17 28,20 C38,23 44,12 56,15 C68,18 76,7 88,5 L100,9";

export function SwiftPosDashboard() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex bg-[#f5f6fa] text-slate-800 text-left overflow-hidden"
    >
      {/* Sidebar */}
      <aside className="hidden sm:flex w-[23%] min-w-[118px] flex-col gap-2.5 p-2.5 bg-white border-r border-slate-200/70">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 shadow-sm shrink-0 flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">S</span>
              </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold text-slate-800 leading-none truncate">SwiftPOS</div>
            <div className="text-[7px] text-slate-400 leading-none mt-0.5">Panel de Control</div>
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-2">
          <div className="flex items-center justify-between">
            <span className="text-[7px] uppercase tracking-wide text-slate-400">Ventas hoy</span>
            <span className="w-1 h-1 rounded-full bg-emerald-500" />
          </div>
          <div className="text-xs font-bold text-slate-800 mt-0.5">$62,230</div>
        </div>

        <nav className="flex flex-col gap-0.5 mt-0.5">
          {nav.map(({ label, Icon }, i) => (
            <div
              key={label}
              className={`flex items-center gap-1.5 text-[9px] font-medium rounded-md px-2 py-1.5 ${
                i === 0 ? "bg-indigo-50 text-indigo-600" : "text-slate-500"
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
        <div className="flex items-center gap-2 px-3 h-8 border-b border-slate-200/70 bg-white shrink-0">
          <div className="flex-1 h-5 rounded-full bg-slate-100 border border-slate-200/70 flex items-center px-2">
            <span className="text-[7px] text-slate-400">Buscar en cualquier lugar...</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 shrink-0">
            <div className="text-right leading-none">
              <div className="text-[8px] font-semibold text-slate-700">Usuario</div>
              <div className="text-[6px] text-slate-400">ADMINISTRADOR</div>
            </div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-slate-200 to-slate-300" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-2.5 min-h-0 flex flex-col gap-2 overflow-hidden">
          <div>
            <div className="text-[7px] font-bold uppercase tracking-wide text-indigo-500">
              Panel principal
            </div>
            <div className="text-[13px] font-bold text-slate-900 leading-tight mt-0.5">
              Resumen del Negocio
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-4 gap-1.5">
            {metrics.map(({ label, value, Icon, tint, bg }) => (
              <div
                key={label}
                className="rounded-lg bg-white border border-slate-200/70 p-1.5 shadow-sm"
              >
                <div className={`w-4 h-4 rounded-md ${bg} flex items-center justify-center mb-1`}>
                  <Icon className={`w-2.5 h-2.5 ${tint}`} strokeWidth={2.4} />
                </div>
                <div className="text-[10px] font-bold text-slate-900 leading-none truncate">
                  {value}
                </div>
                <div className="text-[7px] text-slate-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Chart + transactions */}
          <div className="grid grid-cols-[1.55fr_1fr] gap-1.5 flex-1 min-h-0">
            {/* Sales chart */}
            <div className="rounded-lg bg-white border border-slate-200/70 p-2 shadow-sm flex flex-col min-h-0">
              <div className="flex items-center justify-between shrink-0">
                <div>
                  <div className="text-[8px] font-bold text-slate-800">Rendimiento de Ventas</div>
                  <div className="text-[6px] text-slate-400">Últimos 7 días</div>
                </div>
                <div className="text-[9px] font-bold text-slate-900">$60,985</div>
              </div>
              <div className="mt-1.5 flex-1 min-h-0 relative">
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="swiftfill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${SALES_PATH} L100,40 L0,40 Z`} fill="url(#swiftfill)" />
                  <line
                    x1="0" y1="33" x2="100" y2="33"
                    stroke="#10b981" strokeWidth="1"
                    strokeDasharray="3 2" vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d={SALES_PATH}
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="flex justify-between mt-1 text-[6px] text-slate-300 shrink-0">
                {["Jue", "Vie", "Sáb", "Dom", "Lun", "Mar", "Mié"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>

            {/* Transactions */}
            <div className="rounded-lg bg-white border border-slate-200/70 p-2 shadow-sm flex flex-col min-h-0">
              <div className="text-[8px] font-bold text-slate-800 mb-1.5 shrink-0">
                Últimas Transacciones
              </div>
              <div className="flex flex-col gap-1.5 overflow-hidden">
                {txns.map((t, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className={`w-3.5 h-3.5 rounded-full ${t.c} shrink-0`} />
                    <div className="min-w-0 flex-1 text-[7px] text-slate-600 truncate">{t.who}</div>
                    <div className="text-[7px] font-bold text-slate-800 shrink-0">{t.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
