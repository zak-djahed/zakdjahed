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
              {/* REPLACE WITH YOUR STORY */}
              I'm a dedicated Computer Science and Mathematics student at the University of X, 
              with a deep passion for technology and quantitative analysis. My journey began with 
              curiosity about how mathematical principles can be applied to create efficient 
              algorithms and solve real-world challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {/* REPLACE WITH YOUR INTERESTS */}
              I'm particularly interested in machine learning, algorithmic trading, and software 
              development. I enjoy working on projects that bridge the gap between theoretical 
              mathematics and practical applications in technology and finance.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {/* REPLACE WITH YOUR INTERESTS/TECHNOLOGIES */}
              {['Python', 'JavaScript', 'React', 'Machine Learning', 'Algorithms', 'Statistics'].map((tech) => (
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
                      {/* REPLACE WITH YOUR EDUCATION */}
                      B.S. in Computer Science & Mathematics<br />
                      University of X • Expected 2025
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
                      {/* REPLACE WITH YOUR INTERESTS */}
                      Competitive programming, chess,<br />
                      financial markets, and open source
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