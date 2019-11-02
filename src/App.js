import React, { Suspense } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LoadingPage from "./components/pages/LoadingPage";
import AppRoutes from "./routes/AppRoutes";

const GlobalStyle = createGlobalStyle`
  html, body, ul {
    margin: 0;
    padding: 0;
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: ${props => props.theme.fontFamily};
    list-style: none;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={{ fontFamily: "Oswald" }}>
      <>
        <Suspense loader={<LoadingPage />}>
          <AppRoutes />
        </Suspense>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};
export default App;
