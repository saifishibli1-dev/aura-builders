import React, { useState } from 'react';
import { FAQ_DATA } from '../data/contentData';
import { PageView } from '../types';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';

interface FAQPageProps {
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({
  onRequestQuote
}) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cost & Contracts', 'Process', 'Warranties', 'General'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((f) => f.category === activeCategory);

  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Transparency &amp; FAQ</span>
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Frequently Asked Questions
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base text-[#9ea6b5] leading-relaxed"
          >
            Direct answers on contract structuring, architect collaboration, site superintendents, cost transparency, and our multi-year warranties.
          </ArchitecturalReveal>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 border-b border-[#202530] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-sm transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#c4a47c] text-[#0e1013] font-semibold'
                  : 'bg-[#14171f] text-[#8c94a2] border border-[#232935] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#12151b] border border-[#212630] rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#161a22] transition-colors"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-full text-[#c4a47c] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#9aa2af] leading-relaxed border-t border-[#1a1e26] animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="p-8 rounded-sm bg-[#141820] border border-[#262c38] text-center space-y-4">
          <h3 className="text-xl font-display font-bold text-white">
            Have a question specific to your site or zoning?
          </h3>
          <p className="text-xs text-[#8c94a2] max-w-md mx-auto">
            Our preconstruction director Eleanor Cole is available for direct technical inquiries.
          </p>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md"
          >
            Direct Inquiry with Principals
          </button>
        </div>
      </div>
    </div>
  );
};
