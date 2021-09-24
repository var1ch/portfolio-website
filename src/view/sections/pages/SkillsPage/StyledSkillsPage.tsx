import styled from "styled-components";

export const StyledSkillsPage = styled.div`
  .skill-block {
    margin-bottom: 1rem;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: justify;
    text-indent: 3em;
    font-size: 1rem;
  }
  .boldTitle {
    font-size: 1.2rem;
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
