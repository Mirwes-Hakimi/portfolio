
import React, { useState, useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
 
  const form = useRef();

  const [ isSuccess, setIsSuccess ] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

     emailjs
     .sendForm (
      "service_05tn09g",
      "template_k7nr79j",
      form.current,
      "6LKuop0YHiirMBE0J"
     )

     .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        setIsSuccess(true);

         /// Reset the form and clear success message after 2 seconds
         setTimeout(() => {
          setIsSuccess(false);
         }, 2000);
         form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
     );
  };

  return (
    <div name="contact"
    className='w-full h-screen
    bg-gradient-to-b from-gray-900 to-gray-700'>

    {isSuccess ? (<div className='text-4xl text-white bg-orange-600'>Message sent successfully!</div>) : (


      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
         <div className='pb-8 mt-12 flex flex-col items-center justify-center'>
           <p className='text-4xl text-white font-bold inline border-b-4 border-gray-400 '>Contact</p>
           <p className='py-6 md:text-2xl text-white'>Submit the form below or call to get in touch with us</p>
            <a href='tel:+19253348542:' className='text-blue-600 text-3xl'>Call Us: +1 (925) 334-8542</a>
           </div>

         <div className='flex justify-center items-center'>
           <form ref={form} onSubmit={sendEmail} action='https://getform.io/f/21074896-c782-46f5-ab47-b31c7ce08b6f' method='POST' className='flex flex-col w-full md:w-1/2 '>
           <input 
          
          
           type='text'
           name='user_name'
           placeholder='Enter your name'
           className='p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none text-2xl'/>
            <input 
         
            type='text'
            name='user_email'
            placeholder='Enter your email'
            className='p-2 my-4 bg-transparent border-2 rounded-md
             text-white focus:outline-none text-2xl'/>
             
           <textarea
             
             name='message'
             placeholder='Enter your message' className='p-2 h-72 bg-transparent border-2 rounded-md text-white text-2xl focus:outline-none'>
          
             </textarea>

             <button 
             type='submit'
             value="Send"
             className='text-white
              bg-gradient-to-r
               from-yellow-500
                to-blue-200
                px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
           </form>
         </div>
       </div>

      
    )}
       
    </div>
  )
}

export default Contact
