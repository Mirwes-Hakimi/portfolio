import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const featured = {
  badge: 'Featured Project',
  title: 'DMV Practice Quiz: AI Powered',
  subtitle: 'Full-Stack AI Web Application',
  description:
    'A California DMV permit test prep app that generates unique, AI-powered questions every session. Built to serve the Afghan and Persian communities with full multilingual support.',
  problem:
    'California DMV prep resources are repetitive, English-only, and fail non-native speakers. No existing tool targeted Farsi/Dari or Pashto speakers preparing for the written permit exam.',
  solution:
    'Built an AI quiz engine using OpenAI GPT-4o-mini that generates fresh questions across 8 DMV categories each session, with anti-repetition logic, three-language support, and real DMV passing standards.',
  results: [
    'Zero repeated questions per session via AI-driven anti-repetition logic',
    "Multilingual in English, Farsi/Dari, and Pashto serving CA's Afghan and Persian communities",
    'PWA support installable directly from the browser on iOS and Android',
    'Pass/fail scored against real DMV thresholds (38 out of 46 to pass)',
  ],
  tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel', 'PWA'],
  live: 'https://driving-school-ai.vercel.app/',
  github: 'https://github.com/Mirwes-Hakimi/driving-school-ai',
  liveUrl: 'driving-school-ai.vercel.app',
};

