import styled from "styled-components";

export const StyledSkillsPage = styled.div`
  .skill-block {
    margin-bottom: 16px;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: justify;
    text-indent: 3em;
  }
  .boldTitle {
    font-size: 20px;
  }
  @media screen and (max-width: 720px) {
    h2 {
      text-align: left;
    }
    p {
      text-align: justify;
      padding-left: 0;
      text-indent: 3em;
    }
  }
`;
