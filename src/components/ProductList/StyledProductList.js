import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 20px 0 0 20px;

  @media (min-width: 650px) {
    width: 76%;
    margin: 20px 0 0 0;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow-x: auto;
  height: 320px;
  width: 100%;
  padding: 0 20px 20px 0;

  @media (min-width: 650px) {
    overflow-y: auto;
    flex-wrap: wrap;
    min-height: 900px;
    padding: 0 0 20px 0;
    align-items: unset;
  }

  @media (min-width: 1058px) {
    overflow: none;
    flex-wrap: wrap;
    height: unset;
    min-height: fit-content;
  }
`;
