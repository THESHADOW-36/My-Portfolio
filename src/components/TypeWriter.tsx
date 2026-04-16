"use client";
import { useEffect, useState, useRef } from "react";

const words = ["FULL STACK DEVELOPER", "LARAVEL + VUE.JS", "MERN STACK", "WEB DEVELOPER"];

export default function TypeWriter() {
  const [text, setText] = useState("");
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const current = words[idx.current];
      if (deleting.current) {
        setText(current.substring(0, charIdx.current--));
      } else {
        setText(current.substring(0, charIdx.current++));
      }

      let speed = deleting.current ? 50 : 100;
      if (!deleting.current && charIdx.current > current.length) {
        speed = 2000;
        deleting.current = true;
      } else if (deleting.current && charIdx.current < 0) {
        deleting.current = false;
        idx.current = (idx.current + 1) % words.length;
        charIdx.current = 0;
        speed = 500;
      }
      return setTimeout(tick, speed);
    };
    const t = tick();
    return () => clearTimeout(t);
  }, []);

  return (
    <h1 className="typewrite">
      <span className="wrap">{text}</span>
    </h1>
  );
}
