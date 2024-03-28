import React, { useContext } from "react";

import classes from "./Todos.module.css";

import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context.tsx";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={ctx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
