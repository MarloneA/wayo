import React from "react";

import styled from "styled-components";
import LandingPageSection from "../../mollecules/LandingPageSection";
import LatestArrivalsBanner from "../../mollecules/LatestArrivalsBanner";
import StepsToOrder from "../../mollecules/StepsToOrder";
import Footer from "../../mollecules/Footer";

const MainPage = styled.main``;

const LandingPage = props => {
  return (
    <MainPage>
      <LandingPageSection />
      <LatestArrivalsBanner />
      <StepsToOrder />
      <Footer />
    </MainPage>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
