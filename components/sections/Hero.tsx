import { Button } from '@/components/ui/Button';

const shapes = [
  // Large circles
  {
    className: 'w-40 h-40 rounded-full bg-white/[0.04] animate-float-slow',
    style: { top: '8%', left: '3%' },
  },
  {
    className: 'w-56 h-56 rounded-full bg-white/[0.03] animate-float-medium',
    style: { bottom: '10%', right: '5%', animationDelay: '3s' },
  },
  {
    className: 'w-36 h-36 rounded-full bg-white/[0.05] animate-float-diagonal',
    style: { top: '60%', left: '8%', animationDelay: '7s' },
  },
  {
    className: 'w-48 h-48 rounded-full bg-white/[0.03] animate-float-slow',
    style: { top: '15%', right: '12%', animationDelay: '5s' },
  },

  // Medium circles
  {
    className: 'w-24 h-24 rounded-full bg-white/[0.06] animate-float-medium',
    style: { top: '35%', left: '18%', animationDelay: '2s' },
  },
  {
    className: 'w-20 h-20 rounded-full bg-white/[0.05] animate-float-slow',
    style: { bottom: '25%', left: '45%', animationDelay: '8s' },
  },
  {
    className: 'w-28 h-28 rounded-full bg-white/[0.04] animate-float-diagonal',
    style: { top: '12%', left: '55%', animationDelay: '4s' },
  },
  {
    className: 'w-16 h-16 rounded-full bg-white/[0.07] animate-float-medium',
    style: { bottom: '35%', right: '25%', animationDelay: '6s' },
  },

  // Small circles
  {
    className: 'w-10 h-10 rounded-full bg-white/[0.08] animate-float-slow',
    style: { top: '45%', right: '8%', animationDelay: '1s' },
  },
  {
    className: 'w-8 h-8 rounded-full bg-white/[0.10] animate-float-medium',
    style: { top: '75%', left: '25%', animationDelay: '9s' },
  },
  {
    className: 'w-12 h-12 rounded-full bg-white/[0.06] animate-float-diagonal',
    style: { bottom: '15%', left: '65%', animationDelay: '3s' },
  },
  {
    className: 'w-6 h-6 rounded-full bg-white/[0.12] animate-float-slow',
    style: { top: '20%', left: '35%', animationDelay: '11s' },
  },

  // Diamonds (rotated squares)
  {
    className: 'w-20 h-20 rotate-45 bg-white/[0.04] animate-float-diagonal',
    style: { top: '28%', right: '20%', animationDelay: '2s' },
  },
  {
    className: 'w-14 h-14 rotate-45 bg-white/[0.05] animate-float-slow',
    style: { bottom: '40%', left: '12%', animationDelay: '6s' },
  },
  {
    className:
      'w-10 h-10 rotate-45 border-2 border-white/[0.08] animate-float-medium',
    style: { top: '55%', left: '5%', animationDelay: '4s' },
  },
  {
    className: 'w-16 h-16 rotate-45 bg-white/[0.03] animate-float-diagonal',
    style: { bottom: '20%', right: '35%', animationDelay: '10s' },
  },

  // Outlined shapes
  {
    className:
      'w-24 h-24 rounded-full border-2 border-white/[0.06] animate-float-slow',
    style: { top: '70%', right: '10%', animationDelay: '7s' },
  },
  {
    className:
      'w-32 h-32 rounded-full border border-white/[0.04] animate-float-medium',
    style: { top: '5%', left: '42%', animationDelay: '5s' },
  },
  {
    className:
      'w-16 h-16 rotate-12 border-2 border-white/[0.07] animate-float-diagonal',
    style: { top: '50%', right: '40%', animationDelay: '1s' },
  },

  // Burgundy accent shapes
  {
    className: 'w-20 h-20 rounded-full bg-brand-burgundy/15 animate-float-slow',
    style: { bottom: '30%', left: '30%', animationDelay: '8s' },
  },
  {
    className: 'w-12 h-12 rounded-full bg-brand-burgundy/10 animate-float-medium',
    style: { top: '40%', right: '15%', animationDelay: '3s' },
  },

  // Hexagons (via clip-path)
  {
    className: 'w-20 h-20 bg-white/[0.04] animate-float-diagonal',
    style: {
      top: '18%',
      right: '30%',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      animationDelay: '6s',
    },
  },
  {
    className: 'w-14 h-14 bg-white/[0.06] animate-float-slow',
    style: {
      bottom: '45%',
      right: '50%',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      animationDelay: '12s',
    },
  },

  // Tiny dots
  {
    className: 'w-4 h-4 rounded-full bg-white/[0.15] animate-float-medium',
    style: { top: '30%', left: '50%', animationDelay: '2s' },
  },
  {
    className: 'w-3 h-3 rounded-full bg-white/[0.18] animate-float-slow',
    style: { top: '65%', right: '30%', animationDelay: '9s' },
  },
  {
    className: 'w-5 h-5 rounded-full bg-white/[0.12] animate-float-diagonal',
    style: { bottom: '50%', left: '70%', animationDelay: '5s' },
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-blue to-brand-blue-secondary" />

      {/* Geometric decorations */}
      {shapes.map((shape, i) => (
        <div key={i} className={`absolute ${shape.className}`} style={shape.style} />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {['Empowering', 'Africa', 'Through', 'Digital', 'Mastery'].map(
            (word, i) => (
              <span
                key={word}
                className="inline-block animate-hero-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
              >
                {word}
                {i < 4 && <>&nbsp;</>}
              </span>
            )
          )}
        </h1>
        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-hero-fade-up"
          style={{ animationDelay: '0.75s' }}
        >
          Be&apos;er Technologies is an African EdTech company committed to
          empowering individuals, organizations, and communities through practical
          digital mastery. We exist to bridge the gap between learning and
          employability — at scale.
        </p>
        <div
          className="animate-hero-fade-up"
          style={{ animationDelay: '1s' }}
        >
          <Button variant="outline" size="lg" href="#waitlist">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
