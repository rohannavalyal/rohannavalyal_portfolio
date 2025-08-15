import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Shield, Code, Brain } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "MS Office Certificate",
      issuer: "Disha Computer Institute",
      date: "Nov 2022",
      id: "DISHA-MS-2022-ROHAN",
      description: "Completed a certificate course in MS Office with 68.33%, covering Word, Excel, and PowerPoint.",
      skills: ["MS Word", "MS Excel", "MS PowerPoint"],
      icon: Award,
      verified: true,
    },
    {
      title: "Python Programming",
      issuer: "Great Learning",
      date: "Oct 2024",
      id: "GL-PY-2024-AK",
      description: "Advanced Python programming concepts and practical applications",
      skills: ["Python", "Data Structures", "Algorithms", "OOP", "Libraries"],
      icon: Code,
      verified: true,
    },
    {
      title: "Machine Learning",
      issuer: "Rapidminer",
      date: "2024",
      id: "RM-ML-2024-AK",
      description: "Machine Learning Master Certification",
      skills: ["Machine Learning"],
      icon: Brain,
      verified: true,
    },
  ];

  const coreCompetencies = [
    "React.js & Next.js Development",
    "Full-Stack JavaScript",
    "Python & Machine Learning",
    "Java Programming",
    "MongoDB & Database Design",
    "Git Version Control",
    "API Development & Integration",
    "Responsive Web Design",
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Certifications & Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in modern development technologies
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Professional Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="card-glow border-border/50 bg-card/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <cert.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-foreground">
                              {cert.title}
                            </CardTitle>
                            <p className="text-primary font-medium">{cert.issuer}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {cert.verified && (
                            <Badge className="bg-green-600 mb-2">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {cert.date}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {cert.description}
                      </p>
                      
                      <div className="text-xs text-muted-foreground">
                        <strong>ID:</strong> {cert.id}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Core Competencies
              </h3>
              <Card className="card-glow border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {coreCompetencies.map((competency, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground font-medium">{competency}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">
                      🚀 Continuous Learning
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Actively pursuing new certifications and staying updated with latest technology trends
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};