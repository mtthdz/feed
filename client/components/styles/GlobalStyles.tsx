import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    --black: #0a0a0a;
    --white: #ffffff;
    --lightGrey: #adadad;
    --lightGray: var(--lightGrey);
    --darkGrey: #1E1E1E;
    --darkGray: var(--darkGrey);
    --red: #ff6565;
    --green: #29ffa5;
    --maxWidth: 1200px;
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: var(--black);
    color: var(--white);
    font-size: 1.6rem;
    line-height: 2;
  }

  img {
    max-width: 100%;
    height: auto;
  }


  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }
  
  a:hover,
  a:focus {
    text-decoration: underline;
  }

  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`