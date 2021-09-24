import avatar from "../../../assets/images/avatar.png";
import { StyledHeader } from "./StyledHeader";
import SocialLink from "./components/SocialLink";

export default function Header() {
  return (
    <StyledHeader>
      <img src={avatar} alt="" />
      <div className="socials">
        <ul>
          <SocialLink url="https://github.com/var1ch" iconName="github" />
          <SocialLink
            url="https://www.linkedin.com/in/var1ch/"
            iconName="linkedIn"
          />
          <SocialLink
            url="https://www.facebook.com/vitalii.variichuk"
            iconName="facebook"
          />
          <SocialLink url="mailto:varich96@gmail.com" iconName="mail" />
          <SocialLink url="https://t.me/v4rich" iconName="telegram" />
        </ul>
      </div>
    </StyledHeader>
  );
}
