import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

import { counterAction } from "../store/counter.jsx"

export default function Counter() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  function incrementHandler() {
    dispatch(counterAction.increment());
  }

  function decrementHandler() {
    dispatch(counterAction.decrement());
  }

  function increaseHandler() {
    dispatch(counterAction.increase(5));
  }

  function toggleCounterHandler() {
    dispatch(counterAction.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
