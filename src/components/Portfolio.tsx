"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  { title: "Healthy Tantra", tech: "Laravel 10, Vue 2, Pusher, MySQL", img: "/images/healthy-tantra-thumbnail.png", category: "laravel" },
  { title: "Dr Today", tech: "Laravel 10, Vue 3, TypeScript, Vite", img: "/images/doctor-today-thumbnail.jpeg", category: "laravel" },
  { title: "MB Test", tech: "Laravel 10, Vue 2, Pusher, Laravel Echo", img: "/images/3.jpg", category: "laravel" },
  { title: "Hommigo", tech: "Laravel 10, Vue 3, Razorpay, WebSocket", img: "/images/hommigo-thumbnail.png", category: "laravel" },
  { title: "BusinessPe", tech: "Laravel 10, Vue 2, Vuetify, AWS S3", img: "/images/businesspe-thumbnail.png", category: "laravel" },
  { title: "Farm Agri", tech: "Laravel 10, Vue 3, Vite, MySQL", img: "/images/livestock-management-thumbnail.png", category: "laravel" },
  { title: "Expense Tracker", tech: "React.js, Node.js, MongoDB, Chart.js", img: "/images/expense-tracker-thumbnail.jpeg", category: "mern" },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Laravel + Vue", value: "laravel" },
  { label: "MERN Stack", value: "mern" },
];

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="portfolio_area section-padding">
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 30px" }}>
        <div className="section-title" style={{ textAlign: "center" }}>
          <h1>My Projects</h1>
          <p>A showcase of applications I&apos;ve built across various domains</p>
        </div>
        <div className="portfolio_filter" style={{ textAlign: "center" }}>
          <ul>
            {filters.map((f) => (
              <li
                key={f.value}
                className={active === f.value ? "active" : ""}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -15px" }}>
          {filtered.map((p, i) => (
            <div key={p.title} style={{ width: "33.333%", padding: "0 15px", minWidth: 280 }} className="portfolio-col">
              <AnimateOnScroll delay={i * 0.1}>
                <div className="box">
                  <Image src={p.img} alt={p.title} width={400} height={300} style={{ width: "100%", height: "auto" }} />
                  <div className="box-content">
                    <h3 className="title">{p.title}</h3>
                    <span className="post">{p.tech}</span>
                  </div>
                  <ul className="icon">
                    <li>
                      <a href={p.img} target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
