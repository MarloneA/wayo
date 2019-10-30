import React from "react";

import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import LandingPageSection from "../../mollecules/LandingPageSection";
import LatestArrivalsBanner from "../../mollecules/LatestArrivalsBanner";
import GalleryContainer from "../../mollecules/GalleryContainer";
import StepsToOrder from "../../mollecules/StepsToOrder";
import Footer from "../../mollecules/Footer";

const MainPage = styled.main``;

const LandingPage = props => {
  return (
    <MainPage>
      <LandingPageSection />
      <LatestArrivalsBanner />
      <GalleryContainer {...props} />
      <StepsToOrder />
      <Footer />
    </MainPage>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
