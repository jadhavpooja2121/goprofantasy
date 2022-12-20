import React from "react";
import FooterNote from "./Footer";

function Contact() {
  return (
    <div className="footer-data">
      <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <p>
                <img
                  src="/images/app_logo.png"
                  alt="logo"
                  width={"100px"}
                  height={"50px"}
                />
                <h2>GoProFantasy</h2>
                <h4 style={{ textAlign: "left", padding: "0px 40px" }}>
                  Contact us at 
                </h4>
                <h6 style={{ textAlign: "left", padding: "0px 40px" }}> 📩 support@goprofantasy.com</h6>
                <h4 style={{ textAlign: "left", padding: "0px 40px" }}>
                  For Business Inquiries
                </h4>
                <h6 style={{ textAlign: "left", padding: "0px 40px" }}> 📩 customer@goprofantasy.com</h6>
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Information</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">About us</a>
                </li>
                <li>
                  <a href="#!">FAQs</a>
                </li>
                <li>
                  <a href="#!">Privacy policy</a>
                </li>
                <li>
                  <a href="#!">Careers</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Follow us on Social media</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">Facebook</a>
                </li>
                <li>
                  <a href="#!">Twitter</a>
                </li>
                <li>
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
