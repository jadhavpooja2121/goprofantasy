import React from "react";
import users from "./UserStoryDictionary";
import UserStory from "./UserStory";

function getUsers(user) {
  return (
    <UserStory
      id={user.id}
      username={user.username}
      winningAmount={user.winningAmount}
      picture={user.picture}
      story={user.story}
    />
  );
}

function UserStoryFeature() {
  return (
    <div class="row" style={{margin:"0px"}}>
      <div className="row" style={{ background:"#6418df", margin:"0px", textAlign:"center", padding:"15px"}}>
          <h1 style={{ color: "#FFFFFF"}}>Users trust us</h1>
          <h3 style={{ color: "#FDA7DF"}}>
            Made with ❤️ in India, for India
          </h3>
        </div>
        <div className="row" style={{margin:"0px", padding:"0px"}}>
        <div style={{ padding: "20px 25px", backgroundColor: "#30027a" }}>
          <div className="dictionary">
              {users.map(getUsers)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStoryFeature;
