import styled from "styled-components";

export const StyledRoot = styled.div`
  max-width: 720px;
  min-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  div.container {
    width: 100%;
    border-radius: 4px;
    padding: 16px;
    margin-top: 16px;
    background-color: white;
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.25);
  }
`;
