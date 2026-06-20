import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Magnet = ({ children, strength = 28, className = '' }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - left - width / 2) / width) * strength,
      y: ((e.clientY - top - height / 2) / height) * strength,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 120, damping: 12, mass: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnet;
