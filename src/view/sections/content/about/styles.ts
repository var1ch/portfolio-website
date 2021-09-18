import styled from "styled-components";
import { darkTheme } from "../../../../assets/global-styles/colors";

export const StyledDiv = styled.div`
  height: 70vh;
  padding: 0 100px 0 100px;
  font-size: 16px;
  span.edu_info {
    text-indent: 3em;
  }
  .boldTitle {
    text-transform: uppercase;
    font-size: 20px;
  }
  .first_letter {
    font-size: 70px;
    color: red;
    display: block;
    border: 1px solid white;
    float: left;
  }
  p {
    text-align: justify;
    padding-left: 40px;
  }
  ul li {
    text-indent: 3em;
  }
`;
