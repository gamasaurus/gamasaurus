import { writings, getAllSlugs, getWritingBySlug } from '@/data/writing';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogDetailClient from './BlogDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWritingBySlug(slug);
  if (!entry) return { title: 'Post Not Found' };

  return {
    title: `${entry.title} — Gamalliel Sharon`,
    description: entry.excerpt,
    openGraph: {
      title: entry.title,
      description: entry.excerpt,
      type: 'article',
      publishedTime: entry.date,
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getWritingBySlug(slug);
  if (!entry) notFound();

  return <BlogDetailClient entry={entry} />;
}
