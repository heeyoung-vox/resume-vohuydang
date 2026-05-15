import React from 'react';
import { BentoCard } from './BentoCard';
import { experiences } from '../data';
import { Briefcase, Building } from 'lucide-react';
import { motion } from 'framer-motion';

export const ExperienceCard: React.FC = () => {
  return (
    <BentoCard delay={0.1} className="flex flex-col h-full bg-gradient-to-tr from-card to-card/60">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
          <Briefcase size={24} />
        </div>
        <h3 className="text-xl font-bold">Experience</h3>
      </div>
      
      <div className="flex-grow flex flex-col gap-8 relative">
        {/* Vertical line for timeline */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border rounded-full" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8">
            {/* Node */}
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-bold text-card-foreground leading-tight">{exp.role}</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building size={14} />
                  <span className="text-sm font-medium">{exp.company}</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground sm:ml-auto w-fit">
                  {exp.period}
                </span>
              </div>
            </div>
            
            <ul className="space-y-2 mt-3">
              {exp.description.map((desc, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{desc}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};
