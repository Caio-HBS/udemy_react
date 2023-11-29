import React from "react";

import StateLogin from "./components/StateLogin.jsx";
import Signup from "./components/Signup.jsx";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup /> */}
        {/* <Login /> */}
        <StateLogin />
      </main>
    </>
  );
}
