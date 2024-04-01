import React from "react";

import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img
          src={logoImg}
          alt="A plate with cutlery and glasses over a background with some buildings"
        />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>Cart</button>
      </nav>
    </header>
  );
}
