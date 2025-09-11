import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, MapPin, Building } from 'lucide-react';

const ResumeSection = () => {
  // REPLACE WITH YOUR ACTUAL EXPERIENCE
  const experience = [
    {
      title: 'Software Engineering Intern',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      period: 'Summer 2024',
      description: [
        'Developed full-stack web applications using React and Node.js',
        'Implemented automated testing suite, reducing bugs by 40%',
        'Collaborated with senior developers on product feature development',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Research Assistant',
      company: 'University of X - Mathematics Department',
      location: 'University City, State',
      period: 'Sep 2023 - Present',
      description: [
        'Conducted research on optimization algorithms for portfolio management',
        'Published findings in undergraduate research symposium',
        'Mentored junior students in mathematical modeling techniques',
      ],
      technologies: ['Python', 'MATLAB', 'R', 'LaTeX'],
    },
  ];

  // REPLACE WITH YOUR ACTUAL EDUCATION
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science & Mathematics',
      school: 'University of X',
      location: 'University City, State',
      period: '2022 - 2025 (Expected)',
      gpa: '3.8/4.0',
      relevant: ['Data Structures & Algorithms', 'Machine Learning', 'Statistics', 'Linear Algebra'],
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
                  {/* REPLACE WITH YOUR ACHIEVEMENTS */}
                  <li>Dean's List for 3 consecutive semesters</li>
                  <li>Winner of University Programming Competition 2023</li>
                  <li>Participant in ACM ICPC Regional Contest</li>
                  <li>Mathematics Scholarship Recipient</li>
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