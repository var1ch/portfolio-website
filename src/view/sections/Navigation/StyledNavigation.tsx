import styled from "styled-components";

export const StyledNavigation = styled.nav<any>`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 19px;
  ul {
    display: flex;
    li {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
      a {
        border-bottom: 2px solid transparent;
        &:hover {
          cursor: pointer;
          border-bottom-color: white;
        }
      }
    }
  }
`;
