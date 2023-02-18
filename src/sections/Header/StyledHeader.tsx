import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  div.image {
    width: 150px;
    height: 150px;
    border-radius: 75px;
    border: 6px solid green;
  }
  div.socials {
    display: flex;
    a {
      line-height: 0;
      margin-right: 1rem;
      font-size: 2.3rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
