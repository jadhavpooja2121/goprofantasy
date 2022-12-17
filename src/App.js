import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Navbar from "./components/Navbar";
import GenerateQRCode from "./components/QRCode";
import LoadCarousel from "./components/Carousel";
import AppFeatures from "./components/Features";

function App() {
  return (
    <div className="container">
      <div className="block1">
        <Navbar />
      </div>
      <div className="block2">
        <div className="qrholder"><img src = "/images/default_qrcode.png" /></div>
        <div className="scan-header"><h3> Scan the QR code and download the app</h3></div>
        <div className="setCarousel">
          <LoadCarousel />
        </div>
        <AppFeatures />
      </div>
    </div>
  );
}
export default App;
