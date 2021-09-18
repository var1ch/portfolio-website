import { StyledDiv } from "./styles";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <StyledDiv>
      <ul>
        <ProjectCard
          icon="todo"
          projectTitle="Todo"
          techStack={["TypeScript", "React", "Redux", "MaterialUI"]}
        />
        <ProjectCard
          icon="quiz"
          projectTitle="Quiz"
          techStack={["TypeScript", "React", "Redux", "MaterialUI"]}
        />
        <ProjectCard
          icon="md"
          projectTitle="Markdown Preview"
          techStack={["TypeScript", "React", "Redux", "MaterialUI"]}
        />
        <ProjectCard
          icon="android"
          projectTitle="Inotasks"
          techStack={["TypeScript", "ReactNative", "Redux", "ReactNavigation"]}
        />
      </ul>
    </StyledDiv>
  );
}
