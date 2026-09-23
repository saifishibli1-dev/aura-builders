export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Custom Homes' | 'Luxury Renovations' | 'Commercial' | 'Architectural Builds';
  location: string;
  year: string;
  squareFootage: string;
  architect: string;
  leadTime: string;
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  concept: string;
  description: string;
  materials: string[];
  scope: string[];
  awardsOrFeatures?: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  idealFor: string;
  keyDeliverables: string[];
  typicalTimeline: string;
  investmentTier: string;
  craftDetails: {
    title: string;
    description: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  phaseName: string;
  duration: string;
  description: string;
  deliverables: string[];
  details: string;
  image: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Cost & Contracts' | 'Process' | 'Warranties';
}

export type PageView =
  | 'home'
  | 'projects'
  | 'project-detail'
  | 'services'
  | 'service-detail'
  | 'about'
  | 'process'
  | 'craftsmanship'
  | 'walkthrough'
  | 'journal'
  | 'contact'
  | 'quote'
  | 'faq'
  | 'privacy'
  | 'terms';
