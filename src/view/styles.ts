import styled from "styled-components";
import { darkTheme } from "../assets/global-styles/colors";

export const StyledDiv = styled.div`
  background-color: ${darkTheme.backgroundColor};

  & * {
    color: ${darkTheme.fontColor};
  }
  div.wrapper {
    max-width: 1024px;
    margin: 0 auto;
  }
  h1 {
    font-size: 19px;
  }
`;
