import React from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card.jsx";
import CartItem from "./CartItem.jsx";

import classes from "./Cart.module.css";

export default function Cart(props) {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((singleItem) => (
          <CartItem
            item={{
              title: singleItem.title,
              quantity: singleItem.quantity,
              total: singleItem.totalPrice,
              price: singleItem.price,
              id: singleItem.id,
            }}
            key={singleItem.id}
          />
        ))}
      </ul>
    </Card>
  );
}
