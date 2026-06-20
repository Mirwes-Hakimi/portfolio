import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const offsets = {
    up:    { y: 28, x: 0 },
    down:  { y: -28, x: 0 },
    left:  { y: 0, x: 28 },
    right: { y: 0, x: -28 },
    none:  { y: 0, x: 0 },
  };

  const { x, y } = offsets[direction] ?? offsets.up;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
