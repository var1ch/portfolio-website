import {
  RiReactjsLine,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BsListTask, BsQuestionDiamond } from "react-icons/bs";
import { SiAndroid, SiMarkdown, SiTypescript, SiRedux } from "react-icons/si";

export type iconName =
  | "facebook"
  | "linkedIn"
  | "telegram"
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
  size?: number;
  color?: string;
  fill?: string;
}

export default function Icon(props: Props): JSX.Element {
  switch (props.iconName) {
    case "facebook":
      return (
        <RiFacebookBoxFill
          size={props.size}
          color={props.color}
          fill={props.fill}
        />
      );
    case "linkedIn":
      return (
        <RiLinkedinBoxFill
          size={props.size}
          color={props.color}
          fill={props.fill}
        />
      );
    case "telegram":
      return (
        <FaTelegram size={props.size} color={props.color} fill={props.fill} />
      );
    case "github":
      return (
        <RiGithubFill size={props.size} color={props.color} fill={props.fill} />
      );
    case "react":
      return (
        <RiReactjsLine
          size={props.size}
          color={props.color}
          fill={props.fill}
        />
      );
    case "heart":
      return <FcLike size={props.size} color={props.color} fill={props.fill} />;
    case "android":
      return (
        <SiAndroid size={props.size} color={props.color} fill={props.fill} />
      );
    case "markdown":
      return (
        <SiMarkdown size={props.size} color={props.color} fill={props.fill} />
      );
    case "todo":
      return (
        <BsListTask size={props.size} color={props.color} fill={props.fill} />
      );
    case "quiz":
      return (
        <BsQuestionDiamond
          size={props.size}
          color={props.color}
          fill={props.fill}
        />
      );
    case "typescript":
      return (
        <SiTypescript size={props.size} color={props.color} fill={props.fill} />
      );
    case "redux":
      return (
        <SiRedux size={props.size} color={props.color} fill={props.fill} />
      );
  }
}
