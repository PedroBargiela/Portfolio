export interface Profile {
  name: string;
  title: string;
  shortDescription: string;
  aboutMe: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
  profileImageURL: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  type: string;
  description: string[];
  order: number;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string | null;
  endDate: string | null;
  current: boolean;
  description: string[];
}

export interface Skill {
  name: string;
  level: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  items: Skill[];
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  videoURL?: string;
  githubRepo?: string;
  liveDemo?: string;
  featured: boolean;
}

export interface Language {
  id: string;
  name: string;
  level: string;
  flagIcon?: string;
}
