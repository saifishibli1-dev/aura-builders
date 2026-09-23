import React, { useState } from 'react';
import { Project, PageView } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';
import { Compass } from 'lucide-react';

interface ProjectsPageProps {
  projects: Project[];
  onSelectProject: (p: Project) => void;
  onNavigate: (page: PageView) => void;
  onRequestQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  onSelectProject,
  onRequestQuote
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'Custom Homes',
    'Luxury Renovations',
    'Commercial',
    'Architectural Builds'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Title */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            <Compass className="w-4 h-4" />
            <span>Selected Architectural Commissions</span>
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Commissions Built to Endure
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base text-[#9ea6b5] leading-relaxed"
          >
            Every project in our archive represents an uncompromising collaboration between world-class architects, dedicated structural engineers, and our in-house master builders.
          </ArchitecturalReveal>
        </div>

        {/* Filter Segmented Control (Allowed functional buttons as per frontend-design skill section 1A) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#202530] pb-6">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c4a47c] text-[#0e1013] font-semibold shadow-sm'
                    : 'bg-[#15181f] text-[#8c94a2] border border-[#232935] hover:text-white hover:border-[#353d4c]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-sm bg-[#12151b] border border-[#232832] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-display font-bold text-white">
              Looking for a specific structural or geographic typology?
            </h3>
            <p className="mt-2 text-xs text-[#8c94a2] leading-relaxed">
              We frequently build under NDAs for family offices, estate trusts, and prominent figures. Contact our principals directly to view private portfolio archives not published online.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            Request Private Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
