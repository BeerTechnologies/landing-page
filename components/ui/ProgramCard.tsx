import { ChevronDown } from 'lucide-react';
import type { Program } from '@/data/programs';

interface ProgramCardProps {
  program: Program;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProgramCard({ program, isExpanded, onToggle }: ProgramCardProps) {
  const Icon = program.icon;

  return (
    <div
      className={`group relative rounded-xl border bg-white transition-all duration-300 ${
        program.isKids
          ? 'border-brand-burgundy border-2'
          : isExpanded
            ? 'border-brand-blue/40 shadow-lg shadow-brand-blue/5'
            : 'border-gray-200 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Expanded accent bar */}
      <div
        className={`absolute left-0 top-4 bottom-4 w-1 rounded-full transition-all duration-300 ${
          isExpanded ? 'bg-brand-blue opacity-100' : 'bg-transparent opacity-0'
        }`}
      />

      {/* Kids badge */}
      {program.isKids && (
        <div className="absolute top-3 right-3 bg-brand-burgundy text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
          Ages 10-17
        </div>
      )}

      {/* Clickable header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded ? 'true' : 'false'}
        className="w-full flex items-start justify-between p-6 text-left cursor-pointer"
      >
        <div className="flex items-start gap-4 pr-4">
          <div
            className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isExpanded
                ? 'bg-brand-blue'
                : 'bg-brand-blue/10 group-hover:bg-brand-blue/15'
            }`}
          >
            <Icon
              className={`transition-colors duration-300 ${
                isExpanded ? 'text-white' : 'text-brand-blue'
              }`}
              size={24}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{program.description}</p>
          </div>
        </div>
        <ChevronDown
          className={`shrink-0 mt-1 text-gray-400 transition-transform duration-300 ${
            isExpanded ? 'rotate-180 text-brand-blue' : ''
          }`}
          size={20}
        />
      </button>

      {/* Expandable content */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-3 border-t border-gray-100">
            <div className="space-y-4 text-sm">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 bg-brand-blue/5 text-brand-blue px-3 py-1.5 rounded-full text-xs font-medium">
                  {program.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">
                  {program.prerequisites}
                </span>
              </div>

              <div>
                <span className="font-semibold text-gray-900 text-sm">
                  What You&apos;ll Learn
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {program.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-lg text-xs"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
