import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HowToPlay from "./components/HowToPlay";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import FAQComponent from "./components/FAQs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/howtoplay" element={<HowToPlay />}></Route>
        <Route exact path="/faqs" element={<FAQComponent />}></Route>
        <Route exact path="/aboutus" element={<About />}></Route>
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route exact path="/terms" element={<TermsAndConditions />}></Route>
        <Route exact path="*" element={<h1>404 Page Not Found!</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
