import React from "react";
import FooterNote from "./Footer";

function Contact() {
  return (
    <div className="footer-data">
      <footer
        class="page-footer font-small blue pt-4"
        style={{ margin: "0px" }}
      >
        <div class="footer-wrapper">
          <div className="footer-items">
            <div>
              <img src="/images/app_logo.png" alt="logo" className="logo" />
              <h2 className="footer-brandname">GoProFantasy</h2>
            </div>
            <div className="contact-grid">
              <h4 className="contact-info">Contact us at</h4>
              <h6 className="contact-mail">📩 support@goprofantasy.com</h6>
              <h4 className="inquiry-title">For Business Inquiries</h4>
              <h6>📩 customer@goprofantasy.com</h6>
            </div>
          </div>

          <div className="info-block">
            <h5 class="text-uppercase">Information</h5>

            <ul className="info-items">
              <li className="info-links">
                <a href="#!">About us</a>
              </li>
              <li className="info-links">
                <a href="#!">FAQs</a>
              </li>
              <li className="info-links">
                <a href="#!">Privacy policy</a>
              </li>
              <li className="info-links">
                <a href="#!">Careers</a>
              </li>
            </ul>
          </div>

          <div class="footer-item">
            <h5 class="text-uppercase">Follow us on Social media</h5>

            <ul class="list-unstyled">
              <li>
                <img
                  src="images/Facebook_logo.png"
                  alt=""
                  width={"100px"}
                  height={"100px"}
                />
              </li>
              <li>
                <img
                  src="images/linkedin.png"
                  alt=""
                  width={"100px"}
                  height={"100px"}
                />
              </li>
              <li>
                <img
                  src="images/twitter.png"
                  alt=""
                  width={"100px"}
                  height={"100px"}
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <FooterNote />
    </div>
  );
}

export default Contact;
