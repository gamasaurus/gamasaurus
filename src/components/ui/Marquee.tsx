'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  speed = 30,
  direction = 'left',
  className = '',
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`flex overflow-hidden group ${className}`}
    >
      <motion.div
        className={`flex shrink-0 gap-6 items-center ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
