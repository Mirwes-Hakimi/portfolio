import React from 'react';
import { Link } from 'react-scroll';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const footerLinks = [
  { label: 'Services', to: 'services' },
  { label: 'Work', to: 'projects' },
  { label: 'About', to: 'about' },
  { label: 'Contact', to: 'contact' },
];

const socialLinks = [
  { icon: FiPhone, href: 'tel:+19253348542', label: 'Phone' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mirwes-hakimi-065b651b7/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:mirwes210@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)' }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M5 3v10M5 8l6-5M5 8l6 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">
                KBL <span className="text-indigo-400">Web Solutions</span>
              </p>
              <p className="text-xs text-zinc-600 mt-0.5">AI Agents · Web Development · Bay Area</p>
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('tel') || href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} KBL Web Solutions. All rights reserved.
          </p>
          <p className="text-xs text-zinc-800">
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
