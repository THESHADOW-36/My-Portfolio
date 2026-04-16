"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 500);
    const t2 = setTimeout(() => setRemove(true), 1000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (remove) return null;
  return (
    <div className={`preloader ${hide ? "hide" : ""}`}>
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
}
