import React from 'react';
import { motion as Motion } from 'framer-motion';

// Static data outside the component to prevent re-renders
const reviewsData = [
  {
    id: 1,
    text: "I asked and Nik delivered honestly. I didn't want a generic website, i wanted something i could build as a hobby and actoually be proud of. He got that instantly and gave me what I needed. I [...]",
    name: "Giovanni",
    role: "Website Design",
    date: "March 2026",
    stars: 5
  },
  {
    id: 2,
    text: "Nikola Radeski is very talented doing vibe coding + designing. I have an AI startup and I needed help with vibe code and design directions (for my team) so Nikola did exactly that as he's cl [...]",
    name: "Oliver S.",
    role: "Design & Vibe Coding",
    date: "February 2026",
    stars: 5
  },
  {
    id: 3,
    text: "I have been working with Nik for a month now and he is working on my company as a Team Leader and Designer and im very impressed so much of things have changed on the team for a good way and [...]",
    name: "Rilind",
    role: "Design / Creative Lead",
    date: "September 2025",
    stars: 5
  },
  {
    id: 4,
    text: "Fast, reliable, and talented, he turned a vague idea into a polished product. Just like he mentions, his design sense is really phenomenal and pushes the boundaries of standard web apps.",
    name: "Sarah T.",
    role: "Product Manager",
    date: "August 2025",
    stars: 5
  },
  {
    id: 5,
    text: "I worked with Nikola on a Webflow project and was impressed right away. He got things moving quickly, kept everything clear, and delivered a site that exceeded our expectations.",
    name: "Marcus J.",
    role: "Startup Founder",
    date: "July 2025",
    stars: 5
  },
  {
    id: 6,
    text: "I asked for minimal but strong, and that's exactly what I got. The design feels timeless. The execution was flawless and communication was top tier throughout the entire process.",
    name: "Elena V.",
    role: "Creative Director",
    date: "June 2025",
    stars: 5
  }
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const StarIcon = () => (
  <svg className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CustomerReviews = () => {
  const optimizedViewport = { once: true, margin: "0px 0px -100px 0px" };
  const reviewsRowRef = React.useRef(null);

  const scrollReviews = (direction) => {
    if (!reviewsRowRef.current) return;
    reviewsRowRef.current.scrollBy({
      left: direction * 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-[#070707] pl-6 sm:pl-10 md:pl-16 lg:pl-20 overflow-hidden">
      
      {/* Header Section */}
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={optimizedViewport}
        style={{ willChange: "transform, opacity" }}
        className="mb-8 flex items-end justify-between gap-4 pr-6 md:pr-16"
      >
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight font-machina text-white">
            What <span className="text-[#F59E0B]">people</span> say
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-4 font-light max-w-2xl">
            A few thoughts from people who have experienced the value of working together.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Scroll reviews left"
            onClick={() => scrollReviews(-1)}
            className="flex h-10 w-10 items-center justify-center text-3xl font-black leading-none text-white transition-all duration-300 hover:-translate-x-0.5 hover:text-[#f5b276]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Scroll reviews right"
            onClick={() => scrollReviews(1)}
            className="flex h-10 w-10 items-center justify-center text-3xl font-black leading-none text-white transition-all duration-300 hover:translate-x-0.5 hover:text-[#f5b276]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </Motion.div>

      {/* Scrollable Slider */}
      <Motion.div 
        ref={reviewsRowRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={optimizedViewport}
        className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar pr-6 md:pr-20"
        style={{ transform: "translateZ(0)" }}
      >
        {reviewsData.map((review) => (
          <Motion.div
            key={review.id}
            variants={cardVariants}
            style={{ willChange: "transform, opacity" }}
            className="relative min-w-[300px] md:min-w-[360px] lg:min-w-[400px] bg-transparent border border-gray-800 rounded-[2rem] p-8 flex flex-col justify-between hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 snap-center cursor-pointer"
          >
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mb-8">
                {review.text}
              </p>
            </div>

            {/* Footer / Author Info */}
            <div className="mt-auto">
              <hr className="border-gray-800 mb-4" />
              <h4 className="text-white font-bold text-lg">{review.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{review.role}</p>
              <p className="text-gray-500 text-sm mt-0.5">{review.date}</p>
            </div>
          </Motion.div>
        ))}
      </Motion.div>

    </section>
  );
};

export default CustomerReviews;