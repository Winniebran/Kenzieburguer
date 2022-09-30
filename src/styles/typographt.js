import styled, { css } from "styled-components";
import { BaseTitle } from "./components/typography";

export const StyledTitle = styled(BaseTitle)`
  title1 {
    font-size: var(--heading-1);
    font-weight: var(--font-weight-1);
    text-align: start;
  }

  ${({ color }) => {
    if (color === "one") {
      return css`
        background-color: var(--color-primary-1);
        color: white;
        padding: 20px 15px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        text-align: start;
      `;
    }
  }}

  ${({ ellipsis }) => {
    if (ellipsis === "one") {
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-align: start;
      `;
    }
  }}
`;

export const StyledSpan = styled.span`
  ${({ fontSize }) => {
    if (fontSize === "one") {
      return css`
        font-size: var(--body);
        font-weight: var(--font-weight-2);
      `;
    } else if (fontSize === "two") {
      return css`
        font-size: var(--body);
        font-weight: var(--font-weight-4);
      `;
    } else if (fontSize === "three") {
      return css`
        font-size: var(--capition);
        font-weight: var(--font-weight-4);
      `;
    }
  }};

  ${({ color }) => {
    if (color === "one") {
      return css`
        color: var(--color-grey-50);
      `;
    } else if (color === "two") {
      return css`
        color: var(--color-primary-1);
      `;
    } else if (color === "three") {
      return css`
        color: var(--color-grey-100);
      `;
    }
  }}
`;
