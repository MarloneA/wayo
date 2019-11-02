import React from "react";
import Button from "../../atoms/Buttons";
import "react-image-lightbox/style.css";
import LandingPageShoe from "../LandingPageShoe";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SHOE_COLLECTION from "../../../fixtures/Shoes/index.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CTAButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 150%;
`;

const LandingPage = styled.section`
  display: flex;
  flex-flow: row;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: max-content;
    flex-flow: column-reverse;
  }
`;
const LandingPageShoeMetadata = styled.div`
  width: 45vw;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 5rem;
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    width: 60vw;
  }
`;
const CtaControls = styled.div``;
const LandingPageHeroImage = styled.img`
  width: 55vw;
  height: 100vh;
  object-fit: scale-down;
  padding: 20px;
  /* object-position: 0 0; */

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 45vh;
    object-fit: scale-down;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
  }
`;

const LandingPageSection = () => {
  const { shoes } = SHOE_COLLECTION;

  return (
    <LandingPage>
      <LandingPageShoeMetadata>
        <LandingPageShoe shoe={shoes[3]} />
        <CtaControls>
          <p>SHOES BROUGHT TO YOU BY WAYO</p>
          <CTAButtons>
            <StyledLink to={"/shoes"}>
              <Button>Discover More</Button>
            </StyledLink>
          </CTAButtons>
        </CtaControls>
      </LandingPageShoeMetadata>
      <LandingPageHeroImage src={shoes[3].files[1]} alt="nike shoe" />
    </LandingPage>
  );
};

export default LandingPageSection;
