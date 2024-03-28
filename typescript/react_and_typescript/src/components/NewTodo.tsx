import React, { useRef } from "react";

import classes from "./NewTodo.module.css"

const NewTodo: React.FC<{ onCreateTodo: (enteredText: string) => void }> = (
  props
) => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onCreateTodo(enteredText);
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
