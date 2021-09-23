import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { Header, Navigation, Footer } from "./sections";
import { ProjectsPage, AboutPage, SkillsPage } from "./sections/pages";
import { StyledRoot } from "./StyledRoot";

export default function Root() {
  return (
    <Router>
      <StyledRoot>
        <Header />
        <Navigation />
        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/skills" component={SkillsPage} />
        <Footer />
      </StyledRoot>
    </Router>
  );
}
