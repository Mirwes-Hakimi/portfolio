// import React, { useState } from 'react'
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from  'react-scroll';





// const Navbar = () => {
//     const [nav, setNav] = useState(false); 
//     const [click, setClick] = useState(false);

//     const toggleMenu = () => {
//       setNav(!nav); /// toggles mobile menu
//       setClick(!click); /// close mobile menu
//     }

//     const closeMobileMenu = () => {
//       setNav(false); /// close mobile menu
//     };
//     const handleClick = () => setClick (false);
   

//     const links = [
//         {id: 1, link: 'Home', to : '/'},
//         {id: 3, link: 'Portfolio', to: '/portfolio'},
//         {id: 4, link: 'Experience', to: '/experience'},
//         {id: 2, link: 'About', to: '/about'},
//         {id: 5, link: 'Contact', to: '/contact'}
//       ]
//   return (
//     <div className='flex justify-between md:fixed items-center w-full h-20 px-5 text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50'>


//       <h1 className='md:text-5xl text-2xl font-signature ml-3'>KBL - Web Solutions</h1>
//          {/*Desktop menu  */}
//       <ul className='hidden md:flex' >
//       {links.map(({ id, link, to }) => (
//         <li 
//         key={id}
//         className='px-4 cursor-pointer md:text-2xl font-medium text-white-500 hover:scale-105 duration-200' >
       
//         <Link
//         to={to}
       
//         onClick={toggleMenu}
//       >
//         {link}
//       </Link>
       
       
//         </li>
//       ))}
      
//       </ul>

//       <div onClick={() => setNav(!nav)} className='cursor-pointer  pr-3 z-10 text-white md:hidden'>
//        { nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
//       </div>
//       {nav && (

//         <ul className='flex flex-col justify-start items-center my-9 absolute top-8 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-400 text-white'>
//       {links.map(({ id, link, to }) => (
//         <li key={id} className='px-2 cursor-pointer capitalize py-8 text-4xl '>
      
//         <Link
//         to={to}
       
//         onClick={closeMobileMenu}
//       >
//         {link}
//       </Link>
        
      
//         </li>
//       ))}
    
//       </ul>

//       )}
      
   
//     </div>
//   );
// };

// export default Navbar;

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
