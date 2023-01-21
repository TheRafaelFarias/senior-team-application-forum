import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  fontFamilySrc: string;
}>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.fontFamilySrc};
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    padding: 1.875rem 2.5rem;
    background: ${(props) => props.theme.tertiary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
