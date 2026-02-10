import Image from 'next/image';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <Image
              src="/icons/btech_logo.png"
              alt="Be'er Technologies"
              width={48}
              height={48}
              className="rounded mb-4"
            />
            <p className="text-sm text-gray-400 max-w-xs">
              Empowering Africa through practical digital mastery. Building
              capability, confidence, and careers.
            </p>
          </div>

          {/* Links column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-white transition-colors">
                  Our Values
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-white transition-colors">
                  Join Waitlist
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@beertech.com"
                  className="hover:text-white transition-colors"
                >
                  For Businesses
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <a
              href="mailto:hello@beertech.com"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors mb-4"
            >
              <Mail size={16} />
              hello@beertech.com
            </a>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Be&apos;er Technologies Ltd. All rights
            reserved.
          </p>
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
