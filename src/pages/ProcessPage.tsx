import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/contentData';
import { PageView } from '../types';
import { Layers, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';

interface ProcessPageProps {
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({
  onRequestQuote
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = PROCESS_STEPS[activeStep];

  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            <Layers className="w-4 h-4" />
            <span>The Vander &amp; Cole Delivery Protocol</span>
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight"
          >
            Our 5-Phase Construction Process
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base text-[#9ea6b5] leading-relaxed"
          >
            Great architecture requires a disciplined method. From initial zoning and site grading to 100-year seismic framing and white-glove commissioning, here is how we guarantee budget certainty and structural excellence.
          </ArchitecturalReveal>
        </div>

        {/* Phase Timeline Navigator */}
        <div className="border-b border-[#212630] pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-sm border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#181d26] border-[#c4a47c] text-white shadow'
                      : 'bg-[#11141a] border-[#222731] text-[#788292] hover:text-neutral-200 hover:border-[#313948]'
                  }`}
                >
                  <div className="text-[11px] font-mono mb-1 flex items-center justify-between">
                    <span className={isActive ? 'text-[#c4a47c] font-bold' : ''}>
                      PHASE {step.number}
                    </span>
                    <span className="text-[10px] text-neutral-500">{step.duration}</span>
                  </div>
                  <div className="text-xs font-semibold truncate text-white">
                    {step.phaseName}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Storytelling Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#12151b] border border-[#212630] rounded-sm p-6 sm:p-10 shadow-2xl">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden bg-[#0d0f13] border border-[#232832]">
            <img
              src={current.image}
              alt={current.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-transparent opacity-60" />
            <div className="absolute top-4 left-4 z-10 text-xs font-mono uppercase tracking-widest text-[#c4a47c] bg-black/70 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
              Phase {current.number} // {current.phaseName}
            </div>
            <div className="absolute bottom-4 left-4 z-10 text-xs font-mono text-neutral-300 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-sm">
              <Clock className="w-3.5 h-3.5 text-[#c4a47c]" />
              <span>Target Schedule: {current.duration}</span>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-2">
                Executive Milestone
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {current.title}
              </h2>
              <p className="mt-3 text-sm text-[#a2aab8] leading-relaxed">
                {current.description}
              </p>
              <p className="mt-3 text-xs text-[#7e8796] leading-relaxed">
                {current.details}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="p-5 rounded-sm bg-[#151922] border border-[#222733] space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-white">
                Formal Milestone Deliverables
              </div>
              <div className="space-y-2">
                {current.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#9aa2b0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c4a47c] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation to next phase */}
            <div className="pt-4 border-t border-[#1d222b] flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-500">
                Phase {activeStep + 1} of {PROCESS_STEPS.length}
              </span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c4a47c] hover:text-white transition-colors cursor-pointer"
              >
                <span>Advance to Next Phase</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Timeline Walkthrough Cards */}
        <div className="pt-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Why Our Methodology Protects Your Capital
            </h3>
            <p className="mt-2 text-xs text-[#8c94a2]">
              Traditional construction suffers from incomplete bid packages and adversarial change orders. Our five-phase roadmap introduces complete transparency at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-sm bg-[#12151b] border border-[#212630] space-y-3">
              <span className="text-xl font-display font-bold text-[#c4a47c]">01</span>
              <h4 className="text-base font-semibold text-white">Open-Book Auditing</h4>
              <p className="text-xs text-[#8c94a2] leading-relaxed">
                You receive access to every raw trade quote, invoice, and material manifest with zero concealed markups.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#12151b] border border-[#212630] space-y-3">
              <span className="text-xl font-display font-bold text-[#c4a47c]">02</span>
              <h4 className="text-base font-semibold text-white">Lidar 3D BIM Scanning</h4>
              <p className="text-xs text-[#8c94a2] leading-relaxed">
                We laser scan active framing before drywall to create a millimeter-exact digital twin of your mechanical and electrical infrastructure.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#12151b] border border-[#212630] space-y-3">
              <span className="text-xl font-display font-bold text-[#c4a47c]">03</span>
              <h4 className="text-base font-semibold text-white">Dedicated On-Site Superintendent</h4>
              <p className="text-xs text-[#8c94a2] leading-relaxed">
                One master builder assigned to your residence full-time. We never split site superintendents across multiple projects.
              </p>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-10 rounded-sm bg-[#151922] border border-[#262c38] text-center space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Ready to initiate Phase 01 for your project?
          </h3>
          <p className="text-xs text-[#8c94a2] max-w-md mx-auto">
            Schedule a feasibility review with Marcus Vander and Eleanor Cole.
          </p>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md"
          >
            Request Feasibility Review
          </button>
        </div>
      </div>
    </div>
  );
};
