import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";

import { authAction } from "../store/auth.jsx";

export default function Header() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  function logoutHandler() {
    dispatch(authAction.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          ) : (
            <a href="/">
              <li>
                <button>Login</button>
              </li>
            </a>
          )}
        </ul>
      </nav>
    </header>
  );
}
