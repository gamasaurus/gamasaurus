'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, MouseEvent } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline';
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = variant === 'primary'
    ? 'bg-[#fafafa] text-[#0a0a0a] hover:bg-[#e0e0e0]'
    : 'bg-transparent text-[#fafafa] border border-[#333333] hover:border-[#555555]';

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-8 py-4 font-mono text-sm tracking-wider uppercase transition-colors duration-300 ${baseStyles} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
