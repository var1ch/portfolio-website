import { Link } from "react-router-dom";
import { StyledNav } from "./styles";

const Navigation = () => {
  return (
    <StyledNav className="navigation">
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navigation;
