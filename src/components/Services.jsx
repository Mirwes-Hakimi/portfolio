import { motion } from 'framer-motion';
import FadeIn from './ui/FadeIn';

const services = [
  {
    num: '01',
    title: 'AI Agents',
    desc: 'Custom autonomous agents that handle bookings, inquiries, and workflows. Built with function calling, tool use, and real business logic.',
  },
  {
    num: '02',
    title: 'Voice Assistants',
    desc: 'AI phone agents that answer calls, book appointments, and qualify leads 24/7. Role-playing as a receptionist across any vertical.',
  },
  {
    num: '03',
    title: 'Web Development',
    desc: 'Modern, fast web apps built with React, Next.js, and TypeScript. From landing pages to full multilingual platforms.',
  },
  {
    num: '04',
    title: 'AI Integration',
    desc: 'Bringing LLMs into your existing product. Chat, automation, and intelligent features wired into real workflows.',
  },
  {
    num: '05',
    title: 'Consulting',
    desc: 'Helping you scope what is possible with AI and ship it, from first prototype to production.',
  },
];

const Services = () => (
  <section id="services" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
    <FadeIn>
      <p className="text-xs text-white/25 uppercase tracking-widest mb-14">Services</p>
    </FadeIn>

    <div className="border-t border-white/8">
      {services.map((s, i) => (
        <motion.div
          key={s.num}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="group grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr_auto] items-start gap-x-6 md:gap-x-10 py-7 border-b border-white/8 cursor-default"
        >
          {/* Number */}
          <span className="text-xs text-white/20 font-kanit pt-2 md:pt-3 tabular-nums">
            {s.num}
          </span>

          {/* Title */}
          <h3
            className="font-kanit font-black text-white group-hover:text-white/60 transition-colors duration-300 leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
          >
            {s.title}
          </h3>

          {/* Description — stacks below title on mobile, aligns right on desktop */}
          <p className="col-start-2 md:col-start-3 text-white/35 text-sm leading-relaxed md:max-w-[280px] md:text-right mt-2 md:mt-3 md:pt-1">
            {s.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
