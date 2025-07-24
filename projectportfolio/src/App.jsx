import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUp, FaChevronUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Timeline from './components/ui/Timeline';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css';
// myprotfolio
// Personal Images & Logos
import resumepic from './components/img/resumepic.png';
import bhrmc from "./components/img/bhrmc.jpg";
import edukit from "./components/img/edukit.png";
import lsvd from "./components/img/lsvd.png";
import panda from "./components/img/panda.jpg";
import wanderlakad from "./components/img/wanderlakad.jpg";

// Skill Icons
import premiere from "./components/img/premiere.png";
import photoshop from "./components/img/photoshop.png";
import tech from "./components/img/tech.png";

// Info Icons
import user from "./components/img/user.png";
import work from "./components/img/work.png";
import location from "./components/img/location.png";
import email from "./components/img/email.png";

// Certificates
import cor0 from "./components/certs/cor.jpg";
import cor1 from "./components/certs/cor1.jpg";
import cor2 from "./components/certs/cor2.jpg";
import cor3 from "./components/certs/cor3.jpg";
import cor4 from "./components/certs/cor4.jpg";
import cor5 from "./components/certs/cor5.jpg";

export default function PortfolioUpdated() {
  useEffect(() => {
    const scrollTo = (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    document.querySelectorAll("nav a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        scrollTo(a.getAttribute("href").substring(1));
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const bar = entry.target.querySelector('.progress-bar-fill');
        if (entry.isIntersecting && bar) {
          bar.classList.add('progress-animate');
        }
      });
    }, { threshold: 0.6 });

    document.querySelectorAll('.skill-bar-container').forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  const logos = [bhrmc, edukit, lsvd, panda, wanderlakad];
  const certificates = [cor0, cor1, cor2, cor3, cor4, cor5];

  const services = [
    { title: "✔ IT Support", desc: "Fast, reliable tech assistance for your devices and networks." },
    { title: "✔ Photoshop Design", desc: "Stunning visuals, edits, and graphics tailored to your needs." },
    { title: "✔ Premiere Pro Editing", desc: "Smooth, high-quality video editing for any project." }
  ];

  const skills = [
    { title: "IT Support Specialist", image: tech },
    { title: "Photoshop Design", image: photoshop },
    { title: "Premiere Pro Editing", image: premiere }
  ];

  return (
    <div className="font-sans text-white bg-black overflow-x-hidden">
      {/* Navbar */}
      <nav>
        <div className="container nav-inner">
          <span className="text-2xl font-bold">Caedmon Rodriguez</span>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#logos">Logos</a>
            <a href="#videos">Videos</a>
            <a href="#about">About</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-image"
            >
              <img src={resumepic} alt="Caedmon Rodriguez" loading="lazy" />
            </motion.div>

            <div className="hero-text">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                More Info About Me
              </motion.h1>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <p className="text-base md:text-lg mb-4">
                  I'm Caedmon Rodriguez (Zed), a mix of IT problem solver, visual storyteller.
                  I fix computers, design logos, and edit videos with purpose and precision.
                </p>

                <div className="info-block-grid">
                  <div className="info-item"><img src={user} alt="" /> Caedmon Rodriguez</div>
                  <div className="info-item"><img src={email} alt="" /> caedmonr@yahoo.com</div>
                  <div className="info-item"><img src={work} alt="" /> Freelancer</div>
                  <div className="info-item"><img src={location} alt="" /> Tagbilaran City, Philippines</div>
                </div>
              </motion.div>

              <div className="button-group">
                <a href="#logos"><button className="button viewwork">View Work</button></a>
                <a href="#about"><button className="button hireme">Hire Me</button></a>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Designs */}
        <section id="logos" className="bg-white text-black">
          <div className="container">
            <h2 className="text-3xl font-bold">Logo Designs</h2>
            <div className="logo-grid">
              {logos.map((src, i) => (
                <motion.div key={i} className="logo-item" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <img src={src} alt={`Logo ${i + 1}`} className="w-full h-auto" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos */}
        <section id="videos" className="relative overflow-hidden">
          <div className="circle-bg">
            {[1, 2, 3, 4].map(n => <span key={n} className={`circle circle${n}`}></span>)}
          </div>
          <div className="container text-center z-10 relative">
            <motion.h2 className="text-5xl font-bold mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              Videos
            </motion.h2>
            <motion.h1 animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} className="text-4xl font-bold mb-6">
              Videos Coming Soon
            </motion.h1>
            <div className="border-4 border-white rounded-lg w-60 h-36 flex items-center justify-center opacity-40 mx-auto">
              <FaArrowUp className="text-3xl animate-pulse" />
            </div>
          </div>
        </section>

        {/* About / Services */}
        <section id="about" className="container">
          <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            My Services
          </motion.h2>

          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="service-icon">✔</div>
                <h3 className="service-title">{service.title.replace('✔ ', '')}</h3>
                <p className="service-desc">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-bar-container">
                <div className="skill-header">
                  <img src={skill.image} alt={skill.title} className="skill-icon" />
                  <h3>{skill.title}</h3>
                </div>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar-labels">
                    <span></span>
                    <span>100%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="letswork-wrapper">
            <button className="button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Let's Work Together
            </button>
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates">
          <div className="container py-12">
            <h2 className="text-3xl font-bold text-center mb-8">CERTIFICATES</h2>
            <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} className="max-w-4xl mx-auto">
              {certificates.map((cert, i) => (
                <SwiperSlide key={i}>
                  <div className="certificate-slide-wrapper">
                    <img src={cert} alt={`Certificate ${i + 1}`} className="certificate-img" loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Timeline Section (NEW) */}
        <Timeline />

        {/* Contact */}
        <section id="contact" className="bg-gray-100 py-16 px-4 text-black">
          <div className="container">
            <div className="contact-form-dark">
              <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
              <p className="contact-subtext text-center">I'm always open to opportunities, ideas, or collaborations. Let’s chat!</p>
              <form action="https://formsubmit.co/caedmonr@yahoo.com" method="POST" className="space-y-5">
                <input required name="name" placeholder="Your Name" />
                <input required name="email" type="email" placeholder="Your Email" />
                <textarea required name="message" placeholder="Your Message" rows={5}></textarea>
                <button type="submit" className="button w-full">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <a href="https://github.com/DepressedMime/myportfolio.git" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-400 mb-4 inline-block">
          <FaGithub />
        </a>
        <p className="text-sm">© {new Date().getFullYear()} Caedmon. All rights reserved.</p>
        <a href="#hero" className="absolute right-6 bottom-6 text-white hover:text-cyan-400">
          <FaChevronUp className="text-xl" />
        </a>
      </footer>
    </div>
  );
}
