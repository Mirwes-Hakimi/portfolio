import { motion } from 'framer-motion';

const tiles = [
  '/DMVpracticeTest.png',
  '/ss-1.png',
  '/DMVtestCarsRentals.png',
  '/ss-2.png',
  '/Linkneat.png',
  '/ss-3.png',
  '/FurnitureStoreApp.png',
  '/ss-4.png',
  '/drivingSchool.png',
];

const doubled = [...tiles, ...tiles];

const MarqueeSection = () => (
  <div
    className="py-12 overflow-hidden marquee-mask"
    style={{
      borderTop: '1px solid rgba(139,92,246,0.1)',
      borderBottom: '1px solid rgba(139,92,246,0.1)',
      background: 'linear-gradient(180deg, rgba(99,102,241,0.03) 0%, transparent 100%)',
    }}
  >
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      style={{ display: 'flex', gap: '16px', width: 'max-content' }}
    >
      {doubled.map((src, i) => (
        <div
          key={i}
          className="w-[280px] h-[172px] flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            border: '1px solid rgba(139,92,246,0.12)',
            background: '#0d0d18',
            boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

export default MarqueeSection;
