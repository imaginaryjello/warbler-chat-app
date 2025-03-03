import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { UserContextProvider } from "./Components/UserContext";
import Signup from "./Components/Signup";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profle";
import Dashboard from "./Components/Dashboard";
import Chat from "./Pages/Chat";
import ProtectedRoutes from "./Components/Protectedroutes";
import "./App.css";
import "./assets/Tailwind.css";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <UserContextProvider>
      <Router>
   
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route
            path="/home"
            element={<ProtectedRoutes element={<Home />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<ProtectedRoutes element={<Profile />} />}
          />
          <Route
            path="/chats"
            element={<ProtectedRoutes element={<Chat />} />}
          />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
