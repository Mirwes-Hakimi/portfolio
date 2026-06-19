import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiZap, FiLayers, FiUsers } from 'react-icons/fi';

const stats = [
  { value: '3+', label: 'Years in Business' },
  { value: '5+', label: 'Live Client Sites' },
  { value: '3', label: 'Languages Supported' },
  { value: '24/7', label: 'AI Uptime' },
];

const differentiators = [
  {
    icon: FiZap,
    title: 'AI Built Into Everything',
    desc: 'We don\'t bolt AI on as a gimmick. Our AI voice agents and chatbots are production-ready, handling real calls and capturing real leads for real businesses.',
  },
  {
    icon: FiLayers,
    title: 'Modern Tech, Local Focus',
    desc: 'We use the same stack as top startups (Next.js, TypeScript, OpenAI), but apply it to local businesses who need results, not hype.',
  },
  {
    icon: FiUsers,
    title: 'Boutique & Accountable',
    desc: 'You work directly with us, not a sales team or offshore handoff. Quotes within 48 hours, transparent timelines, and support after launch.',
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
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>
              About KBL
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Built for local businesses.
              <br />
              <span className="text-zinc-500">Powered by modern AI.</span>
            </h2>

            <div className="flex items-center gap-2 text-zinc-600 text-sm mb-8">
              <FiMapPin size={13} style={{ color: '#60a5fa' }} />
              <span>Bay Area, California</span>
            </div>

            <div className="space-y-4 text-zinc-400 leading-relaxed text-[15px]">
              <p>
                KBL Web Solutions is a Bay Area AI and web agency helping local businesses
                compete with larger companies using the same technology that powers top startups.
                We design, build, and ship AI voice agents, chatbots, and modern websites that
                work while you sleep.
              </p>
              <p>
                We started by building websites for local businesses and saw the same problem
                everywhere: missed calls, slow follow-ups, and websites that looked dated. AI
                changed what was possible, and we went deep on it. Now every project we take on
                combines modern web development with AI that runs 24/7 on your behalf.
              </p>
              <p>
                We stay small on purpose. Every client gets direct access to the person building
                their product. No account managers, no outsourcing, no runaround. Just fast,
                focused work from a team that knows your business.
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
                  className="p-5 rounded-xl"
                  style={{ border: '1px solid rgba(30,41,59,0.8)', background: 'rgba(8,14,32,0.6)' }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      background: 'linear-gradient(90deg, #60a5fa, #818cf8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-sm text-zinc-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Differentiators */}
            <div className="space-y-3">
              {differentiators.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-4 rounded-xl transition-colors"
                  style={{ background: 'rgba(8,14,32,0.5)', border: '1px solid rgba(30,41,59,0.7)' }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(59,130,246,0.25)' }}
                  >
                    <Icon size={15} style={{ color: '#60a5fa' }} />
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
