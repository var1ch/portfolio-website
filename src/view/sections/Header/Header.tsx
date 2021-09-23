import Icon from "../../components/Icon";
import avatar from "../../../assets/images/avatar.png";
import { StyledHeader } from "./StyledHeader";

export default function Header() {
  return (
    <StyledHeader>
      <img className="avatar_image" src={avatar} alt="" />
      <div className="socials">
        <ul>
          <li>
            <a
              href="https://github.com/var1ch"
              rel="noreferrer"
              target="_blank"
            >
              <Icon iconName="github" size={35} fill="white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/var1ch/"
              rel="noreferrer"
              target="_blank"
            >
              <Icon iconName="linkedIn" size={35} fill="white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/vitalii.variichuk"
              rel="noreferrer"
              target="_blank"
            >
              <Icon iconName="facebook" size={35} fill="white" />
            </a>
          </li>
          <li>
            <a href="https://t.me/v4rich" rel="noreferrer" target="_blank">
              <Icon iconName="telegram" size={35} fill="white" />
            </a>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
}
