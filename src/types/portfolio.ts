export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Fullstack' | 'Backend & Blockchain' | 'AI & ML';
  date: string;
  tools: string[];
  description: string;
  problemStatement: string;
  keyFeatures: string[];
  architecture: string;
  engineeringChallenges: string[];
  futureImprovements: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}
