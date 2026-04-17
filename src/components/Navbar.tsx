"use client";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionEls = navItems
      .map((n) => document.querySelector(n.href) as HTMLElement | null)
      .map((el) => ({ el, href: "" }));
    navItems.forEach((n, i) => { sectionEls[i].href = n.href; });

    let raf = 0;
    let lastSticky = false;
    let lastActive = "#home";
    const update = () => {
      const y = window.scrollY;
      const nextSticky = y >= 50;
      if (nextSticky !== lastSticky) {
        lastSticky = nextSticky;
        setSticky(nextSticky);
      }
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const item = sectionEls[i];
        if (item.el && item.el.offsetTop - 100 <= y) {
          if (item.href !== lastActive) {
            lastActive = item.href;
            setActive(item.href);
          }
          break;
        }
      }
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar-custom ${sticky ? "nav-sticky" : ""}`}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 30px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}>
          Dinesh Thiru
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul style={{ display: "flex", gap: 0, margin: 0, padding: 0, listStyle: "none" }} className={`nav-list ${mobileOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className={`nav-link ${active === item.href ? "active" : ""}`}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
