import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import LoadingPage from "./components/pages/LoadingPage";
import AppRoutes from "./routes/AppRoutes";
import VendorStyles from "./VendorStyles";
import theme from "./themes/default";

const App = () => {
  return (
    <>
      <Suspense loader={<LoadingPage />}>
        <AppRoutes />
      </Suspense>

      <ThemeProvider theme={theme}>
        <VendorStyles />
      </ThemeProvider>
    </>
  );
};
export default App;
