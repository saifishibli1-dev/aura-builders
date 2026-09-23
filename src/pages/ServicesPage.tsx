import React from 'react';
import { Service, PageView } from '../types';
import { Clock, DollarSign, ArrowRight, Layers } from 'lucide-react';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';

interface ServicesPageProps {
  services: Service[];
  onSelectService: (service: Service) => void;
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  services,
  onSelectService,
  onRequestQuote
}) => {
  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            <Layers className="w-4 h-4" />
            <span>General Contracting &amp; Building Capabilities</span>
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Architectural Construction Capabilities
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base text-[#9ea6b5] leading-relaxed"
          >
            From complex subterranean foundation pilings to razor-thin glass curtain walls and bespoke millwork, we manage the full spectrum of high-end residential and landmark commercial construction.
          </ArchitecturalReveal>
        </div>

        {/* Services List / Cards */}
        <div className="space-y-12">
          {services.map((service, idx) => (
            <article
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-[#12151b] border border-[#212630] hover:border-[#c4a47c]/60 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-xl"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px] overflow-hidden bg-[#0d0f13]">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 z-10 text-[10px] font-mono tracking-widest uppercase text-white bg-black/60 px-2.5 py-1 rounded-sm border border-white/10">
                  Capability 0{idx + 1}
                </div>
              </div>

              {/* Text / Specs Column */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-[#c4a47c] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#a2aab8] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#1e232c] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="flex items-center gap-2 text-neutral-300">
                      <Clock className="w-3.5 h-3.5 text-[#c4a47c] shrink-0" />
                      <span>Duration: {service.typicalTimeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-300">
                      <DollarSign className="w-3.5 h-3.5 text-[#c4a47c] shrink-0" />
                      <span>Capital: {service.investmentTier}</span>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-[#737c8c] italic">
                    <strong className="text-neutral-400 not-italic">Ideal For:</strong> {service.idealFor}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1e232c] flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] flex items-center gap-2">
                    <span>View Specifications &amp; Craft Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#141820] border border-[#2b313d] text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Need a tailored building proposal?
          </h3>
          <p className="text-xs text-[#8c94a2] max-w-lg mx-auto">
            We provide complimentary preliminary plan audits and structural feasibility consults for architects and prospective clients.
          </p>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md"
          >
            Start Project Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
