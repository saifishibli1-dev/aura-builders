import React from 'react';
import { CRAFTSMANSHIP_PILLARS } from '../data/contentData';
import { PageView } from '../types';
import { Ruler, Shield, Layers, Award } from 'lucide-react';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';

interface CraftsmanshipPageProps {
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
}

export const CraftsmanshipPage: React.FC<CraftsmanshipPageProps> = ({
  onRequestQuote
}) => {
  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            <Ruler className="w-4 h-4" />
            <span>Building Science &amp; Master Joinery</span>
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight"
          >
            The Science of Enduring Construction
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base text-[#9ea6b5] leading-relaxed"
          >
            True luxury is not defined by surface finishes alone. It exists in the uncompromised integrity of what lies hidden inside wall cavities, below grade beams, and across thermal envelope boundaries.
          </ArchitecturalReveal>
        </div>

        {/* Hero Craftsmanship Visual Asset */}
        <div className="relative aspect-[21/9] rounded-sm overflow-hidden border border-[#212630] bg-black">
          <img
            src="/src/assets/images/construction_framing_craft_1790156533745.jpg"
            alt="Timber and steel precision craftsmanship"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] block mb-1">
              Field Standard // Pacific Northwest
            </span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">
              74 Tons of Blackened Architectural Steel &amp; Hand-Selected Douglas Fir
            </div>
          </div>
        </div>

        {/* Four Craftsmanship Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CRAFTSMANSHIP_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-sm bg-[#12151b] border border-[#212630] space-y-4 hover:border-[#c4a47c]/60 transition-colors"
            >
              <div className="flex items-baseline justify-between border-b border-[#1f242d] pb-4">
                <span className="text-3xl font-display font-bold text-[#c4a47c] tabular-nums">
                  {pillar.stat}
                </span>
                <span className="text-xs font-mono text-[#8a92a0]">
                  {pillar.statLabel}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#9da5b2] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Materials Palette Exploration */}
        <div className="space-y-8 pt-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-2">
              Curated Honest Materials
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Materials That Grow More Beautiful With Age
            </h3>
            <p className="mt-2 text-xs text-[#8c94a2]">
              We reject synthetic laminates and fragile imitations. Every material installed by Vander &amp; Cole is honest, durable, and naturally patinating.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Roman Classico Travertine',
                origin: 'Tivoli, Italy',
                usage: 'Slab cladding, paving, zero-threshold showers',
                detail: 'Quarried directly from historic Italian beds and vein-cut to custom project dimensions.'
              },
              {
                name: 'Rift-Cut Western White Oak',
                origin: 'Pacific Northwest',
                usage: 'Acoustic wall paneling, pivot doors, casework',
                detail: 'Milled with tight vertical grain to prevent seasonal movement and shrinkage.'
              },
              {
                name: 'Board-Formed Concrete',
                origin: 'Cast On-Site',
                usage: 'Structural shear walls, cantilevers, hearths',
                detail: '5,500 PSI high-early mix poured into rough-sawn Douglas Fir formwork.'
              },
              {
                name: 'Blackened Structural Steel',
                origin: 'US Domestic Mills',
                usage: 'Moment frames, stair stringers, reveals',
                detail: 'Hand-patinated with chemical cold blackeners and sealed with microcrystalline wax.'
              }
            ].map((mat, i) => (
              <div key={i} className="p-6 rounded-sm bg-[#13161d] border border-[#21252f] space-y-2">
                <div className="text-[10px] font-mono uppercase text-[#c4a47c]">{mat.origin}</div>
                <div className="text-base font-semibold text-white">{mat.name}</div>
                <div className="text-xs text-[#9aa2af]">{mat.usage}</div>
                <p className="text-[11px] text-[#717a88] pt-2 border-t border-[#1d222a] leading-relaxed">
                  {mat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Warranties & Estate Care Commitment */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#141820] border border-[#2a303d] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c]">
              <Shield className="w-4 h-4" />
              <span>Vander &amp; Cole Estate Care Guarantee</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              10-Year Structural &amp; 2-Year Comprehensive Warranty
            </h3>
            <p className="text-sm text-[#9da5b2] leading-relaxed">
              When our construction finishes, our relationship is just beginning. Our in-house Estate Care division conducts scheduled multi-point inspections at 30 days, 6 months, 1 year, and 2 years post-handover.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end gap-3">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md w-full sm:w-auto text-center"
            >
              Consult On Construction Standards
            </button>
            <span className="text-[11px] font-mono text-neutral-500">
              Direct consultation with Marcus Vander, AIA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
