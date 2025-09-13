import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate student combining computer science and mathematics to solve complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm a passionate Computer Science and Mathematics student at the University of Miami, 
              driven by the intersection of technology and quantitative analysis. Currently maintaining a 3.86 GPA 
              while pursuing a double major, I'm honored to be a Foote Fellow, Benacquisto Scholar, and National Merit Scholar.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience spans from LegalTech development at Miami Law and AI Lab to quantitative analysis 
              with TAMID Group, where I work with trading strategies and portfolio optimization. I'm particularly 
              fascinated by machine learning, financial modeling, and building scalable software solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Python', 'Java', 'Machine Learning', 'Financial Modeling', 'LegalTech', 'Quantitative Analysis'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="glass shadow-soft hover:shadow-medium transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      B.S. in Computer Science & Mathematics<br />
                      University of Miami • Expected May 2027<br />
                      GPA: 3.86/4.0
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass shadow-soft hover:shadow-medium transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Career Goals</h3>
                    <p className="text-muted-foreground">
                      {/* REPLACE WITH YOUR GOALS */}
                      Software Engineer or Quantitative Analyst<br />
                      Focus on fintech and algorithmic solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass shadow-soft hover:shadow-medium transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Interests</h3>
                    <p className="text-muted-foreground">
                      Trading competitions, quantitative research,<br />
                      AI/ML applications, and LegalTech innovation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;