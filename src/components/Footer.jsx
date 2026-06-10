import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const footerLinks = ['projects', 'skills', 'about', 'timeline', 'contact'];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Mirwes-Hakimi', label: 'GitHub' },
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
          <div>
            <p className="text-sm font-semibold text-white">
              Mirwes<span className="text-indigo-400">.</span>
            </p>
            <p className="text-xs text-zinc-600 mt-0.5">
              Frontend Developer · React · Next.js · AI
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerLinks.map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth
                  duration={600}
                  offset={-80}
                  className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer capitalize"
                >
                  {section}
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
                target={href.startsWith('mailto') ? undefined : '_blank'}
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
            © {new Date().getFullYear()} Mirwes Hakimi. All rights reserved.
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
