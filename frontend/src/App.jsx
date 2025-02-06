import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import ProtectedRoutes from "./Components/Protectedroutes";
import Home from "./Pages/Home";
import Dashboard from "./Components/Dashboard";
import Profileheader from "./Components/Profileheader";
import { Profile } from "./Pages/Profle";
import { UserContextProvider } from "./Components/UserContext";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={<ProtectedRoutes element={<Home />} />}
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoutes element={<Dashboard />} />}
          />
          <Route
            path="/userProfile"
            element={<ProtectedRoutes element={<Profile />} />}
          />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
