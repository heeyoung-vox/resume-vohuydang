import React from 'react';
import { BentoCard } from './BentoCard';
import { useProjects } from '../hooks/useProjects';
import { projects } from '../data';
import { Code2 } from 'lucide-react';
import type { Project } from '../types';

export const ProjectGrid: React.FC = () => {
  const { projects: displayedProjects, selectedTech, setSelectedTech, allTechs } = useProjects<Project>(projects);

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2">Projects that showcase my journey.</p>
        </div>
        
        {/* Filter System */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTech(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedTech === null 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground hover:bg-border'
            }`}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedTech === tech 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-border'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        {displayedProjects.map((project, index) => {
          // Make AI-Driven Support Orchestrator the largest card
          const isLarge = project.id === 'ai-orchestrator';
          
          return (
            <BentoCard
              key={project.id}
              delay={index * 0.1}
              className={`${isLarge ? 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-card to-muted/50' : 'col-span-1'} flex flex-col`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Code2 size={isLarge ? 32 : 24} />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-border text-muted-foreground">
                  {project.category}
                </span>
              </div>
              
              <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold mb-2 text-card-foreground`}>
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-grow text-sm">
                {project.description}
              </p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold italic text-primary/80 border-l-2 border-primary pl-3 py-1">
                  "{project.powerPhrase}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map(tech => (
                  <span 
                    key={tech} 
                    className={`text-xs px-2 py-1 rounded-md ${
                      selectedTech === tech ? 'bg-primary/20 text-primary font-semibold' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
};
