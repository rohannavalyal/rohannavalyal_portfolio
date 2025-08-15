import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript"],
    },
    {
      title: "Frontend Frameworks",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "APIs", "Flask"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL", "Firebase", "Appwrite"],
    },
    {
      title: "Development Tools",
      skills: ["Git/GitHub", "VS Code", "Vercel", "Cursor IDE"],
    },
    {
      title: "AI & Emerging Tech",
      skills: ["Machine Learning", "Claude AI", "Midjourney", "Agile Development"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive skill set spanning modern web development technologies and AI-enhanced workflows
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full card-glow border-border/30 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-center text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2.5 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground hover:from-primary/20 hover:to-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg animate-scale-in border border-border/20"
                          style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Bottom decoration */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                Continuously learning and adapting to new technologies
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};