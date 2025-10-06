import React, { useState, useRef, useEffect } from "react";
import "./OurWorks.css";

export default function OurWorks() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects (25)");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const projects = [
    {
      title: "Website Project A",
      desc: "A modern responsive website with great UI/UX.",
      img: "/image/Digital Agency Landing Page Design For Better….jpeg",
      category: "Website",
    },
    {
      title: "ERP System Project B",
      desc: "ERP solution that manages inventory and orders.",
      img: "/image/Digital Agency Landing Page Design For Better….jpeg",
      category: "ERP System",
    },
    {
      title: "Website Project C",
      desc: "Marketing website with CMS integration.",
      img: "/image/Digital Agency Landing Page Design For Better….jpeg",
      category: "Website",
    },
    {
      title: "ERP System Project D",
      desc: "ERP for retail with POS integration.",
      img: "/image/Digital Agency Landing Page Design For Better….jpeg",
      category: "ERP System",
    },
  ];

  const categories = ["All Projects (25)", "Website", "ERP System"];

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);

  const filteredProjects =
    selectedCategory === "All Projects (25)"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  function handleOptionKeyDown(e, cat) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedCategory(cat);
      setOpen(false);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <section className="our-works">
      {/* Sticky Marquee */}
      <div className="ourworks-marquee">
        <div className="marquee-inner">
          <span>OUR WORKS ✦ OUR WORKS ✦ OUR WORKS ✦ OUR WORKS ✦</span>
          <span>OUR WORKS ✦ OUR WORKS ✦ OUR WORKS ✦ OUR WORKS ✦</span>
        </div>
      </div>

      {/* Description + Dropdown aligned left */}
      <div className="works-header">
        <p className="our-works-desc">
          Delivering intelligent, future-proof digital solutions with AI,
          automation, and full-spectrum tech expertise.
        </p>

        <div className="dropdown-container" ref={containerRef}>
          <button
            className="our-works-btn"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            {selectedCategory} <span className="chev">▾</span>
          </button>

          {open && (
            <ul className="dropdown-menu" role="listbox" aria-label="Project categories">
              {categories.map((cat) => (
                <li
                  key={cat}
                  role="option"
                  aria-selected={selectedCategory === cat}
                  tabIndex={0}
                  className={selectedCategory === cat ? "selected" : ""}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpen(false);
                  }}
                  onKeyDown={(e) => handleOptionKeyDown(e, cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="works-grid">
        {filteredProjects.map((proj, i) => (
          <div className="work-card" key={i}>
            <img src={proj.img} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
