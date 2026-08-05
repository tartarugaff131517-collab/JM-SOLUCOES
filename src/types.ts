export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  items: {
    name: string;
    description: string;
    specs: string[];
    image: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residencial' | 'Comercial' | 'Industrial' | 'Minimalista';
  image: string;
  location: string;
  completionYear: string;
  profileLine: string;
  glassType: string;
  description: string;
  gallery: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  specs: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Orçamento' | 'Garantia' | 'Técnico';
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface ProcessStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Differential {
  title: string;
  description: string;
  iconName: string;
}

export interface RenovationServiceItem {
  id: string;
  title: string;
  category: 'Estrutura & Alvenaria' | 'Acabamentos & Interiores' | 'Esquadrias, Vidros & Manutenção' | 'Fachadas, Coberturas & Proteção';
  description: string;
  iconName: string;
  badge?: string;
  tags: string[];
  image: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  projectCategory: 'Residencial' | 'Comercial' | 'Industrial' | 'Outro';
  serviceType: string;
  timeline: string;
  notes: string;
}
