import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-padding bg-gradient-secondary relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary/2 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="text-gradient-secondary">Featured</span>{" "}
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-6 lg:mb-8 rounded-full" />
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative projects built with modern technologies and best practices
            </p>
          </div>
          
          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group">
                  <Card className="h-full glass-effect border-border/30 hover:border-primary/30 transition-all duration-500 group-hover:scale-105 overflow-hidden">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-44 sm:h-48 lg:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge 
                          className={`${
                            project.status === "Completed" 
                              ? "bg-green-500/90 text-white border-green-400/50" 
                              : project.status === "On Going"
                              ? "bg-yellow-500/90 text-white border-yellow-400/50"
                              : "bg-blue-500/90 text-white border-blue-400/50"
                          } backdrop-blur-sm text-xs font-medium`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-4 sm:p-6">
                      {/* Header */}
                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300 line-clamp-1">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-muted-foreground text-xs ml-2">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="whitespace-nowrap">{project.year}</span>
                          </div>
                        </div>
                        <p className="text-primary font-medium text-sm mb-3">{project.subtitle}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-xs px-2 py-1 border-border/40 text-muted-foreground hover:border-primary/50 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs px-2 py-1 border-border/40 text-muted-foreground">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Action Button */}
                      <Button 
                        className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow-hover border-0 group-hover:scale-105 transition-all duration-300 font-medium"
                        onClick={() => navigate(`/projects/${project.id}`)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
          
          {/* Enhanced Bottom decoration */}
          <div className="text-center mt-12 lg:mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm sm:text-base text-muted-foreground font-medium">
                More projects available on GitHub
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};