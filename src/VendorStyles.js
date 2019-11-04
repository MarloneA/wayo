import React from "react";
import { createGlobalStyle } from "styled-components";
import noUiSliderStyles from "nouislider/distribute/nouislider.css";
import { font, palette } from "styled-theme";

export const GlobalStyle = createGlobalStyle`
  html, body, ul {
    margin: 0;
    padding: 0;
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: ${font("primary")};
    list-style: none;
  }
`;
export const NoUiSliderStyles = createGlobalStyle`${noUiSliderStyles}`;
export const NoUiSliderStylesOverride = createGlobalStyle``;

const VendorStyles = () => (
  <>
    <GlobalStyle />
    <NoUiSliderStyles />
    <NoUiSliderStylesOverride />
  </>
);

export default VendorStyles;
