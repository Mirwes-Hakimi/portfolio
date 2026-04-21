import React from 'react';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';
import SocialLinks from './SocialLinks';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const fadeLeft = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay: 0.3 },
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden overflow-y-auto"
    >
      {/* Hero */}
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 py-24 text-white relative">

        {/* Background glow blobs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"
        />

        {/* Text */}
        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left z-10">

          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="flex justify-center md:justify-start mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-sm rounded-full">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            KBL <span className="text-yellow-400">Web</span> Solutions
          </motion.h1>

          {/* Description */}
          <motion.p {...fadeUp(0.35)} className="text-gray-300 text-lg sm:text-xl max-w-md mb-8 leading-relaxed">
            We build modern, responsive, and business-boosting websites.
            Whether you're a startup or an established brand, we'll help you
            make a powerful impression online.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="tel:+19253348542"
              className="group text-gray-900 font-semibold px-6 py-3 flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 rounded-lg hover:scale-105 duration-300 shadow-lg shadow-yellow-400/20"
            >
              Let's Talk
              <MdKeyboardArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
            </a>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="text-white font-semibold px-6 py-3 flex items-center justify-center border border-gray-600 hover:border-yellow-400/60 rounded-lg hover:scale-105 duration-300 cursor-pointer"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.65)} className="flex gap-8 mt-12 justify-center md:justify-start">
            <div>
              <p className="text-3xl font-bold text-yellow-400">50+</p>
              <p className="text-gray-400 text-sm mt-1">Projects Built</p>
            </div>
            <div className="border-l border-gray-700 pl-8">
              <p className="text-3xl font-bold text-yellow-400">100%</p>
              <p className="text-gray-400 text-sm mt-1">Client Focused</p>
            </div>
            <div className="border-l border-gray-700 pl-8">
              <p className="text-3xl font-bold text-yellow-400">Fast</p>
              <p className="text-gray-400 text-sm mt-1">Delivery</p>
            </div>
          </motion.div>
        </div>

        {/* Browser Mockup */}
        <motion.div {...fadeLeft} className="md:w-1/2 mb-12 md:mb-0 z-10 flex justify-center">
          <motion.div {...float} className="relative w-full max-w-md">

            {/* Glow behind */}
            <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full scale-75 pointer-events-none" />

            {/* Browser window */}
            <div className="relative bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">

              {/* Browser top bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-3 flex-1 bg-gray-700 rounded-full h-5 px-3 flex items-center">
                  <span className="text-gray-400 text-xs">kblwebsolutions.com</span>
                </div>
              </div>

              {/* Code lines */}
              <div className="p-6 font-mono text-sm leading-7 select-none">
                <p><span className="text-pink-400">const</span> <span className="text-blue-300">Website</span> <span className="text-white">= () =&gt; {'{'}</span></p>
                <p className="ml-4"><span className="text-pink-400">return</span> <span className="text-white">(</span></p>
                <p className="ml-8"><span className="text-yellow-300">&lt;div</span> <span className="text-green-300">className</span><span className="text-white">=</span><span className="text-orange-300">"modern"</span><span className="text-yellow-300">&gt;</span></p>
                <p className="ml-12"><span className="text-yellow-300">&lt;h1&gt;</span><span className="text-white">Your Business,</span><span className="text-yellow-300">&lt;/h1&gt;</span></p>
                <p className="ml-12"><span className="text-yellow-300">&lt;p&gt;</span><span className="text-gray-400">Online.</span><span className="text-yellow-300">&lt;/p&gt;</span></p>
                <p className="ml-8"><span className="text-yellow-300">&lt;/div&gt;</span></p>
                <p className="ml-4"><span className="text-white">)</span></p>
                <p><span className="text-white">{'}'}</span></p>
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            >
              React
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-gray-700 border border-gray-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            >
              Tailwind CSS
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              className="absolute top-1/2 -right-6 bg-gray-700 border border-gray-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            >
              JavaScript
            </motion.div>
          </motion.div>
        </motion.div>

      </div>

      <Portfolio />
      <Experience />
      <About />
      <Contact />
      <SocialLinks />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Home;
