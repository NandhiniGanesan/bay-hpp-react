import React from "react";

function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    
    console.log("Login button clicked");
  };

  return (
    <div className="Login">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        New User? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;