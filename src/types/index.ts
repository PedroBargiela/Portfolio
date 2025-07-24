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

export type Experience = {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  endDate?: string;
  skills: string[];
};

export interface Skill {
  name: string;
  level: string;
  icon?: string;
}

export type SkillCategory = {
  id: string;
  category: string;
  items: { name: string }[];
};

export type Project = {
  id: string;
  name: string;
  featured: boolean;
  images: string[];
  longDescription: string;
  technologies: string[];
  liveDemo?: string;
  githubRepo?: string;
};

export interface Language {
  id: string;
  name: string;
  level: string;
  flagIcon?: string;
}
