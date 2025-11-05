
import React from 'react';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';
import main from '../Assets/main.png';
import SocialLinks from './SocialLinks';
import Footer from './Footer';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden overflow-y-auto"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 py-12 text-white">
        {/* Text Content */}
        <div className="flex flex-col justify-center h-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            KBL Web Solutions
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-md mb-6">
            We build modern, responsive, and business-boosting websites.
            Whether you're a startup or an established brand, we'll help you make a powerful impression online.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="tel:+19253348542"
              className=" group text-white px-6 py-3 flex items-center bg-gradient-to-r from-yellow-400 rounded-md hover:scale-105 duration-300 shadow-lg">Let's Talk
              <MdKeyboardArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={main}
            alt="Main illustration"
            className="w-full max-w-md mx-auto drop-shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Other Sections */}
      <Portfolio />
      <Experience />
      <About />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Home;

