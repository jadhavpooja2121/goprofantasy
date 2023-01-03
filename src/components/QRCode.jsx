import React from "react";
import LoadCarousel from "./Carousel";

const QRImage = () => {
  return (
    <section className="QR-block-style">
      <img src="/images/apk-QR.png" className="qr-image" />

      <h3 className="scan-header">Scan the QR code and download the app now</h3>

      <LoadCarousel />
    </section>
  );
};
export default QRImage;
