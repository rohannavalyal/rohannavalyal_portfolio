import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-secondary/20 via-secondary/10 to-transparent border-t border-border/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                  <span>rohannavalyal4@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                  <span>+91 7019490829</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="space-y-3">
                {["About", "Skills", "Projects", "Education", "Certifications"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/rohan-navalyal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary hover:scale-110 hover:bg-primary/20 transition-all duration-300 border border-primary/20"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/rohannavalyal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary hover:scale-110 hover:bg-primary/20 transition-all duration-300 border border-primary/20"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:rohannavalyal4@gmail.com"
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary hover:scale-110 hover:bg-primary/20 transition-all duration-300 border border-primary/20"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Let's connect and build something amazing together. Always open to new opportunities and collaborations.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground text-sm">
                  © {new Date().getFullYear()} Rohan Navalyal. All rights reserved.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-muted-foreground">
                  Available for freelance work
                </span>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};