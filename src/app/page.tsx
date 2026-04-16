"use client";
import Preloader from "@/components/Preloader";
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
  <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 15px" }} className={className}>{children}</div>
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
      <section id="home" className="home_bg" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
        <ParticlesBg />
        <Container>
          <Row>
            <Col width="66.666%">
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
                  <Image src="/images/profile-pic.png" alt="Dinesh Thirunavukkarasu" width={500} height={500} style={{ width: "100%", height: "auto" }} />
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
          <Row style={{ textAlign: "center" as const }}>
            {[
              { icon: "ti-cup", title: "Full Stack Development", desc: "End-to-end web application development using Laravel, Vue.js, React.js, Node.js with robust backend APIs and dynamic frontends.", border: "sbbr" },
              { icon: "ti-medall-alt", title: "Responsive Web Design", desc: "Pixel-perfect, mobile-first responsive designs using Bootstrap, Material UI, and Vuetify for seamless experiences across all devices.", border: "sbbr" },
              { icon: "ti-image", title: "API Development", desc: "RESTful API design and development with Laravel and Express.js, including authentication, real-time features, and payment integration.", border: "sbbr sbbrnone" },
              { icon: "ti-crown", title: "Database Design", desc: "Efficient database architecture with MySQL and MongoDB, including schema design, optimization, and data management.", border: "" },
              { icon: "ti-key", title: "Real-Time Applications", desc: "Building real-time features with WebSockets, Pusher, and Laravel Reverb for live chat, notifications, and collaborative tools.", border: "sblr" },
              { icon: "ti-hand-open", title: "Payment Integration", desc: "Secure payment gateway integration including Razorpay, with transaction management and order processing systems.", border: "" },
            ].map((s, i) => (
              <Col width="33.333%" key={s.title} className="service-col no-padding">
                <AnimateOnScroll delay={i * 0.1}>
                  <div className={`serviceBox ${s.border}`}>
                    <div className="service-icon"><span className={s.icon} /></div>
                    <h3 className="title">{s.title}</h3>
                    <p className="description">{s.desc}</p>
                  </div>
                </AnimateOnScroll>
              </Col>
            ))}
          </Row>
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
          <Row style={{ textAlign: "center" as const }}>
            {[
              { icon: "ti-pencil-alt", title: "Programming", desc: "HTML5, CSS3, JavaScript, TypeScript, PHP", border: "sbbr" },
              { icon: "ti-desktop", title: "Frontend", desc: "React.js, Vue.js, Bootstrap, Material UI, Vuetify", border: "sbbr sbbrnone" },
              { icon: "ti-server", title: "Backend", desc: "Node.js, Express.js, Laravel", border: "sblr" },
              { icon: "ti-harddrives", title: "Database", desc: "MongoDB, MySQL", border: "" },
            ].map((s, i) => (
              <Col width="25%" key={s.title} className="skill-col no-padding">
                <AnimateOnScroll delay={i * 0.1}>
                  <div className={`serviceBox ${s.border}`}>
                    <div className="service-icon"><span className={s.icon} /></div>
                    <h3 className="title">{s.title}</h3>
                    <p className="description">{s.desc}</p>
                  </div>
                </AnimateOnScroll>
              </Col>
            ))}
          </Row>
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
                      <Col width="50%">
                        <input type="text" className="form-control" placeholder="Name" required />
                      </Col>
                      <Col width="50%">
                        <input type="email" className="form-control" placeholder="Email" required />
                      </Col>
                      <Col width="100%">
                        <input type="text" className="form-control" placeholder="Subject" required />
                      </Col>
                      <Col width="100%">
                        <textarea rows={6} className="form-control" placeholder="Your Message" required style={{ height: "auto" }} />
                      </Col>
                      <Col width="100%">
                        <div style={{ textAlign: "center", marginTop: 10 }}>
                          <button type="submit" className="contact_btn">Send Message</button>
                        </div>
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
                    <div className="address_br"><span className="ti-location-pin" /></div>
                    <h4>Address</h4>
                    <p>402, Shree Sai Shrdha Soc.,<br />Dharamveer Nagar, Vasant Vihar,<br />Thane(W) 400607</p>
                  </div>
                  <div className="single_address">
                    <div className="address_br"><span className="ti-mobile" /></div>
                    <h4>Phone</h4>
                    <p>+91 9324834193</p>
                  </div>
                  <div className="single_address">
                    <div className="address_br"><span className="ti-email" /></div>
                    <h4>Email</h4>
                    <p>dineshthiru36@gmail.com</p>
                  </div>
                  <div className="single_address">
                    <div className="address_br"><span className="ti-location-pin" /></div>
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
              <ul>
                <li><a href="https://www.linkedin.com/in/dinesh-thirunavukkarasu2002" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:dineshthiru36@gmail.com">Email</a></li>
                <li><a href="tel:+919324834193">Phone</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>
            <p className="copyright">Copyright © 2026 Dinesh Thirunavukkarasu. All Rights Reserved.</p>
          </div>
        </Container>
      </div>

      <ScrollTop />
    </>
  );
}
