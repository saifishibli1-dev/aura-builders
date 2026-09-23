import React from 'react';
import { FOUNDERS_DATA, COMPANY_DETAILS } from '../data/contentData';
import { PageView } from '../types';
import { ShieldCheck, Award, MapPin, Building, Users } from 'lucide-react';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onRequestQuote
}) => {
  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            <Building className="w-4 h-4" />
            <span>Company Origins &amp; Leadership</span>
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight"
          >
            Architectural Precision Born from Master Craft
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base text-[#9ea6b5] leading-relaxed"
          >
            Founded in 2002 by an architect-carpenter and a structural engineer, Vander &amp; Cole was created with a single objective: to eliminate the friction between architectural vision and jobsite reality.
          </ArchitecturalReveal>
        </div>

        {/* Company Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#12151b] border border-[#212630] p-6 sm:p-8 rounded-sm">
          {COMPANY_DETAILS.stats.map((stat, i) => (
            <div key={i} className="border-l-2 border-[#c4a47c] pl-4">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-[#8a92a0] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Founders Dossier */}
        <div className="space-y-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#c4a47c]">
            Principals &amp; Founders
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FOUNDERS_DATA.map((founder, idx) => (
              <div
                key={idx}
                className="bg-[#12151b] border border-[#212630] rounded-sm overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 min-h-[240px] bg-[#0d0f14] overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.8]"
                  />
                </div>
                <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#c4a47c] block mb-1">
                      {founder.role}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-3">
                      {founder.name}
                    </h3>
                    <p className="text-xs text-[#9aa2af] leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#1d222b] text-[10px] font-mono text-[#6c7584]">
                    Active on all weekly project walks
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy & Architect Partnership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131720] border border-[#232935] p-8 sm:p-12 rounded-sm">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#c4a47c]">
              Collaboration Ethos
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Why Premier Architects Trust Our Crews
            </h3>
            <p className="text-sm text-[#9da5b2] leading-relaxed">
              Too often, contractors seek to value-engineer away the very details that make a building extraordinary. We view our role as guardians of architectural intent. When an architect draws a zero-reveal flush door or a 40-foot cantilever, our job is not to ask why — it is to engineer the concealed steel structure that makes it float effortlessly.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-neutral-400">
              <span>· Olson Kundig</span>
              <span>· Marmol Radziner</span>
              <span>· Cutler Anderson</span>
              <span>· Bohlin Cywinski Jackson</span>
              <span>· Walker Warner</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-sm bg-[#161b24] border border-[#2c3442] space-y-4">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c4a47c]" />
              Licenses &amp; Governance
            </h4>
            <div className="space-y-2 text-xs font-mono text-neutral-300">
              <div>
                <span className="text-neutral-500">WA Contractor Lic:</span> {COMPANY_DETAILS.licenseNumbers.wa}
              </div>
              <div>
                <span className="text-neutral-500">CA CSLB Lic:</span> {COMPANY_DETAILS.licenseNumbers.ca}
              </div>
              <div>
                <span className="text-neutral-500">Bonding Capacity:</span> $50M Single / $100M Aggregate
              </div>
              <div>
                <span className="text-neutral-500">Safety EMR Rating:</span> 0.72 (Zero Lost-Time Incidents)
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8 space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Meet Our Principals
          </h3>
          <p className="text-xs text-[#8c94a2] max-w-md mx-auto">
            We invite prospective owners and architects to our Seattle and Marin studios for private project consultations.
          </p>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md"
          >
            Schedule Principal Meeting
          </button>
        </div>
      </div>
    </div>
  );
};
