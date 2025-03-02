import React from "react";
// import "../assets/Profile.css";
export default function Profileheader(props) {
  return (
    <header className=" container gap-5 p-5 flex border-2 border-black rounded-2xl">
      <div>
        
      </div>
      <div className="flex gap-4 pl-4 ">
        <img
          className="border-2 border-black rounded-full"
          src={props.avatar}
          alt="profile"
          width={"150px"}
        />
      </div>

      <div className="flex-1 ">
        <div className="flex flex-row gap-3 items-center">
          <div className="text-2xl font-serif  font-semibold object-contain ">
            {props.username}
          </div>
          <div className="grid grid-cols-2 gap-5 w-28 items-center">
            <button className=" mr-3  w-20 h-9 font-sans font-light border-1 border-transparent rounded-lg bg-yellow-200">
              Edit Profile
            </button>

            <a href="/settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 ml-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                />
              </svg>
            </a>
          </div>
        </div>

        <p>{props.likes}</p>
        <p>{props.comment}</p>
        <h3>{props.thought}</h3>
      </div>
    </header>
  );
}
