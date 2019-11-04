import React from "react";
import Button from "../../atoms/Buttons";
import "react-image-lightbox/style.css";
import LandingPageShoe from "../LandingPageShoe";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SHOE_COLLECTION from "../../../fixtures/Shoes/index.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPage = styled.section`
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100vw;
  height: 92vh;

  @media screen and (max-width: 768px) {
    height: max-content;
    flex-flow: column-reverse;
  }
`;
const LandingPageShoeMetadata = styled.div`
  width: 45vw;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  padding: 0 5rem;
  height: 77%;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    width: 60vw;
  }
`;
const CtaControls = styled.div``;
const CTAButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 150%;
`;
const LandingPageHeroImage = styled.img`
  width: 55%;
  object-fit: scale-down;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    object-fit: cover;
    padding: 0;
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
