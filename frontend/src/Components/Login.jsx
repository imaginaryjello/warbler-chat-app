import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./UserContext";
// import './Login.css';
export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  //get data((
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      if (response.data.error) {
        console.log(response.data.error);
      } else {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(response.data.user); // Update user state
        setData({
          email: "",
          password: "",
        });
        navigate("/home");
        console.log("passed to backend sucessfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={loginUser}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="login-email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Email"
          />

          <label>Password</label>
          <input
            type="password"
            className="login-pw"
            id="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="Password"
          />

          <div className="login-btn">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
