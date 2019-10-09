import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
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

export default Button;
