import React, { useState } from "react";

export default function StateLogin() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !loginForm.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(loginForm);
  }

  function handleInputChange(value, identifier) {
    setLoginForm((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange(event.target.value, "email")}
            value={loginForm.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Your password"
            onBlur={() => handleInputBlur("password")}
            onChange={(event) =>
              handleInputChange(event.target.value, "password")
            }
            value={loginForm.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
