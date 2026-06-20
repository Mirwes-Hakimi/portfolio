import { motion } from 'framer-motion';

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const links = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'Contact', id: 'contact' },
];

const Footer = () => (
  <footer className="border-t border-white/5 px-6 md:px-10 py-12 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

      {/* Brand */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="cursor-pointer flex items-center gap-2.5"
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)' }}
        >
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <line x1="5" y1="2" x2="5" y2="16" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="5" y1="9" x2="14" y2="2" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="5" y1="9" x2="14" y2="16" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="5" cy="9" r="2.2" fill="white" />
          </svg>
        </div>
        <div className="text-left leading-none">
          <span className="font-kanit font-black text-sm text-white tracking-wide">KBL</span>
          <span className="font-kanit font-black text-sm text-white/30 tracking-wide ml-1">Web Solutions</span>
          <p className="text-[10px] text-white/20 mt-0.5">Web & AI Agent Studio · Bay Area, CA</p>
        </div>
      </button>

      {/* Links */}
      <nav className="flex flex-wrap gap-x-8 gap-y-2">
        {links.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-xs text-white/30 hover:text-white transition-colors cursor-pointer"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Copyright */}
      <p className="text-xs text-white/15">
        © {new Date().getFullYear()} KBL Web Solutions
      </p>
    </div>
  </footer>
);

export default Footer;
