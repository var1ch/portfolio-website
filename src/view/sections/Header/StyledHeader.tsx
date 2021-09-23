import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-bottom: 16px;
  .avatar_image {
    margin: 0 auto;
    width: 300px;
    height: 300px;
    display: block;
  }
  .socials {
    ul {
      text-align: center;
      li {
        display: inline-block;
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
