import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Projects', page: 'projects' },
    { label: 'Services', page: 'services' },
    { label: 'Our Process', page: 'process' },
    { label: 'Craftsmanship', page: 'craftsmanship' },
    { label: 'About', page: 'about' },
    { label: 'Walkthrough', page: 'walkthrough' }
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0e1013]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white hover:text-[#c4a47c] transition-colors cursor-pointer text-left"
          >
            Vander &amp; Cole
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 transition-colors hover:text-white cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-neutral-400'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c4a47c]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-5 py-2.5 rounded-sm bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-sm hover:shadow"
            >
              Request Consultation
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white md:hidden cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12151a] border-b border-neutral-800 px-6 py-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left text-lg font-display py-2 border-b border-neutral-800 flex items-center justify-between cursor-pointer ${
                  currentPage === item.page ? 'text-[#c4a47c]' : 'text-neutral-200'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('journal');
                }}
                className="text-left text-sm text-neutral-400 py-1"
              >
                Journal &amp; Building Science
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('contact');
                }}
                className="text-left text-sm text-neutral-400 py-1"
              >
                Offices &amp; Contact
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('faq');
                }}
                className="text-left text-sm text-neutral-400 py-1"
              >
                Frequently Asked Questions
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
