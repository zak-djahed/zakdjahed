import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, MapPin, Building } from 'lucide-react';

const ResumeSection = () => {
  const experience = [
    {
      title: 'Software Engineer - LegalTech Dev Team',
      company: 'Miami Law and AI Lab',
      location: 'Coral Gables, Florida',
      period: 'February 2025 - Present',
      description: [
        'Deployed a PDF scraping and classification pipeline that processed 74,000+ government documents',
        'Designed keyword analysis workflows on 2M+ files across decades of regulatory data (1936–2024)',
        'Automated metadata validation by comparing document IDs, RINs, and keyword frequencies across SQL databases and Google Drive archives, reducing manual verification by over 99%',
      ],
      technologies: ['Python', 'SQL', 'Google Drive API', 'PDF Processing'],
    },
    {
      title: 'Trading Analyst Intern',
      company: 'MBF Trading LLC',
      location: 'New York City, New York',
      period: 'May 2024 - June 2024',
      description: [
        'Co-authored a detailed 35-page guide on the firm\'s trading approach, improving clarity for training',
        'Analyzed 100+ stocks daily using Excel, CQG, and proprietary tools, optimizing trading strategy',
        'Developed a new order imbalance-based trading strategy, increasing daily returns by up to 25%',
      ],
      technologies: ['Excel', 'CQG', 'Trading Strategy', 'Data Analysis'],
    },
    {
      title: 'Quantitative Analyst',
      company: 'TAMID Group at the University of Miami',
      location: 'Coral Gables, Florida',
      period: 'September 2024 - Present',
      description: [
        'Using Python (Pandas, NumPy) for stock analysis, portfolio optimization, and trading strategies',
        'Collaborating in a CI/CD workflow to support data-driven quantitative research',
        'Constructing projects on time-series regression, market alphas & betas, Fama-French factor models, Monte Carlo simulations, and equity dashboards',
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'CI/CD', 'Financial Modeling'],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Rhythm Innovations',
      location: 'Sunrise, Florida',
      period: 'May 2025 - August 2025',
      description: [
        'Designed and prototyped Fleet Risk and Claims/Policy features for the Rhythm platform',
        'Built an AI agent delivering monthly risk profiles, securing 90+ new client leads after ASSP demo',
        'Developed a Prediction Builder to identify key predictors of telematics incidents for clients',
      ],
      technologies: ['AI/ML', 'Platform Development', 'Risk Analysis', 'Client Solutions'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science & Mathematics (Double-Major)',
      school: 'University of Miami',
      location: 'Coral Gables, Florida',
      period: 'May 2027 (Expected)',
      gpa: '3.86/4.0',
      relevant: ['Data Structures & Algorithms', 'Statistical Analysis', 'Machine Learning', 'Linear Algebra', 'Systems Programming', 'Multivariable Calculus', 'Game Theory', 'Math Finance'],
    },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground mb-8">
            My academic and professional journey in computer science and mathematics
          </p>
          
          <Button className="bg-gradient-hero text-primary-foreground shadow-medium hover:shadow-large">
            <Download size={16} className="mr-2" />
            {/* REPLACE WITH YOUR ACTUAL RESUME LINK */}
            Download Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-200">
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building size={14} />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {job.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
                      {job.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-200">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building size={14} />
                        {edu.school}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                      <div className="font-medium text-foreground">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional sections can be added here */}
            <Card className="mt-6 shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Foote Fellow Honors - University of Miami</li>
                  <li>Benacquisto Scholar (Full-Ride Merit Scholarship)</li>
                  <li>National Merit Scholar</li>
                  <li>University of Michigan Trading Competition - 2nd Place</li>
                  <li>Kappa Theta Pi Technological Fraternity - VP of Professional Development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;