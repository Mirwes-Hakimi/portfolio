import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCode, FiLayers, FiUsers } from 'react-icons/fi';

const stats = [
  { value: '3+', label: 'Years Building' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '15+', label: 'Happy Clients' },
  { value: '3', label: 'AI Apps Built' },
];

const differentiators = [
  {
    icon: FiCode,
    title: 'AI-Native Mindset',
    desc: 'I integrate AI capabilities into web apps as a first-class feature, not an afterthought. From OpenAI to Claude.',
  },
  {
    icon: FiLayers,
    title: 'Full-Stack Perspective',
    desc: 'I understand how backends work, which makes me write better frontends: cleaner API contracts, smarter data flows.',
  },
  {
    icon: FiUsers,
    title: 'Real-World Delivery',
    desc: "I've shipped 15+ client projects under real deadlines. I know how to move fast without breaking things.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Building the web,
              <br />
              <span className="text-zinc-500">one component at a time.</span>
            </h2>

            <div className="flex items-center gap-2 text-zinc-600 text-sm mb-8">
              <FiMapPin size={13} className="text-indigo-400" />
              <span>Pleasant Hill, California</span>
            </div>

            <div className="space-y-4 text-zinc-400 leading-relaxed text-[15px]">
              <p>
                I'm a self-driven frontend developer with over three years of experience building
                production-ready web applications. My focus is React and Next.js. I love turning
                complex UI challenges into clean, accessible, and fast code that users actually enjoy.
              </p>
              <p>
                I built my foundation working with real clients through KBL Web Solutions, delivering
                websites that real people use every day. More recently I've been deep in AI-powered
                applications, building tools that use OpenAI and Claude APIs to create genuinely
                useful, multilingual experiences.
              </p>
              <p>
                In 2026, I'm looking to join an ambitious product team where I can grow into a senior
                frontend role, work on complex challenges at scale, and keep building at the
                intersection of great UX and cutting-edge technology.
              </p>
            </div>
          </motion.div>

          {/* Right: stats + differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40"
                >
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm text-zinc-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Differentiators */}
            <div className="space-y-3">
              {differentiators.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Icon size={15} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
