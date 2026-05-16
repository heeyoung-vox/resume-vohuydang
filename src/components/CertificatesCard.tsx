import React from 'react';
import { BentoCard } from './BentoCard';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const CertificatesCard: React.FC = () => {
  return (
    <BentoCard delay={0.2} className="flex flex-col h-full bg-gradient-to-bl from-card to-card/50">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
          <Award size={24} />
        </div>
        <h3 className="text-xl font-bold">Certificates</h3>
      </div>
      
      <div className="flex-grow flex flex-col justify-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-4 rounded-xl border border-border bg-background shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-card-foreground">IELTS</h4>
            <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold">
              6.0
            </span>
          </div>
          <p className="text-sm text-muted-foreground">Achieved in 2020</p>
        </motion.div>
      </div>
    </BentoCard>
  );
};
