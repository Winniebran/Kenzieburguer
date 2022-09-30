import styled from "styled-components";

export const StyledCartTotal = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-1);
    padding-top: 15px;
    border-top: 1px solid var(--color-grey-20);
    gap: 20px;

    div {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
    }

    button {
        background-color: var(--color-grey-20);
        width: 90%;
        height: 45px;
        border-radius: 5px;
        font-size: var(--capition);
        color: var(--color-grey-50);
        font-weight: var(--font-weight-2);
        align-self: center;
        margin-bottom: 10px;
    }
    
`