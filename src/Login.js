import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    
    console.log("Login button clicked");
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  };
  
  return (
    <div style={containerStyle}>
      <div className="Login">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Email:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p>
          New User? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
