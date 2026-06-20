import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactButton from './ui/ContactButton';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'Contact', id: 'contact' },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/* ── Logo mark: gradient square + circuit-K SVG ── */
const LogoMark = () => (
  <div className="flex items-center gap-2.5 flex-shrink-0">
    {/* Icon */}
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)' }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        {/* Vertical bar of K */}
        <line x1="5" y1="2" x2="5" y2="16" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
        {/* Upper arm */}
        <line x1="5" y1="9" x2="14" y2="2" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
        {/* Lower arm */}
        <line x1="5" y1="9" x2="14" y2="16" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
        {/* Circuit node at junction */}
        <circle cx="5" cy="9" r="2.2" fill="white" />
      </svg>
    </div>
    {/* Wordmark */}
    <div className="leading-none">
      <span className="font-kanit font-black text-base text-white tracking-wide">KBL</span>
      <span className="hidden sm:inline font-kanit font-black text-base text-white/30 tracking-wide ml-1">Web Solutions</span>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0c0c0c]/88 backdrop-blur-md border-b border-white/5' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer"
            aria-label="Back to top"
          >
            <LogoMark />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <ContactButton label="Get in touch" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-white"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0c0c0c]/96 backdrop-blur-xl border-b border-white/8 md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => { scrollTo(id); setOpen(false); }}
                  className="text-2xl font-kanit font-black text-left text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}
              <div className="pt-4">
                <ContactButton label="Get in touch" onClick={() => setOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
