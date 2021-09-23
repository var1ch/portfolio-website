import styled from "styled-components";

export const StyledProjectsPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid red;
  div.project_card {
    margin-bottom: 16px;
    border: 2px solid white;
    border-radius: 2px;
    font-size: 10px;
    div.image {
      float: left;
      padding: 10px;
      border-right: 2px solid white;
      margin-right: 10px;
    }
    div.info {
      padding: 0 10px 0 10px;
      width: 360px;
      span.project_title {
        font-size: 1.5em;
      }
      ul.technology_stack {
        li {
          display: inline-block;
          margin-right: 6px;
          color: #aaa7a7;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
