import React, { useState } from "react";
import Button from "../../atoms/Buttons";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import LandingPageShoe from "../LandingPageShoe";
import logo from "../../../assets/images/Black_Logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SHOE_COLLECTION from "../../../fixtures/Shoes/index.json";
import styled, { css } from "styled-components";

const CTAButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 150%;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const Link = styled.a`
  padding: 0.8rem;
  font-weight: 900;
  background-color: white;
  border: 1.8px solid;
  font-size: 0.8rem;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

const LandingPage = styled.section`
  display: flex;
  flex-flow: row;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: max-content;
  }
`;
const LandingPageShoeMetadata = styled.div`
  width: 45vw;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 5rem;
  padding-top: 1rem;
`;
const CtaControls = styled.div``;
const LandingPageHeroImage = styled.img`
  width: 55vw;
  height: 100vh;
  object-fit: cover;
  object-position: 0 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LandingPageSection = () => {
  const [photoIndex, setphotoIndex] = useState(0);
  const { shoes } = SHOE_COLLECTION;
  const images = shoes && shoes[3].files;
  return (
    <LandingPage>
      <LandingPageShoeMetadata>
        <LandingPageShoe shoe={shoes[3]} />
        <CtaControls>
          <p>SHOES BROUGHT TO YOU BY WAYO</p>
          <CTAButtons>
            <Button href="#discover">Discover More</Button>
            <Button>Make an Order</Button>
          </CTAButtons>
        </CtaControls>
      </LandingPageShoeMetadata>
      <LandingPageHeroImage src={shoes[3].files[1]} alt="nike shoe" />
    </LandingPage>
  );
};

export default LandingPageSection;
