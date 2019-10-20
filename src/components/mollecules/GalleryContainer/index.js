import React from "react";

import Modal from "@material-ui/core/Modal";

import styled, { css } from "styled-components";
import menu from "../../../assets/images/iconmonstr-menu-list-thin-240.png";
import menuThick from "../../../assets/images/hamburger-menu.png";
import close from "../../../assets/images/close.png";
import prev from "../../../assets/images/prev.png";
import next from "../../../assets/images/next.png";
import info from "../../../assets/images/info.png";

const Label = styled.p`
  color: #808080;
  width: 50%;
`;
const LabelWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Item = styled.p`
  font-size: 1rem;
  width: 50%;
`;
const ModalImage = styled.img`
  object-fit: cover;
  width: 90%;
`;
const IconButtons = styled.button`
  border: none;
  background: white;
  margin: 0;
  margin-bottom: 42vh;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const ToggleDetails = styled.div`
  order: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
  width: 20%;
  background: white;
  transition-duration: 3s ease-in;
  padding-left: 50px;
  margin: 0;

  @media screen and (max-width: 960px) {
    width: 80%;
    position: absolute;
  }
  @media screen and (max-width: 776px) {
    width: 90%;
    position: absolute;
  }
  @media screen and (max-width: 600px) {
    width: 85%;
    position: absolute;
  }
`;

const ImageWrapper = styled.div`
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  background: white;
  width: ${props => props.size};

  @media screen and (max-width: 768px) {
    width: auto;
    background: white;
  }
`;
const ShoeProperties = styled.div`
  display: flex;
  flex-flow: row;
  width: 90%;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

class GalleryContainer extends React.Component {
  state = {
    shoeCollection: [],
    open: false,
    toggleDetails: false,
    buyShoes: false,
    images: [],
    openImage: "",
    previousImages: [],
    nextImages: [],
    disableNext: false,
    disablePrevious: false,
    shoe: {},
    currentIndex: 1
  };

  componentDidMount() {
    fetch("http://ngonga.com:8082/api/v1/wayo")
      .then(res => res.json())
      .then(data => {
        this.setState({ shoeCollection: data });
      })
      .catch(error => console.log(error));
  }

  handleOpen = e => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
      openImage: "",
      images: [],
      toggleDetails: false
    });
  };

  currentImage = url => {
    this.setState({
      openImage: url
    });
  };

  nextImages = () => {
    const { images, currentIndex } = this.state;

    if (currentIndex < images.length) {
      this.setState({ currentIndex: currentIndex + 1 }, () =>
        this.currentImage(images[currentIndex])
      );
    } else {
      this.setState({
        disableNext: true,
        disablePrevious: false
      });
    }
  };

  previousImages = () => {
    const { images, currentIndex } = this.state;

    if (currentIndex > -1) {
      this.setState({ currentIndex: currentIndex - 1 }, () =>
        this.currentImage(images[currentIndex])
      );
    } else {
      this.setState({
        disableNext: false,
        disablePrevious: true
      });
    }
  };
  render() {
    const { openImage, shoe, shoeCollection } = this.state;

    return (
      <>
        <ul id="discover" class="gallery-container">
          {shoeCollection &&
            shoeCollection.map(shoe => {
              return (
                <li
                  onClick={() => {
                    this.handleOpen();
                    this.setState({
                      images: shoe.files,
                      shoe
                    });
                    this.currentImage(shoe.files[0]);
                  }}
                  class="gallery-image"
                >
                  <img src={shoe.files[0]} alt="shoe" />
                </li>
              );
            })}
        </ul>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          className="custom-modal"
        >
          <div
            style={{
              display: "flex",
              flexFlow: "row"
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                height: "100vh",
                padding: "0.5% 1%",
                background: "white"
              }}
            >
              <IconButtons
                onClick={() =>
                  this.setState({ toggleDetails: !this.state.toggleDetails })
                }
                style={{ padding: "10px" }}
              >
                <img src={menuThick} alt="menu" width="30px" height="25px" />
              </IconButtons>
              <IconButtons
                onClick={() => this.previousImages()}
                style={{ padding: "10px" }}
                disabled={this.state.disablePrevious}
              >
                <img src={prev} alt="previous" width="25px" height="25px" />
              </IconButtons>
            </div>
            <ShoeProperties>
              <ImageWrapper
                size={(!this.state.toggleDetails && "80%") || "100%"}
                class="hidden"
              >
                <ModalImage src={openImage} />
              </ImageWrapper>
              {!this.state.toggleDetails && (
                <ToggleDetails>
                  <p>
                    <span style={{ marginRight: "5px" }}>
                      <img
                        src={info}
                        width="15px"
                        height="15px"
                        alt="info-icon"
                      />
                    </span>
                    SHOE DETAILS
                  </p>
                  <LabelWrapper>
                    <Label>Shoe code</Label>
                    <Item>
                      {(shoe && shoe.code && shoe.code.toUpperCase()) || "-"}
                    </Item>
                  </LabelWrapper>
                  <LabelWrapper>
                    <Label>name</Label>
                    <Item>
                      {(shoe && shoe.name && shoe.name.toUpperCase()) || "-"}
                    </Item>
                  </LabelWrapper>
                  <LabelWrapper>
                    <Label>brand</Label>
                    <Item>
                      {(shoe && shoe.brand && shoe.brand.toUpperCase()) || "-"}
                    </Item>
                  </LabelWrapper>
                  <LabelWrapper>
                    <Label>Available colors</Label>
                    <Item>
                      {(shoe && shoe.color && shoe.color.toUpperCase()) || "-"}
                    </Item>
                  </LabelWrapper>
                  <LabelWrapper>
                    <Label>Available sizes</Label>
                    <Item>
                      {(shoe && shoe.size && shoe.size.toUpperCase()) || "-"}
                    </Item>
                  </LabelWrapper>
                  <LabelWrapper>
                    <Label>price</Label>
                    <Item>
                      {(shoe &&
                        isNaN(shoe.price) &&
                        "Get In Touch for Price") ||
                        `KES ${new Intl.NumberFormat().format(shoe.price)}`}
                    </Item>
                  </LabelWrapper>
                </ToggleDetails>
              )}
            </ShoeProperties>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "column",
                height: "100vh",
                padding: "0.5% 1%",
                background: "white"
              }}
            >
              <IconButtons onClick={this.handleClose} style={{}}>
                <img src={close} alt={close} width="25px" height="25px" />
              </IconButtons>
              <IconButtons
                onClick={() => this.nextImages()}
                style={{ padding: "10px" }}
                disabled={this.state.disableNext}
              >
                <img src={next} alt="next" width="25px" height="25px" />
              </IconButtons>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default GalleryContainer;
