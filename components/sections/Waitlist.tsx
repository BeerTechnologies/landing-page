'use client';

import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle, Shield, Mail } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { programs, Program } from '@/data/programs';

export function WaitlistSection() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <SectionWrapper id="waitlist" bgColor="bg-white">
        <div className="text-center max-w-lg mx-auto py-8">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-green-500" size={32} />
          </div>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
            You&apos;re on the list!
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;ll send you an email when enrollment opens for your selected
            program. Keep an eye on your inbox.
          </p>
          <p className="text-sm text-gray-500">
            Meanwhile, follow us on social media for updates and tech tips.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="waitlist" bgColor="bg-white">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2 tracking-tight">
          Join the Waitlist
        </h2>
        <p className="text-gray-600 mb-10">
          Reserve your spot. Join aspiring tech professionals waiting for our next
          cohort.
        </p>

        <div className="bg-linear-to-br from-brand-blue/3 to-brand-burgundy/3 rounded-2xl p-8 md:p-10 border border-brand-blue/10">
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
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-colors shadow-sm"
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
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-colors shadow-sm"
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
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-colors shadow-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a program
                </option>
                {programs.map((p: Program) => (
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

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Shield size={14} className="text-green-600" />
              Your data is secure
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-gray-400" />
              No spam
            </span>
          </div>
        </div>

        {/* Privacy link */}
        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy.{' '}
          <Link href="/privacy" className="text-brand-blue hover:underline">
            See our Privacy Policy
          </Link>
          .
        </p>
      </div>
    </SectionWrapper>
  );
}
