import { mockUser } from "../../../backend/mock_data/mockdb";
import React from "react";
import Profileheader from "../Components/Profileheader";
import ProfileContent from "../Components/ProfileContent";
import Postgrid from "../Components/Postgrid";
// import "../assets/Profile.css";
export function Profile() {
  const headerElements = mockUser.map((data) => {
    return (
      <Profileheader
        key={data.key}
        username={data.username}
        avatar={data.avatar}
        thought={data.thought}
      />
    );
  });
  const gridElements = mockUser.flatMap((data) =>
    data.posts.map((post) => {
      return (
        <Postgrid
          key={post.key}
          src={post.img}
          likes={post.likes}
          comments={post.comments}
        />
      );
    })
  );
  return (
    <main className="container  mx-auto p-4 ">
      {headerElements}
     <ProfileContent/>
      <div className=" grid gap-2 grid-cols-3 mt-6">{gridElements}</div>
    </main>
  );
}
