import React from 'react';
import { Project } from '../types';
import { ArrowLeft, MapPin, Calendar, Maximize2, Compass, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
  onRequestQuote: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onSelectProject,
  allProjects,
  onRequestQuote
}) => {
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="w-full bg-[#0d0f14] text-[#d6dbe4] min-h-screen">
      {/* Back Navigation Bar */}
      <div className="border-b border-[#1f242d] bg-[#12151b] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Commissions Archive</span>
          </button>
          <div className="text-xs font-mono text-[#c4a47c]">
            Case Study // {project.category}
          </div>
        </div>
      </div>

      {/* Cinematic Hero Header */}
      <section className="relative w-full h-[60vh] sm:h-[75vh] bg-black overflow-hidden flex items-end">
        <img
          src={project.heroImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-[#0d0f14]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            {project.location} · {project.year}
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight max-w-4xl"
          >
            {project.title}
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base sm:text-xl text-[#b4bac6] font-light max-w-2xl"
          >
            {project.tagline}
          </ArchitecturalReveal>
        </div>
      </section>

      {/* Primary Specifications Grid */}
      <section className="border-b border-[#1f242d] bg-[#12151b] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
          <div>
            <span className="text-[#6d7584] block uppercase tracking-wider mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#c4a47c]" /> Location
            </span>
            <span className="text-white font-medium text-sm">{project.location}</span>
          </div>

          <div>
            <span className="text-[#6d7584] block uppercase tracking-wider mb-1 flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-[#c4a47c]" /> Gross Area
            </span>
            <span className="text-white font-medium text-sm">{project.squareFootage}</span>
          </div>

          <div>
            <span className="text-[#6d7584] block uppercase tracking-wider mb-1 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-[#c4a47c]" /> Architect of Record
            </span>
            <span className="text-white font-medium text-sm">{project.architect}</span>
          </div>

          <div>
            <span className="text-[#6d7584] block uppercase tracking-wider mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#c4a47c]" /> Construction Schedule
            </span>
            <span className="text-white font-medium text-sm">{project.leadTime}</span>
          </div>
        </div>
      </section>

      {/* Main Narrative & Engineering Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Narrative Column */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
                Architectural Concept &amp; Structural Challenge
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-4">
                {project.concept}
              </h3>
              <p className="text-base text-[#a2aab8] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Scope Deliverables */}
            <div className="pt-6 border-t border-[#1d222b]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#c4a47c]" />
                Construction Scope Executed by Vander &amp; Cole
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#929aa8]">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-[#14171f] p-3 rounded-sm border border-[#212630]">
                    <span className="text-[#c4a47c] font-mono font-bold text-xs mt-0.5">0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards or Recognitions if present */}
            {project.awardsOrFeatures && (
              <div className="p-4 rounded-sm bg-[#161a22] border border-[#2c3340] flex items-center gap-3 text-xs">
                <ShieldCheck className="w-5 h-5 text-[#c4a47c] shrink-0" />
                <div className="text-neutral-300">
                  <span className="text-white font-semibold block">Industry Recognition:</span>
                  {project.awardsOrFeatures.join(' · ')}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column: Materials Palette */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-sm bg-[#12151b] border border-[#212630]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-4">
                Specified Materials Palette
              </h4>
              <ul className="space-y-3 text-xs font-mono">
                {project.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-2 pb-2.5 border-b border-[#1c212a] text-neutral-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c]" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-sm bg-[#161a22] border border-[#2b313d] text-center space-y-4">
              <h5 className="text-sm font-display font-semibold text-white">
                Planning an ambitious build?
              </h5>
              <p className="text-xs text-[#8c94a2]">
                Our principals review drawings and site topography at the earliest concept stage.
              </p>
              <button
                onClick={onRequestQuote}
                className="w-full py-3 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
              >
                Inquire on This Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Grid */}
      <section className="py-16 bg-[#0b0c10] border-t border-b border-[#1d222b] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-8">
            Project Photography Archive
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[#1f242d] group">
                <img
                  src={img}
                  alt={`${project.title} gallery detail ${i + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project Footer Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#1d222b]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#6c7482] block mb-1">
            Next Architectural Commission
          </span>
          <div className="text-xl font-display font-bold text-white">
            {nextProject.title}
          </div>
          <div className="text-xs text-neutral-400 font-mono">
            {nextProject.location} · {nextProject.squareFootage}
          </div>
        </div>

        <button
          onClick={() => {
            onSelectProject(nextProject);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 px-6 py-3 bg-[#171b22] hover:bg-[#202530] border border-[#2e3543] text-white text-xs font-mono uppercase tracking-wider rounded-sm transition-all cursor-pointer"
        >
          <span>Explore Case Study</span>
          <ArrowRight className="w-4 h-4 text-[#c4a47c]" />
        </button>
      </section>
    </div>
  );
};
