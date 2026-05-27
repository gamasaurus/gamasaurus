import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Aluria AI',
    description:
      'An AI-powered platform focused on transforming the way System Analysts and product teams create documentation. Built to generate structured outputs such as BRD, flow diagrams, use cases, and technical documentation through intelligent workflows and source-of-truth driven generation. Designed end-to-end with a strong emphasis on usability, speed, and creative interaction.',
    stack: [
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Supabase',
      'Tailwind CSS',
      'Vercel',
    ],
    role: 'Founder · Product Designer · Full-stack Developer',
    impact:
      'Built an AI-native documentation ecosystem for analysts, builders, and digital teams.',
    imageUrl: '/projects/aluria.png',
    caseStudyUrl: 'https://aluria-ai.vercel.app',
    year: '2026',
  },

  {
    id: 2,
    title: 'Dasiba Ban — Point of Sales',
    description:
      'A responsive Point of Sales platform developed for operational business usage. Focused on usability, transaction flow efficiency, and modern UI responsiveness. Included product management, transaction handling, and content-driven features to support customer engagement and operational visibility.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Vercel',
    ],
    role: 'Full-stack Developer',
    impact:
      'Delivered a production-ready POS system supporting real business operations.',
    imageUrl: '/projects/dasiba.png',
    caseStudyUrl: 'https://dasiba-ban.vercel.app',
    year: '2024',
  },

  {
    id: 3,
    title: 'Chamjo Design',
    description:
      'An experimental digital design platform exploring the intersection of visual identity, branding, and modern web experiences. Built with a visually immersive interface, modular content architecture, and optimized backend services for seamless interaction and scalability.',
    stack: [
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Supabase',
      'Tailwind CSS',
      'Vercel',
    ],
    role: 'Creative Developer · Brand Designer · Full-stack Engineer',
    impact:
      'Merged design experimentation with scalable modern web architecture.',
    imageUrl: '/projects/chamjo.png',
    caseStudyUrl: 'https://chamjo.design',
    year: '2020',
  },
];