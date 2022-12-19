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
    <div class="user-story-style">
      <div className="row">
        <div className="col-lg" style={{ textAlign: "center" }}>
          <h1 style={{ color: "#FFFFFF", padding: "10px" }}>Users trust us</h1>
          <h3 style={{ color: "#FDA7DF", padding: "5px 50px" }}>
            Made with ❤️ in India, for India
          </h3>
        </div>
        <div style={{ padding: "30px 25px", backgroundColor: "#30027a" }}>
          <div className="dictionary">
              {users.map(getUsers)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStoryFeature;
