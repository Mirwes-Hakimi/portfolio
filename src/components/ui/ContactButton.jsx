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
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/15 text-white text-sm font-medium bg-white/5 hover:bg-white/10 transition-colors cursor-pointer ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
      {label}
    </motion.button>
  );
};

export default ContactButton;
