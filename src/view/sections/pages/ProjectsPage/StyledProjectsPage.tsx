import styled from "styled-components";

export const StyledProjectsPage = styled.div`
  text-align: center;
  div.project_card {
    /* margin-right: 25px;
    margin-bottom: 25px; */
    width: 380px;
    font-size: 10px;
    display: inline-block;
    border: 2px solid white;
    border-radius: 2px;
    text-align: left;
    &:nth-child(2) {
      margin-right: 0;
    }
    &:nth-child(4) {
      margin-right: 0;
    }
    div {
      display: inline-block;
    }
    div.image {
      padding: 10px;
      margin-right: 10px;
      border-right: 2px solid white;
    }
    .project_title {
      font-size: 1.5em;
    }
    .info {
      width: 300px;
    }
    ul li {
      display: inline-block;
      margin-right: 6px;
      color: #aaa7a7;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
