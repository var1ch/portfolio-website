import { StyledAboutPage } from "./StyledAboutPage";
import { StyledPage } from "../StyledPage";
import InfoBlock from "./components/InfoBlock";
import { aboutData } from "./data";

export default function AboutPage() {
  return (
    <StyledPage>
      <StyledAboutPage>
        <h1 className="boldTitle">{aboutData.hello.title}</h1>
        <p>{aboutData.hello.description}</p>
        <InfoBlock
          title={aboutData.education.title}
          info={aboutData.education.description}
        />
        <InfoBlock
          title={aboutData.softSkills.title}
          info={aboutData.softSkills.description}
        />
        <InfoBlock
          title={aboutData.languages.title}
          info={aboutData.languages.description}
        />
        <InfoBlock
          title={aboutData.hardware.title}
          info={aboutData.hardware.description}
        />
      </StyledAboutPage>
    </StyledPage>
  );
}
