import React from "react";

function AppFeatures() {
  return (
    <div className="row navigation">
      <div className="col-sm-auto col-md-auto">
       <img src="images/player1.png" className="image-responsive"/>
      </div>
      <div className="col-sm-auto col-md-auto">

        <div className="row main" style={{padding:"40px", marginTop:"50px"}}>
          <div className="col-sm-auto col-md-6">
            <div className="feature-symbol">
              <img src="images/rupee.png" height="50px" width="70px" />
            </div>
            <div className="feature-text">
              <h3>Lowest Entry Leagues</h3>
            </div>
          </div>
          <div className="col-sm-auto col-md-6">
            <div>
              <img src="images/rupee.png" height="50px" width="70px" />
            </div>
            <div className="feature-text">
              <h3>Get extra rewards on earning badges</h3>
            </div>
          </div>
        </div>

        <div className="row main" style={{padding:"40px"}}>
          <div className="col-sm-auto col-md-6">
            <div className="feature-symbol">
              <img src="images/expert-icon.png" height="70px" width="80px" />
            </div>
            <div className="feature-text">
              <h3> Instant cash withdrawl </h3>
            </div>
          </div>
          <div className="col-sm-auto col-md-6">
            <div className="feature-symbol">
              <img src="images/expert-icon.png" height="70px" width="80px" />
            </div>
            <div className="feature-text">
              <h3> Create Expert Team </h3>
            </div>
          </div>
        </div>

      <div className="row main" style={{padding:"40px"}}>
        <div className="col-sm-auto col-md-6">
          <div className="feature-symbol">
            <img src="images/expert-icon.png" height="70px" width="80px" />
          </div>
          <div className="feature-text">
            <h3> Get a team created by our expert</h3>
          </div>
        </div>
        <div className="col-sm-auto col-md-6">
          <div className="feature-symbol">
            <img src="images/expert-icon.png" height="70px" width="80px" />
          </div>
          <div className="feature-text">
            <h3> Regular offers and discounts</h3>
          </div>
        </div>
      </div>

      <div className="row main" style={{padding:"40px"}}>
        <div className="col-sm-auto col-md-auto">
          <div className="feature-symbol">
            <img src="images/expert-icon.png" height="70px" width="80px" />
          </div>
          <div className="feature-text">
            <h3> Get rewarded for being expert</h3>
          </div>
        </div>
        <div className="col-sm-auto col-md-auto">
          <div className="feature-symbol">
            <img src="images/expert-icon.png" height="70px" width="80px" />
          </div>
          <div className="feature-text">
            <h3> Play along chat with opponents in live match</h3>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default AppFeatures;
