import { StyledFooter } from "./StyledFooter";
import Icon from "../../components/Icon";

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        Built with{" "}
        <span>
          <Icon iconName="react" fill="aqua" />
        </span>{" "}
        and{" "}
        <span>
          <Icon iconName="heart" fill="red" />
        </span>
      </p>
      <p>by Vitalii Variichuk</p>
      <a href="mailto:varich96@gmail.com" target="_blank" rel="noreferrer">
        varich96@gmail.com
      </a>
    </StyledFooter>
  );
}
