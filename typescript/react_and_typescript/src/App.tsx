import { useState } from "react";

import Todos from "./components/Todos.tsx";
import NewTodo from "./components/NewTodo.tsx";

import Todo from "./models/todo.ts";

export default function App() {
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

  return (
    <div>
      <NewTodo onCreateTodo={handleCreateTodo} />
      <Todos items={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}
