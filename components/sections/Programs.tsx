'use client';

import { useState } from 'react';
import { programs } from '@/data/programs';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ProgramCard } from '@/components/ui/ProgramCard';

export function ProgramsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SectionWrapper id="programs" bgColor="bg-warm-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 tracking-tight">
          Our Programs
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          Launch your career with industry-aligned skills. We offer structured
          bootcamps and intensive programs designed to equip learners with practical,
          job-ready digital skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
            isExpanded={expandedId === program.id}
            onToggle={() =>
              setExpandedId(expandedId === program.id ? null : program.id)
            }
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
