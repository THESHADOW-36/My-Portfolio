"use client";
import Preloader from "@/components/Preloader";
import { CupIcon, MedalIcon, ImageIcon, CrownIcon, KeyIcon, HandIcon, CodeIcon, DesktopIcon, ServerIcon, DatabaseIcon, LocationIcon, PhoneIcon, EmailIcon, LinkedInIcon } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import ParticlesBg from "@/components/Particles";
import TypeWriter from "@/components/TypeWriter";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ProgressBar from "@/components/ProgressBar";
import Counter from "@/components/Counter";
import Portfolio from "@/components/Portfolio";
import ScrollTop from "@/components/ScrollTop";
import Image from "next/image";

const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 30px", width: "100%" }} className={`custom-container ${className}`}>{children}</div>
);

const Row = ({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -15px", ...style }} className={className}>{children}</div>
);

const Col = ({ children, width, className = "" }: { children: React.ReactNode; width: string; className?: string }) => (
  <div style={{ width, padding: "0 15px" }} className={className}>{children}</div>
);

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />

      {/* HOME */}
      <section id="home" className="home_bg" style={{ backgroundImage: "url('/images/background-2.jpg')" }}>
        <ParticlesBg />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-grid-overlay" />
        <Container>
          <Row>
            <Col width="66.666%" className="hero-col">
              <div className="about_me_content">
                <span> - I Am Dinesh Thirunavukkarasu</span>
                <TypeWriter />
              </div>
              <div className="basic-info">
                <div className="single-basic-info">
                  <p>Email: <br /><span>dineshthiru36@gmail.com</span></p>
                </div>
                <div className="single-basic-info">
                  <p>Phone: <br /><span>+91 9324834193</span></p>
                </div>
                <div className="single-basic-info">
                  <p>Address: <br /><span>Thane, Maharashtra</span></p>
                </div>
                <div className="single-basic-info">
                  <p>Nationality: <br /><span>India</span></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding">
        <Container>
          <div className="section-title" style={{ textAlign: "center" }}>
            <h1>Profile</h1>
            <p>Full Stack Developer passionate about building modern web applications</p>
          </div>
          <Row>
            <Col width="50%" className="about-col-left">
              <AnimateOnScroll delay={0.1}>
                <div className="about_img">
                  <div className="about_img_inner">
                    <Image src="/images/profile-2.jpeg" alt="Dinesh Thirunavukkarasu" width={500} height={500} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="about_img_badge">
                    <span className="about_img_badge_num">3+</span>
                    <span className="about_img_badge_label">Years<br/>Experience</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </Col>
            <Col width="50%" className="about-col-right">
              <AnimateOnScroll delay={0.2}>
                <div className="about_info">
                  <h4>Intro</h4>
                  <h3>Hi, my name is Dinesh Thirunavukkarasu.</h3>
                  <p><strong>A commerce graduate turned Full Stack Developer. Completed a 6-month full-stack development course specializing in MERN stack and gained hands-on experience through internships, mastering HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.</strong></p>
                  <p>Currently working as a Full Stack Developer specializing in Laravel and Vue.js, delivering end-to-end web solutions across healthcare, fintech, real estate, agriculture, and wellness domains. Completed 6+ production-ready projects with real-time features, payment integration, and cloud storage.</p>
                </div>
                <div className="skills_info">
                  <h4>Skills</h4>
                  <ProgressBar label="Laravel + Vue.js" percent={90} />
                  <ProgressBar label="React.js + Node.js" percent={80} />
                  <ProgressBar label="HTML / CSS / JavaScript" percent={95} />
                </div>
              </AnimateOnScroll>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="service" className="service_area section-padding">
        <Container>
          <div className="section-title" style={{ textAlign: "center" }}>
            <h1>What I&apos;m Doing</h1>
            <p>Services I offer to bring your ideas to life</p>
          </div>
          <div className="service-grid">
            {[
              { Icon: CupIcon, title: "Full Stack Development", desc: "End-to-end web application development using Laravel, Vue.js, React.js, Node.js with robust backend APIs and dynamic frontends.", border: "sbbr" },
              { Icon: MedalIcon, title: "Responsive Web Design", desc: "Pixel-perfect, mobile-first responsive designs using Bootstrap, Material UI, and Vuetify for seamless experiences across all devices.", border: "sbbr" },
              { Icon: ImageIcon, title: "API Development", desc: "RESTful API design and development with Laravel and Express.js, including authentication, real-time features, and payment integration.", border: "sbbr sbbrnone" },
              { Icon: CrownIcon, title: "Database Design", desc: "Efficient database architecture with MySQL and MongoDB, including schema design, optimization, and data management.", border: "" },
              { Icon: KeyIcon, title: "Real-Time Applications", desc: "Building real-time features with WebSockets, Pusher, and Laravel Reverb for live chat, notifications, and collaborative tools.", border: "sblr" },
              { Icon: HandIcon, title: "Payment Integration", desc: "Secure payment gateway integration including Razorpay, with transaction management and order processing systems.", border: "" },
            ].map((s) => (
              <div key={s.title} className={`serviceBox ${s.border}`}>
                <div className="service-icon"><s.Icon /></div>
                <h3 className="title">{s.title}</h3>
                <p className="description">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FUNFACT */}
      <section className="funfact_area section-padding" style={{ backgroundImage: "url('/images/counter-bg.jpg')" }}>
        <Container>
          <Row style={{ textAlign: "center" as const }}>
            {[
              { target: 9, label: "Projects Completed" },
              { target: 3, label: "Years Experience" },
              { target: 10, label: "Technologies" },
              { target: 6, label: "Industry Domains" },
            ].map((s) => (
              <Col width="25%" key={s.label} className="stat-col no-padding">
                <AnimateOnScroll>
                  <div className="sp">
                    <Counter target={s.target} />
                    <h3>{s.label}</h3>
                  </div>
                </AnimateOnScroll>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PORTFOLIO */}
      <Portfolio />

      {/* RESUME */}
      <section id="resume" className="resume_area section-padding">
        <Container>
          <div className="section-title" style={{ textAlign: "center" }}>
            <h1>Resume</h1>
            <p>My education and professional experience</p>
            <a href="/My Resume.pdf" download="Dinesh Thiru Resume" className="resume_download_btn" style={{ display: "inline-block", marginTop: "20px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              <span>Download Resume</span>
            </a>
          </div>
          <Row>
            <Col width="50%" className="resume-col">
              <AnimateOnScroll delay={0.2}>
                <h4 className="timeline_title">Education</h4>
                <div className="single_timeline">
                  <h4>Bachelor of Commerce (Degree)</h4>
                  <span className="active_year">2023</span>
                  <span className="active_company"> - SIES College of Commerce &amp; Economics</span>
                  <p>Percentage: 73.01%. Completed March 2023.</p>
                </div>
                <div className="single_timeline">
                  <h4>Higher Secondary (HSC)</h4>
                  <span className="active_year">2020</span>
                  <span className="active_company"> - SIES College of Commerce &amp; Economics</span>
                  <p>Percentage: 64.15%. Completed March 2020.</p>
                </div>
                <div className="single_timeline">
                  <h4>Secondary School (SSC)</h4>
                  <span className="active_year">2018</span>
                  <span className="active_company"> - SIES High School</span>
                  <p>Percentage: 72.20%. Completed March 2018.</p>
                </div>
                <h4 className="timeline_title" style={{ marginTop: 30 }}>Certifications</h4>
                <div className="single_timeline">
                  <h4>Full Stack Developer Course</h4>
                  <span className="active_year">2023 - 2024</span>
                  <span className="active_company"> - Awdiz Institute (6 months)</span>
                  <p>Comprehensive training in React, Node.js, Express &amp; MongoDB. Built real-world applications end-to-end covering frontend and backend technologies.</p>
                </div>
              </AnimateOnScroll>
            </Col>
            <Col width="50%" className="resume-col">
              <AnimateOnScroll delay={0.3}>
                <h4 className="timeline_title">Experience</h4>
                <div className="single_timeline">
                  <h4>Full Stack Developer</h4>
                  <span className="active_year">2024 - Present</span>
                  <span className="active_company"> - Freelance / Contract</span>
                  <p>Building full-stack applications with Laravel + Vue.js across healthcare, fintech, agriculture, and real estate domains. Delivered 6+ production-ready projects with real-time features and payment integration.</p>
                </div>
                <div className="single_timeline">
                  <h4>MERN Stack Intern</h4>
                  <span className="active_year">Dec 2023 - Mar 2024</span>
                  <span className="active_company"> - Werqlabs Pvt. Ltd.</span>
                  <p>Frontend with React.js, backend with Node.js/Express.js, MongoDB database management. Built Expense Tracker and Gift Management apps. Gained expertise in MERN stack libraries and frameworks.</p>
                </div>
                <div className="single_timeline">
                  <h4>Data Research &amp; Analysis</h4>
                  <span className="active_year">Dec 2021 - Jun 2022</span>
                  <span className="active_company"> - Global E-Content (Full time)</span>
                  <p>Data research and analysis, exploring websites for tenders, and preparing reports through gathered information.</p>
                </div>
                <div className="single_timeline single_timeline_mbnone">
                  <h4>Graphic Design &amp; Data Entry</h4>
                  <span className="active_year">2017 - 2019</span>
                  <span className="active_company"> - Ashok Enterprises (Part time)</span>
                  <p>Home-based ID card design for schools and colleges using CorelDRAW, MS Excel, and Photoshop.</p>
                </div>
              </AnimateOnScroll>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SKILLS */}
      <section id="skills" className="service_area section-padding">
        <Container>
          <div className="section-title" style={{ textAlign: "center" }}>
            <h1>Technical Skills</h1>
            <p>Technologies and tools I work with</p>
          </div>
          <div className="skill-grid">
            {[
              { Icon: CodeIcon, title: "Programming", desc: "HTML5, CSS3, JavaScript, TypeScript, PHP", border: "sbbr" },
              { Icon: DesktopIcon, title: "Frontend", desc: "React.js, Vue.js, Bootstrap, Material UI, Vuetify", border: "sbbr sbbrnone" },
              { Icon: ServerIcon, title: "Backend", desc: "Node.js, Express.js, Laravel", border: "sblr" },
              { Icon: DatabaseIcon, title: "Database", desc: "MongoDB, MySQL", border: "" },
            ].map((s) => (
              <div key={s.title} className={`serviceBox ${s.border}`}>
                <div className="service-icon"><s.Icon /></div>
                <h3 className="title">{s.title}</h3>
                <p className="description">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact_us section-padding">
        <Container>
          <div className="section-title" style={{ textAlign: "center" }}>
            <h1>Get In Touch</h1>
            <p>Have a project in mind? Let&apos;s work together!</p>
          </div>
          <Row>
            <Col width="66.666%" className="contact-col-left">
              <AnimateOnScroll delay={0.2}>
                <div className="contact">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <Row>
                      <Col width="50%" className="contact-field">
                        <input type="text" placeholder="Name" required />
                      </Col>
                      <Col width="50%" className="contact-field">
                        <input type="email" placeholder="Email" required />
                      </Col>
                      <Col width="100%">
                        <input type="text" placeholder="Subject" required />
                      </Col>
                      <Col width="100%">
                        <textarea rows={6} placeholder="Your Message" required />
                      </Col>
                      <Col width="100%">
                        <button type="submit" className="contact_btn">Send Message</button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </AnimateOnScroll>
            </Col>
            <Col width="33.333%" className="contact-col-right">
              <AnimateOnScroll delay={0.3}>
                <div className="address_bg">
                  <div className="single_address">
                    <div className="address_br"><LocationIcon /></div>
                    <h4>Address</h4>
                    <p>402, Shree Sai Shrdha Soc.,<br />Dharamveer Nagar, Vasant Vihar,<br />Thane(W) 400607</p>
                  </div>
                  <div className="single_address">
                    <div className="address_br"><PhoneIcon /></div>
                    <h4>Phone</h4>
                    <p>+91 9324834193</p>
                  </div>
                  <div className="single_address">
                    <div className="address_br"><EmailIcon /></div>
                    <h4>Email</h4>
                    <p>dineshthiru36@gmail.com</p>
                  </div>
                  <div className="single_address">
                    <div className="address_br"><LinkedInIcon /></div>
                    <h4>LinkedIn</h4>
                    <p><a href="https://www.linkedin.com/in/dinesh-thirunavukkarasu2002" target="_blank" rel="noopener noreferrer" style={{ color: "#f0bb62" }}>Connect with me</a></p>
                  </div>
                </div>
              </AnimateOnScroll>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOOTER */}
      <div className="footer">
        <Container>
          <div>
            <div className="footer_social_profile">
              <ul className="footer_social_icons">
                <li>
                  <a href="https://www.linkedin.com/in/dinesh-thirunavukkarasu2002" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </li>
                <li>
                  <a href="mailto:dineshthiru36@gmail.com" aria-label="Email">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </a>
                </li>
                <li>
                  <a href="tel:+919324834193" aria-label="Phone">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </a>
                </li>
              </ul>
            </div>
            <p className="copyright">Copyright © 2026 <span className="copyright-name">Dinesh Thirunavukkarasu</span>. Crafted with <span className="copyright-heart">♥</span> in India.</p>
          </div>
        </Container>
      </div>

      <ScrollTop />
    </>
  );
}
