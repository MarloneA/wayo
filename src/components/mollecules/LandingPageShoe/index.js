import React from "react";
import logo from "../../../assets/images/Black_Logo.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  object-position: -35px -10px;
  border-radius: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HashTag = styled.b``;

const ShoeBrand = styled.div`
  grid-area: 2 / 2 / span 2 / span 3;
  font-size: 3em;
  font-weight: 600;
  grid-row-start: 3;

  @media screen and (max-width: 768px) {
    grid-area: 2 / 2 / span 2 / span 3;
    font-size: 2em;
    font-weight: 600;
    grid-row-start: 3;
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
    <>
      <Logo src={logo} alt="wayo logo" />
      <HashTag>#StepInStyleNaWayo</HashTag>
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
    </>
  );
};

export default LandingPageShoe;
