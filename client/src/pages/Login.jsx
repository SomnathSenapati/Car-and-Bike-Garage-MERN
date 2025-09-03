import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ import SweetAlert2
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Captcha states
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
  };

  // Generate captcha on page load
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // ✅ Check captcha first
    if (captchaInput.toUpperCase() !== captcha) {
      Swal.fire({
        icon: "error",
        title: "Captcha Mismatch",
        text: "Captcha code does not match. Please try again.",
      });
      generateCaptcha(); // regenerate on failure
      setCaptchaInput("");
      return;
    }

    try {
      const res = await fetch("http://localhost:2809/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome back, ${data.user?.name || "User"} 👋`,
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.user?.name || "User");
          localStorage.setItem("email", data.user?.email || "Email");
          localStorage.setItem("phone", data.user?.phone || "Phone");
          localStorage.setItem("ID", data.user?._id || "Id");
          navigate("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message || "Invalid credentials",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Captcha Section */}
        <div className="captcha-container">
          <div className="captcha-box">
            <span className="captcha-text">{captcha}</span>
            <button
              type="button"
              className="refresh-btn"
              onClick={generateCaptcha}
            >
              🔄
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>

        <div className="login-links">
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </div>
      </form>

      {/* Styling */}
      <style jsx>{`
        .captcha-container {
          margin: 15px 0;
        }

        .captcha-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f1f1f1;
          padding: 8px 12px;
          border-radius: 5px;
          font-family: monospace;
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 3px;
          margin-bottom: 8px;
        }

        .captcha-text {
          color: #2c3e50;
          text-shadow: 1px 1px 2px #999;
        }

        .refresh-btn {
          border: none;
          background: transparent;
          font-size: 14px;
          cursor: pointer;
          padding: 4px 6px;
          border-radius: 50%;
          transition: 0.2s ease-in-out;
        }

        .refresh-btn:hover {
          background: #e0e0e0;
          color: #007bff;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Login;
