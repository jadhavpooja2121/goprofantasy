import React from "react";
function UserStory(props) {
  return (
    <div className="term">
      <dt>
        <span>{props.winningAmount}</span>
        <span>
          <img src={props.picture} className="user-story-img" />
        </span>
        <span>{props.username}</span>
      </dt>
      <dd>{props.story}</dd>
    </div>
  );
}
export default UserStory;
