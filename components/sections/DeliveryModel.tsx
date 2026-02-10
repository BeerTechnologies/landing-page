import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { DeliveryCard } from '@/components/ui/DeliveryCard';
import { deliveryModelItems } from '@/data/deliveryModel';

export function DeliveryModelSection() {
  return (
    <SectionWrapper id="delivery-model">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Delivery Model
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Building Digital Skills. Strengthening Teams. Creating Impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deliveryModelItems.slice(0, 3).map((item, i) => (
          <DeliveryCard key={item.stepNumber} item={item} index={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
        {deliveryModelItems.slice(3).map((item, i) => (
          <DeliveryCard key={item.stepNumber} item={item} index={i + 3} />
        ))}
      </div>
    </SectionWrapper>
  );
}
