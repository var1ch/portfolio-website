import { StyledSkillsPage } from "./StyledSkillsPage";
import { StyledPage } from "../StyledPage";
import SkillBlock from "./components/SkillBlock";
import { skillsData } from "./data";

export default function SkillsPage() {
  return (
    <StyledPage>
      <StyledSkillsPage>
        <SkillBlock
          title={skillsData.typeScript.title}
          description={skillsData.typeScript.description}
        />
        <SkillBlock
          title={skillsData.react.title}
          description={skillsData.react.description}
        />
        <SkillBlock
          title={skillsData.redux.title}
          description={skillsData.redux.description}
        />
        <SkillBlock
          title={skillsData.reactNative.title}
          description={skillsData.reactNative.description}
        />
        {/* <SkillBlock
          title={skillsData.git.title}
          description={skillsData.git.description}
        /> */}
      </StyledSkillsPage>
    </StyledPage>
  );
}
