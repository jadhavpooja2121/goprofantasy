import React from "react";
import Navbar from "./Navbar";
import AppFeatures from "./Features";
import UserStoryFeature from "./UserStories";
import FAQComponent from "./FAQs";
import Contact from "./Contact";
import HowToPlay from "./HowToPlay";
import QRImage from "./QRCode";
import { AppDownload } from "./AppDownload";

const Home = () => {
  return (
    <div className="container-fluid" style={{ padding: "0" }}>
      <Navbar />
      <QRImage />
      <AppFeatures/>
      <HowToPlay/>
      <UserStoryFeature/>
      <FAQComponent />
      <AppDownload/>
      <Contact/>
    </div>
  );
};

export default Home;
