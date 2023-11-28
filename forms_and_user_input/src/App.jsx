import React from "react";

import Signup from "./components/Signup.jsx";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Login /> */}
        <Signup />
      </main>
    </>
  );
}
