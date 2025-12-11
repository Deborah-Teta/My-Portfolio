export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  category: 'Web App' | 'E-commerce' | 'Blog';
  image?:string
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Technical' | 'Tools' | 'Design';
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

