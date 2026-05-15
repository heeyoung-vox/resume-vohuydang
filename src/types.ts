export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: 'Internship' | 'Personal' | 'Academic';
  highlights: string[];
  powerPhrase: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Cloud' | 'Tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}
