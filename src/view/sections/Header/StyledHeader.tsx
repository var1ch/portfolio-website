import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
  div.socials {
    ul {
      display: flex;
      li {
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
