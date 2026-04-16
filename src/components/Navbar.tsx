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
    const onScroll = () => {
      setSticky(window.scrollY >= 50);
      const sections = navItems.map((n) => document.querySelector(n.href));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement;
        if (el && el.offsetTop - 100 <= window.scrollY) {
          setActive(navItems[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar-custom ${sticky ? "nav-sticky" : ""}`}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 15px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}>
          Dinesh
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}
          className="mobile-toggle"
        >
          ☰
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
