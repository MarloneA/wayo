import React from "react";
import logo from "../../../assets/images/Black_Logo.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  object-position: -35px -10px;
  /* margin-bottom: -70px; */
  border-radius: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LandingPageShoe = ({ shoe }) => {
  const { name, size, color } = shoe;
  return (
    <>
      <Logo src={logo} alt="wayo logo" />
      <b>#StepInStyleNaWayo</b>
      <div class="shoe-brand">{name.toUpperCase()}</div>
      <div class="shoe-specifications">
        <div class="shoe-size-guide">
          <p>SIZE</p>
          <div>
            <div>8</div>
            <div>{size}</div>
            <div>7.5</div>
          </div>
          <div>
            <div>US</div>
            <div>EU</div>
            <div>UK</div>
          </div>
        </div>
        <div>
          <p>AVAILABLE COLORS</p>
          <p>{color}</p>
        </div>
      </div>
    </>
  );
};

export default LandingPageShoe;
