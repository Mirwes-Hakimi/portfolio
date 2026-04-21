import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineDevices, MdOutlineSpeed, MdOutlineSupportAgent } from 'react-icons/md';

const highlights = [
  { icon: <MdOutlineDevices size={28} />, title: 'Responsive Design', desc: 'Every site we build looks great on any screen — phone, tablet, or desktop.' },
  { icon: <MdOutlineSpeed size={28} />, title: 'Fast & Optimized', desc: 'We build lean, fast-loading sites that keep visitors engaged and convert.' },
  { icon: <MdOutlineSupportAgent size={28} />, title: 'Client First', desc: 'Your goals drive every decision. We work closely with you from concept to launch.' },
];

const About = () => {
  return (
    <div name="about" className="w-full bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white py-24">
      <div className="max-w-screen-lg mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400">About Us</p>
          <div className="flex items-center gap-2 mt-5 text-gray-400 text-sm">
            <HiOutlineLocationMarker className="text-yellow-400" size={18} />
            <span>Pleasant Hill, California</span>
          </div>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
            KBL Web Solutions has been working with clients large and small — local and across the country — for over three years.
            We build and design eye-catching, responsive websites centered around the needs and goals of your business.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-700 hover:border-yellow-400/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
            >
              <div className="text-yellow-400 mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
