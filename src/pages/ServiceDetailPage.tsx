import React from 'react';
import { Service } from '../types';
import { ArrowLeft, Clock, DollarSign, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';

interface ServiceDetailPageProps {
  service: Service;
  onBack: () => void;
  onRequestQuote: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onRequestQuote
}) => {
  return (
    <div className="w-full bg-[#0d0f14] text-[#d6dbe4] min-h-screen">
      {/* Back Ribbon */}
      <div className="border-b border-[#1f242d] bg-[#12151b] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Services</span>
          </button>
          <div className="text-xs font-mono text-[#c4a47c]">
            Capability Specification
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative w-full h-[50vh] sm:h-[65vh] bg-black overflow-hidden flex items-end">
        <img
          src={service.heroImage}
          alt={service.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-[#0d0f14]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            Architectural Construction Discipline
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl"
          >
            {service.title}
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base sm:text-xl text-[#b4bac6] font-light max-w-2xl"
          >
            {service.shortDescription}
          </ArchitecturalReveal>
        </div>
      </section>

      {/* Benchmarks Bar */}
      <section className="border-b border-[#1f242d] bg-[#12151b] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
          <div>
            <span className="text-[#6d7584] block uppercase tracking-wider mb-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#c4a47c]" /> Typical Duration
            </span>
            <span className="text-white font-medium text-sm">{service.typicalTimeline}</span>
          </div>

          <div>
            <span className="text-[#6d7584] block uppercase tracking-wider mb-1 flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-[#c4a47c]" /> Capital Benchmark
            </span>
            <span className="text-white font-medium text-sm">{service.investmentTier}</span>
          </div>

          <div>
            <span className="text-[#6d7584] block uppercase tracking-wider mb-1 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#c4a47c]" /> Warranty Coverage
            </span>
            <span className="text-white font-medium text-sm">10-Yr Structural / 2-Yr Comprehensive</span>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Description & Key Deliverables */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
                Overview &amp; Philosophy
              </h2>
              <p className="text-lg text-white leading-relaxed font-light">
                {service.fullDescription}
              </p>
            </div>

            {/* Scope Deliverables */}
            <div className="p-8 rounded-sm bg-[#12151b] border border-[#212630]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-6">
                Scope &amp; Turnkey Deliverables
              </h3>
              <div className="space-y-3.5">
                {service.keyDeliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#9da5b2]">
                    <CheckCircle2 className="w-4 h-4 text-[#c4a47c] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Craftsmanship Standards */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-6">
                Engineering &amp; Craftsmanship Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.craftDetails.map((craft, i) => (
                  <div key={i} className="p-6 rounded-sm bg-[#141820] border border-[#232833]">
                    <h4 className="text-sm font-display font-semibold text-white mb-2">
                      {craft.title}
                    </h4>
                    <p className="text-xs text-[#8c94a2] leading-relaxed">
                      {craft.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-sm bg-[#12151b] border border-[#212630] space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white">
                Client Profile Alignment
              </h4>
              <p className="text-xs text-[#8c94a2] leading-relaxed">
                {service.idealFor}
              </p>
            </div>

            <div className="p-8 rounded-sm bg-[#171b23] border border-[#2f3644] text-center space-y-4">
              <h4 className="text-base font-display font-semibold text-white">
                Discuss Your Construction Requirements
              </h4>
              <p className="text-xs text-[#8c94a2]">
                Our principals will review site constraints, zoning, and architectural targets with you.
              </p>
              <button
                onClick={onRequestQuote}
                className="w-full py-3.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
