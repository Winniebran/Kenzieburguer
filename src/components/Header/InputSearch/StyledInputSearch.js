import styled from "styled-components";

export const StyledInput = styled.input`
    border-radius: 8px;
    width: 90%;
    height: 42%;
    border: 2px solid var(--color-grey-20);
    outline-color: var(--color-primary-1);
    padding: 10px;
    font-size: var(--headline);
    border
    ::placeholder{
        color: var(--color-grey-20);
        font-size: var(--headline);
    }

    @media (min-width: 400px) {
        width: 50%;
        height: 52%;
    }

    @media (min-width: 600px) {
        width: 250px;
    }
`