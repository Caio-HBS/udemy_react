import React, { useContext } from "react";

import logoImg from "../assets/logo.jpg";

import CartContext from "../store/CartContext.jsx";

import Button from "./UI/Button.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

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
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
