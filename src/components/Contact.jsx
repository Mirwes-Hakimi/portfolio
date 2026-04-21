import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_05tn09g',
        'template_k7nr79j',
        form.current,
        '6LKuop0YHiirMBE0J'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsSending(false);
          setTimeout(() => setIsSuccess(false), 3000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div name="contact" className="w-full bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 text-white py-24">
      <div className="max-w-screen-lg mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400">Contact</p>
          <p className="mt-5 text-gray-400 text-lg">Ready to start your project? Let's talk.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white">Get in touch</h3>
            <p className="text-gray-400 leading-relaxed">
              Fill out the form and we'll get back to you as soon as possible, or call us directly.
            </p>

            <div className="flex items-center gap-4 bg-gray-800 border border-gray-700 rounded-xl p-5">
              <div className="text-yellow-400"><MdOutlinePhone size={28} /></div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+19253348542" className="text-white font-semibold hover:text-yellow-400 transition-colors">
                  +1 (925) 334-8542
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 border border-gray-700 rounded-xl p-5">
              <div className="text-yellow-400"><MdOutlineEmail size={28} /></div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <span className="text-white font-semibold">kblwebsolutions@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {isSuccess ? (
              <div className="flex items-center justify-center h-full min-h-64">
                <div className="text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-2xl font-bold text-white">Message Sent!</p>
                  <p className="text-gray-400 mt-2">We'll be in touch soon.</p>
                </div>
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 bg-gray-800 border border-gray-700 rounded-2xl p-8"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="p-4 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  required
                  className="p-4 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={6}
                  required
                  className="p-4 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={isSending}
                  className="mt-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
