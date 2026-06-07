"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

// Only run on devices with a fine pointer (mouse). On touch it just wastes
// frames since there's no cursor to follow.
function hasFinePointer() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

export function GlobalSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  // Decide on the client only. SSR and the first client render both start
  // `false` (server has no `window`), so hydration matches; a layout effect
  // then enables it before paint on fine-pointer devices.
  const [enabled, setEnabled] = useState(false);

  // Syncing with a browser media query that doesn't exist during SSR; the
  // one-time enable is intentional, not a render-derived value.
  useEffect(() => {
    /* eslint-disable-next-line react-hooks/set-state-in-effect */
    if (hasFinePointer()) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Reveal after first frame so the opacity transition fades in,
    // without a synchronous setState inside the effect.
    const raf = requestAnimationFrame(() => setIsHovering(true));

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enabled]);

  const springX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    springX.set(mousePosition.x);
    springY.set(mousePosition.y);
  }, [mousePosition, springX, springY]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden mix-blend-screen transition-opacity duration-1000"
      style={{ opacity: isHovering ? 1 : 0 }}
    >
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, rgba(6, 182, 212, 0) 50%)",
        }}
      />
    </div>
  );
}
