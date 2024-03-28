import React, { useRef, useContext } from "react";

import classes from "./NewTodo.module.css";

import { TodosContext } from "../store/todos-context.tsx";

const NewTodo: React.FC = () => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  const ctx = useContext(TodosContext);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    ctx.addTodo(enteredText);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text-input">Todo text</label>
      <input type="text" id="text-input" ref={todoTextInput} />
      <button>Create!</button>
    </form>
  );
};

export default NewTodo;
