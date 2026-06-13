export type ActiveSection = 'home' | 'about' | 'projects' | 'skills' | 'experience' | 'education' | 'achievements' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: 'AI & ML Systems' | 'Cloud Operations' | 'Web Projects';
  description: string;
  details: string[];
  imageUrl: string;
  tags: string[];
  year: string;
  client: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
