import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HowToPlay() {
  return (
    <div className="row how-to-play-bg" style={{margin:"0px"}}>
      <div className="row">
        <h1 style={{ textAlign: "center", color: "#fbc531", padding: "10px 10px"}}>How To Play</h1>
      </div>
      <div class="row">
        <div class="col-sm-auto col-md-auto">
          <div>
            <h2 style={{ textAlign: "center", color: "#81ecec"}}>
              1. Select a Match
            </h2>
          </div>
          <div style={{padding: "20px 40px 20px"}}>
            <img
              src="images/selectMatch.jpg"
              width="300px"
              height="300px"
            ></img>
          </div>
        </div>
        <div class="col-sm-auto col-md-auto">
          <div>
            <h2 style={{ textAlign: "center", color: "#81ecec"}}>
              2. Create a team
            </h2>
          </div>
          <div style={{padding: "20px 40px 20px"}}>
            <img
              src="images/createTeam.jpg"
              width="300px"
              height="300px"
            ></img>
          </div>
        </div>
        <div class="col-sm-auto col-md-auto">
          <div>
            <h2 style={{ textAlign: "center", color: "#81ecec"}}>
              3. Join a contest
            </h2>
          </div>
          <div style={{padding: "20px 40px 20px"}}>
            <img
              src="images/joinContest.jpg"
              width="300px"
              height="300px"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
