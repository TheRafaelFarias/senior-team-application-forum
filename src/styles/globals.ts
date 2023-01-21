import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background: ${(props) => props.theme.secondary};
    padding: 1.875rem 2.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
