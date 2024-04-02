import React, { useContext } from "react";

import { currencyFormatter } from "../util/formatting.js";
import CartContext from "../store/CartContext.jsx";

import Button from "./UI/Button.jsx";

export default function MealItem({ id, name, price, description, img }) {
  const cartCtx = useContext(CartContext);

  function addMealToCartHandler() {
    cartCtx.addItem({
      id,
      name,
      price,
      description,
      img,
    });
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${img}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={addMealToCartHandler}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
