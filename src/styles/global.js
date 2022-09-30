import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, button, textarea,option {
        margin: 0;
        padding: 0;
        border: none;
        font-size: 100%;
        font-family: 'Inter', sans-serif;
        vertical-align: baseline;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        background: none;
        color: none;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
        width: 100vw;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button{
        cursor: pointer;
    }

    :root {
        --color-primary-1: #27ae60;
        --color-primary-2:##93D7AF;
        --color-secondary: #03b898;
        --color-secondary-2: #EB5757;
        --color-grey-100: #333333;
        --color-grey-50: #828282;
        --color-grey-20: #E0E0E0;
        --color-grey-1: #F5F5F5;
        --feedback-negative: #E60000;
        --feedback-warning: #FFCD07;
        --feedback-sucess: #168821;
        --feedback-information: #155BCB;

        --heading-1: 26px;
        --heading-2: 22px;
        --heading-3: 18px;
        --heading-4: 14px;
        
        --headline: 16px;
        --body: 14px;
        --capition: 12px;

        --font-weight-1: 700;
        --font-weight-2: 600;
        --font-weight-3: 500;
        --font-weight-4: 400;
    }
`;

export const Container = styled.main` 
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    width: 88%;
    margin: 0 auto;
    gap: 20px;
  }
`;
