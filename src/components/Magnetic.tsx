"use client";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function Magnetic({ children, strength = 0.35, className = "" }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = wrapRef.current;
    if (!el || !innerRef.current) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    innerRef.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    if (innerRef.current) innerRef.current.style.transform = "";
  };

  return (
    <div
      ref={wrapRef}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: "inline-block" }}
    >
      <div
        ref={innerRef}
        style={{ transition: "transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)", display: "inline-block" }}
      >
        {children}
      </div>
    </div>
  );
}
