import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Header, Navigation, Footer } from "./sections";
import { Projects, About, Skills, Contact } from "./sections/content";
import { StyledDiv } from "./styles";

const Root = () => {
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
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </StyledDiv>
    </Router>
  );
};

export default Root;
