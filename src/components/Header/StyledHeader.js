import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-grey-1);
  height: 120px;
  display: flex;
  justify-content: center;

  @media (min-width: 400px) {
    height: 90px;
    width: 100%; 
  }
`;

export const StyledContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    @media (min-width: 400px) {
      width: 88%;
      flex-direction: row;
      justify-content: space-between;
  } 
`;
