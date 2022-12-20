import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import LoadCarousel from "./components/Carousel";
import AppFeatures from "./components/Features";
import HowToPlay from "./components/HowToPlay";
import UserStoryFeature from "./components/UserStories";
import FooterNote from "./components/Footer";
import FAQComponent from "./components/FAQs";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="container">
      <div className="block1">
        <Navbar />
      </div>
      <div className="block2">
        <div className="qrholder">
          <img src="/images/apk-QR.png" width="200px" height="200px" />
        </div>
        <div className="scan-header">
          <h2> Scan the QR code and download the app</h2>
        </div>
        <div className="setCarousel">
          <LoadCarousel />
        </div>
      </div>
      <AppFeatures />
      <div>
        <HowToPlay />
        <UserStoryFeature />
      </div>
      <FAQComponent />
      <Contact />
    </div>
    </Router>
  );
}
export default App;
