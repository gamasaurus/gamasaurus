'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import MagneticButton from '@/components/ui/MagneticButton';

const titleWords = ['System', 'Analyst.', 'Indie', 'Builder.', 'Creative', 'Technologist.'];

export default function Hero() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.3,
      },
    },
  };

  const wordAnim = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />

      <div className="max-w-7xl mx-auto w-full pt-20">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          {/* <span className="font-mono text-xs text-[#555555] tracking-[0.3em] uppercase">
            Portfolio · {new Date().getFullYear()}
          </span> */}
        </motion.div>

        {/* Main Title - Large Editorial Typography */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9]">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordAnim}
                className={`inline-block mr-[0.25em] ${
                  i % 2 !== 0 ? 'text-[#555555]' : 'text-[#fafafa]'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton href="#projects" variant="primary">
            View Projects
          </MagneticButton>
          {/* <MagneticButton href={personalInfo.cvUrl} variant="outline">
            Download CV
          </MagneticButton> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] text-[#555555] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#555555] to-transparent"
        />
      </motion.div>
    </section>
  );
}
