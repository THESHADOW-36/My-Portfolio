"use client";
import { useEffect, useRef } from "react";

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const count = isMobile ? 30 : 50;
    const linkDist = isMobile ? 110 : 140;
    const linkDistSq = linkDist * linkDist;

    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0, h = 0;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      w = parent?.offsetWidth || window.innerWidth;
      h = parent?.offsetHeight || 620;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.6 + 0.8,
      });
    }

    let animId = 0;
    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !animId) animId = requestAnimationFrame(draw);
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const draw = () => {
      if (!visible) { animId = 0; return; }
      ctx.clearRect(0, 0, w, h);

      // Update positions first
      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // Draw links (batch per alpha tier to minimize state changes)
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        const a = particles[i];
        for (let j = i + 1; j < count; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < linkDistSq) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.stroke();

      // Draw particles (single fillStyle)
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      for (let i = 0; i < count; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, pointerEvents: "none" }}
    />
  );
}
