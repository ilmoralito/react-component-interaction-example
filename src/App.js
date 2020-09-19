import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Reactor from "./components/Reactor";
import AnotherForm from "./components/another-form";
import AnotherReactor from "./components/another-reactor";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [genre, setGenre] = useState("");
  const [todos, setTodos] = useState([]);

  function onSubmitHandler(data) {
    setName(data.name);
    setColor(data.color);
    setSize(data.size);
  }

  function onSubmitHandler(todo) {
    setTodos([todo, ...todos]);
  }

  function onToggleHandler(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="app">
      <div className="container">
        <Form onSubmit={onSubmitHandler} />
        <Reactor name={name} color={color} size={size} />
      </div>
      <hr />
      <div className="container">
        <AnotherForm
          onChangeFirstName={event => setFirstName(event)}
          onChangeLastName={event => setLastName(event)}
          onChangeGenre={event => setGenre(event)}
        />
        <AnotherReactor
          firstName={firstName}
          lastName={lastName}
          genre={genre}
        />
      </div>
      <hr />
      <div className="todo-app">
        <TodoForm onSubmit={onSubmitHandler} />
        <TodoList todos={todos} onToggle={onToggleHandler} />
      </div>
    </div>
  );
}

export default App;
