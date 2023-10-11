import React from 'react';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';
import main from '../Assets/main.jpg';
import SocialLinks from './SocialLinks';
import Footer from './Footer';
// import { MdPlayArrow } from "react-icons/md";


const Home = () => {
  return (
    <div
    name="home" 
    className='h-screen w-full bg-black overflow-x-hidden overflow-y-auto'>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center  justify-center h-full px-4 md:flex-row text-white '>
      <div className='flex flex-col justify-center  h-full'>
        <h2 className='text-center font-signature text-4xl  sm:text-4xl p-2  '> KBL Web Solutions </h2>
        <p className='text-gray-300 text-2xl text-center py-4 max-w-md md:max-w-screen-lg '>We offer full-service website design. Our passion is designing and building beautiful websites and experience that will increase your business.</p>
        
      
      </div>
      <div>
      <img src={main} alt="Main"
      className=" md:min-w-screen  "/>
   
    </div>
     </div>
  
    <Portfolio />
    <Experience />
    <About />
    <Contact />
    <SocialLinks />
    <Footer />
    </div>
  )
}

export default Home


// <div>
//          <button className=' text-white w-fit px-9 py-5 mx-9 flex items-center  rounded-md
//           bg-gradient-to-r
//            from-green-500
//             to-blue-200
//              cursor-pointer
//              hover:bg-gradient-to-l duration-600 '>
//           Portfolio 
       
//          </button>
//          </div> 