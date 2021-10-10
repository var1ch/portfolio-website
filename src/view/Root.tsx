import { Header, About, Skills, Projects } from "./sections";
import { StyledRoot } from "./StyledRoot";

export default function Root() {
  return (
    <StyledRoot>
      <Header />
      <About />
      <Skills />
      <Projects />
    </StyledRoot>
  );
}
