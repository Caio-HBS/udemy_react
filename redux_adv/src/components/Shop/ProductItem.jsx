import React from "react";
import { useDispatch } from "react-redux";

import classes from "./ProductItem.module.css";

import Card from "../UI/Card.jsx";

import { cartActions } from "../../store/cart-slice.jsx";

export default function ProductItem(props) {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  function addProductHandler() {
    dispatch(
      cartActions.addItemToCart({
        title,
        id,
        price,
      })
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addProductHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}
