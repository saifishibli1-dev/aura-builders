import React from 'react';
import { Project, Service, PageView } from '../types';
import { ScrollToBuild } from '../components/ScrollToBuild';
import { ArchitecturalWalkthrough } from '../components/ArchitecturalWalkthrough';
import { ProjectCard } from '../components/ProjectCard';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';
import { COMPANY_DETAILS } from '../data/contentData';
import { ArrowRight, ChevronDown, Compass, ShieldCheck, Ruler, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  projects: Project[];
  services: Service[];
  onSelectProject: (p: Project) => void;
  onSelectService: (s: Service) => void;
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  projects,
  services,
  onSelectProject,
  onSelectService,
  onNavigate,
  onRequestQuote
}) => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] overflow-x-hidden">
      
      {/* 1. Cinematic Full-Screen Hero */}
      <section className="relative w-full h-[92vh] min-h-[640px] flex items-end justify-start bg-black overflow-hidden">
        {/* Background Architectural Image with subtle scale */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_modern_residence_1790156520352.jpg"
            alt="Vander & Cole custom architectural residence at dusk"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.05] transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Measured Contrast Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>

        {/* Hero Content Block */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] bg-black/60 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
              <span>Established 2002</span>
              <span aria-hidden="true">·</span>
              <span>Seattle &amp; Northern California</span>
            </div>

            <ArchitecturalReveal
              as="h1"
              variant="stagger-words"
              delay={0.1}
              duration={1.2}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] text-balance"
            >
              We build what endures.
            </ArchitecturalReveal>

            <ArchitecturalReveal
              as="p"
              variant="mask"
              delay={0.35}
              duration={1.05}
              className="text-base sm:text-xl text-[#c7cedb] font-light leading-relaxed max-w-2xl text-balance"
            >
              Architectural general contractor delivering custom residential estates, complex hillside foundations, and landmark commercial architecture with museum-grade precision.
            </ArchitecturalReveal>

            {/* CTAs */}
            <ArchitecturalReveal
              variant="fade-up"
              delay={0.5}
              duration={0.9}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onRequestQuote}
                className="px-7 py-4 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-xl cursor-pointer"
              >
                Request a Consultation
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-7 py-4 bg-[#141820]/90 hover:bg-[#1f2532] text-white border border-[#2e3544] text-xs font-medium uppercase tracking-wider rounded-sm transition-all backdrop-blur-md cursor-pointer flex items-center gap-2"
              >
                <span>View Our Projects</span>
                <ArrowRight className="w-4 h-4 text-[#c4a47c]" />
              </button>
            </ArchitecturalReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('build-simulator')}
          className="absolute bottom-6 right-8 z-10 hidden sm:flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>Scroll to Build</span>
          <ChevronDown className="w-4 h-4 text-[#c4a47c] animate-bounce" />
        </button>
      </section>

      {/* 2. "SCROLL TO BUILD" Interactive Construction Simulator (Inspired by Video 1) */}
      <div id="build-simulator">
        <ScrollToBuild onRequestConsultation={onRequestQuote} />
      </div>

      {/* 3. Company Stats & Trust Bar with staggered GSAP reveal */}
      <section className="border-b border-[#1f242d] bg-[#11141a] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {COMPANY_DETAILS.stats.map((stat, i) => (
            <ArchitecturalReveal
              key={i}
              variant="fade-up"
              delay={i * 0.1}
              className="border-l-2 border-[#c4a47c]/70 pl-4"
            >
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-[#8a93a2] mt-1">
                {stat.label}
              </div>
            </ArchitecturalReveal>
          ))}
        </div>
      </section>

      {/* 4. Selected Work / Projects Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
              <Compass className="w-4 h-4" />
              <span>Selected Portfolio Archive</span>
            </div>
            <ArchitecturalReveal
              as="h2"
              variant="mask"
              threshold="top 85%"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight"
            >
              Projects we’re proud to put our name on.
            </ArchitecturalReveal>
            <ArchitecturalReveal
              as="p"
              variant="fade-up"
              delay={0.15}
              threshold="top 85%"
              className="mt-2 text-sm text-[#9da5b3] max-w-xl"
            >
              Every build is customized, every moment engineered. Take a look at recent commissions spanning the Puget Sound and Northern California.
            </ArchitecturalReveal>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c4a47c] hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <span>View All 8 Commissions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </section>

      {/* 5. "A RESIDENCE, UNFOLDING IN ONE CONTINUOUS SHOT" (Inspired by Video 2) */}
      <section className="w-full border-t border-b border-[#212630]">
        <div className="px-6 pt-12 pb-4 bg-[#08090c] max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] block mb-2">
              Spatial Architecture Exploration
            </span>
            <ArchitecturalReveal
              as="h2"
              variant="mask"
              threshold="top 85%"
              className="text-2xl sm:text-4xl font-display font-bold text-white"
            >
              A residence, unfolding in one continuous sequence.
            </ArchitecturalReveal>
          </div>
          <ArchitecturalReveal
            as="p"
            variant="fade-up"
            delay={0.15}
            threshold="top 85%"
            className="text-xs text-[#8c94a2] max-w-md"
          >
            Step through rooms in sequence to inspect material joinery, thermal boundaries, and acoustic specifications.
          </ArchitecturalReveal>
        </div>
        <ArchitecturalWalkthrough />
      </section>

      {/* 6. Core Services Bento Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            <Layers className="w-4 h-4" />
            <span>Building Capabilities</span>
          </div>
          <ArchitecturalReveal
            as="h2"
            variant="mask"
            threshold="top 85%"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight"
          >
            Comprehensive Architectural Services
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="fade-up"
            delay={0.15}
            threshold="top 85%"
            className="mt-3 text-sm text-[#9ea6b5]"
          >
            From raw foundation pilings through final white-glove commissioning, we deliver end-to-end craftsmanship.
          </ArchitecturalReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={s.id}
              onClick={() => onSelectService(s)}
              className="p-8 rounded-sm bg-[#12151b] border border-[#212630] hover:border-[#c4a47c]/60 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#788292] mb-4">
                  <span>CAPABILITY 0{idx + 1}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#c4a47c] transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-white group-hover:text-[#c4a47c] transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-[#8e97a6] leading-relaxed line-clamp-3">
                  {s.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1d222a] flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>{s.typicalTimeline}</span>
                <span className="text-[#c4a47c]">Details →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Craftsmanship & Building Science Spotlight */}
      <section className="py-20 bg-[#0a0c10] border-t border-b border-[#1f242d] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c]">
              <Ruler className="w-4 h-4" />
              <span>Building Science &amp; Tolerances</span>
            </div>
            <ArchitecturalReveal
              as="h2"
              variant="mask"
              threshold="top 85%"
              className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight"
            >
              Why 1/16th of an Inch Matters for 100 Years
            </ArchitecturalReveal>
            <ArchitecturalReveal
              as="p"
              variant="fade-up"
              delay={0.15}
              threshold="top 85%"
              className="text-sm text-[#9ea6b5] leading-relaxed"
            >
              Standard residential construction codes allow a 1/4-inch framing deviation over 10 feet. At Vander &amp; Cole, our laser-scanned standard is 1/16th of an inch. That precision is what ensures zero ceiling cracking, effortless sliding glass door operation, and millimeter-flush baseboard shadow reveals.
            </ArchitecturalReveal>

            <div className="space-y-3 pt-2">
              {[
                'Engineered Laminated Veneer Lumber (LVL) studs prevent wall warping',
                'Continuous exterior air-barriers deliver certified 0.45 ACH50 passive airtightness',
                '14,000 sq ft dedicated architectural joinery and custom millwork workshop'
              ].map((item, idx) => (
                <ArchitecturalReveal
                  key={idx}
                  variant="fade-up"
                  delay={0.25 + idx * 0.1}
                  threshold="top 85%"
                  className="flex items-start gap-3 text-xs text-neutral-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#c4a47c] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </ArchitecturalReveal>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('craftsmanship')}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c4a47c] hover:text-white transition-colors cursor-pointer"
              >
                <span>Read Building Science Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden border border-[#242935] bg-black">
            <img
              src="/src/assets/images/construction_framing_craft_1790156533745.jpg"
              alt="Timber and steel joinery craftsmanship"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-xs font-mono text-white">
              <span className="text-[#c4a47c] block text-[10px] uppercase">Seattle Jobsite // Framing Phase</span>
              <span>74 Tons of Blackened Architectural Steel &amp; Douglas Fir Joinery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Regional Service Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] block mb-2">
            Geographic Coverage
          </span>
          <ArchitecturalReveal
            as="h2"
            variant="mask"
            threshold="top 85%"
            className="text-2xl sm:text-3xl font-display font-bold text-white"
          >
            Serving the Pacific Northwest &amp; Northern California
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="fade-up"
            delay={0.15}
            threshold="top 85%"
            className="mt-2 text-xs text-[#8c94a2]"
          >
            Our superintendent crews are permanently based in both metropolitan hubs with full logistics support.
          </ArchitecturalReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {COMPANY_DETAILS.serviceAreas.map((area, i) => (
            <ArchitecturalReveal
              key={i}
              variant="fade-up"
              delay={i * 0.05}
              threshold="top 88%"
              className="p-4 rounded-sm bg-[#12151b] border border-[#212630] text-xs font-mono text-neutral-300"
            >
              {area}
            </ArchitecturalReveal>
          ))}
        </div>
      </section>

      {/* 9. Final Pre-Footer Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-sm bg-[#151922] border border-[#2c3342] text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c]">
            <ShieldCheck className="w-4 h-4" />
            <span>Open-Book Contracting · Full Transparency</span>
          </div>
          <ArchitecturalReveal
            as="h2"
            variant="mask"
            threshold="top 85%"
            className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight"
          >
            Ready to build something that lasts generations?
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="fade-up"
            delay={0.15}
            threshold="top 85%"
            className="text-sm text-[#9ea6b5] max-w-xl mx-auto leading-relaxed"
          >
            Our principals Marcus Vander and Eleanor Cole will review your drawings, assess preliminary feasibility, and provide an itemized preconstruction roadmap.
          </ArchitecturalReveal>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-lg"
            >
              Request Feasibility Consultation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#1b202a] hover:bg-[#252b38] text-white border border-[#333a4a] text-xs font-medium uppercase tracking-wider rounded-sm transition-all cursor-pointer"
            >
              Direct Studio Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
