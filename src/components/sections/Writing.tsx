'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { writings } from '@/data/writing';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Writing() {
  return (
    <section id="writing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number={5}
          title="Writing & Thoughts"
          subtitle="Ideas on systems, automation, building, and creative technology."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-0"
        >
          {writings.map((entry, index) => (
            <motion.div
              key={entry.id}
              variants={fadeUp}
            >
              <Link
                href={entry.url}
                className="group block py-8 border-b border-[#1f1f1f] hover:border-[#333333] transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm text-[#333333] group-hover:text-[#555555] transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="md:col-span-7">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#fafafa] tracking-tight mb-2 group-hover:text-[#e0e0e0] transition-colors">
                      {entry.title}
                      <motion.span
                        className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </motion.span>
                    </h3>
                    <p className="text-[#a0a0a0] leading-relaxed line-clamp-2">
                      {entry.excerpt}
                    </p>
                  </div>

                  {/* Topic & Date */}
                  <div className="md:col-span-4 flex md:flex-col items-start md:items-end gap-2">
                    <span className="px-3 py-1 font-mono text-[11px] text-[#555555] border border-[#1f1f1f] tracking-wider uppercase">
                      {entry.topic}
                    </span>
                    <span className="font-mono text-xs text-[#333333]">
                      {entry.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 font-mono text-xs text-[#555555] tracking-[0.2em] uppercase hover:text-[#fafafa] transition-colors duration-300 group py-4 px-8 border border-[#1f1f1f] hover:border-[#333333]"
          >
            View All Articles
            <motion.span
              className="inline-block group-hover:translate-x-1 transition-transform"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
