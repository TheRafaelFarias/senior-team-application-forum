import styled, { createGlobalStyle } from "styled-components";

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

export const Div = styled.div<{
  gapY?: number;
  gapX?: number;
  alignItems?: "center";
  justifyContent?: "center" | "space-between" | "space-around";
  flexDirection: "row" | "column";
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};

  ${(props) => props.gapY && `row-gap: ${props.gapY}rem`}
  ${(props) => props.gapX && `column-gap: ${props.gapX}rem`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`}
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`}
`;
