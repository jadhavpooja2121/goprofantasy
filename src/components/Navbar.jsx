import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import apkLink from "../data/Constants";
import FAQComponent from "./FAQs";
import { Link } from "react-router-dom";

function Navbar() {
  function handleDownload() {
    const element = document.createElement("a");
    element.href = { apkLink };
    element.download = "GoProFantasy.apk";
    document.body.appendChild(element);
    element.click();
  }

  return (
    <header className="header navigation">
      <div className="brandname">
        <img
          src="/images/app_logo.png"
          alt="GoProFantasyLogo"
          className="logo"
        />
        <Link to="/" className="home-link">
          <h1 style={{ display: "inline-block" }}>GoProFantasy</h1>
        </Link>
      </div>
      <nav className="nav-menu">
        <ul className="link-style">
          <li className="li-items">
            <a className="nav-headers" href="#howtoplay">
              How to play
            </a>
          </li>
          <li className="li-items">
            <a className="nav-headers" href="#faqs">
              FAQ's
            </a>
          </li>
          <li className="li-items">
            <Link className="nav-headers" to="/aboutus">
              About us
            </Link>
          </li>
          <li className="li-items download-button-style">
            <a href={apkLink}>
              <Button className="">
                <h4 className="dw-btn-font">Download</h4>
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
