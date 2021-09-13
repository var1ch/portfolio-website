import React from "react";
import { Header, Navigation, Footer } from "./sections";
import "./styles.scss";

const App = () => {
  return (
    <div className="mainBlock">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
