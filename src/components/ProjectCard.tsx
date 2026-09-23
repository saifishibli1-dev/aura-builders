import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group relative flex flex-col bg-[#12151b] border border-[#212630] hover:border-[#c4a47c]/60 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer shadow-lg"
    >
      {/* Aspect Ratio 16:9 Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0d0f13]">
        <img
          src={project.heroImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle Dark Vignette & Hover Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-transparent opacity-80" />
        
        {/* Category & Year Stamp */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[11px] font-mono tracking-widest uppercase text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10">
            {project.category}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#c4a47c] group-hover:text-black transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Unboxed text with subtle typographic separators */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#8a92a0] mb-2">
            <span>{project.location}</span>
            <span aria-hidden="true">·</span>
            <span>{project.squareFootage}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-xl font-display font-bold text-white group-hover:text-[#c4a47c] transition-colors tracking-tight">
            {project.title}
          </h3>

          <p className="mt-2 text-xs text-[#9ea6b5] line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Architect credit & scope preview */}
        <div className="mt-6 pt-4 border-t border-[#1d222b] flex items-center justify-between text-[11px] font-mono text-[#717988]">
          <div className="truncate">
            <span className="text-neutral-500">Arch:</span> {project.architect}
          </div>
          <span className="text-[#c4a47c] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View Study →
          </span>
        </div>
      </div>
    </article>
  );
};
