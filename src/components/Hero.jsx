import { motion } from 'framer-motion';
import ContactButton from './ui/ContactButton';

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } },
  item: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  },
};

const stats = [
  { value: '20+', label: 'Client projects' },
  { value: '24/7', label: 'AI uptime' },
  { value: '3', label: 'Languages' },
  { value: 'Free', label: 'Initial quote' },
];

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex flex-col justify-between px-6 md:px-10 pt-28 pb-14 overflow-hidden dot-grid"
  >
    {/* ── Strong ambient glow layer ── */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

      {/* Large indigo cloud — top-right, very visible */}
      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute"
        style={{
          top: '-20%', right: '-15%',
          width: '1000px', height: '1000px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.30) 0%, rgba(139,92,246,0.14) 38%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Blue cloud — bottom-left */}
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 35, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute"
        style={{
          bottom: '-20%', left: '-12%',
          width: '850px', height: '850px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(99,102,241,0.1) 42%, transparent 68%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Violet accent — center-right */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute"
        style={{
          top: '30%', right: '10%',
          width: '550px', height: '550px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Subtle top edge beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{
          width: '900px',
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(99,102,241,0.4), transparent)',
        }}
      />
    </div>

    {/* ── Heading ── */}
    <motion.div
      variants={stagger.container}
      initial="hidden"
      animate="show"
      className="relative z-10"
    >
      <motion.div variants={stagger.item}>
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-violet-500/25 text-violet-300/60 text-xs"
          style={{ background: 'rgba(139,92,246,0.08)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Bay Area · Web & AI Studio · Taking on new clients
        </div>
      </motion.div>

      <motion.h1
        variants={stagger.item}
        className="hero-heading font-kanit font-black leading-[0.88] tracking-tight"
        style={{ fontSize: 'clamp(4.5rem, 13.5vw, 13rem)' }}
      >
        We build<br />AI agents
      </motion.h1>
    </motion.div>

    {/* ── Stats strip ── */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 grid grid-cols-2 md:grid-cols-4 my-12 md:my-16 rounded-2xl overflow-hidden"
      style={{
        border: '1px solid rgba(139,92,246,0.2)',
        background: 'rgba(139,92,246,0.06)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {stats.map(({ value, label }, i) => (
        <div
          key={label}
          className={`py-6 px-5 md:px-7 ${i < stats.length - 1 ? 'border-r border-violet-500/15' : ''} ${i >= 2 ? 'border-t border-violet-500/15 md:border-t-0' : ''}`}
        >
          <div
            className="font-kanit font-black leading-none"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              background: 'linear-gradient(135deg, #ffffff 40%, #c4b5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {value}
          </div>
          <div className="text-white/30 text-xs mt-2">{label}</div>
        </div>
      ))}
    </motion.div>

    {/* ── Description + CTA ── */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
    >
      <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-sm">
        A web and AI development studio crafting custom agents, voice assistants,
        and modern web apps that actually ship.
      </p>
      <ContactButton label="Let's talk" />
    </motion.div>
  </section>
);

export default Hero;
