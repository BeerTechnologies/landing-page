import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById('hero');
    const waitlistEl = document.getElementById('waitlist');
    if (!heroEl || !waitlistEl) return;

    let heroPassed = false;
    let waitlistReached = false;

    const update = () => setIsVisible(heroPassed && !waitlistReached);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroPassed = !entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );

    const waitlistObserver = new IntersectionObserver(
      ([entry]) => {
        waitlistReached = entry.isIntersecting;
        update();
      },
      { threshold: 0, rootMargin: '0px 0px 100px 0px' },
    );

    heroObserver.observe(heroEl);
    waitlistObserver.observe(waitlistEl);

    return () => {
      heroObserver.disconnect();
      waitlistObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Button variant="primary" size="lg" href="#waitlist" className="w-full">
        Join the Waitlist
      </Button>
    </div>
  );
}
