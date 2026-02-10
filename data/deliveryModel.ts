import { BookOpen, Hammer, UserCheck, TrendingUp, RefreshCw } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface DeliveryModelItem {
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const deliveryModelItems: DeliveryModelItem[] = [
  {
    stepNumber: 1,
    title: 'Industry-Aligned Curriculum',
    description:
      'Our programs are built around what employers actually need, updated regularly to match industry trends.',
    icon: BookOpen,
  },
  {
    stepNumber: 2,
    title: 'Project-Based Learning',
    description:
      'Learn by building real projects that form your professional portfolio.',
    icon: Hammer,
  },
  {
    stepNumber: 3,
    title: 'Mentorship & Accountability',
    description:
      'Every learner is paired with mentors who guide, challenge, and support their growth.',
    icon: UserCheck,
  },
  {
    stepNumber: 4,
    title: 'Measurable Outcomes',
    description: 'We track progress with clear metrics so you can see your growth.',
    icon: TrendingUp,
  },
  {
    stepNumber: 5,
    title: 'Continuous Improvement',
    description:
      'We iterate on our programs based on learner feedback and industry shifts.',
    icon: RefreshCw,
  },
];
