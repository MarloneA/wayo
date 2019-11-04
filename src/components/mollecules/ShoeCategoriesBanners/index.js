import React from "react";
import menAsicsGreen from "../../../assets/images/sneaker.png";
import menAsicsBlue from "../../../assets/images/shoe-men-asicsblue.jpg";
import menSkechers from "../../../assets/images/location.png";
import womenTamaris from "../../../assets/images/sneaker.png";
import womenPier from "../../../assets/images/shoe-women-pier-one.jpg";
import womenAnnaField from "../../../assets/images/location.png";
import styled from "styled-components";
import Button from "../../atoms/Buttons";

const Banner = styled.section`
  display: flex;
  flex-flow: row;
  width: 75%;
  justify-content: space-around;
  margin: auto;
  padding: 50px 0;
`;
const BannerDetails = styled.div`
  padding: 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 50vw;
`;
const BannerImage = styled.img`
  width: 50vw;
  object-fit: scale-down;
  border-radius: 8%;
`;

const ShoeCategoriesBanners = () => {
  return (
    <>
      <Banner>
        <BannerImage src={womenPier} />
        <BannerDetails>
          <h1>Womens Shoes</h1>
          <p>
            Lorem Ipsum dolor sit amet kdsjhd fidhi sgggf isfishoj fjs s
            scalevsh v s v Lorem Ipsum dolor sit amet kdsjhd fidhi sgggf
            isfishoj fjs s scalevsh v s v
          </p>
          <Button>Checkout Womens Collection</Button>
        </BannerDetails>
      </Banner>
      <br style={{ border: "1px solid" }} />
      <Banner>
        <BannerDetails>
          <h1>Mens Shoes</h1>
          <p>
            Lorem Ipsum dolor sit amet kdsjhd fidhi sgggf isfishoj fjs s
            scalevsh v s v Lorem Ipsum dolor sit amet kdsjhd fidhi sgggf
            isfishoj fjs s scalevsh v s v
          </p>
          <Button>Checkout Mens Collection</Button>
        </BannerDetails>
        <BannerImage src={menAsicsBlue} />
      </Banner>
    </>
  );
};

export default ShoeCategoriesBanners;
