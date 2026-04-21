import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../Assets/logo.png';

const links = [
  { id: 1, link: 'home',       label: 'Home'       },
  { id: 2, link: 'portfolio',  label: 'Portfolio'  },
  { id: 3, link: 'experience', label: 'Experience' },
  { id: 4, link: 'contact',    label: 'Contact'    },
  { id: 5, link: 'about',      label: 'About'      },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between text-white">

        {/* Logo */}
        <Link to="home" smooth duration={500} className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="KBL Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold tracking-tight">KBL <span className="text-yellow-400">Web</span> Solutions</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 capitalize cursor-pointer transition-all duration-200 text-sm font-medium"
                activeClass="text-yellow-400 bg-yellow-400/10"
                spy
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:+19253348542"
              className="ml-4 px-5 py-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold rounded-lg text-sm transition-all duration-200 hover:scale-105"
            >
              Call Us
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setNav(!nav)} className="md:hidden text-gray-300 hover:text-white transition-colors">
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {nav && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
          <ul className="flex flex-col px-6 py-6 gap-2">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 capitalize cursor-pointer transition-all duration-200 text-lg font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="tel:+19253348542"
                className="block text-center px-4 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-lg transition-all duration-200"
                onClick={() => setNav(false)}
              >
                Call Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
