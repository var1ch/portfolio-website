import { StyledAboutPage } from "./StyledAboutPage";
import { StyledPage } from "../StyledPage";
import InfoBlock from "./components/InfoBlock";
import { aboutData } from "./data";

export default function AboutPage() {
  return (
    <StyledPage>
      <StyledAboutPage>
        <div className="hello">
          <h1>{aboutData.hello.title}</h1>
          <p>{aboutData.hello.description}</p>
        </div>
        <div className="info">
          <InfoBlock
            className="education"
            title={aboutData.education.title}
            info={aboutData.education.description}
          />
          <InfoBlock
            className="soft-skills"
            title={aboutData.softSkills.title}
            info={aboutData.softSkills.description}
          />
          <InfoBlock
            className="languages"
            title={aboutData.languages.title}
            info={aboutData.languages.description}
          />
          <InfoBlock
            className="hardware"
            title={aboutData.hardware.title}
            info={aboutData.hardware.description}
          />
        </div>
      </StyledAboutPage>
    </StyledPage>
  );
}
