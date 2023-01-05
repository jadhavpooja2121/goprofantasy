import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HowToPlay() {
  return (
    <div className="how-to-play-bg">
     
        <h1 className="how-to-play-heading">How To Play</h1>
    
    <div className="play-grid">
      <div className="play-block">
            <h2 className="play-sub-heading">
              1. Select a Match
            </h2>
                 
            <img
              src="images/selectMatch.jpg"
             className="how-to-play-img"
            />
            </div>
       
         <div className="play-block">
            <h2 className="play-sub-heading">
              2. Create a team
            </h2>
          
            <img
              src="images/createTeam.jpg"
             className="how-to-play-img"
            />
          </div>
          <div className="play-block">
       
            <h2 className="play-sub-heading">
              3. Join a contest
            </h2>
         
            <img
              src="images/joinContest.jpg"
             className="how-to-play-img"
            />
            </div>
          </div>
    </div>
  );
}

export default HowToPlay;
