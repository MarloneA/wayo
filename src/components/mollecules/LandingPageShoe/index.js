import React from "react";
import logo from "../../../assets/images/Black_Logo.png";

const LandingPageShoe = ({ shoe }) => {
  const { name, brand, size, color, files } = shoe;
  return (
    <>
      <img src={logo} alt="wayo logo" class="wayo-logo" />
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
