'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '@/lib/animations';
import { skills } from '@/data/skills';
import SectionHeading from '@/components/ui/SectionHeading';
import Marquee from '@/components/ui/Marquee';

export default function Skills() {
  const technicalSkills = skills.filter((s) => s.category === 'technical');
  const conceptualSkills = skills.filter((s) => s.category === 'conceptual');
  const allSkillNames = skills.map((s) => s.name);

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number={4}
          title="Skills & Stack"
          subtitle="The tools and thinking frameworks I work with."
        />
      </div>

      {/* Marquee Section */}
      <div className="my-16 space-y-4">
        <Marquee speed={25} direction="left">
          {allSkillNames.map((skill) => (
            <span
              key={skill}
              className="px-8 py-4 font-mono text-xl md:text-2xl text-[#333333] hover:text-[#fafafa] transition-colors duration-300 whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </Marquee>
        <Marquee speed={30} direction="right">
          {[...allSkillNames].reverse().map((skill) => (
            <span
              key={skill}
              className="px-8 py-4 font-mono text-xl md:text-2xl text-[#333333] hover:text-[#fafafa] transition-colors duration-300 whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Editorial Grid */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Technical */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="font-mono text-xs text-[#555555] tracking-[0.3em] uppercase mb-8">
              Technical
            </h3>
            <div className="space-y-0">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group flex items-center justify-between py-4 border-b border-[#1f1f1f] hover:border-[#333333] transition-colors"
                >
                  <span className="text-lg text-[#a0a0a0] group-hover:text-[#fafafa] transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-[#333333] group-hover:text-[#555555] transition-colors">
                    —
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conceptual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="font-mono text-xs text-[#555555] tracking-[0.3em] uppercase mb-8">
              Conceptual
            </h3>
            <div className="space-y-0">
              {conceptualSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group flex items-center justify-between py-4 border-b border-[#1f1f1f] hover:border-[#333333] transition-colors"
                >
                  <span className="text-lg text-[#a0a0a0] group-hover:text-[#fafafa] transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-[#333333] group-hover:text-[#555555] transition-colors">
                    —
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
