import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import apkLink from "../data/Constants";
import Contact from "./Contact";
import { Disclaimer } from "./Desclaimer";

const TermsAndConditions = () => {
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
          <h1>Use of Software</h1>
          <p>
            Commercial use of our Software is strictly forbidden. Users are only
            allowed to use the Software for their personal entertainment. Under
            no circumstances shall Users be permitted to use their accounts on
            GoProFantasy .in for any purpose other than playing the Games for
            entertainment. Users may not attempt to modify, decompile,
            reverse-engineer or disassemble the Software in any way. The use of
            artificial intelligence including, without limitation, robots is
            strictly forbidden in connection with the Software and the Games.
            All actions taken in relation to Fantasy Cricket games by Users must
            be executed personally by Users using the user interface accessible
            through the Software.
          </p>
        </div>
        <div>
          <h1>Your Password, Your Responsibility</h1>
          <p>
            After you have registered on our Website, it is solely your
            responsibility to keep your password absolutely confidential. Make
            sure you do not share your password with anybody, be it your family,
            friends or anyone else. We are not responsible in any way if your
            user account is logged in or accessed by anybody else using your
            password.
          </p>
        </div>
        <div>
          <h1>Eligibility and Jurisdiction Policy</h1>
          <ul>
            <li>Our Contests are open only to persons aged 18 or older.</li>
            <li>
              The Contests are open only to persons residing in India at the
              time of participation.
            </li>
            <li>
              GoProFantasy may, in accordance with the laws prevailing in
              certain Indian states, bar people who reside in certain Indian
              states from participating in any Contests. Currently people who
              reside in the Indian states of Assam, Andhra Pradesh, Odisha,
              Telangana, Nagaland or Sikkim may not participate in any paid or
              cash Contests, as the laws of these states bar their residents
              from participating in any online games where participants are
              required to pay to enter contests like Fantasy Cricket rooms.
            </li>
          </ul>
        </div>
        <div>
          <h1>Governing Law, Dispute Resolution and Jurisdiction</h1>
          <p>
            This Agreement shall in all respects be governed and interpreted and
            construed in accordance with the laws of India. All disputes,
            differences, complaints, etc. shall be subject to arbitration under
            the Indian Arbitration and Conciliation Act, 1996.
          </p>
        </div>
      </div>
      <Contact />
      <Disclaimer />
    </>
  );
};

export default TermsAndConditions;
