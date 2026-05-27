import { WritingEntry } from '@/types';

export const writings: WritingEntry[] = [
  {
    id: 1,
    title: 'From System Analyst to Indie Builder',
    slug: 'from-system-analyst-to-indie-builder',
    topic: 'Indie Building',
    date: '2025-05',
    readingTime: '6 min read',
    excerpt: 'How systems thinking became my unfair advantage in building modern digital products independently.',
    url: '/blog/from-system-analyst-to-indie-builder',
    content: [
      'Most people think system analysts only write documentation. In reality, the role trains you to see systems beneath the surface — workflows, bottlenecks, relationships, edge cases, and human behavior hidden inside processes.',
      
      'That mindset became unexpectedly valuable when I started building products independently. While many indie developers begin with code, I begin with structure: user flows, business rules, data relationships, and interaction patterns.',
      
      'Working across manufacturing and insurance industries taught me that good systems are invisible. Users should feel clarity, not complexity. Whether designing an ERP workflow or building an AI platform, the goal remains the same: reduce friction and create momentum.',
      
      'When building products like Aluria AI and Wonderkid, I applied the same enterprise thinking I used in corporate environments. Requirements became product strategy. Process mapping became UX flow design. Documentation discipline became scalable architecture.',
      
      'The difference is speed. Indie building removes layers of approval and transforms ideas into experiments. I can design a concept at night, prototype it the next day, and deploy globally within a week.',
      
      'For me, technology is not just engineering. It’s world-building. Every product is a small ecosystem of logic, design, and human interaction stitched together into something alive.',
    ],
  },

  {
    id: 2,
    title: 'Designing AI Tools for System Analysts',
    slug: 'designing-ai-tools-for-system-analysts',
    topic: 'AI & Systems',
    date: '2025-04',
    readingTime: '5 min read',
    excerpt: 'Why documentation workflows are broken — and how AI can transform the way analysts work.',
    url: '/blog/designing-ai-tools-for-system-analysts',
    content: [
      'System Analysts spend enormous amounts of time translating conversations into documents. BRDs, flowcharts, use cases, test scenarios, functional specifications — the work is valuable, but the process is often repetitive and fragmented.',
      
      'After years of working in enterprise environments, I noticed the same pattern everywhere: information scattered across meetings, chats, spreadsheets, and PDFs. Analysts became human synchronization engines between business and technical teams.',
      
      'That observation became the foundation for Aluria AI.',
      
      'I wanted to explore a different workflow: what if documentation could evolve directly from source-of-truth conversations? What if AI could help analysts generate structured outputs without losing context, clarity, or analytical thinking?',
      
      'Building AI tools for analysts is not about replacing analysts. It’s about reducing operational friction so they can focus on higher-level problem solving, product thinking, and communication.',
      
      'The challenge is balancing automation with trust. Enterprise users don’t want black-box outputs. They need traceability, structure, and predictable logic. That’s why designing AI systems for enterprise workflows requires both technical understanding and systems empathy.',
      
      'I believe the future analyst will not spend most of their time formatting documents. They will spend their time designing better systems, validating decisions faster, and orchestrating collaboration between humans and AI.',
    ],
  },

  {
    id: 3,
    title: 'Creative Technology and the Future of Building',
    slug: 'creative-technology-and-the-future-of-building',
    topic: 'Creative Technology',
    date: '2025-02',
    readingTime: '4 min read',
    excerpt: 'Exploring the intersection of systems, design, and imagination in modern product development.',
    url: '/blog/creative-technology-and-the-future-of-building',
    content: [
      'Technology used to feel purely functional. Interfaces were rigid. Systems were cold. Software solved problems, but rarely inspired emotion.',
      
      'That landscape is changing.',
      
      'Modern builders are no longer separated into strict categories like engineer, designer, or strategist. The most interesting products today emerge from people who can blend technical execution with creative intuition.',
      
      'I’ve always been fascinated by the space between structure and imagination. One day I’m mapping enterprise workflows. The next day I’m designing a gothic-inspired visual identity or experimenting with AI-generated interfaces.',
      
      'To me, these worlds are connected.',
      
      'System design teaches logic. Design teaches emotion. Product building sits somewhere between the two, translating invisible ideas into experiences people can actually feel.',
      
      'This is why I enjoy building across different mediums: SaaS products, creative tools, automation systems, visual brands, even game concepts. Each project sharpens a different way of thinking.',
      
      'The future belongs to hybrid builders — people comfortable moving between analysis and aesthetics, systems and storytelling, engineering and experimentation.',
      
      'Technology is becoming more human-shaped. And that makes building more exciting than ever.',
    ],
  },
];

export function getWritingBySlug(slug: string): WritingEntry | undefined {
  return writings.find((w) => w.slug === slug);
}

export function getAllSlugs(): string[] {
  return writings.map((w) => w.slug);
}