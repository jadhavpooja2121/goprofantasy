import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function toggleElement() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
function FAQ(props) {
  return (
    <div style={{padding:"7px 50px"}}>
      <button type="button" class="collapsible" onClick={toggleElement}>
        {props.question}
      </button>
      <div class="content">
        <p>{props.answer}</p>
      </div>
    </div>
  );
}
export default FAQ;