const secondaryProjects = [
  {
    title: 'LinkNeat',
    description:
      'A clean, minimal link management app with a sleek dashboard UI and fast performance. Built for simplicity and usability.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    live: 'https://www.linkneat.com/',
    github: null,
    accent: 'from-cyan-500/20 to-zinc-900/60',
  },
  {
    title: 'DMV Test Cars',
    description:
      'A resource site for California DMV test vehicle information. Responsive design optimized for mobile users searching on the go.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    live: 'https://www.dmvtestcars.com/',
    github: null,
    accent: 'from-orange-500/20 to-zinc-900/60',
  },
  {
    title: 'Next Gen Drivers',
    description:
      'Modern driving school web app with course listings, instructor profiles, and a mobile-first design built for conversion.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
    live: 'https://next-gen-drivers.vercel.app/',
    github: null,
    accent: 'from-emerald-500/20 to-zinc-900/60',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Browser chrome wrapper ─── */
const BrowserChrome = ({ url, children }) => (
  <div
    className="rounded-xl overflow-hidden border border-zinc-700/70"
    style={{
      boxShadow:
        '0 28px 72px rgba(0,0,0,0.60), 0 0 0 1px rgba(255,255,255,0.04), 0 0 48px rgba(99,102,241,0.10)',
    }}
  >
    <div className="bg-[#1e1e2e] px-3 py-2 flex items-center gap-2 border-b border-zinc-700/60 flex-shrink-0">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 flex-shrink-0" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 flex-shrink-0" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 flex-shrink-0" />
      <div className="flex-1 ml-1.5 bg-zinc-900/70 rounded px-2.5 py-1 text-[10px] text-zinc-500 font-mono truncate">
        {url}
      </div>
    </div>
    {children}
  </div>
);

/* ─── Simulated quiz question screen (desktop) ─── */
const QuizScreenDesktop = () => (
  <div className="bg-[#f8fafc] font-sans" style={{ fontFamily: 'system-ui, sans-serif' }}>
    {/* App top bar */}
    <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center">
          <span style={{ color: '#fff', fontSize: '9px', fontWeight: 700 }}>D</span>
        </div>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#1e293b' }}>DMV Quiz</span>
      </div>
      <div className="flex items-center gap-3">
        <span
          style={{
            fontSize: '8px',
            background: '#eff6ff',
            color: '#3b82f6',
            border: '1px solid #bfdbfe',
            borderRadius: '99px',
            padding: '2px 7px',
            fontWeight: 600,
          }}
        >
          AI Powered
        </span>
        <span style={{ fontSize: '9px', color: '#64748b' }}>EN</span>
      </div>
    </div>

    {/* Progress bar */}
    <div className="bg-slate-100 h-1 w-full">
      <div className="bg-blue-500 h-1" style={{ width: '52%' }} />
    </div>

    {/* Question area */}
    <div className="px-5 pt-4 pb-3">
      <div className="flex items-center justify-between mb-3">
        <span style={{ fontSize: '9px', color: '#94a3b8', fontWeight: 500 }}>
          Question 24 of 46
        </span>
        <span style={{ fontSize: '9px', color: '#64748b' }}>Signs &amp; Signals</span>
      </div>

      <p style={{ fontSize: '11px', fontWeight: 600, color: '#0f172a', lineHeight: 1.55, marginBottom: '14px' }}>
        When you see a flashing yellow traffic light, you should:
      </p>

      {/* Answer options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {[
          { letter: 'A', text: 'Stop completely and wait for green', correct: false },
          { letter: 'B', text: 'Slow down and proceed with caution', correct: true },
          { letter: 'C', text: 'Speed up to clear the intersection', correct: false },
          { letter: 'D', text: 'Treat it as a stop sign', correct: false },
        ].map(({ letter, text, correct }) => (
          <div
            key={letter}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 9px',
              borderRadius: '8px',
              border: correct ? '1.5px solid #22c55e' : '1.5px solid #e2e8f0',
              background: correct ? '#f0fdf4' : '#fff',
            }}
          >
            <span
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: correct ? '#22c55e' : '#f1f5f9',
                color: correct ? '#fff' : '#64748b',
                fontSize: '9px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {correct ? '✓' : letter}
            </span>
            <span style={{ fontSize: '10px', color: correct ? '#15803d' : '#475569', fontWeight: correct ? 600 : 400 }}>
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* AI explanation chip */}
      <div
        style={{
          marginTop: '10px',
          padding: '6px 10px',
          borderRadius: '8px',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          fontSize: '9px',
          color: '#1d4ed8',
        }}
      >
        <span style={{ fontWeight: 600 }}>AI Insight:</span> Flashing yellow means caution
        only. You may proceed but must yield if needed.
      </div>

      {/* Bottom row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
        <span style={{ fontSize: '9px', color: '#94a3b8' }}>Score: 21 / 23 correct</span>
        <button
          style={{
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '7px',
            padding: '5px 14px',
            fontSize: '9px',
            fontWeight: 700,
            cursor: 'default',
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  </div>
);

/* ─── Simulated results screen (phone) ─── */
const ResultsScreenPhone = () => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const pct = 38 / 46;
  const offset = circumference * (1 - pct);

  return (
    <div
      className="bg-white"
      style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100%' }}
    >
      {/* Header */}
      <div style={{ background: '#1e40af', padding: '10px 12px 8px' }}>
        <p style={{ fontSize: '8px', color: '#93c5fd', fontWeight: 600, marginBottom: '2px' }}>
          Session Complete
        </p>
        <p style={{ fontSize: '11px', color: '#fff', fontWeight: 700 }}>Your Results</p>
      </div>

      {/* Score ring */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '14px 12px 8px' }}>
        <div style={{ position: 'relative', width: '90px', height: '90px' }}>
          <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r={radius} fill="none" stroke="#f0fdf4" strokeWidth="9" />
            <circle
              cx="45" cy="45" r={radius}
              fill="none"
              stroke="#22c55e"
              strokeWidth="9"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 45 45)"
            />
          </svg>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#15803d', lineHeight: 1 }}>38</span>
            <span style={{ fontSize: '8px', color: '#64748b' }}>of 46</span>
          </div>
        </div>

        <span
          style={{
            marginTop: '8px',
            background: '#dcfce7',
            color: '#166534',
            border: '1px solid #86efac',
            borderRadius: '99px',
            padding: '2px 12px',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.08em',
          }}
        >
          PASSED
        </span>
      </div>

      {/* Stats */}
      <div style={{ margin: '0 12px', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        {[
          { label: 'Correct', value: '38', color: '#22c55e' },
          { label: 'Incorrect', value: '8', color: '#ef4444' },
          { label: 'DMV Min.', value: '38 / 46', color: '#3b82f6' },
        ].map(({ label, value, color }, i, arr) => (
          <div
            key={label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '7px 10px',
              borderBottom: i < arr.length - 1 ? '1px solid #f1f5f9' : 'none',
            }}
          >
            <span style={{ fontSize: '9px', color: '#64748b' }}>{label}</span>
            <span style={{ fontSize: '10px', fontWeight: 700, color }}>{value}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding: '10px 12px 12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <button
          style={{
            width: '100%',
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '8px',
            fontSize: '9px',
            fontWeight: 700,
            cursor: 'default',
          }}
        >
          Try New Quiz
        </button>
        <button
          style={{
            width: '100%',
            background: 'transparent',
            color: '#64748b',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '6px',
            fontSize: '8px',
            cursor: 'default',
          }}
        >
          Review Answers
        </button>
      </div>
    </div>
  );
};

/* ─── Phone frame wrapper ─── */
const PhoneFrame = ({ children }) => (
  <div
    style={{
      borderRadius: '2rem',
      background: '#18181b',
      border: '3px solid rgba(82,82,91,0.8)',
      overflow: 'hidden',
      boxShadow:
        '0 24px 64px rgba(0,0,0,0.70), 0 0 32px rgba(139,92,246,0.18), 0 0 0 1px rgba(255,255,255,0.05)',
    }}
  >
    {/* Dynamic island */}
    <div
      style={{
        background: '#09090b',
        height: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          width: '44px',
          height: '6px',
          borderRadius: '99px',
          background: 'rgba(82,82,91,0.7)',
          display: 'block',
        }}
      />
    </div>
    {/* Screen */}
    <div style={{ overflow: 'hidden' }}>{children}</div>
    {/* Home indicator */}
    <div
      style={{
        background: '#09090b',
        height: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          width: '28px',
          height: '4px',
          borderRadius: '99px',
          background: 'rgba(82,82,91,0.6)',
          display: 'block',
        }}
      />
    </div>
  </div>
);

/* ─── Metric badge ─── */
const MetricBadge = ({ dot, label, className, floatDuration = 3.4, floatDelay = 0, fadeDelay = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: [0, -5, 0] }}
    transition={{
      opacity: { duration: 0.55, delay: fadeDelay },
      y: { duration: floatDuration, repeat: Infinity, ease: 'easeInOut', delay: floatDelay },
    }}
    className={`absolute z-30 ${className}`}
  >
    <div
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border whitespace-nowrap"
      style={{
        background: 'rgba(9,9,11,0.85)',
        borderColor: 'rgba(63,63,70,0.7)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)',
      }}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
      <span className="text-[10px] font-semibold text-zinc-300">{label}</span>
    </div>
  </motion.div>
);

/* ─── Mockup showcase ─── */
const MockupShowcase = ({ liveUrl }) => (
  <div className="relative order-1 lg:order-2 bg-zinc-950 overflow-hidden min-h-[400px] lg:min-h-[600px]">

    {/* Ambient glow layers */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/12 via-transparent to-violet-600/10" />

      <motion.div
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full"
        style={{
          top: '38%', left: '30%',
          width: '380px', height: '380px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(99,102,241,0.24) 0%, rgba(139,92,246,0.14) 45%, transparent 72%)',
          filter: 'blur(36px)',
        }}
      />
      <div className="absolute top-6 right-6 w-36 h-36 bg-violet-500/14 rounded-full blur-[50px]" />
      <div className="absolute bottom-10 left-6 w-28 h-28 bg-blue-500/12 rounded-full blur-[40px]" />
    </div>

    {/* ── Mobile layout (stacked, no overlap) ── */}
    <div className="lg:hidden flex flex-col items-center gap-6 py-8 px-4 relative z-10">
      <div className="w-full max-w-sm">
        <BrowserChrome url={liveUrl}>
          <QuizScreenDesktop />
        </BrowserChrome>
      </div>
      <div className="w-44">
        <PhoneFrame>
          <ResultsScreenPhone />
        </PhoneFrame>
      </div>
    </div>

    {/* ── Desktop layout (absolute positioned composition) ── */}
    <div className="hidden lg:block absolute inset-0">
      <div className="absolute inset-0" style={{ padding: '22px 18px 18px 14px' }}>
        <div className="relative w-full h-full">

          {/* Desktop browser: 75% wide, top-left, -1.5deg */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.015, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="absolute top-0 left-0 z-10"
            style={{ width: '82%', rotate: '-1.5deg', transformOrigin: 'top left', cursor: 'default' }}
          >
            <BrowserChrome url={liveUrl}>
              <QuizScreenDesktop />
            </BrowserChrome>
          </motion.div>

          {/* Phone: 26% wide, raised higher to stay fully in frame */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            whileHover={{ scale: 1.04, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="absolute z-20"
            style={{ width: '35%', left: '28%', top: '45%', rotate: '2.5deg', transformOrigin: 'center', cursor: 'default' }}
          >
            <PhoneFrame>
              <ResultsScreenPhone />
            </PhoneFrame>
          </motion.div>

          {/* ── Floating metric badges ── */}
          <MetricBadge
            label="AI Generated Questions"
            dot="bg-indigo-400"
            className="top-3 right-2"
            floatDuration={3.6}
            floatDelay={0}
            fadeDelay={0.8}
          />



        </div>
      </div>
    </div>

  </div>
);

/* ─── Projects section ─── */
const Projects = () => {
  return (
    <section id="projects" className="py-32 border-t border-zinc-900">
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
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-lg">
            Production apps I've designed and built, from AI-powered tools to
            client-facing websites.
          </p>
        </motion.div>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all duration-500 mb-6"
        >
          <div className="grid lg:grid-cols-2">

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                  {featured.badge}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {featured.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-5">{featured.subtitle}</p>
                <p className="text-zinc-300 leading-relaxed mb-8 text-sm">
                  {featured.description}
                </p>

                <div className="space-y-5 mb-8">
                  {[
                    { heading: 'Problem', body: featured.problem },
                    { heading: 'Solution', body: featured.solution },
                  ].map(({ heading, body }) => (
                    <div key={heading}>
                      <h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">
                        {heading}
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
                    </div>
                  ))}
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2">
                      Results
                    </h4>
                    <ul className="space-y-1.5">
                      {featured.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                          <span className="mt-2 w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/50 text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5">
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    <FiGithub size={14} />
                    Source
                  </a>
                </div>
              </div>
            </div>

            {/* Mockup showcase */}
            <MockupShowcase liveUrl={featured.liveUrl} />

          </div>
        </motion.div>

        {/* Secondary projects */}
        <div className="grid md:grid-cols-3 gap-4">
          {secondaryProjects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`h-0.5 w-full bg-gradient-to-r ${project.accent}`} />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      <FiExternalLink size={12} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      <FiGithub size={12} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
