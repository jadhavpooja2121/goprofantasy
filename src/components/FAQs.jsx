import React from "react";
import FAQdata from "../data/FAQdata";
import FAQ from "./FAQ";

function getFAQData(faqprops) {
  return (
    <FAQ
      id={faqprops.id}
      question={faqprops.question}
      answer={faqprops.answer}
    />
  );
}

function FAQComponent() {
  return (
    <div className="row navigation" style={{ margin: "0px" }} id="faqs">
      <h1 className="faq-header">FAQs about GoProFantasy</h1>
      <div>{FAQdata.map(getFAQData)}</div>
    </div>
  );
}

export default FAQComponent;
