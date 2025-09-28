import React from "react";
import "../App.css"; // create this file

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <span
        onClick={() => toggleTodo(todo._id)} 
        className={`todo-text ${todo.completed ? "completed" : ""}`}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo._id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
