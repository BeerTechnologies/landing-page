import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useScrollspy } from '@/hooks/useScrollspy';
import { navLinks } from '@/data/navigation';
import { Button } from '@/components/ui/Button';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export function Navbar() {
  const scrollY = useScrollPosition();
  const activeId = useScrollspy(sectionIds);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = scrollY > 50;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <Image
            src="/icons/btech_logo.png"
            alt=""
            width={40}
            height={40}
            className="rounded"
          />
          <span className="sr-only">Be&apos;er Technologies Home</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeId === link.href.replace('#', '')
                  ? isScrolled
                    ? 'text-brand-blue'
                    : 'text-white font-bold'
                  : isScrolled
                    ? 'text-gray-700 hover:text-brand-blue'
                    : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant={isScrolled ? 'primary' : 'outline'}
            size="sm"
            href="#waitlist"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        >
          {isMobileMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu
              size={24}
              className={isScrolled ? 'text-gray-800' : 'text-white'}
            />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="bg-white shadow-lg border-t px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`block text-base font-medium py-2 ${
                activeId === link.href.replace('#', '')
                  ? 'text-brand-blue'
                  : 'text-gray-700 hover:text-brand-blue'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            size="md"
            href="#waitlist"
            onClick={closeMobileMenu}
            className="w-full mt-2"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
}
