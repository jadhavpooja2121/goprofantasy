import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/aboutus" className="page-links">About us</Link>
              </li>
              <li className="info-links">
                <Link to="/faqs" className="page-links">FAQs</Link>
              </li>
              <li className="info-links">
                <Link to="/privacypolicy" className="page-links">Privacy policy</Link>
              </li>
              <li className="info-links">
                <Link to="/careers" className="page-links">Careers</Link>
              </li>
            </ul>
          </div> 

          <div class="footer-item">
            <h5 class="text-uppercase">Follow us on Social media</h5>

            <ul class="list-unstyled">
              <li className="social-media-links" >
                 <img
                  src="images/Facebook_logo.png"
                  alt="facebook-logo"
                  className="social-media-logos"
                />
              </li>
              <li className="social-media-links">
                <img
                  src="images/linkedin.png"
                  alt="linkedin-logo"
                  className="social-media-logos"                />
              </li>
              <li className="social-media-links">
                <img
                  src="images/twitter.png"
                  alt="twitter-logo"
                  className="social-media-logos"                />
              </li>
              
            </ul>
            <FooterNote />
          </div>
        </div>

      </footer>
    

    </div>
  );
}

export default Contact;
