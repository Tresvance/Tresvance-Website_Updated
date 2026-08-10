import React, { useRef } from "react";
import "./Contact.css"; 

const Contact = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans overflow-x-hidden flex flex-col relative pt-24 md:pt-28 pb-32">
      
      {/* Massive Hero Typography */}
      <div className="px-8 md:px-12 lg:px-20 mb-12 md:mb-16">
        <h1 className="text-[18vw] md:text-[12vw] font-bold text-black tracking-tighter leading-none m-0">
          get in touch.
        </h1>
      </div>

      {/* Main Grid */}
      <section className="grid lg:grid-cols-[1fr,2.5fr] gap-16 px-8 md:px-12 lg:px-20 relative z-10">
        
        {/* Left Column - Agency Info & Action Pills */}
        <aside className="space-y-16">
          
          <div className="flex flex-wrap gap-4 text-sm font-medium uppercase tracking-widest">
            <button onClick={scrollToForm} className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
              info@tresvance.com
            </button>
            <button onClick={scrollToForm} className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
              contact@tresvance.com
            </button>
            <a href="tel:+918921187643" className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
              +91 8921187643
            </a>
          </div>

          <div className="space-y-10">
            <div>
              {/* Changed text-gray-400 to text-black for better visibility */}
              <h2 className="text-xs font-bold text-black uppercase tracking-widest mb-3">Company</h2>
              <p className="text-xl font-medium leading-relaxed text-black">
                Tresvance <br />
                IT Solutions & Managed Services,<br />
                Kochi, Kerala
              </p>
            </div>
        </section>
          {/* Contact Details + Form */}
          <section className="grid md:grid-cols-2 gap-10 p-10">
            {/* Left side - Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-500 text-white p-3 rounded-full text-2xl">
                  <MdEmail />
                </div>
                <div>
                  <h2 className="font-semibold text-sky-500 text-lg">
                    Email Address
                  </h2>
                  <p>info@tresvance.com</p>
                  <p>contact@tresvance.com</p>
                </div>
              </div>
    
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-500 text-white p-3 rounded-full text-2xl">
                  <MdPhone />
                </div>
                <div>
                  <h2 className="font-semibold text-sky-500 text-lg">
                    Call Us on
                  </h2>
                  <p>Kochi: +91 9778057201</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-black">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full bg-transparent border border-gray-300 rounded-2xl px-6 py-4 text-lg text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-black">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-transparent border border-gray-300 rounded-2xl px-6 py-4 text-lg text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-black">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full bg-transparent border border-gray-300 rounded-2xl px-6 py-4 text-lg text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder-gray-400"
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-widest text-black">Project Details</label>
              <textarea 
                placeholder="Tell us about your requirements, timeline, and goals..." 
                rows="5"
                className="w-full bg-transparent border border-gray-300 rounded-2xl px-6 py-4 text-lg text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Privacy Checkbox */}
            <label className="flex items-center gap-4 text-black cursor-pointer group pt-2 w-max">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-md checked:bg-black checked:border-black cursor-pointer transition-colors"
                />
                <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">
                I agree to the privacy policy.
              </span>
            </label>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit" 
                className="border-2 border-black rounded-full px-10 py-4 text-lg uppercase tracking-widest font-bold text-black hover:bg-black hover:text-white transition-colors"
              >
                Send
              </button>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;