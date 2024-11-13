import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaBook, FaSignInAlt, FaSignOutAlt, FaFilm } from "react-icons/fa"; // Icons for better UI
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <FaFilm className="icon" /> Hollywood Blog
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> {/* Align links to the left */}
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaHome className="icon" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <FaInfoCircle className="icon" /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <FaPhoneAlt className="icon" /> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/docs" className="nav-link">
                  <FaBook className="icon" /> Docs
                </Link>
              </li>
            </ul>

            {/* Right-aligned section for Add Article, Logout, and Login/SignUp */}
            <div className="d-flex ms-auto align-items-center"> {/* Added ms-auto for alignment */}
              {sessionStorage.getItem("isLogged") ? (
                <>
                  <span className="text-light mr-3">Welcome! {sessionStorage.getItem("username")}</span>
                  <Link className="btn btn-light mr-3" to="/create">
                    + Add Article
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      sessionStorage.removeItem("isLogged");
                      sessionStorage.removeItem("username");
                      sessionStorage.removeItem("id");
                      window.location = "/";
                    }}
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </>
              ) : (
                <Link className="btn btn-outline-light" to="/login">
                  <FaSignInAlt /> Login/SignUp
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
