import { motion } from 'framer-motion';

const LiveProjectButton = ({ label = 'Live Project', href, className = '' }) => {
  const Tag = href ? motion.a : motion.span;
  const props = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag
      {...props}
      whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.08)' }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white/70 text-xs font-medium cursor-pointer transition-colors ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
      {label}
    </Tag>
  );
};

export default LiveProjectButton;
