import styled from "styled-components";

export const StyledInput = styled.input`
    border-radius: 8px;
    width: 90%;
    height: 42%;
    border: 2px solid var(--color-grey-20);
    outline: 0;
    padding: 10px;
    font-size: var(--headline);
    
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