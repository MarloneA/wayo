import React from "react";

import Modal from "@material-ui/core/Modal";

import styled, { css } from "styled-components";
import menu from "../../../assets/images/iconmonstr-menu-list-thin-240.png";
import close from "../../../assets/images/close.png";
import prev from "../../../assets/images/prev.png";
import next from "../../../assets/images/next.png";

const Label = styled.p`
  color: #808080;
  margin: 0;
`;
const LabelWrapper = styled.div``;
const Item = styled.p`
  font-size: 1rem;
`;
const ModalImage = styled.img`
  object-fit: cover;
  /* height: 100%; */
  width: 90%;
`;
const IconButtons = styled.button`
  border: none;
  background: white;
  margin: 0;
  margin-bottom: 22rem;
  &:hover {
    cursor: pointer;
  }
  /* ${props => props.space && css``} */
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
      images: []
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
              flexFlow: "row",
              width: "100vw"
            }}
          >
            <div
              style={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                height: "100vh",
                width: "5%",
                background: "white"
              }}
            >
              <IconButtons
                onClick={() =>
                  this.setState({ toggleDetails: !this.state.toggleDetails })
                }
                style={{ padding: "10px" }}
              >
                <img src={menu} alt="menu" width="35px" height="25px" />
              </IconButtons>
              <IconButtons
                onClick={() => this.previousImages()}
                style={{ padding: "10px" }}
                disabled={this.state.disablePrevious}
              >
                <img src={prev} alt="previous" width="25px" height="25px" />
              </IconButtons>
            </div>
            {this.state.toggleDetails && (
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "center",
                  paddingBlock: "0 2rem",
                  height: "100vh",
                  width: "20%",
                  background: "white",
                  transitionDuration: "3s ease-in"
                }}
              >
                <LabelWrapper>
                  <Label>Shoe code</Label>
                  <Item>{shoe && shoe.code.toUpperCase()}</Item>
                </LabelWrapper>
                <LabelWrapper>
                  <Label>name</Label>
                  <Item>{shoe && shoe.name.toUpperCase()}</Item>
                </LabelWrapper>
                <LabelWrapper>
                  <Label>brand</Label>
                  <Item>{shoe && shoe.brand.toUpperCase()}</Item>
                </LabelWrapper>
                <LabelWrapper>
                  <Label>Available colors</Label>
                  <Item>{shoe && shoe.color.toUpperCase()}</Item>
                </LabelWrapper>
                <LabelWrapper>
                  <Label>Available sizes</Label>
                  <Item>{shoe && shoe.size.toUpperCase()}</Item>
                </LabelWrapper>
                <LabelWrapper>
                  <Label>price</Label>
                  <Item>{shoe && shoe.price.toUpperCase()}</Item>
                </LabelWrapper>
              </div>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: `${this.state.toggleDetails ? "70%" : "90%"}`,
                background: "white"
              }}
            >
              <ModalImage src={openImage} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "column",
                height: "100vh",
                width: "5%",
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
