import { useState, useMemo } from 'react';
import type { Project } from '../types';

export function useProjects<T extends Project>(initialProjects: T[]) {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return initialProjects;
    return initialProjects.filter((project) =>
      project.techStack.includes(selectedTech)
    );
  }, [initialProjects, selectedTech]);

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    initialProjects.forEach((project) => {
      project.techStack.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, [initialProjects]);

  return {
    projects: filteredProjects,
    selectedTech,
    setSelectedTech,
    allTechs,
  };
}
