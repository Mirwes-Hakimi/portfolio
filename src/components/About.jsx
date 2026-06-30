import FadeIn from './ui/FadeIn';
import AnimatedText from './ui/AnimatedText';
import ContactButton from './ui/ContactButton';

const pillars = [
  { label: 'Fast', desc: 'We ship in days, not months.' },
  { label: 'Reliable', desc: 'Production-grade code that scales.' },
  { label: 'Modern', desc: 'Cutting-edge stack, always.' },
];

const About = () => (
  <section id="about" className="px-6 md:px-10 py-32 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

      {/* Left */}
      <FadeIn>
        <p className="text-xs text-white/25 uppercase tracking-widest mb-8">About us</p>
        <h2
          className="font-kanit font-black text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          We build things
          <br />
          <span className="text-white/22">that work.</span>
        </h2>

        {/* Three pillars */}
        <div className="mt-10 flex flex-col gap-px border border-white/8 rounded-2xl overflow-hidden">
          {pillars.map(({ label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-5 px-5 py-4"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <span
                className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-kanit font-black text-violet-400"
                style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)' }}
              >
                ✓
              </span>
              <div>
                <span className="text-white text-sm font-kanit font-bold">{label}</span>
                <span className="text-white/35 text-sm ml-2">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Right */}
      <div className="flex flex-col gap-10 md:pt-16">
        <AnimatedText
          text="KBL Web Solutions builds AI agents and web applications for businesses that want to move fast and stand out. From voice agents that answer your calls to multilingual apps serving thousands of users, we turn ideas into working software. Let's build something that works."
          className="text-white/52 text-lg md:text-xl leading-relaxed"
        />
        <FadeIn delay={0.3}>
          <ContactButton label="Work with us" />
        </FadeIn>
      </div>

    </div>
  </section>
);

export default About;
