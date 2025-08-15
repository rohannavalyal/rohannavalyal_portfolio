import shoraProject from "@/assets/shora-screenshot.png";
import collabDevProject from "@/assets/collab-dev-project.jpg";
import coffeehubProject from "@/assets/coffeehub-project.jpg";
import signinProject from "@/assets/signin-project.jpg";
import techShelfProject from "@/assets/tech-shelf-screenshot.png";

export interface Project {
  id: string;
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

export const projects: Project[] = [
  {
    id: "shora",
    title: "ShoRa",
    subtitle: "Modern Property Rental Platform",
    year: "2024",
    status: "Completed",
    description: "Modern property rental platform built with Next.js, offering a seamless experience for property listing, booking, and management",
    image: shoraProject,
    features: [
      "Property listings with detailed information and images",
      "Secure user authentication and registration",
      "Reservation booking and management system",
      "Favorites system for saving properties",
      "Property management for owners",
      "Interactive map with Leaflet integration",
      "Fully responsive design for all devices",
    ],
    technologies: ["Next.js 13", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma ORM", "NextAuth.js", "Leaflet"],
    codeUrl: "https://github.com/rohannavalyal/ShoRa",
    demoUrl: "#",
  },
  {
    id: "collab-dev",
    title: "Collab Dev",
    subtitle: "Cloud-Based Collaborative Code Editor",
    year: "2025",
    status: "On Going",
    description: "Cloud-Based Collaborative Code Editor for Teams and Developers",
    image: collabDevProject,
    features: [
      "Real-time collaborative code editing with Monaco Editor",
      "Live code synchronization using socket.io",
      "Dynamic file explorer and terminal emulators for native-like experience",
      "Custom authentication via Clerk and anonymous guest access with room codes",
      "Private collaboration sessions with restricted interaction for guests",
      "Modular architecture with light/dark theme support",
      "Modern UI built using ShadCN UI and Tailwind CSS",
    ],
    technologies: ["Next.js 13", "React", "TypeScript", "Tailwind CSS", "Monaco Editor", "Socket.io", "Clerk Auth", "ShadCN UI"],
    codeUrl: "https://github.com/rohannavalyal/CloudBasedCollborativeCodeEditor",
    demoUrl: "https://cloud-based-collborative-code-editor.vercel.app/",
  },
  {
    id: "coffeehub",
    title: "CoffeeHub Android App",
    subtitle: "Mobile Coffee Shop Application",
    year: "May 2025",
    status: "Completed",
    description: "Modern coffee shop mobile application built with Kotlin featuring order management and user authentication",
    image: coffeehubProject,
    features: [
      "Native Android development",
      "Firebase authentication",
      "Material Design UI",
      "Order management system",
    ],
    technologies: ["Kotlin", "Android Studio", "Firebase", "Material Design"],
    codeUrl: "https://github.com/rohannavalyal/Coffee-Hub",
    demoUrl: "#",
  },
  {
    id: "tech-shelf",
    title: "Tech Shelf",
    subtitle: "Modern Blogging Platform",
    year: "2024",
    status: "Completed",
    description: "Tech Shelf is a modern blogging platform built by students from BMS College of Engineering. It provides a comprehensive space for tech enthusiasts to share knowledge and insights through well-crafted articles.",
    image: techShelfProject,
    features: [
      " Real-time Analytics: Track article performance with live statistics",
      " Interactive Comments: Engage with readers through dynamic commenting",
      " Rich Text Editor: Create beautiful articles with React Quill",
      " Secure Authentication: Powered by Clerk for robust user management",
      " Dashboard: Monitor content performance with detailed analytics",
      " Dark Mode: Comfortable reading experience in any lighting",
      " Responsive Design: Seamless experience across all devices",
    ],
    technologies: ["Next.js 13", "TypeScript", "Tailwind CSS", "Prisma", "Neon DB", "Clerk", "React Quill", "Recharts"],
    codeUrl: "https://github.com/rohannavalyal/Tech-Shelf",
    demoUrl: "#",
  },
  {
    id: "signin-ui",
    title: "Sign-in / Sign-up UI",
    subtitle: "Authentication Interface Components",
    year: "2024",
    status: "Completed",
    description: "A clean and simple authentication interface with both sign-in and sign-up functionality built using modern web technologies.",
    image: signinProject,
    features: [
      "🔒 Sign-in and Sign-up forms with basic authentication flow",
      "🧠 Minimal UI/UX with clear form layout",
      "📱 Fully responsive design for mobile and desktop",
      "✅ Built with clean HTML, CSS, and JavaScript",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/rohannavalyal/Sign-in-Sign-up-Pages",
    demoUrl: "https://minpro-eight.vercel.app/",
  },
];