import Icon from "../../../shared/Icon";
import type { iconName } from "../../../shared/Icon";

interface Props {
  url: string;
  iconName: iconName;
}

export default function SocialLink(props: Props) {
  return (
    <a href={props.url} rel="noreferrer" target="_blank">
      <Icon iconName={props.iconName} fill="black" />
    </a>
  );
}
