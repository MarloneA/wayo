import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;
const Paragraph = styled.p``;

const LatestArrivalsBanner = () => {
  return (
    <Banner class="banner">
      <Paragraph>Checkout Our Latest Arrivals</Paragraph>
    </Banner>
  );
};
export default LatestArrivalsBanner;
