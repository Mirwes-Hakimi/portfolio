import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Services', to: 'services' },
  { label: 'Work', to: 'projects' },
  { label: 'About', to: 'about' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    // passive: true tells the browser this handler never calls preventDefault(),
    // so it can run scroll rendering in parallel without waiting for JS to finish
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    // rootMargin shrinks the detection zone to a narrow horizontal band in the
    // middle of the viewport (ignores top 40% and bottom 55%), so only the section
    // the user is actually reading triggers the active nav link highlight
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="cursor-pointer flex items-center gap-2.5 flex-shrink-0"
          aria-label="Back to top"
        >
          {/* Logo mark — gradient square with K letterform */}
          <div
            className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5 3v10M5 8l6-5M5 8l6 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide text-white">
            KBL <span className="text-indigo-400">Web Solutions</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={600}
              offset={-80}
              className={`relative text-sm cursor-pointer transition-colors duration-200 group ${
                active === to ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-indigo-400 transition-all duration-300 ${
                  active === to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+19253348542"
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white transition-all duration-200"
          >
            Call AI Demo
          </a>
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="cursor-pointer text-sm px-4 py-2 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
        >
          {/* Top and bottom lines move toward center (y: ±7px) then rotate to form an X */}
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-px bg-white block"
          />
          {/* Middle line fades out so only the X shape remains */}
          <motion.span
            animate={mobileOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-px bg-white block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-px bg-white block"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={closeMobile}
                  className="text-zinc-300 hover:text-white py-3 cursor-pointer text-base border-b border-zinc-900 last:border-0 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <div className="flex gap-3 pt-5">
                <a
                  href="tel:+19253348542"
                  className="flex-1 text-center py-3 rounded-xl border border-zinc-800 text-zinc-400 text-sm hover:border-zinc-600 transition-colors"
                >
                  Call AI Demo
                </a>
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={closeMobile}
                  className="flex-1 text-center py-3 rounded-xl bg-white text-zinc-900 text-sm font-semibold cursor-pointer hover:bg-zinc-100 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
