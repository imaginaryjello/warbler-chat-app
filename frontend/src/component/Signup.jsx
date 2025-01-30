import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function Signup() {
  const [signupData, setSignupData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        signupData
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bodySignup">
      <div className="Signup-container">
        <h1>Signup</h1>
        <div className="signup-container-form">
          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>
          <p className="signup-message">{message}</p>
        </div>
        <div className="login-redirect">
          <p>
            Already have an account?{" "}
            <a href="/login" className="login-link">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
