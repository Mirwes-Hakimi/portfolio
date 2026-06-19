import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiPhone } from 'react-icons/fi';

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  },
};

const stats = [
  { num: '24/7', label: 'AI Availability' },
  { num: '3', label: 'Languages' },
  { num: '5+', label: 'Live Client Sites' },
  { num: 'Free', label: 'Initial Quote' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#020817' }}
    >
      {/* ── Animated gradient mesh background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Blue blob — main glow, top-left */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute rounded-full"
          style={{
            top: '15%', left: '5%',
            width: '700px', height: '700px',
            background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(59,130,246,0.1) 45%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Violet blob — bottom-right */}
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute rounded-full"
          style={{
            bottom: '10%', right: '5%',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Cyan accent — center-right */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute rounded-full"
          style={{
            top: '50%', right: '25%',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Top edge glow line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(6,182,212,0.3), transparent)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={stagger.item}>
            <span className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(59,130,246,0.3)',
                color: '#93c5fd',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
              Bay Area AI &amp; Web Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="font-bold tracking-tight leading-[0.93] mb-7"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
          >
            {/* Gradient "AI" line */}
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #60a5fa, #22d3ee, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI Receptionists
            </span>
            <span className="block text-white">&amp; Websites That</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #ffffff, #cbd5e1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Grow Your Business.
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={stagger.item}
            className="text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: '#94a3b8' }}
          >
            KBL builds AI voice agents that answer every call and book appointments
            24/7, plus modern websites that turn visitors into paying customers.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="flex flex-col sm:flex-row gap-3 mb-14">

            {/* Primary — glowing blue phone button */}
            <div className="relative group">
              {/* Glow layer behind the button */}
              <div
                className="absolute -inset-0.5 rounded-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', filter: 'blur(8px)' }}
              />
              <a
                href="tel:+19253348542"
                className="relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #2563eb, #0ea5e9)' }}
              >
                <FiPhone size={15} />
                Call Our AI Demo · (925) 334-8542
              </a>
            </div>

            {/* Secondary */}
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 group"
              style={{ border: '1px solid rgba(63,63,70,0.8)', color: '#cbd5e1' }}
            >
              Get a Free Consultation
              <FiArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={stagger.item}
            className="flex flex-wrap gap-x-10 gap-y-4"
          >
            {stats.map(({ num, label }, i) => (
              <div key={label} className="flex flex-col">
                <span
                  className="text-2xl font-bold"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(90deg, #60a5fa, #22d3ee)'
                      : 'white',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {num}
                </span>
                <span className="text-xs mt-0.5" style={{ color: '#64748b' }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#374151' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #4b5563, transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
