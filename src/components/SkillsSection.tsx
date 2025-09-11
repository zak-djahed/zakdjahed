import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  // REPLACE WITH YOUR ACTUAL SKILLS AND PROFICIENCY LEVELS (0-100)
  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'C++', level: 70 },
    { name: 'SQL', level: 85 },
  ];

  const mathematicalSkills = [
    { name: 'Statistics & Probability', level: 88 },
    { name: 'Linear Algebra', level: 85 },
    { name: 'Calculus', level: 90 },
    { name: 'Discrete Mathematics', level: 82 },
    { name: 'Data Analysis', level: 87 },
    { name: 'Machine Learning', level: 78 },
  ];

  const tools = [
    'Git & GitHub',
    'Docker',
    'AWS',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Jupyter Notebooks',
    'MATLAB',
    'R',
    'Pandas',
    'NumPy',
    'TensorFlow',
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
            <CardContent className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-xl">Mathematics & Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mathematicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
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