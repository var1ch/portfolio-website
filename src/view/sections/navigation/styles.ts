import styled from "styled-components";

export const StyledNav = styled.nav`
  text-align: center;
  margin-bottom: 16px;
  font-size: 19px;
  li {
    display: inline-block;
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
      &:focus {
        border-bottom-color: white;
      }
    }
  }
`;
