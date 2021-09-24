import { Link } from "react-router-dom";
import { StyledNavigation } from "./StyledNavigation";

export default function Navigation() {
  return (
    <StyledNavigation className="navigation">
      <ul>
        {/* <li key="1">
          <Link to="/projects">Projects</Link>
        </li> */}
        <li key="2">
          <Link to="/about">About Me</Link>
        </li>
        <li key="3">
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
}
