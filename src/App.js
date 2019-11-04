import React, { Suspense, lazy } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { flexbox } from "@material-ui/system";
import { green } from "@material-ui/core/colors";

const LandingPage = lazy(() =>
  import(/* webpackChunkName: "LandingPage" */ "./components/pages/LandingPage")
);

const LoadingPage = () => (
  <p
    style={{
      display: "flex",
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1rem"
    }}
  >
    ... Loading
  </p>
);

const GlobalStyle = createGlobalStyle`
  html, body, ul {
    margin: 0;
    padding: 0;
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: ${props => props.theme.fontFamily};
  }
`;

const history = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={{ fontFamily: "Oswald" }}>
      <>
        <BrowserRouter history={history}>
          <Switch>
            <Route
              path="/"
              render={props => (
                <Suspense fallback={<LoadingPage />}>
                  <LandingPage {...props} />
                </Suspense>
              )}
              exact
            />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};
export default App;
