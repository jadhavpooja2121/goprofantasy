import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";

function Navbar() {
  function handleDownload() {
    const element = document.createElement('a');
    element.href = "/images/icon.png";
    element.download = "GoProFantasy.apk";
    document.body.appendChild(element);
    element.click();
  }
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <div class="logo">
          <img src="/images/app_logo.png" width="130px" height="90px"  alt="GoProFantasyLogo"/>
        </div>
        <div class="brand">GoProFantasy</div>
        <ul class="list">
          <li>
            <div class="play">
              <a class="nav-link active" aria-current="page" href="#">
                How to play
              </a>
            </div>
          </li>

          <li>
            <div class="faq">
              <a class="nav-link" href="#">
                FAQs
              </a>
            </div>
          </li>
          <li>
            <div class="about">
              <a class="nav-link" href="#">
                About us
              </a>
            </div>
            <div class="download">
              <Button onClick={handleDownload}> Download App</Button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
