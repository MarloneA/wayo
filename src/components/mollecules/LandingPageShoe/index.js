import React from "react";
import styled from "styled-components";

const ShoeMetadata = styled.div`
  
`;

const ShoeBrand = styled.div`
  font-size: 3em;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 2em;
    font-weight: 600;
  }
`;

const ShoeSpecifications = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const ShoeSizeGuide = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
`;
const ShoeSizeSpec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.3rem 0;
  width: 35vh;
`;
const Details = styled.div``;
const Paragraph = styled.p``;


const LandingPageShoe = ({ shoe }) => {
  const { name, size, color } = shoe;
  return (
    <ShoeMetadata>
      <ShoeBrand>{name.toUpperCase()}</ShoeBrand>
      <ShoeSpecifications>
        <ShoeSizeGuide>
          <Paragraph>SIZE</Paragraph>
          <ShoeSizeSpec>
            <Details>8</Details>
            <Details>{size}</Details>
            <Details>7.5</Details>
          </ShoeSizeSpec>
          <ShoeSizeSpec>
            <Details>US</Details>
            <Details>EU</Details>
            <Details>UK</Details>
          </ShoeSizeSpec>
        </ShoeSizeGuide>
        <Details>
          <Paragraph>AVAILABLE COLORS</Paragraph>
          <Paragraph>{color}</Paragraph>
        </Details>
      </ShoeSpecifications>
    </ShoeMetadata>
  );
};

export default LandingPageShoe;
