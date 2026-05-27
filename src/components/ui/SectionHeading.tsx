'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '@/lib/animations';
import { formatSectionNumber } from '@/lib/utils';

interface SectionHeadingProps {
  number: number;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="mb-16 md:mb-24"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-sm text-[#555555] tracking-widest uppercase">
          {formatSectionNumber(number)}
        </span>
        <div className="h-px flex-1 bg-[#1f1f1f]" />
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#fafafa] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#a0a0a0] max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
