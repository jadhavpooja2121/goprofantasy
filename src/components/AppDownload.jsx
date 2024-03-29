import React from "react";
import { Button } from "react-bootstrap";
export const AppDownload = () => {
  return (
    <div className="row" style={{ margin: "0px" }}>
      <div className="download-banner">
        <div className="banner-items">
          <h1 className="download-banner-heading"> Download the app now!</h1>
          <h5 className="download-banner-sub-title">
            Create team, join contest and win exiciting prizes
          </h5>
          <div className="playstore-buttons">
            <a href="#">
              <button className="download-playstore-btn"></button>
            </a>
            <a href="#">
              <button className="download-appstore-btn"></button>
            </a>
          </div>
        </div>

        <div className="banner-items fantasy-fun">
          <img
            src="images/gamezy-banner.png"
            alt="fantasy-fun"
            className="fantasy-fun-img"
          />
        </div>
      </div>
    </div>
  );
};
