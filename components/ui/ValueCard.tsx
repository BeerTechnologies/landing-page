import type { Value } from '@/data/values';

interface ValueCardProps {
  value: Value;
}

export function ValueCard({ value }: ValueCardProps) {
  const Icon = value.icon;

  return (
    <div className="group text-center p-6 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue text-white mb-4 group-hover:scale-110 transition-all duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
      <p className="text-sm text-gray-600">{value.description}</p>
    </div>
  );
}
