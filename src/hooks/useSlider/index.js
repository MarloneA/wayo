import React, { useState } from "react";

const useSlider = ({
  images,
  currentIndex,
  setCurrentIndex,
  setOpenImage,
  setDisableNext,
  setDisablePrevious
}) => {
  const currentImage = url => {
    setOpenImage(url);
  };

  const nextImages = async () => {
    if (currentIndex < images.length) {
      await setCurrentIndex(currentIndex + 1);
      currentImage(images[currentIndex]);
    } else {
      setDisableNext(true);
      setDisablePrevious(false);
    }
  };

  const previousImages = async () => {
    if (currentIndex > -1) {
      await setCurrentIndex(currentIndex - 1);
      currentImage(images[currentIndex]);
    } else {
      setDisableNext(false);
      setDisablePrevious(true);
    }
  };

  return {
    currentImage,
    nextImages,
    previousImages
  };
};

export default useSlider;
