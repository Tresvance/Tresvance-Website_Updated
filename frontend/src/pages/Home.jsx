import React, { use } from 'react';
import './Home.css';
import WhyChooseUs from "./whychooseus.jsx";
import { motion, AnimatePresence, useAnimation, hover } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ThreeDImageRing from './draggable-3d-image-ring.jsx';
import { Play } from 'lucide-react';



const Home = () => {

  const [angle, setAngle] = useState(0);
  const [rotation, setRotation] = useState(0);
  const totalItems = 6;
  const anglePerItem = 360 / totalItems;
  const [current, setCurrent] = React.useState(0);

  const images = [
    "../src/assets/pic1.png",
    "../src/assets/pic2.jpg",
    "../src/assets/pic3.jpg",
    "../src/assets/pic4.jpg",
    "../src/assets/pic5.webp",
    "../src/assets/pic6.jpg"
  ];

  const rotateCarousel = (direction) => {
    setRotation((prev) => prev + direction * anglePerItem);
  };

  const content = [
    {
      title: "Full-Stack Software Engineering",
      description: "Designing and building robust, scalable, tailor-made digital products—from intuitive web apps to complex enterprise systems—engineered to fit unique business workflows.",
    },
    {
      title: "Next-Gen AI Development",
      description: "Accelerating business efficiency by building and integrating smart AI models, automating workflows, and leveraging machine learning to solve complex operational challenges.",
    },
    {
      title: "IoT Device Implementation",
      description: "Transform your business with IoT integration, device management, and data-driven automation.",
    },
    {
      title: "End-to-End Cybersecurity",
      description: "Protecting digital assets with comprehensive security services, including threat detection, risk assessments, and robust defense protocols to safeguard your business.",
    },
    {
      title: "Results-Driven Digital Marketing",
      description: "Scaling online presence and accelerating brand growth through targeted marketing strategies, SEO, social media management, and data-backed campaigns.",
    },
    {
      title: "IT, Managed Services & Digital Strategy",
      description: "Providing proactive IT management, cloud infrastructure support, and continuous network monitoring, alongside strategic digital transformation to modernize legacy systems and optimize operations.",
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const autoRotate = setInterval(() => {
      rotateCarousel(-1);
    }, 4000);
    return () => clearInterval(autoRotate);
  }, []);

  const hoverSound = useRef(null);

  useEffect(() => {
    hoverSound.current = new Audio("/hover.mp3");
    hoverSound.current.volume = 0.4;
  }, []);

  useEffect(() => {
    const unlockAudio = () => {
      if (hoverSound.current) {
        hoverSound.current.play().catch(() => {});
        hoverSound.current.pause();
        hoverSound.current.currentTime = 0;
      }
      window.removeEventListener("click", unlockAudio);
    };
    window.addEventListener("click", unlockAudio);
  }, []);

  const circleVariants = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? "-100vw" : direction === "right" ? "100vw" : 0,
      y: direction === "bottom" ? "100vh" : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        bounce: 0.4,
        duration: 1.2,
      },
    },
  });

  return (
    <div className="w-full bg-white font-sans m-0 p-0">
      <main className="w-full pt-[80px] md:pt-[80px] bg-white m-0 p-0">

        {/* ── HERO SECTION ── */}
        <section className="hero-preserve relative h-auto md:min-h-screen bg-white px-6 md:px-12 pb-8 md:pb-12 font-sans text-black overflow-hidden border-none m-0">

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes revealUp {
              from { transform: translateY(110%); }
              to   { transform: translateY(0); }
            }
            .animate-reveal { animation: revealUp 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards; }
            .delay-1 { animation-delay: 0.2s; }
            .delay-2 { animation-delay: 0.4s; }
          `}} />

          <div className="max-w-[1600px] mx-auto relative">

            {/* Line 1 — "Creative and Innovative" */}
            <div className="overflow-hidden pt-12 md:pt-0 md:lg:mt-16">
              <h1 className="text-[clamp(3.6rem,10vw,10rem)] leading-none font-light tracking-tighter translate-y-[110%] animate-reveal font-sans">
                Creative and Innovative
              </h1>
            </div>

            {/* Line 2 — Desktop: subtitle left + Digital Solution right | Mobile: Digital Solution then subtitle below */}
            <style dangerouslySetInnerHTML={{ __html: `
              .hero-line2 { display: flex; flex-direction: row; align-items: flex-start; width: 100%; gap: 1rem; }
              .hero-subtitle-block { display: flex; flex-direction: column; align-items: flex-start; gap: 1rem; flex-shrink: 0; width: clamp(160px, 22vw, 320px); padding-top: clamp(1rem, 3vw, 2.5rem); order: 1; }
              .hero-h2-block { overflow: hidden; flex: 1; order: 2; }
              @media (max-width: 768px) {
                .hero-line2 { flex-direction: column; gap: 0; }
                .hero-h2-block { width: 100%; order: 1; }
                .hero-subtitle-block { width: 100%; padding-top: 1.5rem; order: 2; }
              }
            `}} />

            <div className="hero-line2">

              {/* Desktop LEFT / Mobile SECOND: subtitle + CTA */}
              <div className="hero-subtitle-block">
                <p style={{
                  fontSize: 'clamp(0.82rem, 1.1vw, 0.92rem)',
                  color: '#555',
                  lineHeight: '1.7',
                  fontWeight: 400,
                  margin: 0,
                }}>
                  We provide IT &amp; Managed Services primarily to clients in
                  the North America, Middle East and across the globe. We
                  maintain a far-reaching network by software developers
                  who are highly experienced and proficient.
                </p>

                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    backgroundColor: '#111',
                    color: '#fff',
                    padding: '0.55rem 1.3rem',
                    borderRadius: '999px',
                    fontSize: 'clamp(0.78rem, 1vw, 0.88rem)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'background 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#333'}
                  onMouseLeave={e => e.currentTarget.style.background = '#111'}
                >
                  <svg viewBox="0 0 24 24" style={{ width: '0.85em', height: '0.85em' }}>
                    <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                  </svg>
                  How do we Work
                </a>
              </div>

              {/* Desktop RIGHT / Mobile FIRST: "Digital Solution" */}
              <div className="hero-h2-block">
                <h2 className="text-[clamp(3.6rem,10vw,10rem)] leading-none font-light tracking-tighter translate-y-[110%] animate-reveal delay-1 font-sans">
                  Digital Solution
                </h2>
              </div>

            </div>

            {/* Blue Arrow bottom left */}
            <div className="overflow-hidden mt-6 md:mt-10">
              <div className="w-10 md:w-14 translate-y-[110%] animate-reveal delay-2">
                <svg viewBox="0 0 60 100" fill="none" className="w-full h-auto">
                  <path d="M30 0V85M30 85L5 60M30 85L55 60" stroke="#00AEEF" strokeWidth="3" />
                </svg>
              </div>
            </div>

          </div>
        </section>

        {/* ── MARQUEE + WHAT WE DO SECTION ── */}
        <section className="py-20 bg-[#ffffff] text-[#111] px-6 sm:px-10 md:px-16 lg:px-20 animate-fade-in">
          <div className="overflow-hidden w-full mb-12">
            <h2 className="text-5xl md:text-6xl font flex items-center justify-center relative">
              <div className="marquee-wrapper w-full">
                <div className="marquee flex space-x-8 text-black tracking-widest">
                  ‎ INNOVATE‎
                  <span className="spinning-shape"></span>
                  ‎ INTEGRATE
                  <span className="spinning-shape"></span>
                  ‎ ELEVATE
                  <span className="spinning-shape"></span>
                </div>
              </div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start py-20 px-6 md:px-12">
            {/* Left — Text */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight font-sans">
                <br /><br /><br />
                What We <br /> Do at <br /> Tresvance
              </h3>
              <p className="text-base md:text-2xl text-gray-700 leading-relaxed mb-8">
                <br /><br />
                Tresvance leverages Artificial Intelligence <br />
                to build smarter, faster, and more intuitive solutions. <br />
                We combine intelligent automation, data-driven insights, <br />
                and innovative design to help businesses stay ahead in the digital era.
              </p>
              <a
                href="#"
                className="underline text-lg font-medium hover:text-[#a14d2e] transition-colors duration-300"
              >
                Learn more about us
              </a>
            </motion.div>

            {/* Right — Images */}
            <motion.div
              className="grid grid-cols-1 gap-2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src="../src/assets/img1.png"
                alt="AI product"
                className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-60 shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img
                src="../src/assets/img2.png"
                alt="Office"
                className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-60 shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img
                src="../src/assets/img3.png"
                alt="Branding"
                className="rounded-lg object-cover w-full h-60 sm:h-72 md:h-80 shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES CAROUSEL SECTION ── */}
        <section className="py-20 bg-[#ffffff] text-[#111] flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 sm:px-10 md:px-16 lg:px-24 text-center md:text-left">

            {/* LEFT — Title */}
            <div className="md:w-1/3">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={current}
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight font-sans"
                >
                  <br /><br />
                  {content[current].title.split(" ").map((word, i) => (
                    <span key={i}>{word}<br /></span>
                  ))}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* CENTER — Image */}
            <div
              className="relative w-[280px] sm:w-[340px] md:w-[380px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg cursor-pointer transition-transform duration-700 hover:scale-105 group"
              onClick={handleClick}
              onMouseEnter={() => {
                if (hoverSound.current) {
                  hoverSound.current.currentTime = 0;
                  hoverSound.current.play().catch((err) => console.log(err));
                }
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt="Service"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
                />
              </AnimatePresence>
            </div>

            {/* RIGHT — Description */}
            <div className="md:w-1/3">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 80 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-base md:text-2xl text-gray-700 leading-relaxed mb-8"
                >
                  <br /><br />
                  {content[current].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Counter */}
          <div className="mt-8 text-gray-600 font-medium text-sm tracking-widest">
            {`0${current + 1}/0${images.length}`}
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <WhyChooseUs />

        {/* ── STATS SECTION ── */}
        <section className="py-12 sm:py-16 bg-[#ffffff] text-primary px-4 items-center justify-center md:ml-[90px] sm:px-8 overflow-x-hidden">
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start justify-start md:space-x-12 mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Text */}
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight font-sans"
            >
              <br />
              Numbers That <br />Reflect<br /> Our Journey
            </motion.h2>

            {/* Circles */}
            <motion.div
              className="relative flex justify-center items-center w-[380px] md:w-[420px] h-[300px] md:h-[340px] ml-0 md:ml-8"
              variants={containerVariants}
            >
              <motion.div
                variants={circleVariants("left")}
                whileHover={{ scale: 1.1 }}
                className="absolute left-3 top-10 bg-lime-200 rounded-full w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 flex flex-col items-center justify-center text-center z-20 shadow-md"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">25</div>
                <div className="text-xs sm:text-sm text-gray-500">Projects Done</div>
              </motion.div>

              <motion.div
                variants={circleVariants("right")}
                whileHover={{ scale: 1.1 }}
                className="absolute right-3 top-0 bg-purple-200 rounded-full w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 flex flex-col items-center justify-center text-center z-10 shadow-md"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">5+</div>
                <div className="text-xs sm:text-sm text-gray-500">Years Of Experience</div>
              </motion.div>

              <motion.div
                variants={circleVariants("bottom")}
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-[10px] left-1/3 bg-black rounded-full w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 flex flex-col items-center justify-center text-white text-center z-30 shadow-lg"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">20</div>
                <div className="text-xs sm:text-sm md:text-base">Happy Clients</div>
              </motion.div>
            </motion.div>

            {/* Right Text */}
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
              }}
              className="text-base md:text-xl text-gray-700 leading-relaxed max-w-md mb-8 md:mb-0"
            >
              <br /><br />
              At Tresvance, our work speaks<br />
              through measurable impact.<br />
              Every project, client, and innovation<br />
              we deliver contributes to a story of<br />
              <span className="font-semibold">GROWTH, TRUST & EXCELLENCE.</span>
            </motion.p>
          </motion.div>
        </section>

        {/* ── PORTFOLIO SECTION ── */}
        <section className="py-32 bg-[#ffffff] flex flex-col items-center justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-12 text-center font-sans">
            OUR WORKS
          </h2>
          <div className="w-full flex justify-center items-center h-[500px] relative">
            <ThreeDImageRing images={images} rotation={rotation} />
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;