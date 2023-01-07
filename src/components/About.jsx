import React from "react";
import { AppDownload } from "./AppDownload";
import Contact from "./Contact";
import { Disclaimer } from "./Desclaimer";
import FAQComponent from "./FAQs";
import HowToPlay from "./HowToPlay";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="about-bg-style" style={{ margin: "0px" }}>
      <Navbar />
      <div className="about-p1">
        <h1 className="desc-heading">Who we are</h1>
        <p className="desc">
          GoProFantasy is the flagship product of Fantasy Sports GoProFantasy
          Private Limited. GoProFantasy is India’s Biggest Sports Gaming
          platform with users playing Fantasy Cricket. It is a fantasy Sports
          Management platform that offers Indian sports fans a platform to
          showcase their sports knowledge. User can create their own team made
          up of real-life players from upcoming matches, score points based on
          their on-field performance and compete with other User.
        </p>
      </div>
      <div className="about-p2">
        <p className="desc">
          We make sure you become a part of the game you love so much and get a
          chance to win real cash and some more amazing rewards. So gear up as
          we take you to a world of ‘fantasies’ where you play alongside the
          stars of the game. We offer a safe and secured platform to enjoy
          fantasy sports at your leisure.
        </p>
        <h1 className="desc-heading">Our Mission</h1>
      </div>
      <HowToPlay />
      <FAQComponent />
      <AppDownload />
      <Contact />
      <Disclaimer />
    </div>
  );
};

export default About;
