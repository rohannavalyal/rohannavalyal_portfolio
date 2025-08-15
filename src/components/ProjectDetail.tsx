import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, CheckCircle, ArrowLeft } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  year: string;
  status: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  codeUrl: string;
  demoUrl: string;
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  return (
    <div className="py-20 bg-background animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-8 hover:bg-accent animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          {/* Project Header */}
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="relative mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4">
                <Badge 
                  variant={project.status === "Completed" ? "default" : "secondary"}
                  className={`${
                    project.status === "Completed" 
                      ? "bg-green-600 text-white" 
                      : project.status === "On Going"
                      ? "bg-yellow-600 text-white"
                      : "bg-blue-600 text-white"
                  } text-sm px-3 py-1`}
                >
                  {project.status}
                </Badge>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-primary font-medium mb-2">{project.subtitle}</p>
            <div className="flex items-center justify-center text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              {project.year}
            </div>
          </div>

          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card className="card-glow border-border/30 bg-card/60 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="card-glow border-border/30 bg-card/60 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Key Features & Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <Card className="card-glow border-border/30 bg-card/60 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground hover:from-primary/20 hover:to-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Links */}
              <Card className="card-glow border-border/30 bg-card/60 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Project Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                    onClick={() => window.open(project.codeUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                  {project.demoUrl !== "#" && (
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Project Status */}
              <Card className="card-glow border-border/30 bg-card/60 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Project Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      project.status === "Completed" 
                        ? "bg-green-500" 
                        : project.status === "On Going"
                        ? "bg-yellow-500 animate-pulse"
                        : "bg-blue-500"
                    }`} />
                    <span className="text-sm text-muted-foreground">{project.status}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};