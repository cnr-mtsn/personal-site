import { createGlobalStyle } from "styled-components";
import React from 'react';
import Nav from '../components/Nav';
import operatorMono from '../fonts/OperatorMono-Medium.otf';
import codePro from '../fonts/codePro.otf';

const theme = {
  colors: {
    white: "#ffffff",
    black: "#201E1F",
    darkGrey: "#2a2829",
    offWhite: "#FEEFDD",
    lightMaroon: "#A96065",
    blue: "#50B2C0",
    tangerine: "#FAAA8D",
    redOrange: "#FF4000",
  },
};
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Operator mono';
    src: url(${operatorMono}) format('truetype');
  }
  @font-face {
    font-family: 'codePro';
    src: url(${codePro}) format('truetype');
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 18px;
  }
  body  {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.white};
    overflow-x: "hidden";
    max-width: 100vw;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  header {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
  }
  footer {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${theme.colors.darkGrey};
    padding: 2rem;
  }
  main {
    min-height: 80vh;
  }
`;

const PageWrapper = ({children}) => (
  <div>
    <Nav/>
    {children}
  </div>
)

export { theme, GlobalStyle, PageWrapper };
