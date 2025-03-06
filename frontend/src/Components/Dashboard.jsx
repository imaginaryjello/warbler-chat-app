import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
// import { mockUser } from "../../../backend/mock_data/mockdb";
import { UserContextProvider, UserContext } from "./UserContext";

export default function Dashboard(props) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");

    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      toast.success(`Hi ${user.email}!`, {
        icon: "👋",
      });
    }
  }, [user]);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <main>
      <div
        className="flex items-center gap-3 m-4 mt-10 shadow-md border-white border-2 rounded-lg p-2 hover:shadow-2xl hover:bg-gray-100"
        onClick={handleProfileClick}
      >
        <img
          src={props.avatar}
          width={"100px"}
          alt="profile"
          className="rounded-full hover:ring-2 ring-blue-300 ring-inset"
        />
        <h1 className="text-2xl font-serif  font-semibold  ">{props.name}</h1>
      </div>
      <button
        id="logout"
        onClick={logoutUser}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-1"
      >
        Logout
      </button>
    </main>
  );
}
