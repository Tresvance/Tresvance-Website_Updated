import React, { useEffect, useRef } from 'react';
import './Home.css';
import WhyChooseUs from "./whychooseus.jsx";
import { motion } from "framer-motion";

// Static data moved OUTSIDE the component to prevent lag from constant recreation
const images = [
  "/assets/web.png",
  "/assets/pic2.jpg",
  "/assets/iot.jpg",
  "/assets/cyber.jpg",
  "/assets/digital.jpg",
  "/assets/strategy.jpg"
];

const content = [
  { title: "Full-Stack Software Engineering", description: "Designing and building robust, scalable, tailor-made digital products—from intuitive web apps to complex enterprise systems—engineered to fit unique business workflows." },
  { title: "Next-Gen AI Development", description: "Accelerating business efficiency by building and integrating smart AI models, automating workflows, and leveraging machine learning to solve complex operational challenges." },
  { title: "IoT Device Implementation", description: "Transform your business with IoT integration, device management, and data-driven automation." },
  { title: "End-to-End Cybersecurity", description: "Protecting digital assets with comprehensive security services, including threat detection, risk assessments, and robust defense protocols to safeguard your business." },
  { title: "Results-Driven Digital Marketing", description: "Scaling online presence and accelerating brand growth through targeted marketing strategies, SEO, social media management, and data-backed campaigns." },
  { title: "IT, Managed Services & Digital Strategy", description: "Providing proactive IT management, cloud infrastructure support, and continuous network monitoring, alongside strategic digital transformation to modernize legacy systems and optimize operations." }
];

const worksCards = [
  { id: 1, title: "Employee Handbook", image: images[1] },
  { id: 2, title: "Project Reports", image: images[2] },
  { id: 3, title: "Hiring", image: images[3] },
  { id: 4, title: "Annual Report", image: images[4] },
  { id: 5, title: "New Products", image: images[5] },
  { id: 6, title: "Company Culture", image: images[1] }
];

const ribbonFaces = Array.from({ length: 16 });

// Hardware-accelerated animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

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

