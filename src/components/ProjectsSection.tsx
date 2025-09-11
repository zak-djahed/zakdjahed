import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  // REPLACE WITH YOUR ACTUAL PROJECTS
  const projects = [
    {
      title: 'Algorithmic Trading Bot',
      description: 'A Python-based trading bot that uses machine learning algorithms to analyze market trends and execute trades automatically.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Alpha Vantage API'],
      githubUrl: 'https://github.com/yourusername/trading-bot',
      liveUrl: null,
      featured: true,
    },
    {
      title: 'Portfolio Optimization Tool',
      description: 'Web application for portfolio optimization using modern portfolio theory and Monte Carlo simulations.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/portfolio-optimizer',
      liveUrl: 'https://portfolio-optimizer.example.com',
      featured: true,
    },
    {
      title: 'Data Structures Visualizer',
      description: 'Interactive web app that visualizes common data structures and algorithms to help students learn computer science concepts.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'D3.js'],
      githubUrl: 'https://github.com/yourusername/ds-visualizer',
      liveUrl: 'https://ds-visualizer.example.com',
      featured: false,
    },
    {
      title: 'Statistical Analysis Library',
      description: 'A comprehensive Python library for statistical analysis with implementations of various hypothesis testing methods.',
      technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
      githubUrl: 'https://github.com/yourusername/stats-lib',
      liveUrl: null,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            A showcase of my work in software development and quantitative analysis
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`shadow-soft hover:shadow-medium transition-all duration-200 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      {project.title}
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={16} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;