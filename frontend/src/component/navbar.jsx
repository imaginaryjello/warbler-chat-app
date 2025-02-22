import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-amber-400 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img className="h-10 w-10 rounded-b-full" src="/signupLogo.webp"></img>
        <h1 className="text-2xl font-bold">Warbler</h1>
        <div>
          <Link
            to="/signup"
            className="text-white px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
