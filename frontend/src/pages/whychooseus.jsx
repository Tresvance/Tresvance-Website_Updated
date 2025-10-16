{/* Why Choose Us Section */}
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row items-start justify-between py-24 bg-[#f9f9f2] text-primary  ml-[90px] px-6 md:px-12 space-y-10 md:space-y-0 md:space-x-8 relative"
    >
      {/* Left Section */}
      <div className="md:w-1/2 sticky top-24 h-fit">
        <h4 className="text-3xl uppercase font-bold tracking-widest mb-6 text-gray-700">
          WHY CHOOSE US
        </h4>
        <motion.div
          style={{ opacity, scale }}
          className="space-y-3 transition-all duration-700 ease-out leading-tight"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Committed to <br />Delivering
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold">Results and</h2>
          <h2 className="text-5xl md:text-6xl font-bold">Success</h2>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-12 overflow-y-auto max-h-[85vh] pr-4 why-scroll-area">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex space-x-6">
            <span className="text-6xl font-bold">{i}</span>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                How We Drive Business Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Tresvance Softwares, we empower businesses with cutting-edge
                technology solutions that enhance efficiency and scalability.
                From automation to data-driven insights, we create customized
                software that accelerates growth and maximizes ROI.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
