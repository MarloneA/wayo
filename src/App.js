import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";

const GlobalStyle = createGlobalStyle`
  html, body, ul {
    margin: 0;
    padding: 0;
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: ${props => props.theme.fontFamily};
    /* font-weight: 300; */
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={{ fontFamily: "Oswald" }}>
      <>
        <LandingPage />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};
export default App;
