import { Award, Target, Lightbulb, Shield, Heart, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const values: Value[] = [
  {
    title: 'Excellence',
    description: 'We deliver training with global standards, not shortcuts.',
    icon: Award,
  },
  {
    title: 'Outcome-Driven Learning',
    description:
      'Education must translate into skill, productivity, and opportunity.',
    icon: Target,
  },
  {
    title: 'Innovation',
    description:
      'We embrace technology and AI to improve learning, access, and scale.',
    icon: Lightbulb,
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency, trust, and responsibility.',
    icon: Shield,
  },
  {
    title: 'Impact',
    description: 'We measure success not only by revenue, but by lives transformed.',
    icon: Heart,
  },
  {
    title: 'Community',
    description: 'We believe growth is strongest when it is shared.',
    icon: Users,
  },
];
