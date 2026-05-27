'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '@/lib/animations';
import { projects } from '@/data/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import { formatSectionNumber } from '@/lib/utils';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number={3}
          title="Projects"
          subtitle="Selected work — from AI platforms to design tools and point-of-sale systems."
        />

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="group"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                index % 2 !== 0 ? 'direction-rtl' : ''
              }`}>
                {/* Project Image / Preview */}
                <motion.div
                  className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
                >
                  <div className="relative aspect-[16/10] bg-[#111111] border border-[#1f1f1f] overflow-hidden group-hover:border-[#333333] transition-colors duration-500">
                    {/* Gradient placeholder for project image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111111] to-[#0a0a0a]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-6xl md:text-8xl font-bold text-[#1f1f1f] group-hover:text-[#333333] transition-colors duration-500">
                        {formatSectionNumber(index + 1)}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#fafafa]/0 group-hover:bg-[#fafafa]/[0.02] transition-all duration-500" />
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  {/* Number & Year */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-sm text-[#555555] tracking-wider">
                      {formatSectionNumber(index + 1)}
                    </span>
                    <span className="font-mono text-sm text-[#555555]">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-semibold text-[#fafafa] tracking-tight mb-4 group-hover:text-[#e0e0e0] transition-colors">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <p className="font-mono text-xs text-[#555555] tracking-[0.2em] uppercase mb-4">
                    {project.role}
                  </p>

                  {/* Description */}
                  <p className="text-[#a0a0a0] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <p className="text-sm text-[#e0e0e0] mb-6">
                    → {project.impact}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 font-mono text-[11px] text-[#555555] border border-[#1f1f1f] tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visit Project Link */}
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#a0a0a0] tracking-[0.2em] uppercase hover:text-[#fafafa] transition-colors duration-300 group/link"
                  >
                    Visit Project
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
