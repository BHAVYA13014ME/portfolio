import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0,212,255,0.15), 0 8px 20px rgba(0,0,0,0.6)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const navbarVariants: Variants = {
  top: {
    background: 'rgba(10, 10, 15, 0)',
    backdropFilter: 'blur(0px)',
    borderColor: 'rgba(255,255,255,0)',
  },
  scrolled: {
    background: 'rgba(10, 10, 15, 0.9)',
    backdropFilter: 'blur(20px)',
    borderColor: 'rgba(255,255,255,0.05)',
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const progressBar: Variants = {
  hidden: { width: '0%' },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1.2, ease: 'easeOut', delay: 0.2 },
  }),
};
