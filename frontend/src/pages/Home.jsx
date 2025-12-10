import React from 'react';
import './Home.css';
import WhyChooseUs from "./whychooseus.jsx";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ThreeDImageRing from './draggable-3d-image-ring.jsx';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ThinClose = ({ size, color, className, onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="0.25"
    viewBox="0 0 24 24"
    className={className}
    style={{ cursor: "pointer" }}
  >
    <line x1="4" y1="4" x2="20" y2="20" />
    <line x1="20" y1="4" x2="4" y2="20" />
  </svg>
);

const Home = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleMenuOpen = () => setIsMenuOpen(true);

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsMenuOpen(false);
    }, 500); 
  };

  const [angle, setAngle] = useState(0);
  const [rotation, setRotation] = useState(0);
  const totalItems = 6; // since we have 6 images
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
      title: "Smart Sensor Integration",
      description:
        "We design IoT systems that use smart sensors to collect, analyze, and act on data in real time, driving automation and efficiency.",
    },
    {
      title: "Industrial Automation",
      description:
        "Our IoT solutions enhance manufacturing and industrial systems, offering predictive maintenance and seamless machine-to-machine communication.",
    },
    {
      title: "Connected Healthcare",
      description:
        "Implementing IoT in healthcare to enable remote monitoring, smart diagnostics, and better patient outcomes.",
    },
    {
      title: "Smart Homes & Buildings",
      description:
        "We provide IoT-powered automation for homes and commercial spaces—controlling lighting, temperature, and security remotely.",
    },
    {
      title: "Environmental Monitoring",
      description:
        "IoT-based tracking systems monitor air, water, and soil conditions for sustainable environmental management.",
    },
    {
      title: "Fleet & Asset Tracking",
      description:
        "Our IoT-enabled logistics solutions provide real-time tracking, route optimization, and asset management.",
    },
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

  const videoSectionRef = useRef(null);
  const [videoScale, setVideoScale] = useState(1);
  const maxScale = 1.8; 

  useEffect(() => {
    const onScroll = () => {
      const el = videoSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const denominator = (vh + rect.height);
      let raw = (vh - rect.top) / denominator; 
      let progress = Math.max(0, Math.min(1, raw)); 
      const sinVal = Math.sin(progress * Math.PI);
      const scale = 1 + sinVal * (maxScale - 1);
      setVideoScale(scale);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial call
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#f9f9f2] min-h-screen font-sans">
      {/* Header with Logo and Menu */}
      <div className={`header-container ${isMenuOpen ? "header-open" : ""}`}>
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-menu">
          {isMenuOpen ? (
            <a href="#" className="menu-btn" onClick={handleMenuClose}>
              CLOSE
            </a>
          ) : (
            <a href="#" className="menu-btn" onClick={handleMenuOpen}>
              MENU
            </a>
          )}
        </div>
      </div>

      {/* Overlay Menu */}
      <div>
        <div
          className={`overlay 
            ${isMenuOpen ? "overlay-open" : ""} 
            ${isClosing ? "overlay-closing" : ""}
          `}
        >
          <ThinClose
            size={130}
            color="white"
            className="overlay-close"
            onClick={handleMenuClose}
          />

          <ul className="overlay-links">
            <li><Link to="/" onClick={handleMenuClose}><span>HOME</span></Link></li>
            <li><Link to="/about-us" onClick={handleMenuClose}><span>ABOUT</span></Link></li>
            <li><Link to="/our-works" onClick={handleMenuClose}><span>OUR WORKS</span></Link></li>
            <li><Link to="/choose-us" onClick={handleMenuClose}><span>WHY CHOOSE US</span></Link></li>
            <li><Link to="/join-us" onClick={handleMenuClose}><span>CAREERS</span></Link></li>
            <li><Link to="/contact" onClick={handleMenuClose}><span>CONTACT</span></Link></li>
          </ul>

          <div className="overlay-details">
            <p>TRESVANCE SOFTWARES</p>
            <p><FaEnvelope style={{ marginRight: "8px" }} /> contact@tresvance</p>
            <p><FaMapMarkerAlt style={{ marginRight: "8px" }} /> Cochin, India</p>
          </div>

          <p className="overlay-vedio">
            <span>INNOVATE</span><br />
            <span>INTEGRATE</span><br />
            <span>ELEVATE</span>
          </p>
        </div>
      </div>

      <main> 
        <section className="flex flex-col justify-center min-h-screen bg-[#f9f9f2] text-black px-6 sm:px-12 md:px-16 lg:px-24 pt-8 pb-12 relative">
          {/* Main content */}
          <div className="w-full">
          <div className="relative mb-24">
            
            <div className="absolute left-[120px] sm:left-[120px] md:left-[180px] lg:left-[70px] top-[80%] -translate-y-1/2 max-w-[400px] hidden lg:block z-20">
              <p className="text-s text-gray-600 leading-relaxed text-right">
                We provide IT & Managed Services primarily to clients in the North America, Middle East and across the globe. We maintain a far-reaching network by software developers who are highly experienced and proficient.
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[115px] xl:text-[130px] font-light leading-[0.95] tracking-tight text-right pr-12 lg:pr-20">
              Creative and Innovative
              <br />
              Digital Solution
            </h1>

          </div>


            {/* Button and scroll indicator at bottom */}
            <div className="flex justify-between items-center px-6 sm:px-12 md:px-16 lg:px-20 -mt-24">
              {/* Left side - Button and arrow */}
              <div className="flex items-center gap-8">
                {/* Blue arrow - curved down and left like in design */}
                <svg
                  className="w-32 h-40 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4 L12 16" /> 
                  <path d="M6 10 L12 16 L18 10" />
                </svg>
                
                <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 text-sm hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                  How do we Work
                </button>
              </div>

              {/* Right side - Scroll indicator */}
              <div className="flex flex-col items-center">
                <div className="text-gray-400 text-xl mb-1">↓</div>
                <p className="text-gray-400 text-xs tracking-wider">(Scroll)</p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={videoSectionRef}
          className="py-24 bg-[#f9f9f2] flex items-center justify-center"
        >
          <div className="w-full max-w-4xl px-6 sm:px-10">
            <div className="relative flex flex-col items-center">
              <motion.div
                className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black relative"
                style={{ originX: 0.5, originY: 0.5 }}
                animate={{ scale: videoScale }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <div className="w-full aspect-[16/9] bg-gray-900 flex items-center justify-center">
                  <img
                    src="../src/assets/video-placeholder.jpg"
                    alt="video placeholder"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="rounded-full bg-white/80 p-4 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#f9f9f2] text-[#111] px-6 sm:px-10 md:px-16 lg:px-24 animate-fade-in">
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
            {/* Left Section - Text */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <br />
                <br />
                <br />
                What We <br /> Do at <br /> Tresvance
              </h3>
              <p className="text-base md:text-2xl text-gray-700 leading-relaxed mb-8">
                <br /> <br />
                Tresvance leverages Artificial Intelligence <br />
                to build smarter, faster, and more intuitive solutions. <br />
                We combine intelligent automation, data-driven insights, <br />
                and innovative design to help businesses stay ahead in the
                digital era.
              </p>
              <a
                href="#"
                className="underline text-lg font-medium hover:text-[#a14d2e] transition-colors duration-300"
              >
                Learn more about us
              </a>
            </motion.div>

            {/* Right Section - Images */}
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
        {/*IOT device blah */}
        <section className="py-20 bg-[#f9f9f2] text-[#111] flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 sm:px-10 md:px-16 lg:px-24 text-center md:text-left">
        
        {/* LEFT SIDE — Title */}
        <div className="md:w-1/3">
          <AnimatePresence mode="wait">
            <motion.h3
              key={current}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              <br /><br />
              {content[current].title.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  <br />
                </span>
              ))}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* CENTER — Image Carousel */}
        <div
          className="relative w-[280px] sm:w-[340px] md:w-[380px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg cursor-pointer transition-transform duration-700 hover:scale-105 group"
          onClick={handleClick}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt="IoT Device"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
            />
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE — Description */}
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

      {/* Image Counter */}
      <div className="mt-8 text-gray-600 font-medium text-sm tracking-widest">
        {`0${current + 1}/0${images.length}`}
      </div>
    </section>
        {/* Why Choose Us Section */}
        <WhyChooseUs />


        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-[#f9f9f2] text-primary px-4 items-center justify-center ml-[90px] sm:px-8 overflow-x-hidden">
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start justify-start md:space-x-12 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT TEXT */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          <br />
          Numbers That <br />Reflect<br /> Our Journey
        </motion.h2>

        {/* CIRCLES SECTION */}
        <motion.div
          className="relative flex justify-center items-center w-[380px] md:w-[420px] h-[300px] md:h-[340px] ml-0 md:ml-8"
          variants={containerVariants}
        >
          {/* GREEN CIRCLE - from LEFT */}
          <motion.div
            variants={circleVariants("left")}
            whileHover={{ scale: 1.1 }}
            className="absolute left-3 top-10 bg-lime-200 rounded-full 
              w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 
              flex flex-col items-center justify-center text-center 
              transform transition-transform duration-300 hover:scale-110 z-20 shadow-md"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">25</div>
            <div className="text-xs sm:text-sm text-gray-500">Projects Done</div>
          </motion.div>

          {/* PURPLE CIRCLE - from RIGHT */}
          <motion.div
            variants={circleVariants("right")}
            whileHover={{ scale: 1.1 }}
            className="absolute right-3 top-0 bg-purple-200 rounded-full 
              w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 
              flex flex-col items-center justify-center text-center 
              transform transition-transform duration-300 hover:scale-110 z-10 shadow-md"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">5+</div>
            <div className="text-xs sm:text-sm text-gray-500">Years Of Experience</div>
          </motion.div>

          {/* BLACK CIRCLE - from BOTTOM */}
          <motion.div
            variants={circleVariants("bottom")}
            whileHover={{ scale: 1.1 }}
            className="absolute bottom-[10px] left-1/3 bg-black rounded-full 
              w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 
              flex flex-col items-center justify-center text-white text-center 
              transform transition-transform duration-300 hover:scale-110 z-30 shadow-lg"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">20</div>
            <div className="text-xs sm:text-sm md:text-base">Happy Clients</div>
          </motion.div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          className="text-base md:text-xl text-gray-700 leading-relaxed max-w-md mb-8 md:mb-0"
        >
          <br />
          <br />
          At Tresvance, our work speaks<br />
          through measurable impact.<br />
          Every project, client, and innovation<br />
          we deliver contributes to a story of<br />
          <span className="font-semibold">GROWTH, TRUST & EXCELLENCE.</span>
        </motion.p>
      </motion.div>
        </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-[#f9f9f2] flex flex-col items-center justify-center">
  <h2 className="text-4xl font-semibold sm:text-5xl md:text-6xl  mb-12 text-center">
    OUR WORKS
  </h2>
  <div className="w-full flex justify-center items-center h-[500px] relative">
    <ThreeDImageRing
      images={images}
    />
  </div>
</section>


      </main>
      {/* Footer can be added here */}
    </div>
  );
};

export default Home;
