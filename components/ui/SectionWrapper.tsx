import type { ReactNode } from 'react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

export function SectionWrapper({
  id,
  children,
  className = '',
  bgColor = 'bg-white',
}: SectionWrapperProps) {
  const ref = useFadeInOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className={`fade-in-section py-16 md:py-24 px-4 md:px-6 lg:px-8 ${bgColor} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
