

import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'; 
import logo from '../Assets/logo.png';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleMenu = () => {
      setNav(!nav);
    };

    const closeMobileMenu = () => {
      setNav(false);
    };

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'portfolio' },
        { id: 4, link: 'experience' },
        { id: 5, link: 'contact' }
    ];

    return (
        <div className="fixed w-full h-20 flex justify-between items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 text-white z-50">
            {/* <h1 className="text-3xl font-bold">KBL Web Solutions</h1> */}
            <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg px-4 py-2 flex items-center justify-between">
  <div className="flex items-center">
    <img src={logo} alt="KBL Web Solutions Logo" className="h-10 w-auto mr-2" />
    <span className="text-white text-xl font-bold">KBL Web Solutions</span>
  </div>
  {/* Your existing nav links go here */}
</nav>


            {/* Desktop menu */}
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize text-xl hover:scale-105 duration-200">
                        <Link to={link} smooth={true} duration={500}
                        onClick={closeMobileMenu}                        >{link}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile menu icon */}
            <div onClick={toggleMenu} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile menu links */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            <Link onClick={closeMobileMenu} to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
