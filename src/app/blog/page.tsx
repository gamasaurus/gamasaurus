import type { Metadata } from 'next';
import BlogListClient from './BlogListClient';

export const metadata: Metadata = {
  title: 'Writing & Thoughts — Gamalliel Sharon',
  description: 'Ideas on system analysis, process automation, indie building, and modern web development.',
};

export default function BlogPage() {
  return <BlogListClient />;
}
