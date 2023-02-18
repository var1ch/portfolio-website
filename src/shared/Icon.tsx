import {
  RiReactjsLine,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTelegramFill,
  RiGithubFill,
  RiHeartFill,
  RiMailSendFill,
  RiQuestionLine,
} from "react-icons/ri";
import { BsListTask } from "react-icons/bs";
import { SiAndroid, SiMarkdown, SiTypescript, SiRedux } from "react-icons/si";

export type iconName =
  | "facebook"
  | "linkedIn"
  | "telegram"
  | "mail"
  | "github"
  | "react"
  | "heart"
  | "android"
  | "markdown"
  | "todo"
  | "quiz"
  | "typescript"
  | "redux";

interface Props {
  iconName: iconName;
  color?: string;
  fill?: string;
}

export default function Icon(props: Props): JSX.Element {
  switch (props.iconName) {
    case "facebook":
      return <RiFacebookBoxFill color={props.color} fill={props.fill} />;
    case "linkedIn":
      return <RiLinkedinBoxFill color={props.color} fill={props.fill} />;
    case "telegram":
      return <RiTelegramFill color={props.color} fill={props.fill} />;
    case "mail":
      return <RiMailSendFill color={props.color} fill={props.fill} />;
    case "github":
      return <RiGithubFill color={props.color} fill={props.fill} />;
    case "react":
      return <RiReactjsLine color={props.color} fill={props.fill} />;
    case "heart":
      return <RiHeartFill color={props.color} fill={props.fill} />;
    case "android":
      return <SiAndroid color={props.color} fill={props.fill} />;
    case "markdown":
      return <SiMarkdown color={props.color} fill={props.fill} />;
    case "todo":
      return <BsListTask color={props.color} fill={props.fill} />;
    case "quiz":
      return <RiQuestionLine color={props.color} fill={props.fill} />;
    case "typescript":
      return <SiTypescript color={props.color} fill={props.fill} />;
    case "redux":
      return <SiRedux color={props.color} fill={props.fill} />;
  }
}
