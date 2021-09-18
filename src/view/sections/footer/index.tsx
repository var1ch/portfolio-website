import { StyledFooter } from "./styles";
import { RiReactjsLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        Built with <RiReactjsLine size={20} fill={"aqua"} /> and{" "}
        <FcLike size={20} />
      </p>
      <p>by Vitalii Variichuk</p>
      <a href="mailto:varich96@gmail.com" target="_blank" rel="noreferrer">
        varich96@gmail.com
      </a>
    </StyledFooter>
  );
}
