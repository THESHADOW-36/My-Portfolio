"use client";
import { useEffect, useState, useRef } from "react";

export default function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.ceil(current));
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <h2 ref={ref} className="sp-h2" style={{ fontSize: 60, color: "#fff", fontWeight: 600, fontFamily: "'Jost', sans-serif" }}>{count}</h2>;
}
