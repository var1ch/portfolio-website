import React from "react";
import "./styles.scss";
import avatar from "../../../assets/images/avatar.png";
import {
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <div className="image_socials_block">
        <img className="avatar_image" src={avatar} alt="#" />
        <div className="socials">
          <ul>
            <li>
              <a
                href="https://github.com/var1ch?tab=repositories"
                rel="noreferrer"
                target="_blank"
              >
                <RiGithubFill size={35} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/var1ch/"
                rel="noreferrer"
                target="_blank"
              >
                <RiLinkedinBoxFill size={35} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/vitalii.variichuk"
                rel="noreferrer"
                target="_blank"
              >
                <RiFacebookBoxFill size={35} />
              </a>
            </li>
            <li>
              <a
                href="mailto: varich96@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <SiGmail size={35} fill={"white"} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
