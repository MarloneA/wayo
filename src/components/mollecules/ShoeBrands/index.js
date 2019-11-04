import React from "react";
import sneakerIcon from "../../../assets/images/sneaker.png";
import mpesaLogo from "../../../assets/images/mpesa-seeklogocom.png";
import locationIcon from "../../../assets/images/location.png";
import styled from "styled-components";

const StepsToOrderWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 70px 0;
`;

const Heading = styled.div`
  font-size: 2rem;
  width: 100vw;
  text-align: center;
  margin-bottom: 40px;
`;
const Steps = styled.div`
  margin: 1rem;
  text-align: center;
`;
const StepsHeading = styled.div`
  font-size: 2rem;
`;

const ShoeBrands = () => {
  return (
    <StepsToOrderWrapper class="steps-to-order">
      <Heading>Shop from a variety of verified Brands</Heading>
      <Steps>
        <img src={sneakerIcon} alt="sneaker" width="70px" height="70px" />
      </Steps>
      <Steps>
        <img src={sneakerIcon} alt="sneaker" width="70px" height="70px" />
      </Steps>
      <Steps>
        <img src={sneakerIcon} alt="sneaker" width="70px" height="70px" />
      </Steps>
      <Steps>
        <img src={sneakerIcon} alt="sneaker" width="70px" height="70px" />
      </Steps>
      <Steps>
        <img src={sneakerIcon} alt="sneaker" width="70px" height="70px" />
      </Steps>
    </StepsToOrderWrapper>
  );
};

export default ShoeBrands;
