import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Navbar() {
  return (
    <nav className="w-full bg-amber-400 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img className="h-10 w-10 rounded-b-full" src="/signupLogo.webp"></img>
        <h1 className="text-2xl font-bold">Warbler</h1>

        <div>
          <Link
            to="/home"
            className="text-white px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/chats"
            className="text-white px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Chats
          </Link>
        </div>
        <div>
          <Link
            to="/profile"
            className="text-white px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Profile
          </Link>
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </nav>
  );
}
