import React from "react";
import "./OurWorks.css";
import img from "../assets/tre-collage.jpg";
import { useNavigate } from "react-router-dom";


const slidesData = [
  {
    title: "BMCE College Website",
    description:
      "A comprehensive web application designed for BMCE College to streamline academic operations and enhance digital accessibility. . Built with a focus on performance, scalability, and user-friendly navigation to support a modern educational experience.",
    imgUrl: img,
    link: "https://www.bmce.ac.in/",
  },
  {
    title: "BioHippo ",
    description:
      "An innovative web platform crafted for scientists and researchers to source, compare, and purchase laboratory materials efficiently. BioHippo bridges the gap between suppliers and research institutions by offering a centralized digital marketplace for biological reagents, chemicals, and laboratory consumables.",
    imgUrl: img,
    link: "https://theresahebiohippocom.wpcomstaging.com/",
  },
  {
    title: "SweetBloom ",
    description:
      "An elegant and feature-rich e-commerce platform built for SweetBloom, a luxury chocolate and flower boutique based in Qatar. The website provides a beautiful product showcase, real-time inventory updates, secure order management, and a smooth checkout experience.",
    imgUrl: img,
    link: "/projects/sweetbloom",
  },
  {
    title: "Final Showcase",
    description:
      "A curated collection of our most impactful digital projects — spanning AI-driven systems, e-commerce solutions, and research platforms. Each project demonstrates our dedication to innovation, performance, and human-centered design. This showcase reflects the evolution of our creative and technical journey toward redefining digital experiences through technology.",
    imgUrl: img,
    link: "/projects/showcase",
  },
];

const OurWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="works-container">
     
      <div className="works-marquee">
        <div className="works-marquee-content">
          ✦ OUR WORKS ✦ OUR WORKS ✦ OUR WORKS ✦ OUR WORKS ✦ OUR WORKS
        </div>
      </div>

     
      <div className="works-top">
        <p>
          Delivering intelligent, future-proof digital solutions with AI,
          <br /> automation and full-spectrum tech expertise.
        </p>
        <div className="relative">
          <button className="works-top-btn">All Projects</button>
        </div>
        <hr className="works-top-line" />
      </div>

      <div className="relative h-screen overflow-y-scroll scrollbar-hide">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen flex items-center justify-center"
            style={{ backgroundColor: "rgba(246, 247, 249, 0.979)" }}
          >
            <div
              className="w-[70%] h-[70%] max-w-5xl  shadow-2xl flex items-center justify-between"
              style={{
                background: "linear-gradient(to bottom, #343535, #2a2d2d)",
                color: "white",
              }}
            >
       
              <div className="w-1/2  h-full  ">
                <img
                  src={slide.imgUrl}
                  alt={slide.title}
                  className=" object-cover h-full w-full"
                />
              </div>

              
              <div className="w-1/2 flex flex-col justify-between h-72 p-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-base">{slide.description}</p>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition"
                   onClick={() => {
                    if (slide.link.startsWith("http")) {
                      window.open(slide.link, "_blank"); // open external link in new tab
                    } else {
                      navigate(slide.link); // internal route
                    }
                  }}>
                    Visit Site 
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
