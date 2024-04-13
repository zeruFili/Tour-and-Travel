import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth-style.css";

const Signup = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignInClick = () => {
    navigate("/login");
  };
  
  const handleButtonClick = () => {
    fetch("http://127.0.0.1:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email, 
        password: password,
        confirmPassword: confirmPassword
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          // User registration successful, you can redirect to login or do something else
          navigate("/login");
        } else {
          // Handle registration error, maybe show an error message
          console.error("User registration failed");
        }
      })
      .catch((error) => {
        // Handle fetch error, e.g., network issue
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="auth-container" style={{ marginTop: "-10px" }}>
        <div className="signup-box">
          <div style={{ marginLeft: "10px" }}>
            <div className="auth-header">
              <p>Sign Up on Tech On</p>
            </div>
            <div className="auth-input-box">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                className="auth-input-field"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="auth-input-box">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                className="auth-input-field"
                id="pass"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="auth-input-box">
              <label htmlFor="confirm-pass">Confirm Password</label>
              <input
                type="password"
                className="auth-input-field"
                id="confirm-pass"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="auth-input-box">
              <input
                type="submit"
                className="auth-input-submit"
                value="SIGN UP"
                onClick={handleButtonClick}
              />
            </div>
            <div className="auth-bottom">
              <span>Already a Member?</span>
              <span onClick={handleSignInClick}>Sign in</span>
            </div>
          </div>
        </div>
        <div className="signup-wrapper"></div>
      </div>
    </>
  );
};

export default Signup;