import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    // Check captcha first
    if (captchaInput.toUpperCase() !== captcha) {
      alert("Captcha code does not match!");
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
        alert("Login Successful!");
        console.log(data)
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.user?.name || "User");
        localStorage.setItem("email", data.user?.email || "Email");
        localStorage.setItem("phone", data.user?.phone || "Phone");
        localStorage.setItem("ID", data.user?._id || "Id");
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
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
    font-size: 14px;       /* 👈 smaller size */
    cursor: pointer;
    padding: 4px 6px;      /* 👈 reduce spacing */
    border-radius: 50%;    /* 👈 round button */
    transition: 0.2s ease-in-out;
  }

  .refresh-btn:hover {
    background: #e0e0e0;   /* 👈 subtle hover */
    color: #007bff;
    transform: scale(1.1); /* 👈 slight zoom on hover */
  }
`}</style>

    </div>
  );
};

export default Login;
