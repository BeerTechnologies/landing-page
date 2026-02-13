import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import Link from 'next/link';
import { Shield, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy | Be'er Technologies",
  description:
    "Privacy Policy for Be'er Technologies — how we collect, use, and protect your data.",
};

function SectionCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-warm-gray-100 border-l-4 border-l-brand-blue">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-xs font-bold shrink-0">
          {number}
        </span>
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="text-gray-700 leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function Privacy() {
  return (
    <Layout>
      {/* Hero header */}
      <div className="bg-linear-to-br from-brand-blue to-brand-blue-secondary pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Last updated: 10th February 2026
          </p>
          <p className="text-white/90 text-base md:text-lg mt-3 max-w-xl mx-auto">
            How we collect, use, and protect your data at Be&apos;er Technologies
          </p>
        </div>
      </div>

      {/* Content area — overlaps hero slightly */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12 -mt-8">
        <div className="space-y-5">
          <SectionCard number={1} title="Introduction">
            <p>
              Be&apos;er Technologies Ltd. (&quot;Be&apos;er Technologies&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
              protecting the privacy and security of your personal information.
              This Privacy Policy explains how we collect, use, store, and protect
              data when you visit our website or interact with our services.
            </p>
          </SectionCard>

          <SectionCard number={2} title="Information We Collect">
            <p className="mb-3">
              When you submit our waitlist form, we collect the following personal
              information:
            </p>
            <ul role="list" className="space-y-2.5">
              <ListItem>
                <strong>Full Name</strong> — to identify you and personalize
                communications.
              </ListItem>
              <ListItem>
                <strong>Email Address</strong> — to contact you about program
                enrollment, updates, and relevant opportunities.
              </ListItem>
              <ListItem>
                <strong>Program Interest</strong> — to understand which training
                programs you are interested in, so we can provide relevant
                information.
              </ListItem>
            </ul>
            <p className="mt-4">
              We do not collect payment information, government-issued IDs, or any
              sensitive personal data through our website.
            </p>
          </SectionCard>

          <SectionCard number={3} title="How We Use Your Information">
            <p className="mb-3">
              We use the information you provide for the following purposes:
            </p>
            <ul role="list" className="space-y-2.5">
              <ListItem>
                To notify you when enrollment opens for your chosen program.
              </ListItem>
              <ListItem>
                To send you updates about Be&apos;er Technologies programs, events,
                and opportunities.
              </ListItem>
              <ListItem>
                To understand demand for our various training programs and plan
                accordingly.
              </ListItem>
              <ListItem>
                To respond to your inquiries if you contact us directly.
              </ListItem>
            </ul>
            <p className="mt-4">
              We will not use your information for purposes unrelated to the
              services described above without your consent.
            </p>
          </SectionCard>

          <SectionCard number={4} title="Third-Party Services">
            <p>
              Our waitlist form is processed through{' '}
              <a
                href="https://formspree.io/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-blue hover:underline font-medium"
              >
                Formspree
                <ExternalLink size={14} />
              </a>
              , a third-party form handling service. When you submit the waitlist
              form, your data is transmitted to and stored by Formspree&apos;s
              servers, then forwarded to us via email. Formspree retains submission
              data in accordance with their privacy policy. We do not share your
              personal information with any other third parties for marketing or
              commercial purposes.
            </p>
          </SectionCard>

          <SectionCard number={5} title="Data Storage and Security">
            <p>
              We take reasonable technical and organizational measures to protect
              your personal information from unauthorized access, loss, misuse, or
              alteration. Your data is stored securely and access is limited to
              authorized personnel who need the information to perform their
              duties. However, no method of electronic transmission or storage is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </SectionCard>

          <SectionCard number={6} title="Data Retention">
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes described in this policy, or until you request
              its deletion. If you no longer wish to be on our waitlist, you may
              contact us to have your data removed.
            </p>
          </SectionCard>

          <SectionCard number={7} title="Your Rights">
            <p className="mb-3">
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul role="list" className="space-y-2.5">
              <ListItem>
                <strong>Access</strong> — request a copy of the personal data we
                hold about you.
              </ListItem>
              <ListItem>
                <strong>Correction</strong> — request that we correct any
                inaccurate or incomplete data.
              </ListItem>
              <ListItem>
                <strong>Deletion</strong> — request that we delete your personal
                data from our records.
              </ListItem>
              <ListItem>
                <strong>Withdrawal of Consent</strong> — withdraw your consent to
                receive communications from us at any time.
              </ListItem>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the details
              provided below.
            </p>
          </SectionCard>

          <SectionCard number={8} title="Cookies and Tracking">
            <p>
              Our website does not use cookies or third-party tracking technologies
              for advertising purposes. We may use essential cookies required for
              the website to function correctly. No analytics or tracking services
              are active on this site at launch.
            </p>
          </SectionCard>

          <SectionCard number={9} title="Children's Privacy">
            <p>
              While Be&apos;er Technologies offers programs for children and teens
              (ages 10-17), our waitlist form is intended to be completed by
              parents or legal guardians on behalf of minors. We do not knowingly
              collect personal information directly from children under the age of
              13 without parental consent.
            </p>
          </SectionCard>

          <SectionCard number={10} title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable regulations. Any updates will
              be posted on this page with a revised &quot;Last updated&quot; date.
              We encourage you to review this page periodically.
            </p>
          </SectionCard>

          <SectionCard number={11} title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or the handling of your personal data, please contact
              us at:
            </p>
            <div className="mt-4 bg-warm-gray-50 rounded-lg p-4 text-sm">
              <p className="font-semibold text-gray-900 mb-1">
                Be&apos;er Technologies Ltd.
              </p>
              <a
                href="mailto:info@beeredtech.com"
                className="inline-flex items-center gap-2 text-brand-blue hover:underline font-medium"
              >
                <Mail size={16} />
                info@beeredtech.com
              </a>
            </div>
          </SectionCard>
        </div>

        {/* Back to home */}
        <div className="mt-12">
          <Link href="/" className="text-brand-blue font-medium hover:underline">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
