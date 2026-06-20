import FadeIn from './ui/FadeIn';
import AnimatedText from './ui/AnimatedText';
import ContactButton from './ui/ContactButton';

const About = () => (
  <section id="about" className="px-6 md:px-10 py-32 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

      {/* Left column */}
      <FadeIn>
        <p className="text-xs text-white/25 uppercase tracking-widest mb-8">About us</p>
        <h2
          className="font-kanit font-black text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          We build things
          <br />
          <span className="text-white/25">that work.</span>
        </h2>
      </FadeIn>

      {/* Right column */}
      <div className="flex flex-col gap-10 md:pt-16">
        <AnimatedText
          text="KBL Web Solutions builds AI agents and web applications for businesses that want to move fast and stand out. From voice agents that answer your calls to multilingual apps serving thousands of users, we turn ideas into working software. Let's build something that works."
          className="text-white/55 text-lg md:text-xl leading-relaxed"
        />
        <FadeIn delay={0.3}>
          <ContactButton label="Work with us" />
        </FadeIn>
      </div>

    </div>
  </section>
);

export default About;
