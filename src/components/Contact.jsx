import React from "react";
import FooterNote from "./Footer";

function Contact() {
  return (
    <div className="row footer-data" style={{margin:"0px"}}>
      <footer class="page-footer font-small blue pt-4" style={{margin:"0px"}}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-auto col-md-auto">
              <p>
                <img
                  src="/images/app_logo.png"
                  alt="logo"
                  width={"100px"}
                  height={"50px"}
                />
                <h2 style={{ textAlign: "center"}}>GoProFantasy</h2>
                <h4 style={{ textAlign: "left", padding: "0px 30px" }}>
                  Contact us at 
                </h4>
                <h6 style={{ textAlign: "left", padding: "0px 30px" }}> 📩 support@goprofantasy.com</h6>
                <h4 style={{ textAlign: "left", padding: "0px 30px" }}>
                  For Business Inquiries
                </h4>
                <h6 style={{ textAlign: "left", padding: "0px 30px" }}> 📩 customer@goprofantasy.com</h6>
              </p>
            </div>
      
            <div class="col-sm-auto col-md-auto" style={{paddingLeft:"0px"}}>
              <h5 class="text-uppercase">Information</h5>

              <ul>
                <li style={{display:"block", float:"none", textAlign:"left"}}>
                  <a href="#!">About us</a>
                </li>
                <li style={{ display:"block", float:"none", textAlign:"left"}}>
                  <a href="#!">FAQs</a>
                </li>
                <li style={{display:"block", float:"none", textAlign:"left"}}>
                  <a href="#!">Privacy policy</a>
                </li>
                <li style={{display:"block", float:"none", textAlign:"left"}}>
                  <a href="#!">Careers</a>
                </li>
              </ul>
            </div>

            <div class="col-sm-auto col-md-auto">
              <h5 class="text-uppercase" >Follow us on Social media</h5>

              <ul class="list-unstyled">
                <li style={{display:"block", float:"none", textAlign:"left"}}>
                  <a href="#!">Facebook</a>
                </li>
                <li style={{display:"block", float:"none", textAlign:"left"}}>
                  <a href="#!">Twitter</a>
                </li>
                <li style={{display:"block", float:"none", textAlign:"left"}}>
                  <a href="#!">LinkedIn</a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </footer>
      <FooterNote></FooterNote>
    </div>
  );
}

export default Contact;
