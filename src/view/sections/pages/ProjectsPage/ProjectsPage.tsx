import { StyledProjectsPage } from "./StyledProjectsPage";
import { StyledPage } from "../StyledPage";
import ProjectCard from "./components/ProjectCard";

export default function ProjectsPage() {
  return (
    <StyledPage>
      <StyledProjectsPage>
        <ProjectCard
          url="https://github.com/var1ch/inotasks"
          iconName="android"
          projectTitle="Inotasks"
          techStack={["TypeScript", "ReactNative", "Redux", "ReactNavigation"]}
        />
      </StyledProjectsPage>
    </StyledPage>
  );
}
