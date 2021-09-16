import {
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import avatar from "../../../assets/images/avatar.png";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <img className="avatar_image" src={avatar} alt="#" />
      <div className="socials">
        <ul>
          <li>
            <a
              href="https://github.com/var1ch?tab=repositories"
              rel="noreferrer"
              target="_blank"
            >
              <RiGithubFill size={35} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/var1ch/"
              rel="noreferrer"
              target="_blank"
            >
              <RiLinkedinBoxFill size={35} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/vitalii.variichuk"
              rel="noreferrer"
              target="_blank"
            >
              <RiFacebookBoxFill size={35} />
            </a>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Header;
