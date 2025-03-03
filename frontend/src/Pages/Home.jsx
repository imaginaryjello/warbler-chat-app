import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../Components/Navbar"; // ✅ Ensure the filename is correct (capital 'N')

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-300 flex flex-col items-center">
      <Navbar />
      <div className="bg-gray-600 w-full max-w-lg justify-self-end p-8 mt-10  rounded-2xl shadow-lg text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Warbler</h1>
        <p className="text-lg mb-6">
          Warbler is a chat application where you can chat with your friends.
        </p>

        <div>
          <p className="m-4">Add a friend to your connection</p>
          <form>
            <button className="bg-green-600 rounded-xl object-fill p-2">
              Add Name
            </button>
            <input
              className="ml-1.5 bg-white rounded-xl p-2 text-gray-800"
              type="text"
              placeholder="Search..."
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
