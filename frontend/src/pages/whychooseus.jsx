import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Left text opacity (goes from faint to full)
  const leftOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  // Each right-side point reveals one after another
  const reveal1 = useTransform(scrollYProgress, [0.0, 0.25], [0, 1]);
  const reveal2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const reveal3 = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const reveal4 = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  const reveals = [reveal1, reveal2, reveal3, reveal4];

  return (
    <section ref={ref} className="relative h-[400vh] bg-[#f9f9f2] text-primary">
      <div className="sticky top-0 h-screen flex items-center justify-between px-12">
        {/* LEFT SIDE */}
        <motion.div style={{ opacity: leftOpacity }} className="w-1/2">
          <h4 className="text-3xl uppercase font-bold mb-6 text-gray-700">
            WHY CHOOSE US
          </h4>
          <h2 className="text-6xl font-bold leading-tight">
            Committed to <br /> Delivering Results and Success
          </h2>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 space-y-10">
          {[1, 2, 3, 4].map((i, index) => (
            <motion.div
              key={i}
              style={{ opacity: reveals[index], y: useTransform(reveals[index], [0, 1], [50, 0]) }}
              className="flex space-x-4"
            >
              <span className="text-6xl font-bold">{i}</span>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  How We Drive Business Growth
                </h3>
                <p className="text-gray-600">
                  At Tresvance Softwares, we empower businesses with
                  cutting-edge technology solutions that enhance efficiency and
                  scalability.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
