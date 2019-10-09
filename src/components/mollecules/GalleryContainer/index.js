import React from "react";
import SHOE_COLLECTION from "../../../fixtures/Shoes/index.json";
import Modal from "@material-ui/core/Modal";

import styled, { css } from "styled-components";

class GalleryContainer extends React.Component {
  state = {
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

    // let imageUrls = [];

    // this.state.images.map(imageUrl => {
    //   imageUrls.push(imageUrl);
    // });

    // //identify index of current image being viewed
    // let selectedIndex = imageUrls.indexOf(url);

    // this.setState({
    //   openImage: url,
    //   selectedIndex: selectedIndex
    // });

    // // conditional to Determine which button to disable
    // if (selectedIndex + 1 === imageUrls.length) {
    //   this.setState({
    //     disableNext: true,
    //     disablePrevious: false
    //   });
    // } else if (selectedIndex === imageUrls.length - imageUrls.length) {
    //   this.setState({
    //     disableNext: false,
    //     disablePrevious: true
    //   });
    // } else {
    //   this.setState({
    //     disableNext: false,
    //     disablePrevious: false
    //   });
    // }
  };

  nextImages = () => {
    const { images, currentIndex } = this.state;

    if (currentIndex <= images.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 }, () =>
        this.currentImage(images[currentIndex + 1])
      );
    } else {
      this.setState({
        disableNext: true,
        disablePrevious: false
      });
    }
    console.log("currentIndex: ", currentIndex);
  };

  previousImages = () => {
    const { images, currentIndex } = this.state;

    let index = currentIndex - 1;
    console.log("index: ", index);

    if (index >= -1) {
      this.setState({ currentIndex: index }, () =>
        this.currentImage(images[currentIndex])
      );
    } else {
      this.setState({
        disablePrevious: true,
        disableNext: false
      });
    }
    console.log("currentIndex: ", currentIndex);
  };
  render() {
    const { openImage } = this.state;
    return (
      <>
        <ul class="gallery-container">
          {SHOE_COLLECTION.shoes.map(shoe => {
            return (
              <li
                onClick={() => {
                  this.handleOpen();
                  this.setState(
                    {
                      images: shoe.files,
                      shoe
                    },
                    () => console.log(this.state.images)
                  );
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
            <div style={{ height: "100vh", width: "5%", background: "white" }}>
              <button
                onClick={() =>
                  this.setState({ toggleDetails: !this.state.toggleDetails })
                }
                style={{ padding: "10px" }}
              >
                Toggle Details
              </button>
              <button
                onClick={() => this.previousImages()}
                style={{ padding: "10px" }}
                disabled={this.state.disablePrevious}
              >
                previous image
              </button>
            </div>
            {this.state.toggleDetails && (
              <div
                style={{ height: "100vh", width: "20%", background: "white" }}
              ></div>
            )}
            <div
              style={{
                height: "100vh",
                width: `${this.state.toggleDetails ? "70%" : "90%"}`,
                background: "white"
              }}
            >
              <div>
                <img src={openImage} height="720px" width="900px" />
              </div>
            </div>
            <div style={{ height: "100vh", width: "5%", background: "white" }}>
              <span
                onClick={this.handleClose}
                className="close-gallery"
                style={{
                  justifyContent: "space-around"
                }}
              >
                X
              </span>
              <button
                onClick={() => this.nextImages()}
                style={{ padding: "10px" }}
                disabled={this.state.disableNext}
              >
                Next Image
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default GalleryContainer;

// const getModalStyle = () => {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`
//   };
// };

// const styles = theme => ({
//   paper: {
//     position: "absolute",
//     boxShadow: theme.shadows[5],
//     outline: "none"
//   }
// });

// const GalleryContainerWrapped = withStyles(styles)(GalleryContainer);
// state = {
//   open: false,
//   images: [SHOE_COLLECTION && SHOE_COLLECTION.shoes],
//   openImage: "",
//   previousImages: [],
//   nextImages: []
// };

// handleOpen = e => {
//   this.setState({
//     open: true
//   });
// };
// handleClose = () => {
//   this.setState({
//     open: false,
//     openImage: ""
//   });
// };

// currentImage = url => {
//   this.setState({
//     openImage: url
//   });
// };

// nextImages = image => {
//   const { images } = this.state;
//   console.log("images: ", images);

//   let imageUrls = [];

//   images.map(image => {
//     imageUrls.push(image.files[0]);
//   });

//   let currentIndex = imageUrls.indexOf(image);

//   this.currentImage(imageUrls[currentIndex + 1]);
//   console.log(currentIndex + 1);
// };

// previousImages = image => {
//   const { images } = this.state;

//   let imageUrls = [];

//   images.map(image => {
//     imageUrls.push(image.files[0]);
//   });

//   let currentIndex = imageUrls.indexOf(image);

//   this.currentImage(imageUrls[currentIndex - 1]);
//   console.log(currentIndex - 1);
// };

// render() {
//   const { classes } = this.props;
//   const { openImage } = this.state;
//   return (
//     <ul class="gallery-container">
//       {SHOE_COLLECTION.shoes.map(shoe => (
//         <li
//           onClick={() => {
//             this.handleOpen();
//             this.currentImage(shoe.files[0]);
//           }}
//           class="gallery-image"
//         >
//           <img src={shoe.files[0]} alt="shoe" />
//         </li>
//       ))}
//     </ul>
//       <Modal
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//         open={this.state.open}
//         className="custom-modal"
//       >
//         <div style={getModalStyle()} className={classes.paper}>
//           <span
//             onClick={this.handleClose}
//             className="close-gallery"
//             style={{ padding: "10px" }}
//           >
//             Click me
//           </span>

//           <button
//             onClick={() => this.nextImages(openImage)}
//             className="next-image"
//             style={{ padding: "10px", background: "yellow" }}
//           >
//             <img src="" />
//           </button>
//           <button
//             onClick={() => this.previousImages(openImage)}
//             className="previous-image"
//             style={{ padding: "10px", background: "blue" }}
//           >
//             previous image
//           </button>

//           <div>
//             <img src={openImage} height="720px" width="900px" />
//           </div>
//         </div>
//       </Modal>
//   );
// }
