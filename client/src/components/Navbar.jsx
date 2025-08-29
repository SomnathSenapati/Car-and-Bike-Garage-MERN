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
  }, [location]); // 👈 re-check on route change

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="/index"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-car me-3"></i>DriveWell
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/index" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>
            <a href="/services" className="nav-item nav-link">
              Services
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu fade-up m-0">
                <a href="/booking" className="dropdown-item">
                  Booking
                </a>
                <a href="/team" className="dropdown-item">
                  Technicians
                </a>
                <a href="/testimonial" className="dropdown-item">
                  Testimonial
                </a>
              </div>
            </div>
            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
          </div>

          {/* Right side: Login / Profile */}
          <div className="d-flex align-items-center px-lg-4">
            {!isLoggedIn ? (
              <a href="/login" className="btn-login d-none d-lg-block">
                Login
              </a>
            ) : (
              <div className="dropdown">
                <a
                  href="#"
                  className="d-flex align-items-center nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-user-circle me-2 fs-4 text-primary"></i>
                  Hello, {userName}
                </a>
                <div className="dropdown-menu dropdown-menu-end m-0">
                  <a href="/dashboard" className="dropdown-item">
                    Dashboard
                  </a>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
