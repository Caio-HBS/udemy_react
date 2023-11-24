import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  function incrementHandler() {
    dispatch({ type: "increment" });
  };

  function decrementHandler() {
    dispatch({ type: "decrement" });
  };

  function toggleCounterHandler() {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
