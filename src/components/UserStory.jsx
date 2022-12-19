import React from 'react';
function UserStory(props){
    return( <div className="term">
    <dt>
      <span><img src={props.picture} width="200px" height="200px"/>
      </span>
      <span>{props.username}</span>
    </dt>
    <dd>{props.story}</dd>
  </div>);
}
export default UserStory;