// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background: #fff;
    color: #222;
  }

  h1, h2, h3 {
    margin: 0 0 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
