import React from "react";
import "./styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
