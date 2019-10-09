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
          <Button>Discover More</Button>
          <Button>Make an Order</Button>
        </CTAButtons>
      </div>
      {/* <Carousel showArrows={true}>
        <div>
          {images &&
            images.map(image => (
              <>
                <img src={image} />
                <p className="legend">Legend 1</p>
              </>
            ))}
        </div>
      </Carousel> */}
      {/* <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onMovePrevRequest={() =>
          setphotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setphotoIndex((photoIndex + 1) % images.length)
        }
      /> */}
      <img
        class="landing-page-image-1"
        src={shoes[2].files[0]}
        alt="nike shoe"
      />
    </section>
  );
};

export default LandingPageSection;
