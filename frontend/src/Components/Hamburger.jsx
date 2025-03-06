import React from "react";
import Dashboard from "./Dashboard";
import {mockUser} from "../../../backend/mock_data/mockdb";

const Ham = ({ children }) => {
  const dashboard = mockUser.map((data) => {
    return (
      <Dashboard key={data.key} name={data.username} avatar={data.avatar} />
    );
  });

  const [isOpen, setisOpen] = React.useState(false);
  const hamOpen = () => {
    setisOpen(true);
  };
  const hamClose = () => {
    setisOpen(false);
  };

  return (
    <div>
      <button className="ham" onClick={hamOpen}>
        <aside>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </aside>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center right-0 z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={hamClose}
          ></div>
          <div className="h-screen w-1/4 bg-gray-200 z-50 relative">
            <button
              onClick={hamClose}
              className="absolute top-0 right-2  text-gray-600 hover:text-gray- w-10 h-10 size-6"
            >
              &times;
            </button>
            {dashboard}
          </div>
        </div>
      )}

      {children}
    </div>
  );
};
export default Ham;
