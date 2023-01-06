import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import apkLink from "../Constants";
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
          <h1 style={{display:"inline-block"}}>GoProFantasy</h1>
          </div>
      <nav className="nav-menu">
        <ul className="link-style">
          <li className="li-items">
            <Link className="nav-headers" to="/howtoplay">
              How to play
            </Link>
          </li>
          <li className="li-items">
            <Link className="nav-headers" to="/faqs">
              FAQs
            </Link>
          </li>
          <li className="li-items">
            <Link className="nav-headers" to="/aboutus">
              About us
            </Link>
            </li>
            <li className="li-items download-button-style">
            <a href={apkLink}>
              <Button className="">
                <h6 className="">Download</h6>
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
