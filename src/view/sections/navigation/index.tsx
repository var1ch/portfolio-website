import { Link } from "react-router-dom";
import { StyledNav } from "./styles";

export default function Navigation() {
  return (
    <StyledNav className="navigation">
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </StyledNav>
  );
}
