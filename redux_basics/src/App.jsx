import React from "react";
import { useSelector } from "react-redux";

import Auth from "./components/Auth.jsx";
import Header from "./components/Header.jsx";
import Counter from "./components/Counter.jsx";
import UserProfile from "./components/UserProfile.jsx";

export default function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {!isLoggedIn ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}
