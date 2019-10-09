import React, { useState } from "react";
import Button from "../../atoms/Buttons";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import LandingPageShoe from "../LandingPageShoe";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import SHOE_COLLECTION from "../../../fixtures/Shoes/index.json";

import styled, { css } from "styled-components";

const CTAButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const LandingPageSection = () => {
  const [photoIndex, setphotoIndex] = useState(0);
  const { shoes } = SHOE_COLLECTION;
  const images = shoes && shoes[2].files;
  return (
    <section class="landing-page snap-content">
      <LandingPageShoe shoe={shoes[2]} />
      <div class="cta-controls">
        <p>SHOES BROUGHT TO YOU BY WAYO</p>
        <CTAButtons>
          <Button href="#discover">Discover More</Button>
          <Button>Make an Order</Button>
        </CTAButtons>
      </div>

      <img
        class="landing-page-image-1"
        src={shoes[2].files[0]}
        alt="nike shoe"
      />
    </section>
  );
};

export default LandingPageSection;
