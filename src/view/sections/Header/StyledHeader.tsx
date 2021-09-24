import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  div.socials {
    ul {
      display: flex;
      li {
        margin-right: 1rem;
        font-size: 2.3rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
