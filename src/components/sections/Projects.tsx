'use client';

import Image from 'next/image';
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
          subtitle="Selected work — from AI platforms to creative systems and modern digital products."
        />

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -4 }}
              viewport={viewportConfig}
              className="group"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  index % 2 !== 0 ? 'direction-rtl' : ''
                }`}
              >
                {/* Project Preview */}
                <motion.div
                  className={`lg:col-span-7 ${
                    index % 2 !== 0 ? 'lg:order-2' : ''
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div
                    className="
                      relative
                      aspect-[16/10]
                      overflow-hidden
                      rounded-3xl
                      border
                      border-[#1f1f1f]
                      bg-[#0b0b0b]
                      transition-all
                      duration-500
                      group-hover:border-[#333333]
                    "
                  >
                    {/* Ambient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#101010] to-black" />

                    {/* Blur Glow */}
                    <div className="absolute -inset-10 opacity-20 blur-3xl bg-white/[0.03] group-hover:opacity-30 transition duration-700" />

                    {/* Image */}
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="
                        object-cover
                        object-top
                        transition-all
                        duration-700
                        brightness-[0.92]
                        contrast-110
                        saturate-[0.95]
                        group-hover:scale-105
                        group-hover:brightness-100
                        group-hover:contrast-125
                      "
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

                    {/* Project Number */}
                    <div className="absolute top-6 left-6">
                      <span className="font-mono text-xs text-white/50 tracking-[0.3em]">
                        {formatSectionNumber(index + 1)}
                      </span>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-6 right-6 backdrop-blur-md bg-black/40 border border-white/10 px-4 py-2 rounded-full">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-white/70 uppercase">
                        Live Project
                      </span>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-all duration-500" />
                  </div>
                </motion.div>

                {/* Project Info */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 !== 0 ? 'lg:order-1' : ''
                  }`}
                >
                  {/* Number & Year */}
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-mono text-sm text-[#555555] tracking-wider">
                      {formatSectionNumber(index + 1)}
                    </span>

                    <div className="h-px w-8 bg-[#222222]" />

                    <span className="font-mono text-sm text-[#555555]">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-semibold text-[#fafafa] tracking-tight mb-5 leading-none group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <p className="font-mono text-[11px] text-[#666666] tracking-[0.25em] uppercase mb-5">
                    {project.role}
                  </p>

                  {/* Description */}
                  <p className="text-[#9a9a9a] leading-relaxed text-[15px] md:text-base mb-6">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-8 border-l border-[#222222] pl-4">
                    <p className="text-sm text-[#e5e5e5] leading-relaxed">
                      → {project.impact}
                    </p>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          border
                          border-[#1f1f1f]
                          bg-[#0f0f0f]
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[0.15em]
                          text-[#666666]
                          hover:text-[#fafafa]
                          hover:border-[#333333]
                          transition-all
                          duration-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-3
                      font-mono
                      text-xs
                      tracking-[0.25em]
                      uppercase
                      text-[#9a9a9a]
                      hover:text-[#fafafa]
                      transition-colors
                      duration-300
                      group/link
                    "
                  >
                    Visit Project

                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
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