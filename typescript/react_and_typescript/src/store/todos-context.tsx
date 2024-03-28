import React, { useState } from "react";

import Todo from "../models/todo.ts";

type TodoContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObject>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleCreateTodo(enteredText: string) {
    const newTodo = new Todo(enteredText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  }

  function handleDeleteTodo(todoId: string) {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  }

  const contextValue: TodoContextObject = {
    items: todos,
    addTodo: handleCreateTodo,
    deleteTodo: handleDeleteTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
