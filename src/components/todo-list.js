import React from "react";

function Todo({ id, task, completed, onToggle }) {
  return (
    <li>
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task}
      </span>
      <button onClick={() => onToggle(id)}>Toggle</button>
    </li>
  );
}

export default function TodoList({ todos, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}
