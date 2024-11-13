import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/loginCss.css"; // Link the correct CSS file for the login page

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginCheck = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = { email, password };
    
    axios
      .post("https://wordit-p7q2.onrender.com/user/signin", user)
      .then((res) => {
        setIsLoading(false);
        if (res.data.isLogged) {
          sessionStorage.setItem("isLogged", res.data.isLogged);
          sessionStorage.setItem("username", res.data.username);
          sessionStorage.setItem("id", res.data.id);
          window.location = "/";
        } else {
          setMessage("User Email/Password is Incorrect. Try Again!");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setMessage("An error occurred. Please try again.");
        console.log(err);
      });
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <div className="login-banner">
          <h2>Login</h2>
        </div>
        <form onSubmit={loginCheck}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <p className="text-danger">{message}</p>
          <div className="d-flex justify-content-end">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <Link to="/signup" className="btn btn-outline-primary">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
