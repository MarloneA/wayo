import React from "react";
import facebookLogo from "../../../assets/images/facebook.png";
import twitterLogo from "../../../assets/images/twitter-white.png";
import instagramLogo from "../../../assets/images/instagram.png";

const Footer = () => {
  return (
    <footer class="footer snap-content">
      <p>Follow us on Social Media</p>
      <div class="social">
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
        <a href="https://www.instagram.com/wayo_footwear/" target="_blank">
          <img
            src={instagramLogo}
            width="20px"
            height="20px"
            alt="instagram-icon"
          />
        </a>
      </div>
      <p>Or get in touch</p>
      <p>+254 726 678 876</p>
      <p class="copyright">copyright 2019 Wayo shoes</p>
    </footer>
  );
};

export default Footer;
