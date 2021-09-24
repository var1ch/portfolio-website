import styled from "styled-components";

export const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 720px;
  div.hello {
    h1 {
      text-align: center;
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
  }
  .boldTitle {
    text-transform: uppercase;
    font-size: 20px;
    color: white;
  }
  div.info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  div.info_block {
    width: 50%;
    margin-bottom: 16px;
  }
  p {
    text-align: justify;
    text-indent: 3em;
  }
  ul li {
    text-indent: 3em;
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
      margin-top: 16px;
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
