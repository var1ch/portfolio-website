import styled from "styled-components";

export const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
  div.hello {
    margin-bottom: 1rem;
    h1 {
      text-align: center;
      font-size: 1.3rem;
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
  }
  .boldTitle {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: white;
  }
  div.info {
    display: flex;
    flex-wrap: wrap;
  }
  div.info_block {
    width: 50%;
    margin-bottom: 1rem;
  }
  p {
    text-align: justify;
    text-indent: 3em;
  }
  ul li {
    text-indent: 3em;
    font-size: 0.9rem;
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
      & .info_block {
        width: 100%;
        text-align: center;
        ul li {
          text-indent: 0;
        }
      }
    }
  }
`;
