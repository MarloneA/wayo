import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Countdown from "react-countdown-now";
import fb from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter-white.png";
import ig from "../../../assets/instagram.png";
// import whiteLogo from "../../../assets/logo.png";
import whiteLogo from "../../../assets/White_Logo-03.png";

import pinkShoe from "../../../assets/Wayo_FootWear-209.jpg";

const DefaultLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${pinkShoe});
  background-size: cover;
  /* color: white; */
  background-color: rgba(23, 22, 21, 0.72);
  background-blend-mode: multiply;
`;
const Logo = styled.div`
  flex-basis: 20vh;
`;
const StyledCountDown = styled.div`
  font-size: 10vw;
`;
const Message = styled.div`
  font-size: 3vw;
`;
const Description = styled.div`
  ${props => (props.bold ? "font-size: 25px" : "")}
  margin: 2px;
`;
const SocialLinks = styled.div``;
const Link = styled.a``;
const SocialIcon = styled.span``;
const Icon = styled.img`
  margin: 1rem;
`;
const DateDescriptor = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  list-style: none;
  width: 50vw;
`;
const Label = styled.li``;

const COUNT_DOWN = 1000000000;
const date = Date.now() + COUNT_DOWN;

const LandingPage = () => {
  return (
    <DefaultLandingPage>
      <Logo>
        <img src={whiteLogo} width="170px" height="126px" alt="wayo-logo" />
      </Logo>
      <StyledCountDown>
        <Countdown date={date} />
      </StyledCountDown>
      <DateDescriptor>
        <Label>DAYS</Label>
        <Label>HRS</Label>
        <Label>MIN</Label>
        <Label>SEC</Label>
      </DateDescriptor>
      <Message>Our Site Is Launching Soon</Message>
      <Description bold>#StepInStyleNaWayo</Description>
      <Description>Check us out on Social Media</Description>
      <SocialLinks>
        <Link
          href="https://www.facebook.com/Wayo-106389897383736/"
          target="_blank"
        >
          <SocialIcon>
            <Icon src={fb} width="20px" height="20px" alt="fb-icon" />
          </SocialIcon>
        </Link>
        <Link href="https://twitter.com/wayo_footwear" target="_blank">
          <SocialIcon>
            <Icon src={twitter} width="20px" height="20px" alt="twitter-icon" />
          </SocialIcon>
        </Link>
        <Link href="https://www.instagram.com/wayo_footwear/" target="_blank">
          <SocialIcon>
            <Icon src={ig} width="20px" height="20px" alt="ig-icon" />
          </SocialIcon>
        </Link>
      </SocialLinks>
    </DefaultLandingPage>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
