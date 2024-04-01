import React, { useState, useEffect } from "react";
import axios from "axios";

import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/meals")
      .then((response) => {
        if (!response.ok) {
          // ...
        }

        const meals = response.data;
        setLoadedMeals(meals);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem
          key={meal.id}
          name={meal.name}
          price={meal.price}
          description={meal.description}
          img={meal.image}
        />
      ))}
    </ul>
  );
}
