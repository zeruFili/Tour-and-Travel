import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth-style.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:3000/api/v1/Admin_auth/sign_in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      // access-token and client in the header of the response. "uid":

      if (response.ok) {
        const accessToken = response.headers.get("access-token");
        const client = response.headers.get("client");
        const uid = response.headers.get("uid");

        if (accessToken && client && uid) {
          console.log("Access Token:", accessToken);
          console.log("Client:", client);
          console.log("UID:", uid);

          localStorage.setItem("access-token", accessToken);
          localStorage.setItem("client", client);
          localStorage.setItem("uid", uid);

          // navigate to the desired page
          navigate("/dashboard");
        } else {
          console.error("Missing authentication data in response headers");
        }
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      <div class="auth-container">
        <div class="auth-box">
          <div style={{ marginLeft: "10px" }}>
            <div class="auth-header">
              <p>Log In to Admin</p>
            </div>
            <div class="auth-input-box">
              <label for="email">E-Mail</label>
              <input
                type="email"
                class="auth-input-field"
                id="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <i class="bx bx-envelope"></i>
            </div>
            <div class="auth-input-box">
              <label for="pass">Password</label>
              <input
                type="password"
                class="auth-input-field"
                id="pass"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <i class="bx bx-lock"></i>
            </div>
            <div class="auth-input-box">
              <input
                type="submit"
                class="auth-input-submit"
                value="SIGN IN"
                onClickCapture={() => {
                  handleLogin(email, password);
                }}
              />
            </div>
            <div class="auth-bottom"></div>
          </div>
        </div>
        <div class="auth-wrapper"></div>
      </div>
    </>
  );
};

export default Login;
