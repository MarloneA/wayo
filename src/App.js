import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LandingPage from "./components/pages/LandingPage";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: ${props => props.theme.fontFamily};
    font-weight: 300;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={{ fontFamily: "Futura" }}>
      <>
        <LandingPage />
        <GlobalStyle whiteColor />
      </>
    </ThemeProvider>
  );
};
export default App;
