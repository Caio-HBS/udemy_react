import React from "react";

export default function MealItem({ name, price, description, img }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${img}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add to cart</button>
        </p>
      </article>
    </li>
  );
}
