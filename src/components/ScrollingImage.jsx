import React from "react";

function ScrollingImage(props) {
  return (
    <div>
      <div>
        <img src={props.src} className="scrolling-image"/>
      </div>
    </div>
  );
}

export default ScrollingImage;
