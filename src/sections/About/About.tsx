import { StyledAbout } from "./StyledAbout";
import InfoBlock from "./components/InfoBlock";
import { aboutData } from "./data";

export default function AboutPage() {
  return (
    <div className="container">
      <StyledAbout>
        <div className="info-wrapper">
          <div className="info">
            <div className="raw">
              <InfoBlock
                title={aboutData.education.title}
                info={aboutData.education.description}
              />
              <InfoBlock
                title={aboutData.softSkills.title}
                info={aboutData.softSkills.description}
              />
            </div>
            <div className="raw">
              <InfoBlock
                title={aboutData.languages.title}
                info={aboutData.languages.description}
              />
              <InfoBlock
                title={aboutData.hardware.title}
                info={aboutData.hardware.description}
              />
            </div>
          </div>
        </div>
      </StyledAbout>
    </div>
  );
}
