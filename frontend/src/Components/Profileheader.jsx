import React from "react";

export default function Profileheader(props) {
  return (
    <header>
      <div className="whole-container">
        <img src={props.avatar} alt="profile" />

        <div className="profile-info">
          <h2>{props.username}</h2>
          <button>Edit Profile</button>
          <h3>{props.thought}</h3>
        </div>
      </div>
    </header>
  );
}
