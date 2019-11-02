import React from "react";
import facebookLogo from "../../../assets/images/facebook.png";
import twitterLogo from "../../../assets/images/twitter-white.png";
import instagramLogo from "../../../assets/images/instagram.png";
import styled from "styled-components";

const WayoFooter = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 45vh;
  color: #f1f1f1;
  background: url("../../../assets/images/footer-bg.png") repeat-y;
`;
const Social = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 10vw;
`;

const Footer = () => {
  return (
    <WayoFooter>
      <p>Follow us on Social Media</p>
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
      <p>Or get in touch</p>
      <p>+254796611765</p>
      <p class="copyright">&copy; 2019 Litudian</p>
    </WayoFooter>
  );
};

export default Footer;
