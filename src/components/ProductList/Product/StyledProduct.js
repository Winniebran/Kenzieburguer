import styled from "styled-components";

export const StyledItem = styled.li`
  min-width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid var(--color-grey-20);
  border-radius: 5px;
  transition: ease-in-out .6s;
  
  :hover{
    border: 2px solid var(--color-grey-100);
  }

  @media (min-width: 600px) {
    height: 32%;
  }
`;

export const StyledImg = styled.div`
  background-color: var(--color-grey-1);
  width: 100%;

  img {
    width: 50%;
    height: 100%;
    align-self: center;
  }
`;

export const StyleData = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 15px 0;

    button {
        background-color: var(--color-primary-1);
        color: white;
        width: 100px;
        height: 35px;
        border-radius: 5px;
        font-size: var(--body);
    }

    @media (min-width: 600px) {
    height: 150px;
  }
`
