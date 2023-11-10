import React from 'react'
import Footer from './Footer'

const About = () => {

  
  return (
    <div name="about" 
         className='w-full h-screen bg-gradient-to-b from-gray-500 to-gray-700 text-white overflow-x-hidden overflow-y-auto'>
      <div className='max-w-screen-lg p-4  mx-auto flex  flex-col justify-center w-full h-full '>
       <div className='pb-8 '>
      <p className='text-4xl mt-10 font-bold inline  border-b-4 border-gray-300'>
      KBL-Web Solutions is based in Pleasant Hill California
      </p>
      </div>
       <p className='text-xl mt-5 text-3xl '> Working with clients large and small, local and across the country for the last three years. We build and design eye catching and responsive websites. Our designs are centered around the needs and goals of your business.  
                                     </p>

      <br />

  
      </div>
      
    </div>
  )
}

export default About