const Home = () => {
  const hoverSound = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    // Preload audio
    const audio = new Audio("/hover.mp3");
    audio.preload = "auto";
    audio.volume = 0.4;
    hoverSound.current = audio;

    const unlockAudio = () => {
      if (hoverSound.current) {
        hoverSound.current.play().then(() => {
          hoverSound.current.pause();
          hoverSound.current.currentTime = 0;
        }).catch(() => {});
      }
      window.removeEventListener("pointerdown", unlockAudio);
    };
    
    window.addEventListener("pointerdown", unlockAudio);
    return () => window.removeEventListener("pointerdown", unlockAudio);
  }, []);

  const playHoverSound = () => {
    if (hoverSound.current && !isPlayingRef.current) {
      isPlayingRef.current = true;
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch(() => {});
      // Debounce audio to prevent stutter if user scrubs mouse across cards
      setTimeout(() => {
        isPlayingRef.current = false;
      }, 150); 
    }
  };

  // Optimized viewport triggers
  const optimizedViewport = { once: true, margin: "0px 0px -100px 0px" };

  return (
    <div className="w-full bg-[#070707] text-white font-sans m-0 p-0 ">
      <main className="w-full pt-[80px] md:pt-[80px] bg-[#070707] m-0 p-0">
        
        <style dangerouslySetInnerHTML={{ __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          
          /* FIXED: Restored your original native CSS math and backface-visibility */
          .ribbon-scene {
            perspective: 1200px;
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
            mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
            will-change: transform;
          }
          .ribbon-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            animation: spin3D 12s linear infinite;
            will-change: transform;
          }
          @keyframes spin3D {
            from { transform: rotateY(-18deg) rotateZ(-8deg) rotateX(0deg); }
            to   { transform: rotateY(-18deg) rotateZ(-8deg) rotateX(-360deg); }
          }
          .ribbon-face {
            position: absolute;
            top: 50%;
            left: 50%;
            white-space: nowrap;
            transform: translate(-50%, -50%)
                       translateX(calc(sin(var(--index) * 22.5deg) * 60px))
                       rotateX(calc(var(--index) * 22.5deg))
                       translateZ(220px)
                       scaleY(1.3);
            backface-visibility: visible; 
            will-change: transform;
          }
          @media (max-width: 768px) {
            .ribbon-scene { transform: scale(0.65) translateZ(0); }
          }
        `}} />

        {/* ── HERO SECTION ── */}
        <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#070707] flex flex-col md:flex-row items-center px-6 md:px-20 py-12 md:py-0 overflow-hidden m-0">
          <div className="relative z-20 w-full md:w-[45%] flex flex-col items-start gap-4 md:gap-6 mt-12 md:mt-0">
            <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-machina font-normal leading-[1.1] md:leading-[1.05] tracking-tight" style={{ willChange: "transform, opacity" }}>
              Creative & <br /> Innovative <br /> Digital Solution!
            </h1>
            <p className="text-base md:text-[1.1rem] text-gray-300 font-light mt-2 leading-relaxed">
              Turning bold ideas into seamless digital experiences.<br/> Let’s build the future of your business together. <br className="hidden sm:block" />
            </p>
          </div>

          <div className="absolute right-0 md:right-[5%] top-[65%] md:top-1/2 -translate-y-1/2 w-full md:w-[50%] h-[60vh] md:h-screen pointer-events-none flex items-center justify-center opacity-30 md:opacity-100 z-10">
            <div className="ribbon-scene w-full h-full flex items-center justify-center">
              <div className="ribbon-wrapper">
                {ribbonFaces.map((_, i) => (
                  <div 
                    key={i} 
                    className={`ribbon-face font-machina font-black text-4xl md:text-7xl tracking-tighter ${
                      i % 2 === 0 ? 'text-white drop-shadow-2xl' : 'text-transparent'
                    }`}
                    style={{ 
                      '--index': i,
                      WebkitTextStroke: i % 2 !== 0 ? '1px rgba(255, 255, 255, 0.4)' : 'none'
                    }}
                  >
                    KEEP EXPLORING
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE + WHAT WE DO SECTION ── */}
        <section className="py-20 bg-[#070707] px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="overflow-hidden w-full mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-machina flex items-center justify-center relative select-none pointer-events-none" style={{ willChange: "transform" }}>
              <div className="marquee-wrapper w-full flex overflow-hidden whitespace-nowrap">
                
                {/* Single Track Layout with clean uniform element gaps */}
                <div className="marquee flex flex-row flex-nowrap whitespace-nowrap items-center gap-12 tracking-widest w-max flex-shrink-0">
                  <span>INNOVATE</span>
                  <span className="spinning-shape"></span>
                  <span>INTEGRATE</span>
                  <span className="spinning-shape"></span>
                  <span>ELEVATE</span>
                  <span className="spinning-shape"></span>
                </div>

              </div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-20 px-6 md:px-12">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={optimizedViewport}
              style={{ willChange: "transform, opacity" }}
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight font-machina">
                What We <br /> Do at <br /> Tresvance
              </h3>
              <p className="text-[20px] text-gray-300 leading-relaxed mt-8 mb-8">
                Tresvance leverages Artificial Intelligence <br className="hidden lg:block"/>
                to build smarter, faster, and more intuitive solutions. <br className="hidden lg:block"/>
                We combine intelligent automation, data-driven insights, <br className="hidden lg:block"/>
                and innovative design to help businesses stay ahead.
              </p>
              <a href="#" className="w-fit underline text-base font-normal hover:text-[#a14d2e] transition-colors duration-300">
                Learn more about us
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={optimizedViewport}
              style={{ willChange: "transform, opacity" }}
            >
              <img src="/assets/web.png" alt="AI product" loading="lazy" decoding="async" className="rounded-lg object-cover w-full h-40 md:h-48 shadow-lg hover:scale-105 transition-transform duration-500 will-change-transform" />
              <img src="/assets/img2.png" alt="Office" loading="lazy" decoding="async" className="rounded-lg object-cover w-full h-40 md:h-48 shadow-lg hover:scale-105 transition-transform duration-500 will-change-transform" />
              <img src="/assets/img3.png" alt="Branding" loading="lazy" decoding="async" className="rounded-lg object-cover w-full h-48 md:h-56 shadow-lg hover:scale-105 transition-transform duration-500 will-change-transform" />
            </motion.div>
          </div>
        </section>

        {/* ── OUR SERVICES ── */}
        <section className="py-20 bg-[#070707] pl-6 sm:pl-10 md:pl-16 lg:pl-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={optimizedViewport}
            style={{ willChange: "transform, opacity" }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight font-machina">
              Our Services
            </h2>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar pr-6 md:pr-20" style={{ transform: "translateZ(0)" }}>
            {content.map((service, index) => (
              <motion.div
                key={index}
                className="relative min-w-[300px] md:min-w-[360px] h-[480px] rounded-[2rem] overflow-hidden bg-[#111] border border-gray-800 snap-center group cursor-pointer"
                whileHover="hover"
                initial="initial"
                onMouseEnter={playHoverSound}
                style={{ willChange: "transform" }}
              >
                <motion.img
                  src={images[index]}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out opacity-60 group-hover:opacity-10 group-hover:scale-105 will-change-transform"
                />

                <div className="absolute top-8 left-8 text-3xl font-bold font-machina text-white/50 group-hover:text-white transition-colors duration-300 z-20">
                  0{index + 1}
                </div>

                <motion.div
                  className="absolute inset-0 p-8 flex flex-col justify-end z-10"
                  variants={{ initial: { opacity: 1, y: 0 }, hover: { opacity: 0, y: -20 } }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-normal leading-tight font-machina drop-shadow-md">
                    {service.title}
                  </h3>
                </motion.div>

                <motion.div
                  className="absolute inset-0 p-8 flex flex-col justify-center bg-black/60 z-10"
                  variants={{ initial: { opacity: 0, y: 20 }, hover: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-normal mb-4 font-machina text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        <WhyChooseUs />

        {/* ── STATS SECTION ── */}
        <section className="py-12 sm:py-16 bg-[#070707] px-4 flex items-center justify-center md:ml-[90px] sm:px-8 overflow-x-hidden">
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start justify-start md:space-x-12 mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <motion.h2
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
              initial={{ opacity: 0, x: -50 }}
              style={{ willChange: "transform, opacity" }}
              className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight font-machina"
            >
              <br /> Numbers That <br />Reflect<br /> Our Journey
            </motion.h2>

            <motion.div className="relative flex justify-center items-center w-[380px] md:w-[420px] h-[300px] md:h-[340px] ml-0 md:ml-8" variants={containerVariants}>
              <motion.div variants={circleVariants("left")} whileHover={{ scale: 1.05 }} className="absolute left-3 top-10 bg-lime-200 rounded-full w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 flex flex-col items-center justify-center text-center z-20 shadow-md text-black will-change-transform">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">25</div>
                <div className="text-xs sm:text-sm text-gray-700">Projects Done</div>
              </motion.div>

              <motion.div variants={circleVariants("right")} whileHover={{ scale: 1.05 }} className="absolute right-3 top-0 bg-purple-200 rounded-full w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 flex flex-col items-center justify-center text-center z-10 shadow-md text-black will-change-transform">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">5+</div>
                <div className="text-xs sm:text-sm text-gray-700">Years Of Experience</div>
              </motion.div>

              <motion.div variants={circleVariants("bottom")} whileHover={{ scale: 1.05 }} className="absolute bottom-[10px] left-1/3 bg-[#1a1a1a] border border-gray-700 rounded-full w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 flex flex-col items-center justify-center text-center z-30 shadow-lg will-change-transform">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">20</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">Happy Clients</div>
              </motion.div>
            </motion.div>

            <motion.p
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
              initial={{ opacity: 0, x: 50 }}
              style={{ willChange: "transform, opacity" }}
              className="text-base md:text-xl text-gray-300 leading-relaxed max-w-md mb-8 md:mb-0"
            >
              <br /><br />
              At Tresvance, our work speaks<br />
              through measurable impact.<br />
              Every project, client, and innovation<br />
              we deliver contributes to a story of<br />
              <span className="font-semibold text-white">GROWTH, TRUST & EXCELLENCE.</span>
            </motion.p>
          </motion.div>
        </section>

        {/* ── OUR WORKS SECTION ── */}
        <section className="py-24 bg-[#070707] flex justify-center px-6 md:px-16">
          <div className="w-full max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={optimizedViewport}
              style={{ willChange: "transform, opacity" }}
              className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight font-machina mb-12"
            >
              Our Works
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={optimizedViewport}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[180px] md:auto-rows-[220px]"
            >
              <motion.div 
                variants={cardVariants}
                style={{ willChange: "transform, opacity" }}
                className="col-span-2 md:col-span-1 row-span-2 rounded-[2rem] p-6 flex flex-col justify-between relative group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-[#111]"
              >
                <img src={images[0]} alt="Team Updates" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

                <div className="relative z-10 self-end w-8 h-8 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col justify-end h-full mt-10">
                  <h3 className="text-2xl font-normal leading-tight drop-shadow-md">Team<br/>Updates</h3>
                </div>
              </motion.div>

              {worksCards.map((card) => (
                <motion.div 
                  key={card.id}
                  variants={cardVariants}
                  style={{ willChange: "transform, opacity" }}
                  className="col-span-1 row-span-1 rounded-[2rem] p-5 flex flex-col justify-end relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden bg-[#111]"
                >
                  <img src={card.image} alt={card.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 z-10 w-7 h-7 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  
                  <h3 className="relative z-10 text-[1.1rem] font-normal leading-tight drop-shadow-md pr-4">
                    {card.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>{word}<br/></React.Fragment>
                    ))}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;