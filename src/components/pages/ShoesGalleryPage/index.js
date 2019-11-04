import React from "react";
import GalleryContainer from "../../mollecules/GalleryContainer";
import Header from "../../mollecules/Header";
import ShoeSpecificityPanel from "../../mollecules/ShoeSpecificityPanel";

const ShoesGalleryPage = props => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexFlow: "row" }}>
        <ShoeSpecificityPanel />
        <GalleryContainer {...props} />
      </div>
    </>
  );
};

export default ShoesGalleryPage;
