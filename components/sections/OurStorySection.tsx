import { SectionWrapper } from '@/components/ui/SectionWrapper';

export function OurStorySection() {
  return (
    <SectionWrapper id="our-story" bgColor="bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Story
        </h2>

        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Be&apos;er Technologies was born from a simple but urgent realization:
            across Africa, millions of young people are eager to succeed, but lack
            access to the skills, mentorship, and opportunities needed to thrive in
            today&apos;s digital economy.
          </p>
          <p>
            We saw the disconnect between traditional education and real-world
            employment — and we chose to build a solution that is practical, modern,
            and outcome-driven.
          </p>
          <p>
            What started as a vision to train a few has grown into a mission to raise
            a generation of builders, innovators, and problem-solvers equipped for
            global relevance.
          </p>
          <p className="text-xl font-semibold text-gray-900 border-l-4 border-brand-blue pl-6 mt-8">
            At Be&apos;er, we don&apos;t just teach technology. We build capability,
            confidence, and careers.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
