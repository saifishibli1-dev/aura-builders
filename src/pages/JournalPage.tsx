import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/contentData';
import { JournalArticle, PageView } from '../types';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';

interface JournalPageProps {
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({
  onRequestQuote
}) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Building Science &amp; Field Dispatch</span>
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight"
          >
            The Vander &amp; Cole Technical Journal
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base text-[#9ea6b5] leading-relaxed"
          >
            Essays, technical whitepapers, and field notes on envelope moisture physics, structural steel tolerances, contract transparency, and the mechanics of enduring architecture.
          </ArchitecturalReveal>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group bg-[#12151b] border border-[#212630] hover:border-[#c4a47c]/60 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0f13]">
                <img
                  src={art.image}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase text-white bg-black/70 px-2.5 py-1 rounded-sm border border-white/10">
                  {art.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#788192] mb-2">
                    <span>{art.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{art.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>By {art.author}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#c4a47c] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="mt-3 text-xs text-[#9aa2af] leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1e232c] flex items-center justify-between text-xs font-mono text-[#c4a47c]">
                  <span>Read Technical Note</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Reading Article */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-3xl bg-[#12151b] border border-[#2b313d] rounded-sm p-6 sm:p-10 text-[#d2d8e3] my-8 max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white rounded-sm hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-[10px] font-mono uppercase tracking-widest text-[#c4a47c] mb-2">
                {selectedArticle.category} · {selectedArticle.date} · {selectedArticle.readTime}
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-4">
                {selectedArticle.title}
              </h2>

              <div className="text-xs font-mono text-[#788292] mb-6 pb-4 border-b border-[#1f242d]">
                Authored by {selectedArticle.author} // Vander &amp; Cole Field Dispatch
              </div>

              <div className="space-y-4 text-sm text-[#a2aab8] leading-relaxed">
                {selectedArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#1f242d] flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 border border-neutral-700 text-xs text-neutral-300 hover:text-white rounded-sm cursor-pointer"
                >
                  Close Article
                </button>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onRequestQuote();
                  }}
                  className="px-5 py-2 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm cursor-pointer"
                >
                  Consult On This Subject
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
