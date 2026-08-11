import React, { useEffect, useRef } from 'react';
import './Home.css';
import WhyChooseUs from "./whychooseus.jsx";
import CustomerReviews from "./CustomerReviews.jsx";
import { motion as Motion } from "framer-motion";

// Separate arrays for Services and Works to prevent sharing the same photos
const serviceImages = [
  "/assets/web.png", // 1. Full-Stack Software Engineering
  "/assets/ai.jpg",       // 2. Next-Gen AI Development
  "/assets/iot.jpg",   // 3. IoT Device Implementation
  "/assets/cyber.jpg",        // 4. End-to-End Cybersecurity
  "/assets/digital.jpg",    // 5. Results-Driven Digital Marketing
  "/assets/strategy.jpg"           // 6. IT, Managed Services & Digital Strategy
];

const workImages = [
  "/works_images/bmc.png",        // Used for the large main card (Optional if using our_products.png)
  "/works_images/qpet_2.png",     // Used for worksCards[0]
  "/works_images/ewt.png",  // Used for worksCards[1]
  "/works_images/sweetbloom2.png", // Used for worksCards[2]
  "/works_images/biohippo2.png",   // Used for worksCards[3]
  "/works_images/bmce.png",       // Used for worksCards[4]
  "/works_images/venad.png"        // Used for worksCards[5]
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
  { id: 1, title: "Pet Clinic", image: workImages[1] },
  { id: 2, title: "E-commerce Platform", image: workImages[2] },
  { id: 3, title: "E-commerce Platform", image: workImages[3] },
  { id: 4, title: "Website", image: workImages[4] },
  { id: 5, title: "Website", image: workImages[5] },
  { id: 6, title: "Website", image: workImages[6] } // Fixed: now points to workImages[6] instead of duplicating [1]
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
  const servicesRowRef = useRef(null);

  const scrollServices = (direction) => {
    if (!servicesRowRef.current) return;
    servicesRowRef.current.scrollBy({
      left: direction * 420,
      behavior: "smooth",
    });
  };

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
                    className={`ribbon-face font-machina font-black text-3xl md:text-6xl tracking-tighter ${
                      i % 2 === 0 ? 'text-white drop-shadow-2xl' : 'text-transparent'
                    }`}
                    style={{ 
                      '--index': i,
                      WebkitTextStroke: i % 2 !== 0 ? '1px rgba(255, 255, 255, 0.4)' : 'none'
                    }}
                  >
                    BUILD BEYEOND
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE + ABOUT US (STORY) SECTION ── */}
        <section className="py-20 bg-[#070707] px-6 sm:px-10 md:px-16 lg:px-20">
          
          <div className="overflow-hidden w-full mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-machina flex items-center justify-center relative select-none pointer-events-none" style={{ willChange: "transform" }}>
              <div className="marquee-wrapper w-full flex overflow-hidden whitespace-nowrap">
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

          {/* New Story-Driven About Us Section */}
          <div className="max-w-7xl mx-auto mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: The Story */}
              <Motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={optimizedViewport}
                className="lg:col-span-6 flex flex-col justify-center"
              >
                <h4 className="text-white font-medium tracking-widest text-sm uppercase mb-4">
                  Our Story
                </h4>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight font-machina text-white mb-8">
                  Beyond the <br /> Screen.
                </h2>
                
                <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                  <p>
                    Tresvance began with a simple realization: in a world obsessed with moving fast, the human element was being left behind. We saw flawless systems that felt cold, and beautiful designs that lacked strategic depth.
                  </p>
                  <p>
                    We wanted to build something different. We assembled a collective that thinks strategically—always anticipating the next move—but builds with the passion of artists. For us, every line of code, every pixel crafted, and every intelligent algorithm is a deliberate step toward a larger vision.
                  </p>
                  <p>
                    We aren't just an agency. We are relentless problem-solvers dedicated to bridging the gap between raw engineering and genuine human connection. We partner with dreamers to build digital experiences that inspire, empower, and endure.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-xl font-machina italic text-gray-400 border-l-2 border-[#0ba3f5] pl-6 py-2">
                    "Technology is just a tool. It's the people behind it that make it magic."
                  </p>
                </div>
              </Motion.div>

              {/* Right Column: Inspiring Visual */}
              <Motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={optimizedViewport}
                className="lg:col-span-6 relative h-[500px] md:h-[650px] w-full rounded-[2rem] overflow-hidden border border-gray-800 group"
              >
                <img 
                  src="/assets/our_story.jpg" 
                  alt="A visionary looking towards the future" 
                  loading="lazy" 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-90"></div>
                
                {/* Subtle glowing accent */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0c0c0c22] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              </Motion.div>

            </div>
          </div>
        </section>

        {/* ── OUR SERVICES ── */}
        <section className="py-20 bg-[#070707] pl-6 sm:pl-10 md:pl-16 lg:pl-20 overflow-hidden">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={optimizedViewport}
            style={{ willChange: "transform, opacity" }}
            className="mb-8 flex items-end justify-between gap-4 pr-6 md:pr-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight font-machina">
              Our Services
            </h2>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Scroll services left"
                onClick={() => scrollServices(-1)}
                className="flex h-10 w-10 items-center justify-center text-3xl font-black leading-none text-white transition-all duration-300 hover:-translate-x-0.5 hover:text-[#f5b276]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Scroll services right"
                onClick={() => scrollServices(1)}
                className="flex h-10 w-10 items-center justify-center text-3xl font-black leading-none text-white transition-all duration-300 hover:translate-x-0.5 hover:text-[#f5b276]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </Motion.div>

          <div ref={servicesRowRef} className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar pr-6 md:pr-20" style={{ transform: "translateZ(0)" }}>
            {content.map((service, index) => (
              <Motion.div
                key={index}
                className="relative min-w-[300px] md:min-w-[360px] h-[480px] rounded-[2rem] overflow-hidden bg-[#111] border border-gray-800 snap-center group cursor-pointer"
                whileHover="hover"
                initial="initial"
                onMouseEnter={playHoverSound}
                style={{ willChange: "transform" }}
              >
                <Motion.img
                  src={serviceImages[index]}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out opacity-60 group-hover:opacity-10 group-hover:scale-105 will-change-transform"
                />

                <div className="absolute top-8 left-8 text-3xl font-bold font-machina text-white/50 group-hover:text-white transition-colors duration-300 z-20">
                  0{index + 1}
                </div>

                <Motion.div
                  className="absolute inset-0 p-8 flex flex-col justify-end z-10"
                  variants={{ initial: { opacity: 1, y: 0 }, hover: { opacity: 0, y: -20 } }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-normal leading-tight font-machina drop-shadow-md">
                    {service.title}
                  </h3>
                </Motion.div>

                <Motion.div
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
                </Motion.div>
              </Motion.div>
            ))}
          </div>
        </section>

        <WhyChooseUs />

        {/* ── STATS SECTION ── */}
        <section className="py-12 sm:py-16 bg-[#070707] px-4 flex items-center justify-center md:ml-[90px] sm:px-8 overflow-x-hidden">
          <Motion.div
            className="flex flex-col md:flex-row items-center md:items-start justify-start md:space-x-12 mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <Motion.h2
              variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
              initial={{ opacity: 0, x: -50 }}
              style={{ willChange: "transform, opacity" }}
              className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight font-machina"
            >
              <br /> Numbers That <br />Reflect<br /> Our Journey
            </Motion.h2>

            <Motion.div className="relative flex justify-center items-center w-[380px] md:w-[420px] h-[300px] md:h-[340px] ml-0 md:ml-8" variants={containerVariants}>
              <Motion.div variants={circleVariants("left")} whileHover={{ scale: 1.05 }} className="absolute left-3 top-10 bg-lime-200 rounded-full w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 flex flex-col items-center justify-center text-center z-20 shadow-md text-black will-change-transform">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">25</div>
                <div className="text-xs sm:text-sm text-gray-700">Projects Done</div>
              </Motion.div>

              <Motion.div variants={circleVariants("right")} whileHover={{ scale: 1.05 }} className="absolute right-3 top-0 bg-purple-200 rounded-full w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 flex flex-col items-center justify-center text-center z-10 shadow-md text-black will-change-transform">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">5+</div>
                <div className="text-xs sm:text-sm text-gray-700">Years Of Experience</div>
              </Motion.div>

              <Motion.div variants={circleVariants("bottom")} whileHover={{ scale: 1.05 }} className="absolute bottom-[10px] left-1/3 bg-[#1a1a1a] border border-gray-700 rounded-full w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 flex flex-col items-center justify-center text-center z-30 shadow-lg will-change-transform">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">20</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">Happy Clients</div>
              </Motion.div>
            </Motion.div>

            <Motion.p
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
            </Motion.p>
          </Motion.div>
        </section>

        {/* ── OUR WORKS SECTION ── */}
        <section className="py-24 bg-[#070707] flex justify-center px-6 md:px-16">
          <div className="w-full max-w-7xl">
            {/* FIXED: Removed invalid font-family CSS from the className */}
            <Motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={optimizedViewport}
              style={{ willChange: "transform, opacity" }}
              className="text-4xl sm:text-5xl md:text-6xl font-machina font-normal tracking-tight leading-tight mb-12"
            >
              Our Works
            </Motion.h2>

            <Motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={optimizedViewport}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[180px] md:auto-rows-[220px]"
            >
              <Motion.div 
                variants={cardVariants}
                style={{ willChange: "transform, opacity" }}
                className="col-span-2 md:col-span-1 row-span-2 rounded-[2rem] p-6 flex flex-col justify-between relative group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-[#111]"
              >
                <img src="/assets/our_products.png" alt="Our Products" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

                <div className="relative z-10 self-end w-8 h-8 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col justify-end h-full mt-10">
                  {/* FIXED: Removed invalid font-family CSS from the className */}
                  <h3 className="text-2xl font-machina font-normal leading-tight drop-shadow-md">Our<br/>Products</h3>
                </div>
              </Motion.div>

              {worksCards.map((card) => (
                <Motion.div 
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
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </section>

        {/* ── CUSTOMER REVIEWS SECTION ── */}
        <CustomerReviews />

      </main>
    </div>
  );
};

export default Home;