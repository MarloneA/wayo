import React from "react";

import styled from "styled-components";
import LandingPageSection from "../../mollecules/LandingPageSection";
import LatestArrivalsBanner from "../../mollecules/LatestArrivalsBanner";
import StepsToOrder from "../../mollecules/StepsToOrder";
import Footer from "../../mollecules/Footer";
import Header from "../../mollecules/Header";
import ShoeCategoriesBanners from "../../mollecules/ShoeCategoriesBanners";
import ShoeBrands from "../../mollecules/ShoeBrands";

const MainPage = styled.main``;

const LandingPage = props => {
  return (
    <MainPage>
      <Header />
      <LandingPageSection />
      <LatestArrivalsBanner />
      <ShoeCategoriesBanners />
      {/* <ShoeBrands /> */}
      <StepsToOrder />

      <Footer />
    </MainPage>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
