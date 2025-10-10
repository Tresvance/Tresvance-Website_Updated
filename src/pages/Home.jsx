import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="bg-secondary min-h-screen font-sans">
          {/* Placeholder for Header - Add your separate header component here */}
          {/* Example: <Header /> */}
          
          <main className="pt-16 md:pt-20"> {/* Reduced padding for mobile */}
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-screen bg-secondary text-primary px-4 sm:px-8 text-center relative animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Creative and Innovative</h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Digital Solution</h1>
              <p className="max-w-sm sm:max-w-md md:max-w-lg mb-8 text-base sm:text-lg">
                We provide IT & Managed Services primarily to clients in North America, Middle East, and across the globe. Our network of highly experienced software developers ensures top-tier solutions.
              </p>
              <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center mb-8 hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105">
                How Do We Work <span className="ml-2">▶</span>
              </button>
              <div className="text-accent text-3xl sm:text-4xl mb-8">↓</div>
              <p className="text-xs sm:text-sm">(Scroll)</p>
              <img 
                src="/assets/hero-bg.jpg" // Export from Figma
                alt="Neon abstract"
                className="w-2/3 sm:w-1/2 md:w-1/3 mx-auto mt-8"
              />
              <div className="absolute bottom-6 sm:bottom-10 flex flex-col sm:flex-row justify-between w-full px-4 sm:px-8 text-base sm:text-xl">
                <span>Your Digital</span>
                <span>Transformation Partner</span>
              </div>
            </section>
    
            {/* Method Section */}
            <section className="py-12 sm:py-16 bg-secondary text-primary px-4 sm:px-8 animate-fade-in">
              <div className="overflow-hidden">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center justify-center mb-8 relative">
                  <span className="text-xl sm:text-2xl mx-1 marquee inline-block whitespace-nowrap">
                  METHOD ♦ ♦ ♦ METHOD
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What We Do at Tresvance</h3>
                  <p className="mb-4 text-sm sm:text-base">
                    Tresvance leverages Artificial Intelligence to build smarter, faster, and more intuitive solutions. We combine intelligent automation, data-driven insights, and innovative design to help businesses stay ahead in the digital era.
                  </p>
                  <a href="#" className="underline text-base sm:text-lg hover:text-accent transition-colors duration-300">Learn more about us</a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Placeholders for images; export from Figma */}
                  {/* <img src="/assets/method1.jpg" alt="Hand holding card" className="w-full h-auto" />
                  <img src="/assets/method2.jpg" alt="Office space" className="w-full h-auto" />
                  <img src="/assets/method3.jpg" alt="Orange envelope" className="w-full h-auto" />
                  <img src="/assets/method4.jpg" alt="Gray card" className="w-full h-auto" /> */}
                </div>
              </div>
            </section>
    
            {/* Why Choose Us Section */}
            <section className="py-12 sm:py-16 bg-secondary text-primary px-4 sm:px-8 text-left animate-fade-in">
              <h4 className="text-xs sm:text-sm uppercase mb-4">Why Choose Us</h4>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Committed to Delivering</h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Results and</h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Success</h2>
            </section>
    
            {/* Stats Section */}
            <section className="py-12 sm:py-16 bg-secondary text-primary px-4 sm:px-8 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Numbers That Reflect Our Journey</h2>
              <p className="text-gray-500 mb-8 max-w-sm sm:max-w-md text-sm sm:text-base">
                At Tresvance, our work speaks through measurable impact. Every project, client, and innovation we delivers contributes to a story of growth, trust, and excellence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-[-20px] md:space-x-[-30px]">
                <div className="bg-lime-200 rounded-full w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-110">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold">25</div>
                  <div className="text-xs sm:text-sm text-gray-500">Projects Done</div>
                </div>
                <div className="bg-purple-200 rounded-full w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-110">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold">5+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Years Of Experience</div>
                </div>
                <div className="bg-black rounded-full w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex flex-col items-center justify-center text-white text-center transform transition-transform duration-300 hover:scale-110">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold">20</div>
                  <div className="text-xs sm:text-sm">Happy Clients</div>
                </div>
              </div>
            </section>
    
            {/* Portfolio Section */}
            <section className="py-12 sm:py-16 bg-secondary text-primary px-4 sm:px-8 text-center animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Our Works</h2>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 transform perspective-1000">
                {/* Placeholders; use a carousel library like react-slick for real sliding */}
                {/* <img src="/assets/portfolio1.jpg" alt="Tablet mockup" className="w-40 sm:w-48 transform -rotate-12" />
                <img src="/assets/portfolio2.jpg" alt="Envelope" className="w-40 sm:w-48 transform -rotate-6" />
                <img src="/assets/portfolio3.jpg" alt="Notebook" className="w-40 sm:w-48" />
                <img src="/assets/portfolio4.jpg" alt="Showcase" className="w-40 sm:w-48 transform rotate-6" />
                <img src="/assets/portfolio5.jpg" alt="Phone mockup" className="w-40 sm:w-48 transform rotate-12" /> */}
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <button className="bg-white border border-black rounded-full w-8 h-8 hover:bg-gray-200 transition-colors duration-300">←</button>
                <button className="bg-white border border-black rounded-full w-8 h-8 hover:bg-gray-200 transition-colors duration-300">→</button>
              </div>
            </section>
          </main>
          {/* Add footer if in Figma */}
        </div>
      );
    };
    
export default Home;