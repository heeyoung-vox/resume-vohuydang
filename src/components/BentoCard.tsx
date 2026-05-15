import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const BentoCard: React.FC<BentoCardProps> = ({ className, children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-sm',
        'hover:shadow-md transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
