'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '@/lib/animations';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Email', href: `mailto:${personalInfo.email}` },
    { label: 'GitHub', href: personalInfo.github },
    { label: 'LinkedIn', href: personalInfo.linkedin },
    { label: 'Website', href: 'https://gmllshrn.vercel.app/' },
  ];

  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="border-t border-[#1f1f1f] py-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-[#555555] tracking-wider">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs text-[#555555] tracking-wider uppercase hover:text-[#fafafa] transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
