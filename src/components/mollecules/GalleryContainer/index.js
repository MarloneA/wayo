import React from "react";
import styled from "styled-components";

import { Link, Route } from "react-router-dom";
import ShoeDetailsPage from "../../pages/ShoeDetailsPage";

const GalleryContainerWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(6, 105px);
  grid-auto-flow: dense;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 120px);
  }
  @media screen and (max-width: 424px) {
    grid-template-rows: repeat(6, 132px);
  }
`;

const GalleryItem = styled.li`
  margin: 5px;
  &:nth-child(n) {
    grid-column: span 4;
    grid-row: span 4;
    overflow: hidden;
  }
  /* &:nth-child(2n) {
    grid-column: span 4;
    grid-row: span 4;
  } */

  @media screen and (max-width: 768px) {
    &:nth-child(n) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
`;
const ShoeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

class GalleryContainer extends React.Component {
  state = {
    shoeCollection: [],
    images: [],
    openImage: "",
    shoe: {},
    open: false
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
    this.props.history.push(this.props.match.url);
  };
  currentImage = url => {
    this.setState({
      openImage: url
    });
  };
  render() {
    const { shoeCollection, openImage, shoe, open } = this.state;

    return (
      <>
        <GalleryContainerWrapper>
          {shoeCollection &&
            shoeCollection.map(shoe => (
              <GalleryItem
                key={shoe.code}
                onClick={() => {
                  this.handleOpen();
                  this.setState({
                    images: shoe.files,
                    shoe
                  });
                  this.currentImage(shoe.files[0]);
                }}
              >
                <Link to={`${this.props.match.url}/${shoe.code}`}>
                  <ShoeImage src={shoe.files[0]} alt="shoe" />
                </Link>
              </GalleryItem>
            ))}
        </GalleryContainerWrapper>
        <Route
          exact
          path={`${this.props.match.url}/:shoeId`}
          render={() => {
            return (
              <ShoeDetailsPage
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                openImage={openImage}
                shoe={shoe}
                open={open}
                currentImage={this.currentImage}
              />
            );
          }}
        />
      </>
    );
  }
}

export default GalleryContainer;
