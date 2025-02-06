import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ element }) => {
  const navigate = useNavigate();
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null;
  };
  const auth = isAuthenticated();
  if (auth) {
    console.log("Authenticated:", auth);
    return element;
  } else {
    navigate("/login");
    return null;
  }
};
export default ProtectedRoutes;
