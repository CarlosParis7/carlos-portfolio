"use client";

import Image from "next/image";
import { useState } from "react";
import { DollarSign } from "lucide-react";

/** Filled two-tone credit card mark (blue body, dark outline, white stripe). */
function CardMark({ className }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <rect x="2" y="5" width="20" height="14" rx="3" fill="#5cb3f0" stroke="#0f2f5c" strokeWidth="1.8" />
      <rect x="2.9" y="8.4" width="18.2" height="2.6" fill="#eef2f6" />
      <rect x="15.5" y="14.5" width="3.8" height="1.8" rx="0.9" fill="#0f2f5c" />
    </svg>
  );
}

/**
 * Yappy mark. Uses the official logo at /public/yappy-color-portrait.png and
 * falls back to a drawn placeholder (two speech bubbles) if it fails to load.
 */
function YappyMark({ className }: React.SVGProps<SVGSVGElement>) {
  const [useOfficial, setUseOfficial] = useState(true);

  if (useOfficial) {
    return (
      <Image
        src="/yappy-color-portrait.png"
        alt=""
        width={56}
        height={56}
        unoptimized
        className={`${className} object-contain`}
        onError={() => setUseOfficial(false)}
      />
    );
  }

  // Placeholder fallback (not the official mark)
  return (
    <svg viewBox="0 0 48 40" className={className} aria-hidden="true" focusable="false">
      <path
        fill="#F7941E"
        d="M34 4a11 11 0 0 1 0 22 11 11 0 0 1-6.6-2.2l-5 1.4a1 1 0 0 1-1.2-1.2l1.4-4.9A11 11 0 0 1 34 4Z"
      />
      <path
        fill="#1CA7EC"
        d="M15 13a10 10 0 0 1 9.8 12l1.3 4.6a1 1 0 0 1-1.2 1.2L20.2 29A10 10 0 1 1 15 13Z"
      />
    </svg>
  );
}

const payments = [
  // hideName: the Yappy logo already includes its wordmark, so no text label.
  { name: "yappy", Mark: YappyMark, active: true, iconClass: "", hideName: true },
  { name: "Efectivo", Mark: DollarSign, active: false, iconClass: "text-emerald-400", hideName: false },
  { name: "Tarjeta", Mark: CardMark, active: false, iconClass: "", hideName: false },
];

const categories = ["Café", "Comidas", "Bebidas", "Postres"];

const products = [
  { name: "Café Latte", price: "3.50", img: "/products/latte.jpg" },
  { name: "Cappuccino", price: "3.00", img: "/products/cappuccino.jpg" },
  { name: "Croissant", price: "2.50", img: "/products/croissant.jpg" },
  { name: "Sándwich", price: "6.00", img: "/products/sandwich.jpg" },
];

const order = [
  { name: "Café Latte", qty: 2, total: "7.00" },
  { name: "Croissant", qty: 1, total: "2.50" },
  { name: "Sándwich", qty: 1, total: "6.00" },
];

/** Decorative POS interface preview shown in the hero. */
export function ProductPreview() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex flex-col text-left bg-gradient-to-b from-white/[0.03] to-transparent"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-white/[0.07] bg-white/[0.025] shrink-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/15" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="ml-3 flex items-center gap-2 text-xs font-medium text-white/55">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-emerald-400" />
          </span>
          SwiftPOS · Caja 1
        </div>
        <div className="ml-auto text-xs text-white/30 tabular-nums">10:24 AM</div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Categories sidebar */}
        <div className="hidden sm:flex flex-col gap-1 w-28 p-3 border-r border-white/[0.07]">
          {categories.map((cat, i) => (
            <div
              key={cat}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                i === 0
                  ? "bg-accent/15 text-accent ring-1 ring-inset ring-accent/30"
                  : "text-white/40"
              }`}
            >
              {i === 0 && <span className="w-1 h-1 rounded-full bg-accent" />}
              {cat}
            </div>
          ))}
        </div>

        {/* Product list — single clean column that breathes in a narrow panel */}
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-xl flex items-center gap-3 p-2 border transition-colors ${
                i === 0
                  ? "bg-accent/10 border-accent/30"
                  : "bg-white/[0.04] border-white/10"
              }`}
            >
              <div className="relative w-11 h-11 shrink-0 rounded-lg overflow-hidden ring-1 ring-white/10 bg-white/5">
                <Image
                  src={p.img}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover brightness-110 saturate-125"
                />
              </div>
              <div className="min-w-0 flex-1 text-xs font-medium text-white/90 truncate">
                {p.name}
              </div>
              <div className="text-xs font-semibold text-accent shrink-0">${p.price}</div>
            </div>
          ))}
        </div>

        {/* Order panel */}
        <div className="hidden md:flex flex-col w-56 p-4 border-l border-white/5 bg-white/[0.015]">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-semibold text-white/80">Orden #1042</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40">
              Mesa 4
            </span>
          </div>

          <div className="flex flex-col gap-1.5 flex-1 min-h-0">
            {order.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <span className="text-white/60 truncate">
                  <span className="text-accent font-semibold">{item.qty}×</span> {item.name}
                </span>
                <span className="text-white/70 font-medium shrink-0">${item.total}</span>
              </div>
            ))}
          </div>

          {/* Payment methods */}
          <div className="border-t border-white/10 mt-2.5 pt-2.5">
            <span className="text-[10px] uppercase tracking-wider text-white/30">
              Método de pago
            </span>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5">
              {payments.map(({ name, Mark, active, iconClass, hideName }) => (
                <div
                  key={name}
                  className={`flex flex-col items-center justify-center gap-1 rounded-lg py-1.5 px-1 border min-h-[42px] ${
                    active
                      ? "bg-accent/15 border-accent/40 text-accent"
                      : "bg-white/[0.02] border-white/10 text-white/40"
                  }`}
                >
                  <Mark className={`${hideName ? "w-6 h-6" : "w-4 h-4"} ${iconClass}`} strokeWidth={2} />
                  {!hideName && <span className="text-[9px] font-medium">{name}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 mt-2.5 pt-2.5 flex flex-col gap-1 text-xs">
            <div className="flex justify-between text-white/40">
              <span>Subtotal</span>
              <span>$15.50</span>
            </div>
            <div className="flex justify-between text-white/40">
              <span>ITBMS 7%</span>
              <span>$1.09</span>
            </div>
            <div className="flex justify-between text-white font-semibold text-sm mt-0.5">
              <span>Total</span>
              <span>$16.59</span>
            </div>
          </div>

          <div className="mt-2.5 w-full rounded-xl bg-[#25D366] text-black text-center py-2 text-sm font-semibold">
            Cobrar
          </div>
        </div>
      </div>
    </div>
  );
}
