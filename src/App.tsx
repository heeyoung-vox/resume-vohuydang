import { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ProjectGrid } from './components/ProjectGrid';
import { SkillOrbit } from './components/SkillOrbit';
import { BentoCard } from './components/BentoCard';
import { personalInfo, education } from './data';
import { Moon, Sun, GraduationCap, Mail, Link, MapPin, Phone, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { ExperienceCard } from './components/ExperienceCard';
import { CertificatesCard } from './components/CertificatesCard';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-border transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

function Header() {
  return (
    <header className="flex justify-between items-center py-6 mb-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white font-bold text-xl">
          V
        </div>
        <div>
          <h1 className="text-xl font-bold leading-tight">{personalInfo.name}</h1>
          <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
        </div>
      </motion.div>
      <ThemeToggle />
    </header>
  );
}

function MainLayout() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />
        
        {/* Hero Section using Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Main About Card */}
          <BentoCard className="md:col-span-2 flex flex-col justify-center p-8 bg-gradient-to-br from-primary/5 via-card to-card" delay={0}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">digital experiences</span> with precision.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              {personalInfo.about}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleCopyEmail}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors group"
              >
                <span className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs font-bold rounded-md whitespace-nowrap transition-all duration-200 pointer-events-none ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                  {copied ? 'Copied to clipboard!' : 'Click to copy'}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground"></span>
                </span>
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {personalInfo.email}
              </button>
              {personalInfo.phone && (
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted text-foreground font-medium hover:bg-border transition-colors">
                  <Phone size={18} />
                  {personalInfo.phone}
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted text-foreground font-medium hover:bg-border transition-colors">
                  <Link size={18} />
                  GitHub
                </a>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted text-foreground font-medium hover:bg-border transition-colors">
                  <Link size={18} />
                  LinkedIn
                </a>
              )}
            </div>
          </BentoCard>

          {/* Info Card */}
          <BentoCard className="flex flex-col gap-6" delay={0.1}>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-3">
                <GraduationCap className="text-primary" />
                Education
              </h3>
              <p className="font-semibold">{education.institution}</p>
              <p className="text-sm text-muted-foreground">{education.degree}</p>
              <p className="text-xs text-muted-foreground mt-1">{education.period}</p>
            </div>
            
            <div className="h-px bg-border w-full my-2"></div>
            
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-3">
                <MapPin className="text-primary" />
                Location
              </h3>
              <p className="text-sm">Ho Chi Minh City, Vietnam</p>
              <p className="text-xs text-muted-foreground mt-1">Open to remote work</p>
            </div>
          </BentoCard>
        </div>

        {/* Experience Section (Full Width) */}
        <div className="mb-12">
          <ExperienceCard />
        </div>

        {/* Skills & Certificates Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <SkillOrbit />
          </div>
          <div className="lg:col-span-1">
            <CertificatesCard />
          </div>
        </div>

        {/* Project Grid */}
        <ProjectGrid />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-6 mt-12 mb-20">
          
          <BentoCard delay={0.3} className="flex flex-col justify-center items-center text-center p-12 bg-gradient-to-tl from-purple-500/10 to-primary/5">
            <h3 className="text-2xl font-bold mb-4">Ready to build something amazing?</h3>
            <p className="text-muted-foreground mb-8">
              I'm currently looking for new opportunities and my inbox is always open.
            </p>
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-bold hover:scale-105 transition-transform">
              <Mail size={20} />
              Say Hello
            </a>
          </BentoCard>
        </div>
        
        <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React, Tailwind & TypeScript.</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
