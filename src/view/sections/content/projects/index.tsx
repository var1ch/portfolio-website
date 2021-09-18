import { StyledDiv } from "./styles";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <StyledDiv>
      <ul>
        <li>
          <ProjectCard
            icon="todo"
            projectTitle="Todo"
            techStack={["TypeScript", "React", "Redux", "MaterialUI"]}
          />
        </li>
        <li>
          <ProjectCard
            icon="quiz"
            projectTitle="Quiz"
            techStack={["TypeScript", "React", "Redux", "MaterialUI"]}
          />
        </li>
        <li>
          <ProjectCard
            icon="md"
            projectTitle="Markdown Preview"
            techStack={["TypeScript", "React", "Redux", "MaterialUI"]}
          />
        </li>
        <li>
          <ProjectCard
            icon="android"
            projectTitle="Inotasks"
            techStack={[
              "TypeScript",
              "ReactNative",
              "Redux",
              "ReactNavigation",
            ]}
          />
        </li>
      </ul>
    </StyledDiv>
  );
}
