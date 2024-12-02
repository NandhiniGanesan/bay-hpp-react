import React from "react";

function Register() {
  const handleRegister = (event) => {
    event.preventDefault();

    console.log("Register button clicked");
  };

  return (
    <div className="Register">
      <h2>Register Page</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
