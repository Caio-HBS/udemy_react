import Todos from "./components/Todos.tsx";
import NewTodo from "./components/NewTodo.tsx";

import TodosContextProvider from "./store/todos-context.tsx";

export default function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}
