import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 text-white py-12">
      <div className="max-w-screen-lg mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-2">KBL <span className="text-yellow-400">Web</span> Solutions</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modern, responsive websites built to grow your business — from Pleasant Hill, CA.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {['home', 'about', 'portfolio', 'experience', 'contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="text-gray-400 hover:text-yellow-400 capitalize text-sm cursor-pointer transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">1978 Contra Costa Blvd, Pleasant Hill, CA 94523</p>
            <a href="tel:+19253348542" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">
              (925) 334-8542
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} KBL Web Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61552247004294"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mirwes-hakimi-065b651b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
