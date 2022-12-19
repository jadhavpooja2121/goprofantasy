import React from "react";

function ScrollingImage(props) {
  return (
    <div>
      <div>
        <img src={props.src} />
      </div>
    </div>
  );
}

export default ScrollingImage;
