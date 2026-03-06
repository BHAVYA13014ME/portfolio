import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo / initials */}
      <motion.div
        className="relative flex items-center justify-center w-20 h-20 mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Spinning ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent border-l-accent/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <span className="text-2xl font-bold gradient-text font-mono">BB</span>
      </motion.div>

      {/* Name */}
      <motion.h2
        className="text-text-secondary text-sm font-mono tracking-widest uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Bhavya Butani
      </motion.h2>

      {/* Loading bar */}
      <motion.div className="mt-6 w-40 h-0.5 bg-dark-500 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
