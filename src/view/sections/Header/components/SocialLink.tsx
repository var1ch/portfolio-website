import Icon from "../../../components/Icon";
import type { iconName } from "../../../components/Icon";

interface Props {
  url: string;
  iconName: iconName;
}

export default function SocialLink(props: Props) {
  return (
    <li>
      <a href={props.url} rel="noreferrer" target="_blank">
        <Icon iconName={props.iconName} size={35} fill="white" />
      </a>
    </li>
  );
}
