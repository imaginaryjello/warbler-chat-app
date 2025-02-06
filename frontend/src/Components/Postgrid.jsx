import React from "react";
import "../assets/Profile.css";
export default function Postgrid(props) {
  return (
    <div className="post-grid">
      <img src={props.src} width={"155px"} />
      <h3>{props.likes}</h3>
      <h3>{props.comments}</h3>
    </div>
  );
}
