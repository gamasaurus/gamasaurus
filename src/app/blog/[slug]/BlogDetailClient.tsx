'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { WritingEntry } from '@/types';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { writings } from '@/data/writing';

interface BlogDetailClientProps {
  entry: WritingEntry;
}

export default function BlogDetailClient({ entry }: BlogDetailClientProps) {
  // Find related articles (same topic, different article)
  const related = writings
    .filter((w) => w.id !== entry.id)
    .slice(0, 2);

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#writing"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#555555] tracking-[0.2em] uppercase hover:text-[#a0a0a0] transition-colors mb-12 group"
          >
            <motion.span
              className="inline-block"
              whileHover={{ x: -4 }}
            >
              ←
            </motion.span>
            Back to Writing
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mb-16"
        >
          {/* Topic & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 font-mono text-[11px] text-[#555555] border border-[#1f1f1f] tracking-wider uppercase">
              {entry.topic}
            </span>
            <span className="font-mono text-xs text-[#333333]">
              {entry.date}
            </span>
            <span className="font-mono text-xs text-[#333333]">
              ·
            </span>
            <span className="font-mono text-xs text-[#333333]">
              {entry.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#fafafa] tracking-tighter leading-[1.05] mb-6">
            {entry.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed">
            {entry.excerpt}
          </p>

          {/* Divider */}
          <div className="h-px bg-[#1f1f1f] mt-10" />
        </motion.header>

        {/* Article Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {entry.content.map((paragraph, index) => {
            // Check if it's a heading (starts with ##)
            if (paragraph.startsWith('## ')) {
              const headingText = paragraph.replace('## ', '');
              return (
                <motion.h2
                  key={index}
                  variants={fadeUp}
                  className="text-2xl md:text-3xl font-semibold text-[#fafafa] tracking-tight mt-12 mb-4"
                >
                  {headingText}
                </motion.h2>
              );
            }

            return (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-base md:text-lg text-[#a0a0a0] leading-[1.8]"
              >
                {paragraph}
              </motion.p>
            );
          })}
        </motion.div>

        {/* End Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="h-px bg-[#1f1f1f] mt-20 mb-16 origin-left"
        />

        {/* Author Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex items-start gap-6 p-8 border border-[#1f1f1f] mb-20"
        >
          <div className="w-12 h-12 bg-[#1a1a1a] border border-[#1f1f1f] flex items-center justify-center shrink-0">
            <span className="font-mono text-lg text-[#555555]">GS</span>
          </div>
          <div>
            <p className="font-semibold text-[#fafafa] mb-1">Gamalliel Sharon Saragih</p>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">
              System Analyst by day, indie builder by night. Writing about systems thinking, 
              process automation, and building digital products.
            </p>
          </div>
        </motion.div>

        {/* Related Articles */}
        {related.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="font-mono text-xs text-[#555555] tracking-[0.3em] uppercase mb-8">
              More Writing
            </h3>
            <div className="space-y-0">
              {related.map((article) => (
                <Link
                  key={article.id}
                  href={article.url}
                  className="group block py-6 border-b border-[#1f1f1f] hover:border-[#333333] transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-[#fafafa] tracking-tight group-hover:text-[#e0e0e0] transition-colors mb-1">
                        {article.title}
                        <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </h4>
                      <p className="text-sm text-[#a0a0a0] line-clamp-1">
                        {article.excerpt}
                      </p>
                    </div>
                    <span className="px-3 py-1 font-mono text-[10px] text-[#555555] border border-[#1f1f1f] tracking-wider uppercase shrink-0 hidden md:block">
                      {article.topic}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </article>
  );
}
