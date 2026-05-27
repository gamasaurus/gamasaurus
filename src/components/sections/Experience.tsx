'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '@/lib/animations';
import { experiences } from '@/data/experience';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number={2}
          title="Experience"
          subtitle="A timeline of building, analyzing, and creating."
        />

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#1f1f1f] origin-top hidden md:block"
          />

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 py-12 ${
                  index !== experiences.length - 1 ? 'border-b border-[#1f1f1f] md:border-b-0' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="absolute left-0 md:left-1/2 top-14 w-3 h-3 -translate-x-1/2 border-2 border-[#333333] bg-[#0a0a0a] rounded-full hidden md:block"
                />

                {/* Left side */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-2 md:pl-16'}`}>
                  <span className="font-mono text-sm text-[#555555] tracking-wider">
                    {exp.startYear} — {exp.endYear}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#fafafa] tracking-tight mt-2">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-sm text-[#a0a0a0] mt-1">
                    {exp.company}
                  </p>
                </div>

                {/* Right side */}
                <div className={`${index % 2 === 0 ? 'md:pl-16' : 'md:order-1 md:text-right md:pr-16'}`}>
                  <p className="text-[#a0a0a0] leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <p className="font-mono text-xs text-[#555555] tracking-wider uppercase">
                    → {exp.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
