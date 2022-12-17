import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function LoadCarousel() {
  return (
      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
        <div>
          <img src="images/icon.png"/>
        </div>
        <div>
          <img src="images/icon.png" />
        </div>
        <div>
          <img src="images/icon.png"/>
        </div>
      </Carousel>
  );
}

export default LoadCarousel;
