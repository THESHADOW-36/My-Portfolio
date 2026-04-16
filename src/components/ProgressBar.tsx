"use client";
import { useEffect, useState, useRef } from "react";

export default function ProgressBar({ label, percent }: { label: string; percent: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setWidth(percent); observer.unobserve(el); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref}>
      <p className="progress-bar-text">
        {label} <span>{percent}%</span>
      </p>
      <div className="progress-bar-custom">
        <span style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
