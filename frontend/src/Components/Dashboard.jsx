import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContextProvider, UserContext } from "./UserContext";

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");

    setUser(null);
    navigate("/login");
  };
  return (
    <main>
      
      <div className="profile">{!!user && <h2>HI {user.email}!</h2>}</div>

      <button id="logout" onClick={logoutUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </main>
  );
}
