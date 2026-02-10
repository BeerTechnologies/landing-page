import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { programs } from '@/data/programs';

export function WaitlistSection() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <SectionWrapper id="waitlist" bgColor="bg-white">
        <div className="text-center max-w-lg mx-auto py-8">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            You&apos;re on the list!
          </h2>
          <p className="text-gray-600">
            We&apos;ll be in touch when enrollment opens.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="waitlist" bgColor="bg-white">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Join the Waitlist
        </h2>
        <p className="text-gray-600 mb-8">
          Be the first to know when enrollment opens.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-colors"
              placeholder="Your full name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label
              htmlFor="program"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Program Interest
            </label>
            <select
              id="program"
              name="program"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-colors"
              defaultValue=""
            >
              <option value="" disabled>
                Select a program
              </option>
              {programs.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
            <ValidationError
              prefix="Program"
              field="program"
              errors={state.errors}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={state.submitting}
          >
            {state.submitting ? 'Submitting...' : 'Join Waitlist'}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
