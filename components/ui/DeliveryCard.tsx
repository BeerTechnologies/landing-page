import type { DeliveryModelItem } from '@/data/deliveryModel';

interface DeliveryCardProps {
  item: DeliveryModelItem;
  index: number;
}

export function DeliveryCard({ item, index }: DeliveryCardProps) {
  const Icon = item.icon;

  return (
    <div
      className="group text-center p-6 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 mb-4 group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-300">
        <Icon className="text-brand-blue" size={24} />
      </div>
      <div className="text-xs font-bold text-brand-blue mb-2">
        Step {item.stepNumber}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
  );
}
