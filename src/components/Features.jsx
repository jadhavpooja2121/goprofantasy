import React from "react";

function AppFeatures() {
  return (
    <section
      className="navigation "
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
    >
      <img src="images/player1.png" className="player-img" />
      <section className="feature-grid">
        <div className="grid-item">
          <img src="images/rupee.png" className="feature-symbol" />

          <h3 className="feature-text ">Lowest Entry Leagues</h3>
        </div>

        <div className="grid-item">
          <img src="images/rupee.png" className="feature-symbol" />

          <h3 className="feature-text ">Get extra rewards on earning badges</h3>
        </div>

        <div className="grid-item">
          <img src="images/expert-icon.png" className="feature-symbol" />

          <h3 className="feature-text "> Instant cash withdrawl </h3>
        </div>
        <div className="grid-item">
          <img src="images/expert-icon.png" className="feature-symbol" />

          <h3 className="feature-text "> Create Expert Team </h3>
        </div>

        <div className="grid-item">
          <img src="images/expert-icon.png" className="feature-symbol" />

          <h3 className="feature-text "> Get a team created by our expert</h3>
        </div>

        <div className="grid-item">
          <img src="images/expert-icon.png" className="feature-symbol" />

          <h3 className="feature-text "> Regular offers and discounts</h3>
        </div>
        <div className="grid-item">
          <img src="images/expert-icon.png" className="feature-symbol" />

          <h3 className="feature-text "> Get rewarded for being expert</h3>
        </div>
        <div className="grid-item">
          <img src="images/expert-icon.png" className="feature-symbol" />

          <h3 className="feature-text ">
            {" "}
            Play along chat with opponents in live match
          </h3>
        </div>
      </section>
    </section>
  );
}
export default AppFeatures;
