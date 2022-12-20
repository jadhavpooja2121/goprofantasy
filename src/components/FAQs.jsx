import React from "react";
import FAQdata from "../FAQdata";
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
    <div className="row faq-data">
      <div className="col-md">
        <h1
          style={{
            backgroundColor: "#000000",
            color: "#FFFFFF",
            textAlign: "center",
            height: "70px",
          }}
        >
          FAQs about GoProFantasy
        </h1>
        <div>{FAQdata.map(getFAQData)}</div>
      </div>
    </div>
  );
}

export default FAQComponent;
