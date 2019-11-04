import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import LoadingPage from "../components/pages/LoadingPage";

const LandingPage = lazy(() =>
  import(
    /* webpackChunkName: "LandingPage" */ "../components/pages/LandingPage"
  )
);
const ShoesGalleryPage = lazy(() =>
  import(
    /* webpackChunkName: "LandingPage" */ "../components/pages/ShoesGalleryPage"
  )
);

const AppRoutes = () => (
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
    <Route
      path="/shoes"
      render={props => (
        <Suspense fallback={<LoadingPage />}>
          <ShoesGalleryPage {...props} />
        </Suspense>
      )}
    />
  </Switch>
);

export default AppRoutes;
