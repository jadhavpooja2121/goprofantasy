import React from "react";
import Navbar from "./Navbar";
import LoadCarousel from "./Carousel";
import AppFeatures from "./Features";
import UserStoryFeature from "./UserStories";
import FAQComponent from "./FAQs";
import Contact from "./Contact";
import HowToPlay from "./HowToPlay";
import QRImage from "./QRCode";

const Home = () => {
  return (
    <div className="container-fluid" style={{ padding: "0" }}>
      <Navbar />
      <QRImage />
      <AppFeatures/>
    </div>
  );
};

export default Home;
