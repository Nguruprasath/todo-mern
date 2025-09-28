import React, { useState } from "react";


const AddTodoForm = ({ addTodo }) => {
const [text, setText] = useState("");


const handleSubmit = (e) => {
  e.preventDefault();
  if (!text.trim()) return;
  addTodo(text); 
  setText("");
};


return (
<form onSubmit={handleSubmit} className="todo-form">
  <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Enter todo"
    className="todo-input"
  />
  <button type="submit" className="todo-add-btn">
    Add
  </button>
</form>
);
};


export default AddTodoForm;