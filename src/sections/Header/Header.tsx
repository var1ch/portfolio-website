import { StyledHeader } from "./StyledHeader";
import SocialLink from "./components/SocialLink";

export default function Header() {
  return (
    <StyledHeader>
      <div className="image"></div>
      <div className="socials">
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
      </div>
      <div className="hello">
        <h1>Hello, my name is Vitalii Variichuk</h1>
        <p>
          I’m a highly motivated beginner React developer who wants to work on
          interesting projects in a team. I have projects on my GitHub, where
          you can see my code.
        </p>
      </div>
    </StyledHeader>
  );
}
