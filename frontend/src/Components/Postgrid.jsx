import React from "react";
export default function Postgrid(props) {
  return (
    <div className="post">
      <img
        className=" aspect-square object-cover w-fit h-full"
        src={props.src}
        width={"155px"}
      />
      {/* <h3>{props.likes}</h3>
      <h3>{props.comments}</h3> */}
    </div>
  );
}
