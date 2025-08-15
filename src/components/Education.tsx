import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, TrendingUp } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "B.E., Information Science and Engineering",
      institution: "BMS College of Engineering",
      period: "Dec 2022 – Jul 2026",
      location: "Bangalore",
      status: "Current",
      grade: "CGPA: 8.96",
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Software Engineering",
        "Database Systems",
        "Operating Systems",
        "Computer Networks",
      ],
      achievements: [
        "Consistent academic performance with 8.6+ CGPA",
        "Active participation in coding competitions",
        "Strong foundation in computer science fundamentals",
        "Practical project-based learning approach",
      ],
    },
    {
      degree: "Pre University",
      institution: "Smt. VP Hanchinmani PU College",
      period: "Jun 2020 – Apr 2022",
      location: "Dharwad",
      status: "Completed",
      grade: "Percentage: 93.83%",
      coursework: [],
      achievements: [],
    },
    {
      degree: "SSLC",
      institution: "Model English Med School",
      period: "Jun 2019 – Apr 2020",
      location: "Belagavi",
      status: "Completed",
      grade: "Percentage: 93.76%",
      coursework: [],
      achievements: [],
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Academic foundation in computer science with strong performance and practical learning
          </p>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-glow border-border/50 bg-card/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <Badge 
                          variant={edu.status === "Current" ? "default" : "secondary"}
                          className={edu.status === "Current" ? "bg-green-600" : "bg-gray-600"}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground mb-2">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-primary font-medium text-lg">
                        {edu.institution}
                      </p>
                    </div>
                    
                    <div className="text-right space-y-2">
                      <div className="flex items-center justify-end gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center justify-end gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center justify-end gap-2 text-primary font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                {(edu.coursework.length > 0 || edu.achievements.length > 0) && (
                  <CardContent className="space-y-6">
                    {edu.coursework.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Relevant Coursework
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <div key={courseIndex} className="text-sm text-muted-foreground">
                              • {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {edu.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="text-sm text-muted-foreground">
                              • {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};