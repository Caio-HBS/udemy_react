import React, { useContext } from "react";

import logoImg from "../assets/logo.jpg";

import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

import Button from "./UI/Button.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

  function showCartHandler() {
    userProgressCtx.showCart();
  }

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
        <Button textOnly onClick={showCartHandler}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
