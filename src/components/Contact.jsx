import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FiLinkedin, FiMail, FiPhone, FiSend, FiCheck } from 'react-icons/fi';

const EMAILJS_SERVICE  = 'service_05tn09g';
const EMAILJS_TEMPLATE = 'template_k7nr79j';
const EMAILJS_KEY      = '6LKuop0YHiirMBE0J';

const contactItems = [
  {
    icon: FiPhone,
    label: 'Call or Text',
    value: '(925) 334-8542',
    href: 'tel:+19253348542',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'mirwes210@gmail.com',
    href: 'mailto:mirwes210@gmail.com',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'KBL Web Solutions',
    href: 'https://www.linkedin.com/in/mirwes-hakimi-065b651b7/',
  },
];

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY)
      .then(() => {
        setStatus('sent');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="py-32 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Let's grow your
              <br />
              <span className="text-zinc-500">business.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10 text-[15px]">
              Whether you need a new website, an AI receptionist, or both, we'll scope
              your project and give you a free quote within 48 hours. No pressure, no
              obligations.
            </p>

            <div className="space-y-3 mb-10">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 flex items-center justify-center transition-all flex-shrink-0">
                    <Icon size={15} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-600 block">{label}</span>
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                      {value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Taking on new clients · Free quotes within 48 hours
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
            >
              <div>
                <label htmlFor="user_name" className="block text-xs font-medium text-zinc-500 mb-2">
                  Name
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-zinc-900/80 transition-all"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-xs font-medium text-zinc-500 mb-2">
                  Email
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-zinc-900/80 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-zinc-500 mb-2">
                  Tell us about your business
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What kind of business do you run? What problem are you trying to solve?"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-zinc-900/80 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-100 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sent' ? (
                  <>
                    <FiCheck size={15} />
                    Message Sent!
                  </>
                ) : status === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-400 text-center pt-1">
                  Something went wrong. Email us directly at mirwes210@gmail.com.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
