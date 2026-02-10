import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Crosshair, Eye } from 'lucide-react';

export function MissionVisionSection() {
  return (
    <SectionWrapper id="mission-vision">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Our Mission &amp; Vision
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Mission Card */}
        <div className="group rounded-xl border-t-4 border-t-brand-blue bg-white p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 mb-4 group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-300">
            <Crosshair className="text-brand-blue" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To empower Africans through industry-aligned digital training,
            mentorship, and technology-enabled learning that leads to real
            employability and economic opportunity.
          </p>
        </div>

        {/* Vision Card */}
        <div className="group rounded-xl border-t-4 border-t-brand-burgundy bg-white p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-burgundy/10 mb-4 group-hover:scale-110 group-hover:bg-brand-burgundy/20 transition-all duration-300">
            <Eye className="text-brand-burgundy" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become Africa&apos;s most trusted engine for digital talent
            development — producing job-ready professionals, scalable learning
            systems, and measurable community impact.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
