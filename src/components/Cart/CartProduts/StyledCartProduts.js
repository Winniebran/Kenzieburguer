import styled from "styled-components";

export const StyledCardItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 15px 0 15px;
`;

export const StyledImgCard = styled.div`
  background-color: var(--color-grey-20);
  max-width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  img {
    width: 80%;
  }
`;

export const StyledDescriptionCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledInformationCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    margin-left: 10px;
`


export const StyledButtonsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    width: 50px;
    display: flex;
    align-items: center;
    gap: 6px;

    button {
      background-color: var(--color-primary-1);
      padding: 2px 5px;
      font-size: var(--body);
      font-weight: var(--font-weight-2);
      color: white;
    }

    button:nth-child(1) {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    button:nth-child(3) {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

   button {
    font-size: var(--capition);
    color: var(--color-grey-50);
   }
`;
