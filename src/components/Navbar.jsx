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
    <div class="navigation row-style">
      <div className="row">
        <nav className="navbar">
          <div className="col-sm-auto col-md-auto">
            <div className="main">
              <div>
                <img
                  src="/images/app_logo.png"
                  width="130px"
                  height="90px"
                  alt="GoProFantasyLogo"
                  className="image-responsive"
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <h1>GoProFantasy</h1>
              </div>
            </div>
          </div>
          <div className="navbar-nav">
            <ul className="link-style">
              <li>
                <Link className="nav-headers" to="/howtoplay">
                  How to play
                </Link>
              </li>
              <li>
                <Link className="nav-headers" to="/faqs">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="nav-headers" to="/aboutus">
                  About us
                </Link>
              </li>
              <li>
                <a href={apkLink}>
                  <Button> <h6 className = "nav-headers">Download App</h6></Button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
