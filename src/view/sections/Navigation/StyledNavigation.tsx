import styled from "styled-components";

export const StyledNavigation = styled.nav<any>`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  ul {
    display: flex;
    li {
      margin-right: 1rem;
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
