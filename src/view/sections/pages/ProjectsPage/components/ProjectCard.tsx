import Icon from "../../../../components/Icon";
import type { iconName } from "../../../../components/Icon";

interface Props {
  projectTitle: string;
  techStack: string[];
  url: string;
  iconName: iconName;
}

export default function ProjectCard(props: Props) {
  return (
    <div className="project_card">
      <a href={props.url} rel="noreferrer" target="_blank">
        <div className="image">
          <Icon iconName={props.iconName} size={40} fill="white" />
        </div>
        <div className="info">
          <span className="project_title">{props.projectTitle}</span>
          <br />
          <ul>
            {props.techStack.map((title, index) => (
              <li key={index}>#{title}</li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
}
