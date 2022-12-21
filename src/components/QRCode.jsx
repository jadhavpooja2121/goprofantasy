import React from "react";
import LoadCarousel from "./Carousel";

const QRImage = () => {
  return (
    <div className="row QR-block-style" style={{margin:"0"}}>
    <div className="col-sm-auto col-md-6 main">
        <div className="col-sm-auto col-md-auto"  style={{marginTop:"20px", marginLeft:"20px"}}>
          <img src="/images/apk-QR.png" width="200px" height="200px" />
        </div>
        <div style={{textAlign:"left", maxWidth:"400px"}} className="col-sm-auto col-md-auto">
          <h2 style={{padding:"20px 30px", width:"60%"}} className="scan-header"> Scan the QR code and download the app now</h2>
        </div>
      </div>
      <div className="col-sm-auto col-md-5" style={{marginTop:"20px"}}>
          <LoadCarousel />
      </div>
    </div>
  );
};
export default QRImage;
