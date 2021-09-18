import { StyledProjectCardDiv } from "./styles";
import { BsListTask, BsQuestionDiamond } from "react-icons/bs";
import { SiAndroid, SiMarkdown } from "react-icons/si";

interface Props {
  projectTitle: string;
  techStack: string[];
  icon: "quiz" | "todo" | "md" | "android";
}

interface IconProps {
  icon: "quiz" | "todo" | "md" | "android";
}

const Icon = (props: IconProps) => {
  switch (props.icon) {
    case "quiz":
      return <BsQuestionDiamond size={40} />;
    case "todo":
      return <BsListTask size={40} />;
    case "md":
      return <SiMarkdown size={40} />;
    case "android":
      return <SiAndroid size={40} />;
  }
};

export default function ProjectCard(props: Props) {
  return (
    <StyledProjectCardDiv>
      <a href="#" target="_blank">
        <div className="image">
          <Icon icon={props.icon} />
        </div>
        <div className="info">
          <span className="project_title">{props.projectTitle}</span>
          <ul>
            {props.techStack.map((title) => (
              <li>#{title}</li>
            ))}
          </ul>
        </div>
      </a>
    </StyledProjectCardDiv>
  );
}
