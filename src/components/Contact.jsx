
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
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-yellow-900">
    {isSuccess ? (
      <div className="flex items-center justify-center h-full">
        <div className="text-4xl text-white bg-orange-500 px-6 py-4 rounded-md shadow-md">
          Message sent successfully!
        </div>
      </div>
    ) : (
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-12 flex flex-col items-center justify-center">
          <p className="text-4xl text-white font-bold inline border-b-4 border-gray-400">
            Contact
          </p>
          <p className="py-6 md:text-2xl text-white">
            Submit the form below or call to get in touch with us
          </p>
          <a href="tel:+19253348542" className="text-blue-400 text-3xl">
            Call Us: +1 (925) 334-8542
          </a>
        </div>
  
        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            action="https://getform.io/f/21074896-c782-46f5-ab47-b31c7ce08b6f"
            method="POST"
            className="flex flex-col w-full md:w-1/2 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="p-4 bg-gray-800 border-2 border-yellow-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-xl"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="p-4 my-4 bg-gray-800 border-2 border-yellow-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-xl"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="p-4 h-64 bg-gray-800 border-2 border-yellow-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-xl"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-500 hover:to-yellow-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )}
  </div>
  );  
}

export default Contact
