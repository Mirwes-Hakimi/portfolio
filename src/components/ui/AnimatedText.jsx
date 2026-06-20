import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.013, delayChildren: 0.05 } },
};

const char = {
  hidden: { opacity: 0, y: 14, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedText = ({ text, className = '', once = true, as: Tag = 'p' }) => {
  const MotionTag = motion[Tag] ?? motion.p;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
    >
      {text.split('').map((c, i) => (
        <motion.span
          key={i}
          variants={char}
          style={{ display: 'inline', whiteSpace: c === ' ' ? 'pre' : 'normal' }}
        >
          {c}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default AnimatedText;
