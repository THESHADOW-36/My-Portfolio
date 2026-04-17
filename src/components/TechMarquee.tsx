"use client";

const techs = [
  "Laravel",
  "Vue.js",
  "React.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "MySQL",
  "Tailwind",
  "Express.js",
  "Pusher",
  "WebSocket",
  "Razorpay",
  "AWS S3",
  "Vuetify",
  "Bootstrap",
];

export default function TechMarquee() {
  const row = [...techs, ...techs];
  return (
    <section className="tech-marquee-section" aria-hidden="true">
      <div className="tech-marquee">
        <div className="tech-marquee-track">
          {row.map((t, i) => (
            <span key={i} className="tech-marquee-item">
              <span className="tech-marquee-dot" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
