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
      <div>
        <h1>Profile</h1>
      </div>
      <div className="profile">{!!user && <h2>HI {user.email}!</h2>}</div>

      <button id="logout" onClick={logoutUser}>
        Logout
      </button>
    </main>
  );
}
