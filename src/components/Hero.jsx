import { motion } from 'framer-motion';

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  item: {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  },
};

const stats = [
  { value: '20+', label: 'Client projects' },
  { value: '24/7', label: 'AI uptime' },
  { value: '3',   label: 'Languages' },
  { value: 'Free', label: 'Initial quote' },
];

/* ── Neural-network SVG visualization ── */
const nodes = [
  { id: 0, x: 50, y: 50, r: 4.5, primary: true },
  { id: 1, x: 23, y: 27, r: 3.2 },
  { id: 2, x: 77, y: 25, r: 2.8 },
  { id: 3, x: 17, y: 64, r: 2.6 },
  { id: 4, x: 80, y: 70, r: 3.2 },
  { id: 5, x: 50, y: 11, r: 2.4 },
  { id: 6, x: 11, y: 47, r: 2.1 },
  { id: 7, x: 89, y: 46, r: 2.6 },
  { id: 8, x: 53, y: 84, r: 2.8 },
  { id: 9, x: 34, y: 76, r: 2.0 },
  { id: 10, x: 66, y: 19, r: 1.9 },
  { id: 11, x: 31, y: 46, r: 1.8 },
  { id: 12, x: 68, y: 60, r: 2.2 },
];

const edges = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 11], [0, 12],
  [1, 6], [1, 11], [1, 3],
  [2, 7], [2, 10], [2, 5],
  [3, 6], [3, 9],
  [4, 8], [4, 12],
  [5, 10],
  [8, 9],
];

const NeuralViz = () => (
  <div className="relative w-full flex items-center justify-center" style={{ minHeight: '420px' }}>
    {/* Background glow */}
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div
        style={{
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.20) 0%, rgba(139,92,246,0.09) 45%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />
    </div>

    <svg
      viewBox="0 0 100 100"
      className="relative z-10 w-full h-full"
      style={{ maxWidth: '480px', maxHeight: '480px' }}
      aria-hidden="true"
    >
      {/* Edges */}
      {edges.map(([a, b], i) => (
        <motion.line
          key={`e${i}`}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(139,92,246,0.32)"
          strokeWidth="0.22"
          animate={{ opacity: [0.12, 0.42, 0.12] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={n.id}>
          {/* Halo */}
          <motion.circle
            cx={n.x} cy={n.y}
            r={n.r * 2.8}
            fill={n.primary ? 'rgba(139,92,246,0.12)' : 'rgba(99,102,241,0.07)'}
            animate={{ r: [n.r * 2.2, n.r * 3.8, n.r * 2.2] }}
            transition={{ duration: 2.6 + i * 0.28, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
          />
          {/* Core */}
          <motion.circle
            cx={n.x} cy={n.y}
            r={n.r}
            fill={n.primary ? 'rgba(139,92,246,0.92)' : 'rgba(99,102,241,0.62)'}
            style={{ filter: n.primary ? 'drop-shadow(0 0 5px rgba(139,92,246,0.7))' : 'drop-shadow(0 0 2px rgba(99,102,241,0.5))' }}
            animate={{ r: [n.r * 0.88, n.r * 1.22, n.r * 0.88] }}
            transition={{ duration: 2.1 + i * 0.24, repeat: Infinity, delay: i * 0.14, ease: 'easeInOut' }}
          />
        </g>
      ))}

      {/* Traveling data pulses */}
      {edges.slice(0, 7).map(([a, b], i) => (
        <motion.circle
          key={`p${i}`}
          r="0.75"
          fill="rgba(255,255,255,0.92)"
          style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))' }}
          animate={{
            cx: [nodes[a].x, nodes[b].x, nodes[a].x],
            cy: [nodes[a].y, nodes[b].y, nodes[a].y],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: i * 1.15,
            ease: 'easeInOut',
            repeatDelay: 0.6,
          }}
        />
      ))}
    </svg>
  </div>
);

/* ── Hero ── */
const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex flex-col justify-between px-6 md:px-10 pt-24 overflow-hidden hero-grid"
  >
    {/* Ambient glow layer */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <motion.div
        animate={{ x: [0, 45, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute"
        style={{
          top: '-15%', right: '-8%',
          width: '900px', height: '900px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(139,92,246,0.10) 42%, transparent 65%)',
          filter: 'blur(88px)',
        }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
        className="absolute"
        style={{
          bottom: '5%', left: '-10%',
          width: '720px', height: '720px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      {/* Top edge beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{
          width: '65%',
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.55), rgba(99,102,241,0.4), transparent)',
        }}
      />
    </div>

    {/* ── Main content split ── */}
    <motion.div
      variants={stagger.container}
      initial="hidden"
      animate="show"
      className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full py-8 md:py-0"
    >
      <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center w-full">

        {/* Left: text */}
        <div>
          {/* Status badge */}
          <motion.div variants={stagger.item} className="mb-7">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border"
              style={{
                background: 'rgba(139,92,246,0.08)',
                borderColor: 'rgba(139,92,246,0.28)',
                color: 'rgba(196,181,253,0.72)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              Bay Area · Web & AI Studio · Taking on new clients
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={stagger.item}>
            <h1
              className="font-kanit font-black leading-[0.87] tracking-tight"
              style={{ fontSize: 'clamp(3.6rem, 9.5vw, 9rem)' }}
            >
              <span className="block text-white">We build</span>
              <span
                className="block gradient-ai"
                style={{ filter: 'drop-shadow(0 0 28px rgba(139,92,246,0.42))' }}
              >
                AI agents
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={stagger.item}
            className="text-white/45 text-base md:text-lg leading-relaxed max-w-[440px] mt-7"
          >
            A web and AI development studio crafting custom agents, voice assistants,
            and modern web apps that actually ship.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={stagger.item} className="flex flex-wrap items-center gap-4 mt-10">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#07070e] font-kanit font-black text-sm tracking-wide hover:bg-white/90 transition-all duration-200 cursor-pointer"
            >
              Start a project
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M1 6.5h11M6.5 1.5L12 6.5 6.5 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/12 text-white/55 text-sm font-kanit font-medium hover:text-white hover:border-white/25 transition-all duration-200 cursor-pointer"
            >
              View our work
            </button>
          </motion.div>
        </div>

        {/* Right: neural network visual */}
        <motion.div variants={stagger.item} className="hidden md:block">
          <NeuralViz />
        </motion.div>

      </div>
    </motion.div>

    {/* ── Stats strip ── */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto w-full"
      style={{ borderTop: '1px solid rgba(139,92,246,0.13)' }}
    >
      {stats.map(({ value, label }, i) => (
        <div
          key={label}
          className={`py-7 px-6 ${i < 3 ? 'border-r border-violet-500/10' : ''} ${i >= 2 ? 'border-t border-violet-500/10 md:border-t-0' : ''}`}
        >
          <div
            className="font-kanit font-black leading-none"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              background: 'linear-gradient(135deg, #ffffff 38%, #c4b5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {value}
          </div>
          <div className="text-white/28 text-xs mt-1.5 tracking-wide">{label}</div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Hero;
