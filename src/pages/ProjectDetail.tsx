import { useParams, useNavigate } from "react-router-dom";
import { ProjectDetail as ProjectDetailComponent } from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    navigate("/");
    return null;
  }

  const handleBack = () => {
    navigate("/#projects");
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return <ProjectDetailComponent project={project} onBack={handleBack} />;
}