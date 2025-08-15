import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import profilePhoto from "@/assets/new-profile-photo.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-effect rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-border/30 card-glow animate-fade-in">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Profile Image */}
              <div className="flex-shrink-0 order-1 lg:order-none">
                <div className="relative group">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-all duration-500 pulse-glow">
                    <img
                      src={profilePhoto}
                      alt="Rohan Navalyal"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="absolute -inset-2 rounded-full bg-gradient-primary opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-none">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
                  Rohan Navalyal
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gradient font-semibold mb-6 lg:mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Software Development Engineer
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.45s' }}>
                  Software Development Engineer skilled in full-stack development with React.js,
                  Next.js, and Node.js. Leveraging AI tools to deliver projects faster and build
                  innovative web applications.
                </p>
                
                {/* Contact Info */}
                <address className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 lg:mb-10 text-sm sm:text-base text-muted-foreground animate-fade-in not-italic" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                    <a href="mailto:rohannavalyal4@gmail.com" className="truncate hover:text-primary transition-colors duration-200">
                      rohannavalyal4@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                    <a href="tel:+917019490829" className="hover:text-primary transition-colors duration-200">
                      +91 7019490829
                    </a>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start sm:col-span-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </address>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '1s' }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary text-primary-foreground hover:shadow-glow-hover transition-all duration-300 border-0 w-full sm:w-auto"
                    onClick={() => window.open('https://www.linkedin.com/in/rohan-navalyal/', '_blank', 'noopener noreferrer')}
                    aria-label="Visit LinkedIn profile"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 w-full sm:w-auto"
                    onClick={() => window.open('https://github.com/rohannavalyal', '_blank', 'noopener noreferrer')}
                    aria-label="Visit GitHub profile"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 w-full sm:w-auto"
                    onClick={() => window.open('https://leetcode.com/u/rohan_navalyal/', '_blank', 'noopener noreferrer')}
                    aria-label="Visit LeetCode profile"
                  >
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    LeetCode
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};