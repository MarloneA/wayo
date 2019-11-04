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
  margin: 50px 0;
`;

const Heading = styled.div`
  font-size: 2rem;
  width: 100vw;
  text-align: center;
  margin-bottom: 70px;
`;
const Steps = styled.div`
  margin: 1rem;
  text-align: center;
`;
const StepsHeading = styled.div`
  font-size: 2rem;
`;

const StepsToOrder = () => {
  return (
    <StepsToOrderWrapper class="steps-to-order">
      <Heading>Buy Online We deliver wherever you are</Heading>
      <Steps>
        <img src={sneakerIcon} alt="sneaker" width="70px" height="70px" />
        <StepsHeading>Select shoe</StepsHeading>
        <p>Browse through collection of shoes.</p>
      </Steps>
      <Steps>
        <img src={mpesaLogo} alt="mpesa" height="70px" />
        <StepsHeading>Pay Via Mpesa</StepsHeading>
        <p>Paybill: 799643 Account number is shoe code</p>
      </Steps>
      <Steps>
        <img src={locationIcon} alt="location" width="70px" height="70px" />
        <StepsHeading>Delivery</StepsHeading>
        <p>We deliver right to your doorstep</p>
      </Steps>
    </StepsToOrderWrapper>
  );
};

export default StepsToOrder;
