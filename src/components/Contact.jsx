import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './ui/FadeIn';

const EMAILJS_SERVICE  = 'service_05tn09g';
const EMAILJS_TEMPLATE = 'template_k7nr79j';
const EMAILJS_KEY      = '6LKuop0YHiirMBE0J';

const inputClass =
  'w-full bg-white/4 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/30 focus:bg-white/6 transition-all duration-200';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    try {
      const emailjs = (await import('emailjs-com')).default;
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, form, EMAILJS_KEY);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-6 md:px-10 py-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left */}
        <FadeIn>
          <p className="text-xs text-white/25 uppercase tracking-widest mb-8">Contact</p>
          <h2
            className="font-kanit font-black text-white leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            Let's build
            <br />
            <span className="text-white/25">something.</span>
          </h2>
          <p className="text-white/40 text-base leading-relaxed max-w-sm">
            Tell us about your project. We'll get back to you within 24 hours with a free
            scope and estimate.
          </p>

          {/* Contact details */}
          <div className="mt-10 space-y-3 text-sm text-white/30">
            <div>
              <a href="tel:+19253348542" className="hover:text-white transition-colors">
                (925) 334-8542
              </a>
            </div>
            <div>
              <a href="mailto:mirwes210@gmail.com" className="hover:text-white transition-colors">
                mirwes210@gmail.com
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Right: form */}
        <FadeIn delay={0.15}>
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start gap-4 py-12"
            >
              <span className="text-4xl">✓</span>
              <p className="font-kanit font-black text-white text-2xl">Message sent.</p>
              <p className="text-white/40 text-sm">We'll be in touch within 24 hours.</p>
              <button
                onClick={() => { setForm({ name: '', email: '', message: '' }); setStatus('idle'); }}
                className="text-xs text-white/30 hover:text-white transition-colors mt-2 cursor-pointer"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs text-white/30 mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs text-white/30 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs text-white/30 mb-2 uppercase tracking-wider">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="What are you building? What problem are you solving?"
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                onClick={onSubmit}
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 w-full py-4 rounded-xl bg-white text-[#0c0c0c] font-kanit font-black text-sm tracking-wide cursor-pointer disabled:opacity-50 transition-opacity"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'error' && (
                <p className="text-xs text-red-400 text-center mt-1">
                  Something went wrong. Email us directly at mirwes210@gmail.com
                </p>
              )}
            </div>
          )}
        </FadeIn>

      </div>
    </section>
  );
};

export default Contact;
