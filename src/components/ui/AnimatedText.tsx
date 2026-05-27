'use client';

import { motion } from 'framer-motion';
import { viewportConfig } from '@/lib/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  splitBy?: 'word' | 'line';
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  as: Tag = 'p',
  splitBy = 'word',
}: AnimatedTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={className}
    >
      <Tag className="leading-tight">
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={child}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
