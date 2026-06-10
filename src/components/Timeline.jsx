import React from 'react';
import { motion } from 'framer-motion';

const workEvents = [
  {
    title: 'Freelance Frontend Developer',
    org: 'Self-Employed',
    period: '2021 / Present',
    location: 'Bay Area, CA',
    bullets: [
      'Built and deployed 5+ React applications for Bay Area clients',
      'Delivered responsive, mobile-first UIs with reusable component libraries',
      'Built a driving school booking platform covering 12 Bay Area cities',
      'Integrated Stripe payments and JWT authentication',
    ],
    type: 'work',
  },
  {
    title: 'Driving Instructor',
    org: 'Bay Pass Driving School',
    period: '2024 / Present',
    location: 'Bay Area, CA',
    bullets: [
      'Train teenagers and international students for the California DMV driving test',
      'Serve communities across the Bay Area',
    ],
    type: 'work',
  },
  {
    title: 'U.S. Army Interpreter',
    org: 'Joint Mission Essential Training Solutions',
    period: '2009 / 2014',
    location: '',
    bullets: [
      'Provided Farsi and Pashto interpretation for military training operations',
    ],
    type: 'special',
  },
];

const eduEvents = [
  {
    title: 'Full Stack Web Development',
    org: 'Bloom Institute of Technology',
    period: '2021 / 2023',
    type: 'education',
  },
  {
    title: 'Associate Degree in Computer Science',
    org: 'Ghalib University',
    period: '2012 / 2014',
    type: 'education',
  },
];

const additionalItems = [
  'Trilingual: English, Farsi, Pashto',
  'California Licensed Driving Instructor',
  'Former U.S. Army Interpreter',
];

const typeAccent = {
  work: 'bg-blue-400',
  special: 'bg-violet-400',
  education: 'bg-amber-400',
};

const typeBorder = {
  work: 'border-l-blue-500/40',
  special: 'border-l-violet-500/40',
  education: 'border-l-amber-500/40',
};

const WorkCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className={`relative pl-5 border-l-2 ${typeBorder[item.type]} pb-8 last:pb-0`}
  >
    {/* Dot */}
    <span
      className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${typeAccent[item.type]}`}
      aria-hidden="true"
    />

    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
      <span className="text-xs text-zinc-600">{item.period}</span>
    </div>

    <p className="text-xs font-medium text-indigo-400 mb-3">
      {item.org}
      {item.location ? ` · ${item.location}` : ''}
    </p>

    {item.bullets && item.bullets.length > 0 && (
      <ul className="space-y-1.5">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
            <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const EduCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className={`relative pl-5 border-l-2 ${typeBorder[item.type]} pb-8 last:pb-0`}
  >
    <span
      className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${typeAccent[item.type]}`}
      aria-hidden="true"
    />
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
      <span className="text-xs text-zinc-600">{item.period}</span>
    </div>
    <p className="text-xs font-medium text-indigo-400">{item.org}</p>
  </motion.div>
);

const Timeline = () => {
  return (
    <section id="timeline" className="py-32 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-lg">
            The work, the study, and the unique background that makes me a different kind of developer.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Work */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-8"
            >
              Work
            </motion.p>
            {workEvents.map((item, i) => (
              <WorkCard key={item.title} item={item} index={i} />
            ))}
          </div>

          {/* Right: Education + Additional */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-8"
            >
              Education
            </motion.p>
            {eduEvents.map((item, i) => (
              <EduCard key={item.title} item={item} index={i} />
            ))}

            {/* Additional */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 pt-10 border-t border-zinc-900"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-5">
                Additional
              </p>
              <div className="flex flex-col gap-3">
                {additionalItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    <span className="text-sm text-zinc-400">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
