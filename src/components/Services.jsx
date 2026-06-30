import { motion } from 'framer-motion';
import { Bot, Mic2, Globe, Cpu, Lightbulb } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const services = [
  {
    num: '01',
    Icon: Bot,
    title: 'AI Agents',
    desc: 'Custom autonomous agents that handle bookings, inquiries, and workflows. Built with function calling, tool use, and real business logic.',
  },
  {
    num: '02',
    Icon: Mic2,
    title: 'Voice Assistants',
    desc: 'AI phone agents that answer calls, book appointments, and qualify leads 24/7. Role-playing as a receptionist across any vertical.',
  },
  {
    num: '03',
    Icon: Globe,
    title: 'Web Development',
    desc: 'Modern, fast web apps built with React, Next.js, and TypeScript. From landing pages to full multilingual platforms.',
  },
  {
    num: '04',
    Icon: Cpu,
    title: 'AI Integration',
    desc: 'Bringing LLMs into your existing product. Chat, automation, and intelligent features wired into real workflows.',
  },
  {
    num: '05',
    Icon: Lightbulb,
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="group grid grid-cols-[52px_1fr] md:grid-cols-[64px_1fr_auto] items-center gap-x-6 md:gap-x-10 py-6 md:py-7 border-b border-white/8 cursor-default"
        >
          {/* Icon block */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-350"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <s.Icon
                size={18}
                className="text-white/22 transition-colors duration-350 group-hover:text-violet-400"
              />
            </div>
            <span className="text-[10px] text-white/15 font-kanit tabular-nums">{s.num}</span>
          </div>

          {/* Title + arrow */}
          <div className="flex items-center gap-4">
            <h3
              className="font-kanit font-black text-white group-hover:text-white/55 transition-colors duration-300 leading-none tracking-tight"
              style={{ fontSize: 'clamp(1.85rem, 4.2vw, 3.8rem)' }}
            >
              {s.title}
            </h3>
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              className="hidden md:block font-kanit font-black text-violet-400/0 group-hover:text-violet-400 transition-all duration-300 group-hover:opacity-100 text-4xl leading-none translate-y-px"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.6rem)' }}
            >
              →
            </motion.span>
          </div>

          {/* Description */}
          <p className="col-start-2 md:col-start-3 text-white/32 text-sm leading-relaxed md:max-w-[268px] md:text-right mt-2 md:mt-0">
            {s.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
