import { motion } from 'framer-motion';

/* All 9 available screenshots */
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
  <div className="py-10 overflow-hidden" style={{ borderTop: '1px solid rgba(139,92,246,0.12)', borderBottom: '1px solid rgba(139,92,246,0.12)' }}>
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      style={{ display: 'flex', gap: '14px', width: 'max-content' }}
    >
      {doubled.map((src, i) => (
        <div
          key={i}
          className="w-[280px] h-[170px] flex-shrink-0 rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(139,92,246,0.15)', background: '#0f0f1a' }}
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
