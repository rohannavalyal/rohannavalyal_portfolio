import { Card, CardContent } from "@/components/ui/card";
import { Code, Bot, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "React.js, Next.js, Node.js, Express.js",
    },
    {
      icon: Bot,
      title: "AI-Enhanced Workflow",
      description: "Cursor, Claude, MidJourney, Grok",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "30% faster load times, 95% ML accuracy",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="text-gradient-secondary">Professional</span>{" "}
              <span className="text-gradient">Summary</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-6 lg:mb-8 rounded-full" />
            
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Software Development Engineer skilled in{" "}
                <span className="text-gradient font-semibold">full-stack development</span>{" "}
                with React.js, Next.js, and Node.js. Leverages AI tools like Cursor for coding, 
                MidJourney for image generation, Claude for problem-solving, and Grok for research 
                to deliver projects faster, including a{" "}
                <span className="text-gradient font-semibold">30% faster website</span> and{" "}
                <span className="text-gradient font-semibold">95% accurate fraud detection system</span>.
              </p>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <Reveal key={index} delay={index * 0.15}>
                <div className="group">
                  <Card className="h-full glass-effect border-border/30 hover:border-primary/30 transition-all duration-500 group-hover:scale-105">
                    <CardContent className="p-6 lg:p-8 text-center">
                      <div className="relative mb-6 lg:mb-8">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 pulse-glow">
                          <highlight.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-primary/5 rounded-full blur-xl group-hover:bg-gradient-primary/10 transition-all duration-300" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-3 lg:mb-4 group-hover:text-gradient transition-all duration-300">
                        {highlight.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12 lg:mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm sm:text-base text-muted-foreground font-medium">
                Building the future with cutting-edge technology
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};