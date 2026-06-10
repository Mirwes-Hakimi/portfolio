import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Mirwes-Hakimi', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mirwes-hakimi-065b651b7/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:mirwes210@gmail.com', label: 'Email' },
];

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[96px]" />
        <div className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[80px]" />
        {/* Top center glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-indigo-500/5 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={stagger.item}>
            <span className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              Available for new roles · Open to full-time &amp; contract
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={stagger.item}
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
          >
            <span className="text-white">Mirwes</span>
            <br />
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Hakimi
            </span>
          </motion.h1>

          {/* Role tags */}
          <motion.div
            variants={stagger.item}
            className="flex flex-wrap items-center gap-2 mb-7"
          >
            {[
              { label: 'Frontend Developer', highlight: true },
              { label: 'React' },
              { label: 'Next.js' },
              { label: 'AI Integration' },
            ].map(({ label, highlight }) => (
              <span
                key={label}
                className={`text-sm px-3 py-1 rounded-full border ${
                  highlight
                    ? 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400'
                }`}
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Value proposition */}
          <motion.p
            variants={stagger.item}
            className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl"
          >
            I build fast, accessible, production-ready web apps with React and Next.js.
            From pixel-perfect UIs to AI-powered features. I care about the experience
            and the code quality behind it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={stagger.item}
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <Link
              to="projects"
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-100 transition-all duration-200 group"
            >
              View My Work
              <FiArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-zinc-600 hover:text-white transition-all duration-200"
            >
              <FiDownload size={15} />
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={stagger.item}
            className="flex items-center gap-5"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-600 hover:text-zinc-200 transition-colors duration-200"
              >
                <Icon size={19} />
              </a>
            ))}
            <span className="w-px h-4 bg-zinc-800 mx-1" aria-hidden="true" />
            <span className="text-xs text-zinc-700 font-mono">mirwes210@gmail.com</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-zinc-700 text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
