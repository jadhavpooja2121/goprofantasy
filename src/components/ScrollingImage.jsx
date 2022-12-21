import React from "react";

function ScrollingImage(props) {
  return (
    <div>
      <div>
        <img src={props.src} width="200px" height="300px" style={{objectFit:"fill"}}/>
      </div>
    </div>
  );
}

export default ScrollingImage;
