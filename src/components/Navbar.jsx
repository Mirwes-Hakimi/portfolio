import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from  'react-router-dom';

// import { Link } from 'react-scroll';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick (false);
   

    const links = [
        {
            id: 1,
            link: 'Home',
            to : '/'
        },
      
        {
            id: 3,
            link: 'Portfolio',
            to: '/portfolio'
        },
        {
            id: 4,
            link: 'Experience',
            to: '/experience'
        },
        {
            id: 2,
            link: 'About',
            to: '/about'
        },
        {
            id: 5,
            link: 'Contact',
            to: '/contact'
        }

    ]
  return (
    <div className='flex justify-between md:fixed  items-center w-full h-20 px-5 text-white bg-yellow-900 overflow-x-hidden overflow-y-auto'>
      <h1 className='md:text-5xl text-2xl font-signature ml-3'>KBL - Web Solutions</h1>

      <ul className='hidden md:flex' >
      {links.map(({ id, link, to }) => (
        <li 
        key={id}
        className='px-4 cursor-pointer md:text-2xl font-medium text-white-500 hover:scale-105 duration-200' >
       
        <Link
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        onClick={handleClick}
      >
        {link}
      </Link>
       
       
        </li>
      ))}
      
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer  pr-3 z-10 text-white md:hidden'>
       { nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
      </div>
      {nav && (

        <ul className='flex flex-col justify-start items-center my-9 absolute top-8 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-400 text-white'>
      {links.map(({ id, link, to }) => (
        <li key={id} className='px-2 cursor-pointer capitalize py-8 text-4xl '>
      
        <Link
        to={to}
        offset={50}
        spy={true}
        smooth={true}
        duration={500}
        onClick={handleClick}
      >
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



