"use client";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  style?: React.CSSProperties;
}

export default function TiltCard({ children, className = "", maxTilt = 8, glare = true, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef(0);
  const pxRef = useRef(0.5);
  const pyRef = useRef(0.5);

  const apply = () => {
    const el = ref.current;
    if (!el) return;
    const px = pxRef.current;
    const py = pyRef.current;
    const rotY = (px - 0.5) * maxTilt * 2;
    const rotX = -(py - 0.5) * maxTilt * 2;
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
    if (glare) {
      el.style.setProperty("--glare-x", `${px * 100}%`);
      el.style.setProperty("--glare-y", `${py * 100}%`);
      el.style.setProperty("--glare-opacity", "1");
    }
    rafRef.current = 0;
  };

  const onEnter = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
  };

  const onMove = (e: React.MouseEvent) => {
    const rect = rectRef.current;
    if (!rect) return;
    pxRef.current = (e.clientX - rect.left) / rect.width;
    pyRef.current = (e.clientY - rect.top) / rect.height;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(apply);
  };

  const onLeave = () => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = 0; }
    const el = ref.current;
    if (el) {
      el.style.transform = "";
      if (glare) el.style.setProperty("--glare-opacity", "0");
    }
    rectRef.current = null;
  };

  return (
    <div
      ref={ref}
      className={`${className} ${glare ? "tilt-glare" : ""}`}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
