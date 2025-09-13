import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const technicalSkills = [
    'Python',
    'Java', 
    'JavaScript',
    'C',
    'R',
    'SQL',
  ];

  const mathematicalSkills = [
    'Statistics & Probability',
    'Linear Algebra',
    'Calculus',
    'Discrete Mathematics',
    'Data Analysis',
    'Machine Learning',
  ];

  const tools = [
    'Git & GitHub',
    'Jupyter Notebooks',
    'UNIX',
    'Node.js',
    'Tableau',
    'Power BI',
    'Salesforce',
    'REST APIs',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'SciPy',
    'scikit-learn',
    'PyTorch',
    'yfinance',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Technical competencies developed through coursework and hands-on projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-soft hover:shadow-medium transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-xl">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-accent/50 rounded-lg text-center font-medium hover:bg-accent transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-xl">Mathematics & Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {mathematicalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-accent/50 rounded-lg text-center font-medium hover:bg-accent transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl">Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="p-3 bg-accent/50 rounded-lg text-center font-medium hover:bg-accent transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;