import React from "react";
import { useState } from "react";

const TodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo(value);
  };

  const handleAddTodo = () => {
    if (todo.trim() === "") {
      return;
    }
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: todo,
        completed: false,
      },
    ]);
    setTodo("");
  };

  // Toggle completed
  const handleToggle = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete todo
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  console.log(todos);

  return (
    <>
      <div>
        <input type="text" value={todo} onChange={handleChange} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        {todos.map((item) => {
          return (
            <div>
              <div>
                <span>{item.todo}</span>
                <span>{item.completed ? "Completed" : "Pending"}</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleToggle(item.id)}
                />
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoComponent;
