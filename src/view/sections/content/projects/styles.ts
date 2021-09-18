import styled from "styled-components";
import { darkTheme } from "../../../../assets/global-styles/colors";

export const StyledDiv = styled.div`
  height: 70vh;
  width: 100%;
  padding: 0 100px 0 100px;
  text-align: center;
  li {
    display: inline-block;
  }
`;

export const StyledProjectCardDiv = styled.div`
  margin-right: 25px;
  margin-bottom: 25px;
  width: 380px;
  font-size: 10px;
  display: inline-block;
  border: 2px solid white;
  border-radius: 2px;
  text-align: left;
  div.image {
    display: inline-block;
    padding: 10px;
    margin-right: 10px;
    border-right: 2px solid white;
  }
  .project_title {
    font-size: 1.5em;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
  }
  .info {
    display: inline-block;
    width: 300px;
  }
  ul {
    display: inline-block;
  }
  ul li {
    display: inline-block;
    margin-right: 6px;
    color: #aaa7a7;
  }
`;
