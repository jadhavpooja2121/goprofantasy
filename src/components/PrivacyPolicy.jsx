import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import apkLink from "../data/Constants";
import Contact from "./Contact";
import { Disclaimer } from "./Desclaimer";

const PrivacyPolicy = () => {
  return (
    <>
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
          <ul style={{ float: "right" }}>
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
      <div className="privacy-policy-container">
        <div>
          <h1>Our Privacy Is Important</h1>
          <p>
            We provide online Fantasy Cricket, Football, Basketball, Hockey,
            Baseball, Kabaddi, Handball and NBA games on GoProFantasy for our
            Users’ entertainment in an absolutely safe, secure and trustworthy
            environment. We are committed to protecting the privacy of our
            Users. This Privacy Policy explains what information we collect from
            our Users, how we use their information, and what choices are
            available to our Users in this regard. This Privacy Policy forms
            part of our Website’s Terms of Service. GoProFantasy respects your
            privacy and assures you that any information provided by you to
            GoProFantasy is fully protected and will be used according to this
            Privacy Policy. To play games of Fantasy Cricket, Football,
            Basketball, Hockey, Baseball, Kabaddi, Handball and NBA offered on
            GoProFantasy , you may have to provide certain information to us.
          </p>
        </div>
        <div>
          <h1>The Information We Collect</h1>
          <p>
            You are required to register with us to become our User and access
            our games. We collect the personal information of our Users.
            Examples of this include Users’ names, addresses, email addresses,
            and phone numbers. If you do not provide us with the required
            information, you may not be able to access our Games and other
            Services. We also collect information other than your personal
            information, such as your IP address. Such information is not
            associated with your personal information and cannot be linked to
            you personally. We may use IP addresses to analyse trends,
            administer the Website, track Users’ movement and gather broad
            demographic information for aggregate use. IP addresses are not
            linked to personally identifiable information. goprofantasy .in is
            the sole owner of the information collected on this Website. We will
            not sell, share, or rent our Users’ information to others in ways
            different from what is disclosed in this Privacy Policy.
          </p>
        </div>
        <div>
          <h1>Usage of the Information Collected</h1>
          <p>
            GoProFantasy does not disclose your personal information to any
            third party without your express permission. However, by registering
            on our Website or App, you grant us permission to use and share your
            personal information as stated in this Privacy Policy. We may need
            to disclose your information when required by law. We use your
            personal information to improve our Services and enhance your
            experience on our Website as well as to notify you of our new
            Fantasy Cricket, Football, Basketball, Hockey, Baseball, Kabaddi,
            Handball,and NBA offers, Products and Services. Your personal
            information may be shared with the sponsors and suppliers of prizes
            for our winners. GoProFantasy uses a fool proof security system to
            prevent the loss, misuse and alteration of User information. Your
            registration data is password-protected and only you can access your
            information. GoProFantasy is not responsible for any activity that
            takes place in your account when your password is used. We strongly
            advise you not to disclose your password to anyone whosoever.
          </p>
        </div>
        <div>
          <h1>Cookies</h1>
          <p>
            When you visit our Website or use our App, cookies may be left in
            your computer or phone. A cookie is a small text file that uniquely
            identifies your browser and which is assigned by the servers of
            goprofantasy .in. It may be used to personalize your experience on
            goprofantasy .in. Additionally, it may be used for authentication,
            game management and security purposes. A cookie in no way gives us
            access to your computer or any information about you other than the
            data you choose to share with us. Cookies may also be assigned by
            the advertisers of GoProFantasy when you click on any of the
            advertisements shown on goprofantasy .in. In such an event, the
            cookies are controlled by these advertisers and not by us. You can
            choose to accept or decline cookies. Most Web browsers automatically
            accept cookies, but you can usually modify your browser setting to
            decline cookies if you wish. This may prevent you from taking full
            advantage of our Products and Services.
          </p>
        </div>
      </div>
      <Contact />
      <Disclaimer />
    </>
  );
};

export default PrivacyPolicy;
