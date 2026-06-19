import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const featured = {
  badge: 'Featured Work',
  title: 'DMV Practice Quiz (AI-Powered)',
  subtitle: 'Multilingual AI Web Application',
  description:
    'AI-powered California DMV practice quiz serving Farsi, Dari, and Pashto-speaking communities. Every session generates fresh, unique questions using GPT-4o-mini.',
  problem:
    'California DMV prep resources are repetitive, English-only, and fail non-native speakers. No existing tool targeted Farsi/Dari or Pashto speakers.',
  solution:
    'KBL built a multilingual AI quiz engine using OpenAI GPT-4o-mini that generates fresh questions across 8 DMV categories each session, with anti-repetition logic and real DMV passing standards.',
  results: [
    'Zero repeated questions per session via AI anti-repetition logic',
    'Three languages: English, Farsi/Dari, and Pashto',
    'PWA: installable on iOS and Android from the browser',
    'Pass/fail scored against real DMV thresholds (38 / 46)',
  ],
  tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel', 'PWA'],
  live: 'https://www.dmvfarsipashto.com/',
  liveUrl: 'dmvfarsipashto.com',
  image: '/DMVpracticeTest.png',
};

const secondaryProjects = [
  {
    title: 'DMV Test Car Rentals',
    description:
      'Booking and info site for Bay Area DMV test car rentals. Responsive, mobile-first, and built for conversion.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    live: 'https://www.dmvtestcars.com/',
    accent: '#f97316',
    image: '/DMVtestCarsRentals.png',
  },
  {
    title: 'Linkneat Career & Tax Services',
    description:
      'Professional services site for a Sacramento career and tax services business. Clean, trustworthy, lead-generating design.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    live: 'https://www.linkneat.com/',
    accent: '#22d3ee',
    image: '/Linkneat.png',
  },
  {
    title: 'Danville Driving School',
    description:
      'Modern driving school site with course info and a mobile-first, conversion-oriented layout built for local search.',
    tech: ['Next.js', 'Tailwind CSS'],
    live: 'https://danville-driving-school.vercel.app/',
    accent: '#34d399',
    image: '/drivingSchool.png',
  },
  {
    title: 'North Cal Furniture Gallery',
    description:
      'Image-forward showcase site for a furniture gallery. Clean product layout, responsive, optimized for mobile.',
    tech: ['Next.js', 'Tailwind CSS'],
    live: 'https://north-cal-furniture-gallery.vercel.app/',
    accent: '#a78bfa',
    image: '/FurnitureStoreApp.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Browser chrome frame ─── */
const BrowserFrame = ({ url, children }) => (
  <div
    className="rounded-xl overflow-hidden"
    style={{
      border: '1px solid rgba(51,65,85,0.7)',
      boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03), 0 0 60px rgba(37,99,235,0.12)',
    }}
  >
    <div
      className="flex items-center gap-2 px-3 py-2 border-b"
      style={{ background: '#1a1f36', borderColor: 'rgba(51,65,85,0.6)' }}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 flex-shrink-0" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 flex-shrink-0" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 flex-shrink-0" />
      <div
        className="flex-1 ml-1.5 rounded px-2.5 py-1 text-[10px] font-mono truncate"
        style={{ background: 'rgba(0,0,0,0.4)', color: '#64748b' }}
      >
        {url}
      </div>
    </div>
    {children}
  </div>
);

/* ─── Featured project right panel ─── */
const FeaturedShowcase = ({ image, liveUrl }) => (
  <div
    className="relative order-1 lg:order-2 overflow-hidden min-h-[380px] lg:min-h-[500px] flex items-center justify-center p-6 lg:p-10"
    style={{ background: '#020817' }}
  >
    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        className="absolute rounded-full"
        style={{
          top: '40%', left: '40%', transform: 'translate(-50%,-50%)',
          width: '420px', height: '420px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.15), transparent)',
          filter: 'blur(40px)',
        }}
      />
    </div>

    {/* Floating browser mockup */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="relative z-10 w-full"
      style={{ rotate: '-1.5deg', transformOrigin: 'center', cursor: 'default' }}
    >
      <BrowserFrame url={liveUrl}>
        <img
          src={image}
          alt="DMV Practice Quiz — live app screenshot"
          className="w-full h-auto object-cover object-top block"
        />
      </BrowserFrame>
    </motion.div>
  </div>
);

/* ─── Projects / Our Work section ─── */
const Projects = () => (
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
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>
          Our Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Client Projects
        </h2>
        <p className="mt-4 text-lg max-w-lg" style={{ color: '#94a3b8' }}>
          Production apps and websites KBL has designed, built, and shipped for real businesses.
        </p>
      </motion.div>

      {/* Featured card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden mb-6 group"
        style={{
          border: '1px solid rgba(37,99,235,0.25)',
          background: 'rgba(2,8,23,0.8)',
          boxShadow: '0 0 60px rgba(37,99,235,0.08)',
        }}
      >
        <div className="grid lg:grid-cols-2">

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-2.5 py-1 rounded-md"
                style={{ background: 'rgba(37,99,235,0.15)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.25)' }}
              >
                {featured.badge}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">{featured.title}</h3>
              <p className="text-sm mb-5" style={{ color: '#64748b' }}>{featured.subtitle}</p>
              <p className="leading-relaxed mb-8 text-sm" style={{ color: '#cbd5e1' }}>
                {featured.description}
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { heading: 'Problem', body: featured.problem },
                  { heading: 'Solution', body: featured.solution },
                ].map(({ heading, body }) => (
                  <div key={heading}>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: '#475569' }}>
                      {heading}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{body}</p>
                  </div>
                ))}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>Results</h4>
                  <ul className="space-y-1.5">
                    {featured.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#94a3b8' }}>
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
                    className="text-xs px-2.5 py-1 rounded-md"
                    style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(30,41,59,0.8)', color: '#94a3b8' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={featured.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(59,130,246,0.3)', color: '#93c5fd' }}
              >
                <FiExternalLink size={14} />
                Visit Site
              </a>
            </div>
          </div>

          {/* Screenshot showcase */}
          <FeaturedShowcase image={featured.image} liveUrl={featured.liveUrl} />

        </div>
      </motion.div>

      {/* Secondary cards — 2×2 grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {secondaryProjects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300"
            style={{
              border: '1px solid rgba(30,41,59,0.8)',
              background: 'rgba(8,14,32,0.6)',
            }}
          >
            {/* Screenshot or placeholder */}
            <div className="relative h-44 overflow-hidden flex-shrink-0" style={{ background: '#0a0f1e' }}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                /* Styled placeholder for missing screenshots */
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}40` }}
                  >
                    <FiExternalLink size={16} style={{ color: project.accent }} />
                  </div>
                  <span className="text-[10px] font-mono" style={{ color: '#475569' }}>
                    {project.live.replace('https://', '')}
                  </span>
                </div>
              )}
              {/* Bottom fade + accent line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080e20]/80 pointer-events-none" />
              <div
                className="absolute inset-x-0 bottom-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
              />
            </div>

            {/* Card body */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#64748b' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ background: 'rgba(15,23,42,0.8)', color: '#475569' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                style={{ color: project.accent }}
              >
                <FiExternalLink size={12} />
                Visit Site
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Projects;
