import {
  Code2,
  Monitor,
  Smartphone,
  BarChart3,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  prerequisites: string;
  outcomes: string[];
  isKids: boolean;
}

export const programs: Program[] = [
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    description:
      'Master both frontend and backend technologies to build complete web applications.',
    icon: Code2,
    duration: '16 weeks',
    prerequisites: 'Basic computer literacy',
    outcomes: [
      'Build full-stack web apps',
      'Deploy to cloud platforms',
      'Work with databases',
      'REST API design',
    ],
    isKids: false,
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Specialize in building modern, interactive user interfaces with React and its ecosystem.',
    icon: Monitor,
    duration: '12 weeks',
    prerequisites: 'Basic HTML, CSS & JavaScript knowledge',
    outcomes: [
      'Build React SPAs',
      'State management',
      'Component architecture',
      'Modern tooling',
    ],
    isKids: false,
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description:
      'Learn to build cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    duration: '16 weeks',
    prerequisites: 'Basic programming knowledge',
    outcomes: [
      'Cross-platform mobile apps',
      'App store deployment',
      'Mobile UI/UX',
      'API integration',
    ],
    isKids: false,
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights using modern analytics tools and techniques.',
    icon: BarChart3,
    duration: '12 weeks',
    prerequisites: 'Basic computer literacy',
    outcomes: [
      'Data visualization',
      'Statistical analysis',
      'Python for data',
      'Dashboard creation',
    ],
    isKids: false,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    description:
      'Learn to protect systems and networks from digital threats using industry-standard practices.',
    icon: ShieldCheck,
    duration: '12 weeks',
    prerequisites: 'Basic networking knowledge',
    outcomes: [
      'Threat detection',
      'Penetration testing',
      'Security audits',
      'Compliance frameworks',
    ],
    isKids: false,
  },
  {
    id: 'kids-teen',
    title: 'Kids & Teen Tech Programs',
    description:
      'Fun, engaging programs introducing young minds to coding, design, and digital creativity.',
    icon: GraduationCap,
    duration: '8 weeks',
    prerequisites: 'None — designed for beginners',
    outcomes: [
      'Scratch & block coding',
      'Basic web development',
      'Computational thinking',
      'Tech creativity projects',
    ],
    isKids: true,
  },
];
