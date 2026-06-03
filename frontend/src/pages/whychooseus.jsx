import { motion as Motion } from "framer-motion";
import { useState } from "react";

const whyChooseUsPoints = [
  {
    number: "01",
    title: "Intelligent AI Integration"
  },
  {
    number: "02",
    title: "Scalable IT Frameworks"
  },
  {
    number: "03",
    title: "End-to-End Product Innovation"
  },
  {
    number: "04",
    title: "Data-Driven Operational Efficiency"
  },
  {
    number: "05",
    title: "Enterprise-Grade Cyber Security"
  },
  {
    number: "06",
    title: "24/7 Global Managed Support"
  }
];

const WhyChooseUs = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  return (
    <section className="relative w-full bg-white text-slate-900 px-6 lg:px-20 py-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">
        
        {/* LEFT SIDE: Sticky Title Panel */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-36 self-start">
          <h4 className="text-sm uppercase font-bold tracking-wider mb-4 font-sans" style={{ color: '#06A3DA' }}>
            WHY CHOOSE US
          </h4>
          <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 font-sans">
            Committed to <br /> Delivering Results <br /> & Success
          </h2>
        </div>

        {/* RIGHT SIDE: Sans-Serif Big Titles Layout */}
        <div className="w-full lg:w-7/12 space-y-10 lg:py-4">
          {whyChooseUsPoints.map((point) => (
            <Motion.div
              key={point.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex items-center space-x-6 border-b border-gray-100 pb-6"
              onMouseEnter={() => setHoveredPoint(point.number)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <span className="text-4xl lg:text-5xl font-black select-none w-16 font-sans" style={{ color: '#B0D9E9' }}>
                {point.number}
              </span>
              <h3 
                className="text-2xl lg:text-4xl font-semibold tracking-tight text-slate-800 transition-colors duration-300 font-sans"
                style={{ color: hoveredPoint === point.number ? '#06A3DA' : '#1e293b' }}
              >
                {point.title}
              </h3>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;