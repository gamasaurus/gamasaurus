export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  philosophy: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  yearsExperience: number;
  projectsCompleted: number;
  cvUrl: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  startYear: string;
  endYear: string;
  impact: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  role: string;
  impact: string;
  imageUrl: string;
  caseStudyUrl: string;
  year: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'conceptual';
}

export interface WritingEntry {
  id: number;
  title: string;
  slug: string;
  topic: string;
  date: string;
  excerpt: string;
  content: string[];
  readingTime: string;
  url: string;
}
