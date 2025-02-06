import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { createContext } from "react";
// import { getProfile } from "../../../backend/controllers/authControllers";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
        console.log("User:", data);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
