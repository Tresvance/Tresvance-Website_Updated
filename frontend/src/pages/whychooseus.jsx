import React, { useEffect } from "react";
import { motion } from "framer-motion";

const points = [
  {
    num: "01",
    title: "Cutting-Edge Expertise",
    description: "We don't just follow tech trends; we build them. From advanced machine learning models to enterprise full-stack ecosystems, our engineering team brings deep, specialized technical mastery to every single line of code."
  },
  {
    num: "02",
    title: "Precision Security Frameworks",
    description: "Every digital product we deploy is hardened against vulnerabilities from day one. With zero-trust architecture blueprints and absolute adherence to global security protocols, your asset scales safely."
  },
  {
    num: "03",
    title: "Client-Centric Product Architecture",
    description: "We don't do vendor lock-ins or black-box solutions. You get full code ownership, transparent documentation, agile delivery pipelines, and regular iterative showcases that adapt cleanly to market demands."
  },
  {
    num: "04",
    title: "Scalable Data & Automation Engines",
    description: "We architect data pipelines and IoT bridges built for massive operational volumes. Your workflows automate smoothly, turning real-time streaming data into immediate, tactical business logic."
  }
];

const optimizedViewport = { once: true, margin: "0px 0px -100px 0px" };

const WhyChooseUs = () => {
  // ── THE BRUTE FORCE FIX ──
  // This forcefully overrides any lingering global overflow-hidden properties
  // that are breaking the scroll context on page load.
  useEffect(() => {
    const root = document.getElementById("root");
    const top = document.getElementById("top");
    
    if (root) root.style.overflow = "visible";
    if (top) top.style.overflow = "visible";
    document.body.style.overflowX = "visible";
    document.documentElement.style.overflowX = "visible";

    return () => {
      // Cleanup on unmount
      if (root) root.style.overflow = "";
      if (top) top.style.overflow = "";
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
    };
  }, []);

  return (
    <section 
      className="w-full bg-[#070707] px-6 sm:px-10 md:px-16 lg:px-20 py-24 relative" 
      style={{ overflow: "visible" }}
    >
      <div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative" 
        style={{ overflow: "visible", alignItems: "flex-start" }}
      >
        
        {/* ── LEFT SIDE SECTION (STICKY) ── */}
        {/* Using pure inline styles guarantees the browser respects the sticky positioning */}
        <div 
          className="w-full md:w-[40%] z-20"
          style={{ 
            position: "sticky", 
            top: "120px", 
            alignSelf: "flex-start" 
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={optimizedViewport}
            className="flex flex-col gap-6"
          >
            <span className="text-lime-200 uppercase font-mono tracking-widest text-sm">
              // Core Advantages
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight font-machina text-white">
              Why Forward-Thinking <br /> Businesses Choose <br /> Tresvance.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mt-4 max-w-md">
              We engineer mission-critical systems and elegant user interfaces that transform raw digital potential into unfair competitive advantages.
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT SIDE SECTION (SCROLLABLE) ── */}
        <div className="w-full md:w-[60%] flex flex-col gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
              viewport={optimizedViewport}
              className="w-full p-8 md:p-12 bg-[#111111] border border-gray-900 rounded-[2rem] flex flex-col gap-6 group hover:border-gray-800 transition-colors duration-300"
            >
              <div className="flex justify-between items-center">
                <span className="text-3xl font-machina font-bold text-gray-600 group-hover:text-lime-200 transition-colors duration-300">
                  {point.num}
                </span>
                <div className="w-2 h-2 rounded-full bg-gray-800 group-hover:bg-lime-200 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-machina text-white font-normal tracking-tight">
                {point.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-base md:text-md">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;