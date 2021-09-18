import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { Header, Navigation, Footer } from "./sections";
import { Projects, About, Skills } from "./sections/content";
import { StyledDiv } from "./styles";

export default function Root() {
  return (
    <Router>
      <StyledDiv>
        <div className="wrapper">
          <Header />
          <Navigation />
          <Route exact path="/">
            <Redirect to="/projects" />
          </Route>
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Footer />
        </div>
      </StyledDiv>
    </Router>
  );
}
