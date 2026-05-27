'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import { personalInfo } from '@/data/personal';
import AnimatedText from '@/components/ui/AnimatedText';

const socialLinks = [
  { label: 'Email', href: `mailto:${personalInfo.email}`, display: personalInfo.email },
  { label: 'GitHub', href: personalInfo.github, display: 'github.com/gamasaurus' },
  { label: 'LinkedIn', href: personalInfo.linkedin, display: 'linkedin.com/in/gamalliel-sharon' },
  { label: 'Website', href: 'https://gmllshrn.vercel.app/', display: 'gmllshrn.vercel.app' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <AnimatedText
            text="Let's Connect"
            as="h2"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#fafafa]"
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-6 text-lg md:text-xl text-[#a0a0a0] max-w-2xl italic"
          >
            &ldquo;Currently building ideas between systems, design, and imagination.&rdquo;
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
        >
          {socialLinks.map(({ label, href, display }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              variants={fadeUp}
              className="group flex items-center justify-between py-8 border-b border-[#1f1f1f] hover:border-[#333333] transition-all duration-300 px-0 md:px-6"
            >
              <div>
                <span className="font-mono text-xs text-[#555555] tracking-[0.3em] uppercase block mb-2">
                  {label}
                </span>
                <span className="text-xl md:text-2xl text-[#a0a0a0] group-hover:text-[#fafafa] transition-colors duration-300">
                  {display}
                </span>
              </div>
              <motion.span
                className="text-[#333333] group-hover:text-[#fafafa] transition-colors text-2xl"
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
