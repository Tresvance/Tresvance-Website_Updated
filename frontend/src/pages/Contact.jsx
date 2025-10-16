import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    return (
        <main className="min-h-screen bg-[#f9f9f2]">
          {/* Header Section */}
        <section className="contact-hero relative flex items-center p-10 text-white">
            <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            <div className="relative z-10 p-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">CONTACT US</h1>
                <p className="mt-2 ">
                We'd love to hear from you. Whether you’re looking for IT solutions, AI-driven innovation, or managed services, our team is here to help.
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
                  <p>Logotrivandrum@gmail.com</p>
                  <p>Logokochi@gmail.com</p>
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
                  <p>Trivandrum: +91 98760975435</p>
                  <p>Kochi: +91 98760975435</p>
                </div>
              </div>
    
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-sky-500 text-white p-3 rounded-full text-2xl">
                  <MdLocationOn />
                </div>
                <div>
                  <h2 className="font-semibold text-sky-500 text-lg">Location</h2>
                  <p>
                    Trivandrum -{" "}
                    <a href="#" className="text-sky-500 hover:underline">
                      View On Maps
                    </a>
                  </p>
                  <p>
                    Kochi -{" "}
                    <a href="#" className="text-sky-500 hover:underline">
                      View On Maps
                    </a>
                  </p>
                </div>
              </div>
    
              {/* Social Media */}
              <div className="pt-4 border-t">
                <p className="text-gray-600 mb-2">Follow us :</p>
                <div className="flex gap-4 text-2xl text-sky-500">
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </div>
            </div>
    
            {/* Right side - Form */}
            <form className="space-y-4 border p-6 rounded-lg shadow">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border p-2 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border p-2 rounded w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border p-2 rounded w-full"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="border p-2 rounded w-full"
              ></textarea>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" /> You agree to our friendly privacy policy.
              </label>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Submit
              </button>
            </form>
          </section>
        </main>
      );
    };

export default Contact;