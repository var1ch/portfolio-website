import styled from "styled-components";

export const StyledAbout = styled.div`
  h2.bold-title {
    text-transform: uppercase;
    text-decoration: underline;
  }
  .hello {
    text-indent: 0;
    text-align: center;
  }
  div.raw {
    display: flex;
  }
  div.info-block {
    display: inline-block;
    width: 50%;
    h2,
    p {
      text-align: center;
    }
  }
  @media screen and (max-width: 720px) {
    .hello {
      text-indent: 0;
      text-align: center;
    }
    div.info {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-top: 1rem;
      & .info-block {
        text-align: center;
        ul li {
          text-indent: 0;
        }
      }
    }
  }
`;
