import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then((res) => setTodos(res.data));
  }, []);

  const addTodo = async (text) => {
    const res = await axios.post("http://localhost:5000/api/todos", { text });
    setTodos([...todos, res.data]);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };
  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t._id === id);
    if (!todo) return;

    const res = await axios.put(`http://localhost:5000/api/todos/${id}`, {
      text: todo.text,
      completed: !todo.completed,
    });

    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
