"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const render = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) {
        ringX += dx * 0.2;
        ringY += dy * 0.2;
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        }
        raf = requestAnimationFrame(render);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onEnter = () => ringRef.current?.classList.add("cursor-active");
    const onLeave = () => ringRef.current?.classList.remove("cursor-active");

    const hoverSelector = "a, button, .serviceBox, .box, .sp, .portfolio_filter li, .address_br, input, textarea";
    let attached: Element[] = [];
    const attach = () => {
      attached = Array.from(document.querySelectorAll(hoverSelector));
      attached.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    const detach = () => {
      attached.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      attached = [];
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    const mountDelay = setTimeout(attach, 800);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(mountDelay);
      detach();
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
