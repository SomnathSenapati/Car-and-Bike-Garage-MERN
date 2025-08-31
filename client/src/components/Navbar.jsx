import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("username");

    setIsLoggedIn(!!token);
    if (user) {
      setUserName(user);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top py-3">
      {/* Brand Logo */}
      <a href="/index" className="navbar-brand d-flex align-items-center px-4">
        <h2 className="m-0 text-primary fw-bold">
          <i className="fa fa-car me-2"></i> DriveWell
        </h2>
      </a>

      {/* Mobile Toggler */}
      <button
        className="navbar-toggler me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto px-4">
          <a
            href="/index"
            className={`nav-item nav-link ${
              location.pathname === "/index"
                ? "active text-primary fw-bold"
                : ""
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`nav-item nav-link ${
              location.pathname === "/about"
                ? "active text-primary fw-bold"
                : ""
            }`}
          >
            About
          </a>
          <a
            href="/services"
            className={`nav-item nav-link ${
              location.pathname === "/services"
                ? "active text-primary fw-bold"
                : ""
            }`}
          >
            Services
          </a>
          <a
            href="/contact"
            className={`nav-item nav-link ${
              location.pathname === "/contact"
                ? "active text-primary fw-bold"
                : ""
            }`}
          >
            Contact
          </a>
        </div>

        {/* Right side: Login / Profile */}
        <div className="d-flex align-items-center pe-4">
          {!isLoggedIn ? (
            <a
              href="/login"
              
              style={{ transition: "0.3s" }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <i className="fa fa-sign-in-alt me-2"></i> Login
            </a>
          ) : (
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center nav-link dropdown-toggle text-dark"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-user-circle me-2 fs-5 text-primary"></i>
                {userName}
              </a>
              <div className="dropdown-menu dropdown-menu-end shadow">
                <a href="/dashboard" className="dropdown-item">
                  <i className="fa fa-tachometer-alt me-2 text-secondary"></i>{" "}
                  Dashboard
                </a>
                <button className="dropdown-item" onClick={handleLogout}>
                  <i className="fa fa-sign-out-alt me-2 text-danger"></i> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
