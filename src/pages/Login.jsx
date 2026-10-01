import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter your email and password.");
      return;
    }

    toast.success(`Welcome back, ${formData.email}!`);
    navigate("/");
  };

  return (
    <div className="page-shell auth-page-shell">
      <div className="auth-card">
        <div className="auth-card-header">
          <span className="auth-badge">Member Login</span>
          <h2>Sign in to your account</h2>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <div className="auth-row">
            <label className="auth-check">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/" className="auth-link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="primary-button auth-submit">
            Login
          </button>
        </form>

        <div className="auth-footer">
          <span>New here?</span>
          <Link to="/" className="auth-link">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
