import React from 'react';
import { motion } from 'framer-motion';
import { BentoCard } from './BentoCard';
import { skills } from '../data';
import * as LucideIcons from 'lucide-react';
import type { Skill } from '../types';

export const SkillOrbit: React.FC = () => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <BentoCard className="flex flex-col h-full bg-gradient-to-br from-card to-card/50" delay={0.2}>
      <h3 className="text-2xl font-bold mb-6">Technical Arsenal</h3>
      
      <div className="flex-grow flex flex-col gap-6 justify-center">
        {Object.entries(groupedSkills).map(([category, catSkills]) => (
          <div key={category}>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {category}
            </h4>
            <div className="flex flex-wrap gap-3">
              {catSkills.map((skill) => {
                // Safely get icon from Lucide
                const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Code2;
                
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border shadow-sm hover:border-primary/50 hover:shadow-primary/10 transition-all cursor-default"
                  >
                    <IconComponent size={16} className="text-primary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};
