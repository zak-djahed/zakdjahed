import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import headshotImage from '@/assets/zak-headshot.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="animate-fade-in flex flex-col lg:flex-row items-center gap-12">
          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-2xl opacity-30 scale-110"></div>
              <img
                src={headshotImage}
                alt="Zak Djahed professional headshot"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Zak Djahed
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Computer Science & Mathematics Student
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl lg:max-w-none">
              Aspiring Software Engineer and Quantitative Analyst with experience in LegalTech, trading, and AI. 
              Passionate about building innovative solutions and applying mathematical models to real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-12">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-gradient-button text-white shadow-medium hover:shadow-large hover:scale-105 transition-all duration-200"
              >
                View My Work
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center lg:justify-start justify-center space-x-6">
              <a
                href="https://github.com/zak-djahed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/zakaria-djahed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:zxd234@miami.edu"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;