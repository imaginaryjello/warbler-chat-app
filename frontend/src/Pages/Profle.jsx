import { mockUser } from "../../../backend/mock_data/mockdb";
import React from "react";
import Profileheader from "../Components/Profileheader";
import Postgrid from "../Components/Postgrid";

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
    <>
      {headerElements}
      <h1>Posts</h1>
      {gridElements}
    </>
  );
}
