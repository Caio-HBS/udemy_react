class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = Math.random().toString(36).substring(2, 6);
    this.text = todoText;
  }
}

export default Todo;
