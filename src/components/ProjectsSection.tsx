import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Portfolio Optimization with Factor Models',
      description: 'Implemented portfolio optimization using historical price data for 20 stocks, calculating expected returns and covariance matrix. Simulated 10,000 random portfolios to visualize the efficient frontier and computed minimum-variance portfolio with scipy.optimize.',
      technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Portfolio Theory'],
      githubUrl: 'https://github.com/zak-djahed/portfolio-optimization',
      liveUrl: null,
      featured: true,
    },
    {
      title: 'DIY Search Engine',
      description: 'Built a custom search engine modeling data collection, ranking algorithms, and search operations. Compared sorting algorithms (heap, selection, insertion, bubble) for page ranking with time complexity analysis.',
      technologies: ['Java', 'Data Structures', 'Algorithms', 'Performance Analysis'],
      githubUrl: 'https://github.com/zak-djahed/diy-search-engine',
      liveUrl: null,
      featured: true,
    },
    {
      title: 'LegalTech Document Processing',
      description: 'Deployed a PDF scraping and classification pipeline processing 74,000+ government documents with keyword analysis workflows on 2M+ files across decades of regulatory data.',
      technologies: ['Python', 'PDF Processing', 'SQL', 'Data Pipeline', 'Classification'],
      githubUrl: 'https://github.com/zak-djahed/legaltech-pipeline',
      liveUrl: null,
      featured: false,
    },
    {
      title: 'Quantitative Trading Research',
      description: 'Developed trading strategies and portfolio optimization models using time-series regression, market alphas & betas, Fama-French factor models, and Monte Carlo simulations.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Financial Modeling', 'Statistical Analysis'],
      githubUrl: 'https://github.com/zak-djahed/quant-research',
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
              href="https://github.com/zak-djahed"
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