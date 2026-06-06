"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  shape: "diamond" | "rect" | "dot";
}

const BLUE_PALETTE = [
  "rgba(6, 182, 212, OPACITY)",    // accent cyan
  "rgba(34, 211, 238, OPACITY)",   // lighter cyan
  "rgba(14, 116, 144, OPACITY)",   // deeper teal
  "rgba(103, 232, 249, OPACITY)",  // pale cyan
  "rgba(8, 145, 178, OPACITY)",    // mid cyan
  "rgba(165, 243, 252, OPACITY)",  // sky cyan
];

export function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function createParticles() {
      if (!canvas) return;
      const count = 60;
      particles = [];
      for (let i = 0; i < count; i++) {
        const opacity = 0.15 + Math.random() * 0.45;
        const colorTemplate = BLUE_PALETTE[Math.floor(Math.random() * BLUE_PALETTE.length)];
        const color = colorTemplate.replace("OPACITY", opacity.toString());
        const shapes: Particle["shape"][] = ["diamond", "rect", "dot"];

        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          size: 3 + Math.random() * 6,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: -0.15 - Math.random() * 0.3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity,
          color,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        if (!prefersReduced) {
          p.x += p.speedX;
          p.y += p.speedY;
          p.rotation += p.rotationSpeed;

          // Wrap around
          if (p.y < -20) p.y = h + 20;
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;

        if (p.shape === "diamond") {
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size * 0.6, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size * 0.6, 0);
          ctx.closePath();
          ctx.fill();
        } else if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      if (!prefersReduced) animationId = requestAnimationFrame(draw);
    }

    function handleResize() {
      resize();
      createParticles();
      if (prefersReduced) draw();
    }

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
