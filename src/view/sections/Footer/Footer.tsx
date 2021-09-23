import { StyledFooter } from "./StyledFooter";
import Icon from "../../components/Icon";

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        Built with <Icon iconName="react" size={20} fill={"aqua"} /> and{" "}
        <Icon iconName="heart" size={20} color="red" />
      </p>
      <p>by Vitalii Variichuk</p>
      <a href="mailto:varich96@gmail.com" target="_blank" rel="noreferrer">
        varich96@gmail.com
      </a>
    </StyledFooter>
  );
}
