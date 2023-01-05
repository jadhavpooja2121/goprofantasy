import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { scrollingImages } from "../Constants";
import ScrollingImage from "./ScrollingImage";
import { CarouselItem } from "react-bootstrap";

function addImage(imageProps) {
  return (
    <ScrollingImage
      key={imageProps.id}
      src={imageProps.src}
      alt={imageProps.alt}
    />
  );
}

function LoadCarousel() {
  return (
    <Carousel
      infiniteLoop
      useKeyboardArrows
      autoPlay
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {scrollingImages.map(addImage)}
    </Carousel>
  );
}

export default LoadCarousel;
