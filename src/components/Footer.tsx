import React from 'react';
import { PageView } from '../types';
import { COMPANY_DETAILS } from '../data/contentData';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote, onReplayIntro }) => {
  return (
    <footer className="w-full bg-[#090b0e] text-[#a0a7b5] border-t border-[#1e222a]">
      {/* Consultation Banner Callout */}
      <div className="border-b border-[#1b1f27] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-2 block">
              Direct General Contractor Inquiries
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Have an architectural commission or land in planning?
            </h3>
            <p className="mt-2 text-sm text-[#8c94a2]">
              We evaluate feasibility, review preliminary architectural drawings, and model construction schedules with complete open-book clarity.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider transition-all rounded-sm shadow-md cursor-pointer whitespace-nowrap"
            >
              Request Project Consultation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#141820] hover:bg-[#1c212c] text-white border border-[#2b313d] text-xs font-medium uppercase tracking-wider transition-all rounded-sm cursor-pointer whitespace-nowrap"
            >
              Contact Studios
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Regional Information */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-2xl font-display font-bold text-white tracking-tight">
              Vander &amp; Cole
            </div>
            <p className="text-xs text-[#808896] leading-relaxed max-w-sm">
              Architectural general contractor and custom residential builder delivering museum-grade estates, complex hillside foundations, and landmark commercial pavilions across Washington and Northern California.
            </p>
            <div className="space-y-2 pt-2 text-xs font-mono text-[#a0a7b5]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c4a47c]" />
                <span>Seattle: {COMPANY_DETAILS.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c4a47c]" />
                <span>San Francisco / Marin: {COMPANY_DETAILS.secondaryPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c4a47c]" />
                <span>{COMPANY_DETAILS.email}</span>
              </div>
            </div>
          </div>

          {/* Navigation Column 1: Core Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Commissions &amp; Work
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('walkthrough')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Spatial Walkthrough</span>
                  <ArrowUpRight className="w-3 h-3 text-[#c4a47c]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Building Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  5-Phase Construction Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('craftsmanship')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Craftsmanship &amp; Building Science
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: The Firm */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              The Firm
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Founders &amp; Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Journal &amp; Technical Notes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cost &amp; Contract FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Regional Offices
                </button>
              </li>
              <li>
                <a
                  href="#client-portal"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Client Portal access is reserved for active project owners. Please contact your dedicated Project Manager for login credentials.');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#c4a47c]"
                >
                  Owner Portal (Procore)
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Service Areas */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Service Regions
            </h4>
            <ul className="space-y-2 text-[11px] text-[#788190]">
              {COMPANY_DETAILS.serviceAreas.map((area, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <MapPin className="w-3 h-3 text-[#c4a47c] shrink-0 mt-0.5" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal & Licenses Row */}
        <div className="mt-14 pt-8 border-t border-[#171b22] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#616a78]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>WA Lic: {COMPANY_DETAILS.licenseNumbers.wa}</span>
            <span>·</span>
            <span>CA Lic: {COMPANY_DETAILS.licenseNumbers.ca}</span>
            <span>·</span>
            <span>OSHA Certified Safety Record</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {onReplayIntro && (
              <>
                <button
                  onClick={onReplayIntro}
                  className="hover:text-[#c4a47c] transition-colors cursor-pointer text-[#8c94a2] flex items-center gap-1.5"
                  title="Replay Architectural Intro Loading Sequence"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c]" />
                  <span>Replay Intro</span>
                </button>
                <span>·</span>
              </>
            )}
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Notice
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
            <span>·</span>
            <span>© {new Date().getFullYear()} Vander &amp; Cole Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
