import type { Project, Skill, Education, Experience } from './types';

export const projects: Project[] = [
  {
    id: 'ai-orchestrator',
    title: 'AI-Driven Support Orchestrator',
    description: 'A decoupled full-stack architecture featuring a React SPA and a RESTful ASP.NET Core API with JWT-based authentication.',
    techStack: ['ASP.NET Core', 'React', 'Gemini AI', 'PostgreSQL', 'SignalR', 'Vite'],
    category: 'Personal',
    highlights: [
      'Developed a decoupled full-stack architecture featuring a React SPA and a RESTful ASP.NET Core API, implementing JWT-based authentication for secure multi-role access.',
      'Integrated Gemini AI to perform automated ticket triage, utilizing NLP to assign priority scores and categories based on sentiment and complexity.',
      'Built an automated OCR pipeline extracting text from error screenshots, cross-referencing extracted logs with a PostgreSQL knowledge base.',
      'Leveraged SignalR to maintain real-time synchronization enabling live ticket updates and "agent-is-typing" indicators without page refreshes.'
    ],
    powerPhrase: 'Architected real-time AI triage system with automated OCR pipeline and seamless full-stack synchronization.',
  }
];

export const experiences: Experience[] = [
  {
    company: 'TMA Solutions',
    role: 'Fullstack Developer Intern',
    period: 'February 2026 – May 2026',
    description: [
      'Financial Analytics Platform: Built backend APIs, migrated analytics logic from frontend to backend, implemented authentication and database integration for a real-time revenue analytics system. (ASP.NET Core, Next.js, PostgreSQL)',
      'Corporate Actions System: Migrated frontend architecture, integrated authentication/authorization systems, and connected frontend applications with backend services for portfolio analysis workflows. (ASP.NET MVC, Next.js, IdentityServer)',
      'AI OCR Document Processor: Converted application architecture from React to MVC and integrated frontend/backend workflows for automated PDF table extraction and processing. (ASP.NET MVC, React/Vite, Gemini AI)'
    ],
  },
];

export const skills: Skill[] = [
  { name: 'ASP.NET Core', icon: 'Layers', category: 'Backend' },
  { name: 'C#', icon: 'Code2', category: 'Backend' },
  { name: 'React', icon: 'Atom', category: 'Frontend' },
  { name: 'JavaScript', icon: 'FileCode2', category: 'Frontend' },
  { name: 'SQL Server', icon: 'Database', category: 'Database' },
  { name: 'PostgreSQL', icon: 'Database', category: 'Database' },
  { name: 'MySQL', icon: 'Database', category: 'Database' },
];

export const education: Education = {
  institution: 'Ho Chi Minh University of Science, VNU',
  degree: 'Advanced Program in Computer Science',
  period: 'Present',
  details: [
    'Focus on advanced software engineering and system architecture.',
    'Certifications: IELTS 6.0 (2020)',
  ],
};

export const personalInfo = {
  name: 'Võ Huy Dâng',
  title: 'Fullstack Developer',
  email: 'vohuydang001@gmail.com',
  phone: '0918819631',
  github: 'https://github.com/heeyoung-vox',
  linkedin: 'https://www.linkedin.com/in/vohuydang/',
  about: 'Fullstack Developer with expertise in ASP.NET Core, React, and building scalable data-driven web applications. Proven experience in integrating AI solutions and migrating complex frontend architectures.',
};
