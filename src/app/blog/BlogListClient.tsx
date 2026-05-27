'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { writings } from '@/data/writing';

export default function BlogListClient() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#555555] tracking-[0.2em] uppercase hover:text-[#a0a0a0] transition-colors mb-12 group"
          >
            <motion.span
              className="inline-block"
              whileHover={{ x: -4 }}
            >
              ←
            </motion.span>
            Back to Home
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-[#555555] tracking-widest uppercase">
              05
            </span>
            <div className="h-px flex-1 bg-[#1f1f1f]" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#fafafa] tracking-tighter mb-4">
            Writing & Thoughts
          </h1>
          <p className="text-lg text-[#a0a0a0] max-w-2xl">
            Ideas on system analysis, process automation, indie building, and modern web development.
          </p>
        </motion.div>

        {/* Articles List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-0"
        >
          {writings.map((entry, index) => (
            <motion.div
              key={entry.id}
              variants={fadeUp}
            >
              <Link
                href={entry.url}
                className="group block py-10 border-b border-[#1f1f1f] hover:border-[#333333] transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm text-[#333333] group-hover:text-[#555555] transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#fafafa] tracking-tight mb-3 group-hover:text-[#e0e0e0] transition-colors">
                      {entry.title}
                      <motion.span
                        className="inline-block ml-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </motion.span>
                    </h2>
                    <p className="text-[#a0a0a0] leading-relaxed mb-4">
                      {entry.excerpt}
                    </p>
                    <span className="font-mono text-xs text-[#555555] tracking-wider">
                      {entry.readingTime}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="md:col-span-3 flex md:flex-col items-start md:items-end gap-3">
                    <span className="px-3 py-1 font-mono text-[11px] text-[#555555] border border-[#1f1f1f] tracking-wider uppercase">
                      {entry.topic}
                    </span>
                    <span className="font-mono text-xs text-[#333333]">
                      {entry.date}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
