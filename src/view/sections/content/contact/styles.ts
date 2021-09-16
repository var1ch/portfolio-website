import styled from "styled-components";
import { darkTheme } from "../../../../assets/global-styles/colors";

export const StyledDiv = styled.div`
  height: 70vh;
  text-align: center;
  padding: 0 100px 0 100px;
  h1 {
    color: ${darkTheme.fontColor};
    margin-bottom: 16px;
  }
  p {
    text-align: justify;
    text-indent: 3em;
  }
`;
