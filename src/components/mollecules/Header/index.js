import React from "react";
import facebookLogo from "../../../assets/images/icon_facebook_black.png";
import twitterLogo from "../../../assets/images/icon_twitter_black.png";
import instagramLogo from "../../../assets/images/icon_instagram_black.png";
import styled from "styled-components";
import logo from "../../../assets/images/Black_Logo.png";

const WayoHeader = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 8vh;

  @media screen and (max-width: 768px) {
    display: none;
    height: 0;
  }
`;

const Logo = styled.img`
  margin-left: 4%;
  width: 7rem;
  object-fit: scale-down;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85px;
  margin-right: 1.2rem;
`;

const Header = () => {
  return (
    <WayoHeader>
      <a href="/">
        <Logo src={logo} alt="wayo logo" />
      </a>

      <Social>
        <a
          href="https://www.facebook.com/Wayo-106389897383736/"
          target="_blank"
        >
          <img
            src={facebookLogo}
            width="20px"
            height="20px"
            alt="facebook-icon"
          />
        </a>
        <a href="https://twitter.com/wayo_footwear" target="_blank">
          <img
            src={twitterLogo}
            width="20px"
            height="20px"
            alt="twitter-icon"
          />
        </a>
        <a href="https://www.instagram.com/wayo.footwear/" target="_blank">
          <img
            src={instagramLogo}
            width="20px"
            height="20px"
            alt="instagram-icon"
          />
        </a>
      </Social>
    </WayoHeader>
  );
};

export default Header;

// const HashTag = styled.b``;

// <HashTag>#StepInStyleNaWayo</HashTag>;
