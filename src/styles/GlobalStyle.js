// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background: #fff;
    color: #222;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    margin: 0 0 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Add for mobile styling */
   /* Improve mobile tap targets + scrolling */
  button, a, input, textarea { touch-action: manipulation; }

  img, video { max-width: 100%; height: auto; display: block; }

    /* Make sizing predictable */
  *, *::before, *::after { box-sizing: border-box; }

  /* Fluid type: min 16px, pref 2.2vw, max 18px */
  html { font-size: clamp(16px, 2.2vw, 18px); }


`;

export default GlobalStyle;
