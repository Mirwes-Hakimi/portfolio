import { motion } from 'framer-motion';

const ContactButton = ({ label = "Let's talk", className = '', onClick }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    onClick?.();
  };

  return (
    <motion.button
      onClick={scrollToContact}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white text-sm font-medium cursor-pointer transition-all duration-250 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.18) 100%)',
        border: '1px solid rgba(139,92,246,0.35)',
        boxShadow: '0 0 0 0 rgba(139,92,246,0)',
      }}
      whileHover={{
        scale: 1.04,
        boxShadow: '0 0 24px rgba(139,92,246,0.22)',
        borderColor: 'rgba(139,92,246,0.55)',
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
      {label}
    </motion.button>
  );
};

export default ContactButton;
