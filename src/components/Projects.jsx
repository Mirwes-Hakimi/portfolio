import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import LiveProjectButton from './ui/LiveProjectButton';

const projects = [
  {
    num: '01',
    title: 'DMV Practice Quiz App',
    status: 'Live Product',
    statusStyle: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    dotStyle: 'bg-emerald-400',
    desc: 'An AI-powered multilingual California DMV practice quiz serving Farsi, Dari, and Pashto speakers. Built with Next.js, TypeScript, the OpenAI API, and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    /* Main screenshot + two detail fills from other real screenshots */
    images: ['/DMVpracticeTest.png', '/ss-1.png', '/ss-2.png'],
    href: 'https://www.dmvfarsipashto.com',
    cardBg: 'linear-gradient(160deg, #101018 0%, #0d0d0d 100%)',
    type: 'screenshots',
  },
  {
    num: '02',
    title: 'AI Voice Agent',
    status: 'Demo',
    statusStyle: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
    dotStyle: 'bg-blue-400',
    desc: 'A live AI receptionist built on Retell AI with a dedicated phone number, role-playing across multiple business verticals. Answering, booking, and qualifying calls in real time.',
    tech: ['Retell AI', 'React', 'Node.js', 'Webhooks'],
    images: [],
    href: null,
    cardBg: 'linear-gradient(160deg, #070d1a 0%, #0c0c0c 100%)',
    type: 'visual',   // rendered as a designed panel, no screenshot
  },
  {
    num: '03',
    title: 'Linkneat',
    status: 'Client',
    statusStyle: 'text-violet-400 border-violet-400/30 bg-violet-400/10',
    dotStyle: 'bg-violet-400',
    desc: 'A client site for Linkneat Career & Tax Services, deployed on Vercel. Clean, conversion-focused design with a working contact pipeline.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
    images: ['/Linkneat.png', '/ss-3.png', '/ss-4.png'],
    href: 'https://www.linkneat.com',
    cardBg: 'linear-gradient(160deg, #0d1018 0%, #0c0c0c 100%)',
    type: 'screenshots',
  },
];

/* Waveform bars for the AI Voice Agent visual panel */
const Waveform = () => (
  <div className="flex items-center gap-1.5">
    {[0.4, 0.9, 0.6, 1, 0.7, 0.85, 0.5, 0.95, 0.65, 0.8].map((h, i) => (
      <motion.div
        key={i}
        animate={{ scaleY: [h * 0.3, h, h * 0.3] }}
        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.09, ease: 'easeInOut' }}
        className="w-1 rounded-full bg-blue-400/70 origin-bottom"
        style={{ height: '36px' }}
      />
    ))}
  </div>
);

/* Full right panel for the voice agent card */
const VoiceVisual = () => (
  <div
    className="flex-1 flex items-center justify-center p-8"
    style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}
  >
    <div className="flex flex-col items-center gap-8">
      {/* Pulsing phone ring */}
      <div className="relative flex items-center justify-center">
        {[1, 1.5, 2].map((scale, i) => (
          <motion.div
            key={i}
            animate={{ scale: [scale, scale * 1.15, scale], opacity: [0.12, 0, 0.12] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5 }}
            className="absolute w-20 h-20 rounded-full border border-blue-400/30"
          />
        ))}
        <div
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center z-10"
          style={{ background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.25)' }}
        >
          <Phone size={30} className="text-blue-400" />
        </div>
      </div>

      <Waveform />

      <div className="text-center space-y-1">
        <p className="text-white/60 text-sm font-kanit font-bold">(925) 334-8542</p>
        <p className="text-white/25 text-xs">Call to hear a live demo</p>
      </div>

      {/* Simulated transcript bubble */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -4] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
        className="rounded-xl px-4 py-2.5 max-w-[200px]"
        style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}
      >
        <p className="text-blue-300/80 text-xs leading-relaxed">
          "Hi, thanks for calling — how can I help you today?"
        </p>
      </motion.div>
    </div>
  </div>
);

/* Screenshot right panel */
const ScreenshotPanel = ({ project }) => (
  <div className="flex-1 p-5 md:p-8 flex flex-col gap-4">
    <div
      className="flex-1 rounded-xl overflow-hidden min-h-[180px]"
      style={{ background: '#111' }}
    >
      <img
        src={project.images[0]}
        alt={`${project.title} preview`}
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
    <div className="grid grid-cols-2 gap-4 h-[110px] md:h-[130px]">
      {project.images.slice(1).map((src, i) => (
        <div key={i} className="rounded-xl overflow-hidden" style={{ background: '#111' }}>
          <img
            src={src}
            alt={`${project.title} detail`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
);

/* Individual sticky card */
const StickyCard = ({ project, index }) => {
  const wrapRef = useRef(null);
  const isLast = index === projects.length - 1;

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.45, 1], [1, 0.87]);
  const opacity = useTransform(scrollYProgress, [0.72, 1], [1, 0.5]);

  const TOP = 72 + index * 24;

  return (
    <div ref={wrapRef} style={{ minHeight: isLast ? 'auto' : '105vh' }}>
      <motion.div
        style={{
          scale: isLast ? undefined : scale,
          opacity: isLast ? undefined : opacity,
          position: isLast ? 'relative' : 'sticky',
          top: isLast ? undefined : `${TOP}px`,
          transformOrigin: 'top center',
        }}
        className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/8"
      >
        <div
          className="flex flex-col md:flex-row"
          style={{ background: project.cardBg, minHeight: '72vh' }}
        >
          {/* Left: info panel */}
          <div className="flex flex-col justify-between p-7 md:p-12 md:w-[42%] flex-shrink-0">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-kanit text-white/20 text-sm tabular-nums">{project.num}</span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${project.statusStyle}`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0 ${project.dotStyle}`} />
                  {project.status}
                </span>
              </div>

              <h3
                className="font-kanit font-black text-white leading-none tracking-tight mb-5"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3.2rem)' }}
              >
                {project.title}
              </h3>

              <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-white/35 border border-white/10 rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <LiveProjectButton
                href={project.href}
                label={project.status === 'Demo' ? 'Call Demo' : 'Live Project'}
              />
            </div>
          </div>

          {/* Right: screenshots or designed visual */}
          {project.type === 'visual' ? <VoiceVisual /> : <ScreenshotPanel project={project} />}
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => (
  <section id="work" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
    <FadeIn>
      <p className="text-xs text-white/25 uppercase tracking-widest mb-14">Selected Work</p>
    </FadeIn>

    <div className="flex flex-col gap-4">
      {projects.map((project, i) => (
        <StickyCard key={project.num} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default Projects;
