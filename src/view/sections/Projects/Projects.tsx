import { StyledProjects } from "./StyledProjects";
import ProjectCard from "./components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="container">
      <StyledProjects>
        <ProjectCard
          url="https://github.com/var1ch/inotasks"
          iconName="android"
          projectTitle="Inotasks"
          techStack={["TypeScript", "ReactNative", "Redux", "ReactNavigation"]}
        />
        <ProjectCard
          url="https://github.com/var1ch/inotasks"
          iconName="android"
          projectTitle="Inotasks"
          techStack={["TypeScript", "ReactNative", "Redux", "ReactNavigation"]}
        />
        <ProjectCard
          url="https://github.com/var1ch/inotasks"
          iconName="android"
          projectTitle="Inotasks"
          techStack={["TypeScript", "ReactNative", "Redux", "ReactNavigation"]}
        />
        <ProjectCard
          url="https://github.com/var1ch/inotasks"
          iconName="android"
          projectTitle="Inotasks"
          techStack={["TypeScript", "ReactNative", "Redux", "ReactNavigation"]}
        />
      </StyledProjects>
    </div>
  );
}
