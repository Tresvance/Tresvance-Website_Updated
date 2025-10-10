import React from 'react';
import './Home.css';
import WhyChooseUs from "./whychooseus.jsx";


const Home = () => {
  const [current, setCurrent] = React.useState(0);

  const images = [
    "../src/assets/pic1.png",
    "../src/assets/pic2.jpg",
    "../src/assets/pic3.jpg",
    "../src/assets/pic4.jpg",
    "../src/assets/pic5.webp",
    "../src/assets/pic6.jpg"
  ];

  return (
    <div className="bg-[#f9f9f2] min-h-screen font-sans">
      <main className="pt-16 md:pt-20"> 
        <section className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f2] text-black px-6 sm:px-12 text-center relative">
          <div className="mainhead space-y-2 sm:space-y-3">
            <h1 className="text-6xl sm:text-6xl md:text-7xl font-light">
              Creative and Innovative
            </h1>
            <h1 className="text-6xl sm:text-6xl md:text-7xl font-light">
              Digital Solution
            </h1>
          </div>
          <p className="max-w-sm sm:max-w-md md:max-w-lg mt-6 mb-10 text-sm sm:text-base text-gray-600">
            We provide IT & Managed Services primarily to clients in the North America, Middle East and across the globe. 
            We maintain a far-reaching network by software developers who are highly experienced and proficient.
          </p>
          <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 text-sm sm:text-base hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105">
            <span>How do we Work</span>
            <span>▶</span>
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-20 flex flex-col items-center">
            <div className="text-blue-400 text-5xl animate-bounce">↓</div>
            <p className="text-gray-500 text-xs mt-2">(scroll)</p>
          </div>
        </section>
        <section className="py-20 bg-[#f9f9f2] text-[#111] px-6 sm:px-10 md:px-16 lg:px-24 animate-fade-in">
          <div className="overflow-hidden w-full mb-12">
            <h2 className="text-5xl md:text-6xl font-bold flex items-center justify-center relative">
              <div className="marquee-wrapper w-full">
                <div className="marquee flex space-x-8 text-black/10 font-extrabold tracking-widest">
                  METHOD
                  <span className="spinning-shape"></span>
                  METHOD
                  <span className="spinning-shape"></span>
                  METHOD
                  <span className="spinning-shape"></span>
                </div>
              </div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="flex flex-col justify-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <br></br><br></br><br></br>
                What We <br></br>Do at <br></br>Tresvance
              </h3>
              <p className="text-base md:text-2xl text-gray-700 leading-relaxed mb-8">
                <br></br> <br></br>
                Tresvance leverages Artificial Intelligence <br></br>to build smarter,<br></br> faster, and more intuitive
                solutions. <br></br>We combine intelligent automation, data-driven insights, <br></br>and innovative design
                to help businesses stay <br></br>ahead in the digital era.
              </p>
              <a
                href="#"
                className="underline text-lg font-medium hover:text-[#a14d2e] transition-colors duration-300"
              >
                Learn more about us
              </a>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <img
                src='../src/assets/img1.png'
                alt="AI product"
                className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-60"
              />
              <img
                src="../src/assets/img2.png"
                alt="Office"
                className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-60"
              />
              <img
                src="../src/assets/img3.png"
                alt="Branding"
                className="rounded-lg object-cover w-full h-60 sm:h-72 md:h-80"
              />
            </div>
          </div>
        </section>
        {/*IOT device blah */}
        <section className="py-20 bg-[#f9f9f2] text-[#111] flex flex-col items-center justify-center animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 sm:px-10 md:px-16 lg:px-24 text-center md:text-left">
            <div className="md:w-1/3">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <br /><br />IOT <br />Device<br />Implementation
              </h3>
            </div>
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg cursor-pointer transition-transform duration-700 hover:scale-105 group"
              onClick={() => setCurrent((current + 1) % images.length)}>
              <img
                key={current}
                src={images[current]}
                alt="IoT Device"
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] transition-all duration-700 ease-in-out transform animate-flyout"
              />
            </div>
            <div className="md:w-1/3">
              <p className="text-base md:text-2xl text-gray-700 leading-relaxed mb-8">
              <br /><br />We provide IoT integration solutions <br /> enabling smart automation, <br />real-time monitoring, and seamless connectivity between devices.
              </p>
            </div>
          </div>

          {/* Image counter below */}
          <div className="mt-8 text-gray-600 font-medium text-sm tracking-widest">
            {`0${current + 1}/06`}
          </div>
        </section>
        {/* Why Choose Us Section */}
        <WhyChooseUs />


        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-[#f9f9f2] text-primary px-4 items-center justify-center ml-[90px] sm:px-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-start md:space-x-12 mt-8">
            {/* Text Section (Left) */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <br />Numbers That <br/>Reflect<br /> Our Journey
            </h2>
            {/* Circles Section (Right, close to text) */}
            <div className="relative flex justify-center items-center w-[380px] md:w-[420px] h-[300px] md:h-[340px] ml-0 md:ml-8">
              {/* Green Circle */}
              <div className="absolute left-4 top-10 bg-lime-200 rounded-full 
                w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 
                flex flex-col items-center justify-center text-center 
                transform transition-transform duration-300 hover:scale-110 z-20">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">25</div>
                <div className="text-xs sm:text-sm text-gray-500">Projects Done</div>
              </div>

              {/* Purple Circle */}
              <div className="absolute right-6 top-0 bg-purple-200 rounded-full 
                w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 
                flex flex-col items-center justify-center text-center 
                transform transition-transform duration-300 hover:scale-110 z-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">5+</div>
                <div className="text-xs sm:text-sm text-gray-500">Years Of Experience</div>
              </div>

              {/* Black Circle */}
              <div className="absolute bottom-[-10px] left-1/3 bg-black rounded-full 
                w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 
                flex flex-col items-center justify-center text-white text-center 
                transform transition-transform duration-300 hover:scale-110 z-30">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">20</div>
                <div className="text-xs sm:text-sm">Happy Clients</div>
              </div>
            </div>
            <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-md mb-8 md:mb-0">
            <br /><br />At Tresvance, our work speaks<br />
              through measurable impact.<br />
              Every project, client, and innovation<br />
              we deliver contributes to a story of<br />
              <span className="font-semibold">GROWTH, TRUST & EXCELLENCE.</span>
            </p>
          </div>
      </section>
        {/* Portfolio Section */}
      <section className="py-12 sm:py-16 bg-[#f9f9f2] text-primary px-4 sm:px-8 text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Our Works</h2>

        {/* Carousel Container */}
        <div className="relative w-full flex justify-center items-center perspective-[1200px]">
          <div className="relative w-[900px] h-[300px] flex justify-center items-center [transform-style:preserve-3d] [animation:spin 20s linear infinite]">
            {/* Placeholder Images */}
            
            <div className="absolute w-56 h-72 bg-gray-200 shadow-xl rounded-lg overflow-hidden [transform:rotateY(0deg)_translateZ(400px)]"></div>
            <div className="absolute w-56 h-72 bg-gray-300 shadow-xl rounded-lg overflow-hidden [transform:rotateY(72deg)_translateZ(400px)]"></div>
            <div className="absolute w-56 h-72 bg-gray-400 shadow-xl rounded-lg overflow-hidden [transform:rotateY(144deg)_translateZ(400px)]"></div>
            <div className="absolute w-56 h-72 bg-gray-300 shadow-xl rounded-lg overflow-hidden [transform:rotateY(216deg)_translateZ(400px)]"></div>
            <div className="absolute w-56 h-72 bg-gray-200 shadow-xl rounded-lg overflow-hidden [transform:rotateY(288deg)_translateZ(400px)]"></div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-white border border-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
            ←
          </button>
          <button className="bg-white border border-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
            →
          </button>
        </div>
      </section>
      </main>
      {/* Footer can be added here */}
    </div>
  );
};

export default Home;
