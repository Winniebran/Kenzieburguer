import styled from "styled-components";

export const StyledCart = styled.section`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 20px auto 20px;

    @media (min-width: 600px) {
        max-width: 350px;
        min-width: 270px;
    }
`

export const StyledCardList = styled.ul`
    width: 100%;
    background-color: var(--color-grey-1);
    display: flex;
    flex-direction: column;
    max-height: 280px;
    overflow-y: auto;
    padding-bottom: 10px;
`

export const StyledCartEmpty = styled.div`
    background-color: var(--color-grey-1);
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
