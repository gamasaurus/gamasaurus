'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { personalInfo } from '@/data/personal';
import SectionHeading from '@/components/ui/SectionHeading';

const focusAreas = [
  'System Analysis & Design',
  'AI-powered Products',
  'Creative Technology',
  'Workflow Automation',
  'Full-stack Development',
  'Product Strategy',
  'Digital Experience Design',
  'Indie SaaS Building',
];

const stats = [
  { label: 'Years Experience', value: `${personalInfo.yearsExperience}+` },
  { label: 'Projects Shipped', value: `${personalInfo.projectsCompleted}+` },
  { label: 'Industries', value: '3' },
  { label: 'Cups of Coffee', value: '∞' },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number={1}
          title="About"
          subtitle="The intersection of systems thinking and creative intuition."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7"
          >
            <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Philosophy Quote */}
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="border-l-2 border-[#333333] pl-6 py-2 my-10"
            >
              <p className="text-base md:text-lg text-[#e0e0e0] italic leading-relaxed">
                &ldquo;{personalInfo.philosophy}&rdquo;
              </p>
            </motion.blockquote>

            {/* Focus Areas */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <h3 className="font-mono text-xs text-[#555555] tracking-[0.3em] uppercase mb-4">
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <motion.span
                    key={area}
                    variants={fadeUp}
                    className="px-4 py-2 font-mono text-xs text-[#a0a0a0] border border-[#1f1f1f] hover:border-[#333333] hover:text-[#fafafa] transition-all duration-300"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-px bg-[#1f1f1f]">
              {stats.map(({ label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="bg-[#0a0a0a] p-8 flex flex-col"
                >
                  <span className="text-4xl md:text-5xl font-bold text-[#fafafa] tracking-tight mb-2">
                    {value}
                  </span>
                  <span className="font-mono text-xs text-[#555555] tracking-wider uppercase">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
