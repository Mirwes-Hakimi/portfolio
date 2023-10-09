import React from 'react';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';
// import { MdPlayArrow } from "react-icons/md";


const Home = () => {
  return (
    <div
    name="home" 
    className='h-screen w-full bg-gradient-to-b from-gray-300 to-gray-700 overflow-x-hidden overflow-y-auto'>
     <div className='mx-w-screen-lg mx-auto flex flex-col items-center  justify-center h-full px-4 md:flex-row text-white '>
      <div>
        <h2 className='text-center font-light text-4xl py-2 px-2 sm:text-2xl '> KBL Web Solutions </h2>
        <p className='text-white text-center py-4 max-w-md'>lorem 
        As a Capital One customer, would you be interested in a Capital One credit card? Don’t forget that you can see if you’re pre-approved for one of our card offers before you apply. Pre-approval will help you understand if you’re likely to be approved for a card.
        
As a Capital One customer, would you be interested in a Capital One credit card? Don’t forget that you can see if you’re pre-approved for one of our card offers before you apply. Pre-approval will help you understand if you’re likely to be approved for a card.
sfksdkjfl;skjfsdklfjskl;fjsdlkfjskl;fjslk;fjsfjldsfjsdl;kfjjfslkfjs;dfsfljkfjk</p>
        <div>
         <button className=' text-white w-fit px-9 py-5 mx-9 flex items-center  rounded-md
          bg-gradient-to-r
           from-green-500
            to-blue-200
             cursor-pointer
             hover:bg-gradient-to-l duration-600 '>
          Portfolio 
       
         </button>
        </div>  
      </div>
     </div>
     
    <Portfolio />
    <Experience />
    <About />
    <Contact />
    </div>
  )
}

export default Home



